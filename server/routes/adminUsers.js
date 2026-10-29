import { Router } from 'express';
import { requireAdmin } from '../utils/auth.js';
import { loadStore, saveStore, getUsersWithStats } from '../data/store.js';

const router = Router();

// Protect all admin user management routes with admin authorization
router.use(requireAdmin);

/**
 * GET /api/admin/users
 * Search and filter registered users
 */
router.get('/users', (req, res) => {
  try {
    const { search = '', status = 'all', activity = 'all', dateRange = 'all' } = req.query;
    let users = getUsersWithStats();

    // Text search (name, email, phone)
    if (search && search.trim()) {
      const q = search.trim().toLowerCase();
      users = users.filter(
        (u) =>
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          (u.phone && u.phone.toLowerCase().includes(q)) ||
          (u.city && u.city.toLowerCase().includes(q))
      );
    }

    // Status filter
    if (status && status !== 'all') {
      users = users.filter((u) => u.status === status);
    }

    // Listing activity filter
    if (activity === 'has_listings') {
      users = users.filter((u) => u.listingsCount > 0);
    } else if (activity === 'no_listings') {
      users = users.filter((u) => u.listingsCount === 0);
    }

    // Date range filter
    const now = Date.now();
    if (dateRange === '7days') {
      users = users.filter((u) => now - new Date(u.createdAt).getTime() <= 7 * 86400000);
    } else if (dateRange === '30days') {
      users = users.filter((u) => now - new Date(u.createdAt).getTime() <= 30 * 86400000);
    } else if (dateRange === 'older') {
      users = users.filter((u) => now - new Date(u.createdAt).getTime() > 30 * 86400000);
    }

    // Sort newest first
    users.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (err) {
    console.error('[AdminUsers] Error fetching users:', err);
    res.status(500).json({ success: false, error: 'Failed to retrieve registered users.' });
  }
});

/**
 * GET /api/admin/users/:id
 * Dedicated user details page showing their complete profile and all submitted vehicles
 */
router.get('/users/:id', (req, res) => {
  try {
    const store = loadStore();
    const user = store.users.find((u) => u.id === req.params.id);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found.' });
    }

    const userListings = store.customerListings
      .filter((l) => l.userId === user.id)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const { passwordHash: _, salt: __, ...safeUser } = user;

    res.json({
      success: true,
      data: {
        ...safeUser,
        listingsCount: userListings.length,
        publishedCount: userListings.filter((l) => l.status === 'approved').length,
        pendingCount: userListings.filter((l) => l.status === 'pending').length,
        listings: userListings,
      },
    });
  } catch (err) {
    console.error('[AdminUsers] Error fetching user details:', err);
    res.status(500).json({ success: false, error: 'Failed to retrieve user details.' });
  }
});

/**
 * PUT /api/admin/users/:id
 * Edit user information and update account status (activate, suspend, deactivate)
 */
router.put('/users/:id', (req, res) => {
  try {
    const { name, email, phone, city, status, notes } = req.body;
    const store = loadStore();
    const userIndex = store.users.findIndex((u) => u.id === req.params.id);

    if (userIndex === -1) {
      return res.status(404).json({ success: false, error: 'User not found.' });
    }

    const user = store.users[userIndex];

    if (name) {
      user.name = name.trim();
      user.avatar = name
        .split(' ')
        .filter(Boolean)
        .map((n) => n[0].toUpperCase())
        .slice(0, 2)
        .join('');
    }
    if (email) user.email = email.trim().toLowerCase();
    if (phone !== undefined) user.phone = phone.trim();
    if (city !== undefined) user.city = city.trim();
    if (status && ['active', 'suspended', 'inactive'].includes(status)) {
      user.status = status;
    }
    if (notes !== undefined) user.notes = notes;

    store.users[userIndex] = user;
    saveStore(store);

    const { passwordHash: _, salt: __, ...safeUser } = user;

    res.json({
      success: true,
      data: safeUser,
      message: `User ${user.name} has been updated. Status is now "${user.status}".`,
    });
  } catch (err) {
    console.error('[AdminUsers] Error updating user:', err);
    res.status(500).json({ success: false, error: 'Failed to update user profile.' });
  }
});

/**
 * DELETE /api/admin/users/:id
 * Delete or disable user with confirmation and secure handling of associated listings
 */
router.delete('/users/:id', (req, res) => {
  try {
    const { deleteListings = false } = req.query;
    const store = loadStore();
    const userIndex = store.users.findIndex((u) => u.id === req.params.id);

    if (userIndex === -1) {
      return res.status(404).json({ success: false, error: 'User not found.' });
    }

    const user = store.users[userIndex];

    // Safety: Cannot delete primary master administrator
    if (user.role === 'admin' && user.id === 'usr-admin-01') {
      return res.status(403).json({ success: false, error: 'Cannot delete the primary executive administrator account.' });
    }

    // Remove user
    store.users.splice(userIndex, 1);

    // Handle associated listings
    let removedListingsCount = 0;
    if (deleteListings === 'true' || deleteListings === true) {
      const initialCount = store.customerListings.length;
      store.customerListings = store.customerListings.filter((l) => l.userId !== user.id);
      removedListingsCount = initialCount - store.customerListings.length;
    } else {
      // Mark listings as archived/inactive
      store.customerListings.forEach((l) => {
        if (l.userId === user.id) {
          l.status = 'rejected';
          l.adminNotes = 'Account closed by administrator.';
        }
      });
    }

    saveStore(store);

    res.json({
      success: true,
      message: `User ${user.name} (${user.email}) deleted. ${removedListingsCount} associated listings processed.`,
    });
  } catch (err) {
    console.error('[AdminUsers] Error deleting user:', err);
    res.status(500).json({ success: false, error: 'Failed to delete user.' });
  }
});

/**
 * GET /api/admin/listings
 * Get all customer listings with status filter for admin review
 */
router.get('/listings', (req, res) => {
  try {
    const { status = 'all' } = req.query;
    const store = loadStore();
    let listings = [...store.customerListings];

    if (status && status !== 'all') {
      listings = listings.filter((l) => l.status === status);
    }

    listings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json({
      success: true,
      count: listings.length,
      data: listings,
    });
  } catch (err) {
    console.error('[AdminUsers] Error fetching listings for review:', err);
    res.status(500).json({ success: false, error: 'Failed to retrieve listings for review.' });
  }
});

/**
 * PATCH /api/admin/listings/:id/approval
 * Approve or reject customer listing
 */
router.patch('/listings/:id/approval', (req, res) => {
  try {
    const { action, adminNotes } = req.body; // action: 'approve' | 'reject' | 'sold'
    if (!['approve', 'reject', 'sold'].includes(action)) {
      return res.status(400).json({ success: false, error: 'Invalid approval action.' });
    }

    const store = loadStore();
    const listing = store.customerListings.find((l) => l.id === req.params.id);

    if (!listing) {
      return res.status(404).json({ success: false, error: 'Listing not found.' });
    }

    if (action === 'approve') {
      listing.status = 'approved';
      listing.publishedAt = new Date().toISOString();
      listing.adminNotes = adminNotes || 'Approved by administrator for public showroom display.';
    } else if (action === 'reject') {
      listing.status = 'rejected';
      listing.adminNotes = adminNotes || 'Rejected by administrator. Review specifications or images.';
    } else if (action === 'sold') {
      listing.status = 'sold';
    }

    listing.updatedAt = new Date().toISOString();
    saveStore(store);

    res.json({
      success: true,
      data: listing,
      message: `Listing "${listing.makeModel}" has been ${listing.status}.`,
    });
  } catch (err) {
    console.error('[AdminUsers] Error updating listing approval:', err);
    res.status(500).json({ success: false, error: 'Failed to update listing approval.' });
  }
});

export default router;
