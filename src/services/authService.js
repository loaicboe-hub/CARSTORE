/**
 * Customer & User Authentication Service
 * Talks directly to Express /api/auth endpoints
 */

const TOKEN_KEY = 'autohaus_client_token';
const USER_KEY = 'autohaus_client_user';

export function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
}

export function setToken(token, rememberMe = true) {
  if (typeof window === 'undefined') return;
  if (rememberMe) {
    localStorage.setItem(TOKEN_KEY, token);
    sessionStorage.removeItem(TOKEN_KEY);
  } else {
    sessionStorage.setItem(TOKEN_KEY, token);
    localStorage.removeItem(TOKEN_KEY);
  }
}

export function clearToken() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  sessionStorage.removeItem(USER_KEY);
}

export function getCachedUser() {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(USER_KEY) || sessionStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setCachedUser(user, rememberMe = true) {
  if (typeof window === 'undefined') return;
  const val = JSON.stringify(user);
  if (rememberMe) {
    localStorage.setItem(USER_KEY, val);
  } else {
    sessionStorage.setItem(USER_KEY, val);
  }
}

export async function registerCustomer(payload) {
  const res = await fetch('/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Registration failed.');
  }

  setToken(data.token, true);
  setCachedUser(data.user, true);
  return data;
}

export async function loginCustomer(email, password, rememberMe = true) {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Authentication failed.');
  }

  setToken(data.token, rememberMe);
  setCachedUser(data.user, rememberMe);
  return data;
}

export async function getSessionUser() {
  const token = getToken();
  if (!token) return null;

  try {
    const res = await fetch('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401 || res.status === 403) {
      clearToken();
      return null;
    }

    const data = await res.json();
    if (data.success && data.user) {
      setCachedUser(data.user, true);
      return data.user;
    }
    return null;
  } catch (err) {
    console.warn('[AuthService] Could not refresh session:', err.message);
    return getCachedUser();
  }
}

export async function updateCustomerProfile(profileData) {
  const token = getToken();
  if (!token) throw new Error('Not authenticated');

  const res = await fetch('/api/auth/profile', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profileData),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to update profile.');
  }

  setCachedUser(data.user, true);
  return data.user;
}

export async function changeCustomerPassword(currentPassword, newPassword) {
  const token = getToken();
  if (!token) throw new Error('Not authenticated');

  const res = await fetch('/api/auth/password', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ currentPassword, newPassword }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to update password.');
  }

  return data;
}

export async function requestPasswordReset(email) {
  const res = await fetch('/api/auth/forgot-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Password reset request failed.');
  }

  return data;
}

export async function completePasswordReset(token, newPassword) {
  const res = await fetch('/api/auth/reset-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token, newPassword }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Password reset failed.');
  }

  return data;
}
