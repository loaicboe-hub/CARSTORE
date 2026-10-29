import { Router } from 'express';
import crypto from 'crypto';
import { hashPassword, verifyPassword, generateToken, requireAuth } from '../utils/auth.js';
import { loadStore, saveStore } from '../data/store.js';

const router = Router();

/**
 * POST /api/auth/register
 * Register a new customer account
 */
router.post('/register', (req, res) => {
  try {
    const { name, email, phone, password, city = '' } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, error: 'Name, email, and password are required.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email address.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ success: false, error: 'Password must be at least 6 characters in length.' });
    }

    const store = loadStore();

    // Check if user already exists
    const existing = store.users.find((u) => u.email.toLowerCase() === cleanEmail);
    if (existing) {
      return res.status(409).json({ success: false, error: 'An account with this email address already exists. Please log in.' });
    }

    const { hash, salt } = hashPassword(password);
    const initials = name
      .split(' ')
      .filter(Boolean)
      .map((n) => n[0].toUpperCase())
      .slice(0, 2)
      .join('');

    const newUser = {
      id: `usr-${Date.now().toString(36)}-${crypto.randomBytes(3).toString('hex')}`,
      name: name.trim(),
      email: cleanEmail,
      phone: phone ? phone.trim() : '',
      passwordHash: hash,
      salt: salt,
      role: 'customer',
      status: 'active',
      city: city ? city.trim() : 'Showroom Client',
      avatar: initials || 'CL',
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString(),
      notes: 'Self-registered customer account.',
    };

    store.users.push(newUser);
    saveStore(store);

    const token = generateToken(newUser);

    // Return safe user object (omit password & salt)
    const { passwordHash: _, salt: __, ...safeUser } = newUser;

    res.status(201).json({
      success: true,
      token,
      user: safeUser,
      message: 'Account created successfully. Welcome to AUTOHAUS.',
    });
  } catch (err) {
    console.error('[Auth] Registration error:', err);
    res.status(500).json({ success: false, error: 'An unexpected server error occurred during registration.' });
  }
});

/**
 * POST /api/auth/login
 * Authenticate customer or admin
 */
router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Please provide both email and password.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const store = loadStore();

    const user = store.users.find((u) => u.email.toLowerCase() === cleanEmail);
    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid email or password credentials.' });
    }

    // Check account status
    if (user.status === 'suspended') {
      return res.status(403).json({
        success: false,
        error: 'Your account has been temporarily suspended. Please contact executive concierge support.',
      });
    }

    if (user.status === 'inactive') {
      return res.status(403).json({
        success: false,
        error: 'This account is currently deactivated. Please contact concierge support to reactivate.',
      });
    }

    // Verify password
    const isValid = verifyPassword(password, user.passwordHash, user.salt);
    if (!isValid) {
      return res.status(401).json({ success: false, error: 'Invalid email or password credentials.' });
    }

    // Update last login
    user.lastLogin = new Date().toISOString();
    saveStore(store);

    const token = generateToken(user);
    const { passwordHash: _, salt: __, ...safeUser } = user;

    res.json({
      success: true,
      token,
      user: safeUser,
      message: 'Signed in successfully.',
    });
  } catch (err) {
    console.error('[Auth] Login error:', err);
    res.status(500).json({ success: false, error: 'Server error during authentication.' });
  }
});

/**
 * GET /api/auth/me
 * Get currently authenticated user profile
 */
router.get('/me', requireAuth, (req, res) => {
  try {
    const store = loadStore();
    const user = store.users.find((u) => u.id === req.user.id);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User account not found.' });
    }

    if (user.status !== 'active') {
      return res.status(403).json({ success: false, error: `Account is ${user.status}.` });
    }

    const userListings = store.customerListings.filter((l) => l.userId === user.id);
    const { passwordHash: _, salt: __, ...safeUser } = user;

    res.json({
      success: true,
      user: {
        ...safeUser,
        listingsCount: userListings.length,
        publishedCount: userListings.filter((l) => l.status === 'approved').length,
        pendingCount: userListings.filter((l) => l.status === 'pending').length,
      },
    });
  } catch (err) {
    console.error('[Auth] /me error:', err);
    res.status(500).json({ success: false, error: 'Could not fetch current session.' });
  }
});

/**
 * PUT /api/auth/profile
 * Update user personal details
 */
router.put('/profile', requireAuth, (req, res) => {
  try {
    const { name, phone, city } = req.body;
    const store = loadStore();
    const user = store.users.find((u) => u.id === req.user.id);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found.' });
    }

    if (name && name.trim()) {
      user.name = name.trim();
      user.avatar = name
        .split(' ')
        .filter(Boolean)
        .map((n) => n[0].toUpperCase())
        .slice(0, 2)
        .join('');
    }
    if (phone !== undefined) user.phone = phone.trim();
    if (city !== undefined) user.city = city.trim();

    saveStore(store);

    const { passwordHash: _, salt: __, ...safeUser } = user;
    res.json({ success: true, user: safeUser, message: 'Profile updated successfully.' });
  } catch (err) {
    console.error('[Auth] Profile update error:', err);
    res.status(500).json({ success: false, error: 'Failed to update profile.' });
  }
});

/**
 * PUT /api/auth/password
 * Change password
 */
router.put('/password', requireAuth, (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ success: false, error: 'Current password and new password are required.' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ success: false, error: 'New password must be at least 6 characters.' });
    }

    const store = loadStore();
    const user = store.users.find((u) => u.id === req.user.id);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found.' });
    }

    const isMatch = verifyPassword(currentPassword, user.passwordHash, user.salt);
    if (!isMatch) {
      return res.status(400).json({ success: false, error: 'Current password does not match records.' });
    }

    const { hash, salt } = hashPassword(newPassword);
    user.passwordHash = hash;
    user.salt = salt;

    saveStore(store);

    res.json({ success: true, message: 'Password updated successfully.' });
  } catch (err) {
    console.error('[Auth] Password change error:', err);
    res.status(500).json({ success: false, error: 'Failed to change password.' });
  }
});

/**
 * POST /api/auth/forgot-password
 * Initiate password recovery
 */
router.post('/forgot-password', (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, error: 'Email address is required.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const store = loadStore();
    const user = store.users.find((u) => u.email.toLowerCase() === cleanEmail);

    if (!user) {
      // Don't leak whether email exists for security
      return res.json({
        success: true,
        message: 'If an account with this email exists, password reset instructions have been generated.',
      });
    }

    // Generate reset token
    const token = crypto.randomBytes(24).toString('hex');
    store.resetTokens = store.resetTokens || {};
    store.resetTokens[token] = {
      userId: user.id,
      email: user.email,
      expiresAt: Date.now() + 1000 * 60 * 60, // 1 hour
    };
    saveStore(store);

    res.json({
      success: true,
      resetToken: token, // Returned so UI or test simulation can complete reset
      message: 'Password reset instructions have been generated.',
    });
  } catch (err) {
    console.error('[Auth] Forgot password error:', err);
    res.status(500).json({ success: false, error: 'Error initiating password reset.' });
  }
});

/**
 * POST /api/auth/reset-password
 * Complete password reset with token
 */
router.post('/reset-password', (req, res) => {
  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({ success: false, error: 'Reset token and new password are required.' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ success: false, error: 'New password must be at least 6 characters.' });
    }

    const store = loadStore();
    store.resetTokens = store.resetTokens || {};
    const record = store.resetTokens[token];

    if (!record || Date.now() > record.expiresAt) {
      return res.status(400).json({ success: false, error: 'Invalid or expired password reset token.' });
    }

    const user = store.users.find((u) => u.id === record.userId);
    if (!user) {
      return res.status(404).json({ success: false, error: 'Account associated with token no longer exists.' });
    }

    const { hash, salt } = hashPassword(newPassword);
    user.passwordHash = hash;
    user.salt = salt;

    delete store.resetTokens[token];
    saveStore(store);

    res.json({ success: true, message: 'Your password has been successfully reset. You may now log in.' });
  } catch (err) {
    console.error('[Auth] Reset password error:', err);
    res.status(500).json({ success: false, error: 'Error completing password reset.' });
  }
});

export default router;
