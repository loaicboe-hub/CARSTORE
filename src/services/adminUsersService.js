/**
 * Admin User Management & Listing Approval Service
 * Authenticates with x-admin-key or Bearer token to /api/admin
 */

const ADMIN_SECRET_KEY = 'autohaus-admin-secret-2026';

function getAdminHeaders() {
  return {
    'Content-Type': 'application/json',
    'x-admin-key': ADMIN_SECRET_KEY,
  };
}

export async function getAdminUsers(filters = {}) {
  const { search = '', status = 'all', activity = 'all', dateRange = 'all' } = filters;
  const params = new URLSearchParams();
  if (search) params.set('search', search);
  if (status && status !== 'all') params.set('status', status);
  if (activity && activity !== 'all') params.set('activity', activity);
  if (dateRange && dateRange !== 'all') params.set('dateRange', dateRange);

  const res = await fetch(`/api/admin/users?${params.toString()}`, {
    headers: getAdminHeaders(),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to fetch registered users.');
  }

  return data.data || [];
}

export async function getAdminUserDetails(id) {
  const res = await fetch(`/api/admin/users/${id}`, {
    headers: getAdminHeaders(),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to fetch user details.');
  }

  return data.data;
}

export async function updateAdminUser(id, payload) {
  const res = await fetch(`/api/admin/users/${id}`, {
    method: 'PUT',
    headers: getAdminHeaders(),
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to update user.');
  }

  return data;
}

export async function deleteAdminUser(id, deleteListings = false) {
  const res = await fetch(`/api/admin/users/${id}?deleteListings=${deleteListings}`, {
    method: 'DELETE',
    headers: getAdminHeaders(),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to delete user.');
  }

  return data;
}

export async function getAdminListings(status = 'all') {
  const url = status && status !== 'all' ? `/api/admin/listings?status=${status}` : '/api/admin/listings';
  const res = await fetch(url, {
    headers: getAdminHeaders(),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to fetch customer listings.');
  }

  return data.data || [];
}

export async function updateListingApproval(id, action, adminNotes = '') {
  const res = await fetch(`/api/admin/listings/${id}/approval`, {
    method: 'PATCH',
    headers: getAdminHeaders(),
    body: JSON.stringify({ action, adminNotes }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to update listing approval.');
  }

  return data;
}
