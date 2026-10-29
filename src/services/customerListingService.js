/**
 * Customer Vehicle Listings Service
 * Interacts with /api/account/listings and /api/upload
 */
import { getToken } from './authService';

function getAuthHeaders() {
  const token = getToken();
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export async function getMyListings() {
  const res = await fetch('/api/account/listings', {
    headers: getAuthHeaders(),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to fetch customer listings.');
  }

  return data.data || [];
}

export async function getListingById(id) {
  const res = await fetch(`/api/account/listings/${id}`, {
    headers: getAuthHeaders(),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to fetch listing.');
  }

  return data.data;
}

export async function createListing(payload) {
  const res = await fetch('/api/account/listings', {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to submit vehicle listing.');
  }

  return data;
}

export async function updateListing(id, payload) {
  const res = await fetch(`/api/account/listings/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to update vehicle listing.');
  }

  return data;
}

export async function deleteListing(id) {
  const res = await fetch(`/api/account/listings/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to delete listing.');
  }

  return data;
}

export async function markListingStatus(id, status) {
  const res = await fetch(`/api/account/listings/${id}/status`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: JSON.stringify({ status }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Failed to update listing status.');
  }

  return data;
}

export async function uploadVehiclePhoto(imageBase64, fileName) {
  const token = getToken();
  const res = await fetch('/api/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ imageBase64, fileName }),
  });

  const data = await res.json();
  if (!res.ok || !data.success) {
    throw new Error(data.error || 'Image upload failed.');
  }

  return data.url;
}
