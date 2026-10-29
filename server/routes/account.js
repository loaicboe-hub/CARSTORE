import { Router } from 'express';
import crypto from 'crypto';
import { requireAuth } from '../utils/auth.js';
import { loadStore, saveStore } from '../data/store.js';

const router = Router();

// Protect all account routes
router.use(requireAuth);

/**
 * GET /api/account/listings
 * Fetch all listings belonging to current customer
 */
router.get('/listings', (req, res) => {
  try {
    const store = loadStore();
    const myListings = store.customerListings
      .filter((l) => l.userId === req.user.id)
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.json({
      success: true,
      count: myListings.length,
      data: myListings,
    });
  } catch (err) {
    console.error('[Account] Error fetching listings:', err);
    res.status(500).json({ success: false, error: 'Failed to retrieve your listings.' });
  }
});

/**
 * GET /api/account/listings/:id
 * Get single listing by ID (must belong to customer)
 */
router.get('/listings/:id', (req, res) => {
  try {
    const store = loadStore();
    const listing = store.customerListings.find(
      (l) => l.id === req.params.id && l.userId === req.user.id
    );

    if (!listing) {
      return res.status(404).json({ success: false, error: 'Listing not found or access denied.' });
    }

    res.json({ success: true, data: listing });
  } catch (err) {
    console.error('[Account] Error fetching listing:', err);
    res.status(500).json({ success: false, error: 'Failed to retrieve listing details.' });
  }
});

/**
 * POST /api/account/listings
 * Submit a vehicle listing (defaults to 'pending' approval, or 'draft')
 */
router.post('/listings', (req, res) => {
  try {
    const {
      makeModel,
      brand,
      year,
      price,
      currency = 'EGP',
      mileage,
      transmission,
      fuelType,
      bodyType = 'coupe',
      color,
      condition,
      city,
      description,
      photos = [],
      contactName,
      contactPhone,
      contactWhatsapp,
      isDraft = false,
    } = req.body;

    // Validation
    if (!makeModel || !price || !year) {
      return res.status(400).json({
        success: false,
        error: 'Vehicle make & model, year, and price are required.',
      });
    }

    const store = loadStore();
    const user = store.users.find((u) => u.id === req.user.id);

    // Initial status: draft or pending approval
    const initialStatus = isDraft ? 'draft' : 'pending';

    const newListing = {
      id: `cust-list-${Date.now().toString(36)}-${crypto.randomBytes(3).toString('hex')}`,
      userId: req.user.id,
      ownerName: contactName || (user ? user.name : 'Verified Customer'),
      ownerEmail: user ? user.email : req.user.email,
      ownerPhone: contactPhone || (user ? user.phone : ''),
      makeModel: makeModel.trim(),
      brand: brand ? brand.trim() : makeModel.split(' ')[0],
      year: Number(year) || new Date().getFullYear(),
      price: Number(price) || 0,
      currency,
      mileage: mileage ? String(mileage).trim() : '0 km',
      transmission: transmission || 'Automatic',
      fuelType: fuelType || 'Petrol',
      bodyType: bodyType || 'coupe',
      color: color || 'Onyx Black',
      condition: condition || 'Certified Pre-Owned',
      city: city || (user ? user.city : 'Showroom City'),
      description: description || '',
      photos: Array.isArray(photos) && photos.length > 0 ? photos : ['/images/hero_car.jpg'],
      contactName: contactName || (user ? user.name : ''),
      contactPhone: contactPhone || (user ? user.phone : ''),
      contactWhatsapp: contactWhatsapp || contactPhone || (user ? user.phone : ''),
      status: initialStatus, // 'pending' | 'draft' | 'approved' | 'rejected' | 'sold'
      publishedAt: null,
      adminNotes: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    store.customerListings.unshift(newListing);
    saveStore(store);

    res.status(201).json({
      success: true,
      data: newListing,
      message: isDraft
        ? 'Listing saved as draft.'
        : 'Listing submitted successfully! It is now pending review by AUTOHAUS administrators.',
    });
  } catch (err) {
    console.error('[Account] Error creating listing:', err);
    res.status(500).json({ success: false, error: 'Failed to submit vehicle listing.' });
  }
});

/**
 * PUT /api/account/listings/:id
 * Edit an existing listing
 * Note: If an approved listing is edited, return it to 'pending' approval per rules
 */
router.put('/listings/:id', (req, res) => {
  try {
    const store = loadStore();
    const listingIndex = store.customerListings.findIndex(
      (l) => l.id === req.params.id && l.userId === req.user.id
    );

    if (listingIndex === -1) {
      return res.status(404).json({ success: false, error: 'Listing not found or access denied.' });
    }

    const existing = store.customerListings[listingIndex];
    const {
      makeModel,
      brand,
      year,
      price,
      currency,
      mileage,
      transmission,
      fuelType,
      bodyType,
      color,
      condition,
      city,
      description,
      photos,
      contactName,
      contactPhone,
      contactWhatsapp,
      isDraft,
    } = req.body;

    // Rule: If an approved listing is materially changed, return it to 'pending' for review
    let nextStatus = existing.status;
    if (isDraft) {
      nextStatus = 'draft';
    } else if (existing.status === 'approved') {
      nextStatus = 'pending';
    } else if (existing.status === 'draft') {
      nextStatus = 'pending';
    }

    const updatedListing = {
      ...existing,
      makeModel: makeModel ? makeModel.trim() : existing.makeModel,
      brand: brand ? brand.trim() : existing.brand,
      year: year ? Number(year) : existing.year,
      price: price !== undefined ? Number(price) : existing.price,
      currency: currency || existing.currency,
      mileage: mileage !== undefined ? String(mileage).trim() : existing.mileage,
      transmission: transmission || existing.transmission,
      fuelType: fuelType || existing.fuelType,
      bodyType: bodyType || existing.bodyType,
      color: color || existing.color,
      condition: condition || existing.condition,
      city: city || existing.city,
      description: description !== undefined ? description : existing.description,
      photos: Array.isArray(photos) && photos.length > 0 ? photos : existing.photos,
      contactName: contactName || existing.contactName,
      contactPhone: contactPhone || existing.contactPhone,
      contactWhatsapp: contactWhatsapp || existing.contactWhatsapp,
      status: nextStatus,
      updatedAt: new Date().toISOString(),
    };

    store.customerListings[listingIndex] = updatedListing;
    saveStore(store);

    res.json({
      success: true,
      data: updatedListing,
      message:
        nextStatus === 'pending' && existing.status === 'approved'
          ? 'Listing updated. Because modifications were made, it has been resubmitted for admin review.'
          : 'Listing updated successfully.',
    });
  } catch (err) {
    console.error('[Account] Error updating listing:', err);
    res.status(500).json({ success: false, error: 'Failed to update vehicle listing.' });
  }
});

/**
 * DELETE /api/account/listings/:id
 * Delete customer listing
 */
router.delete('/listings/:id', (req, res) => {
  try {
    const store = loadStore();
    const index = store.customerListings.findIndex(
      (l) => l.id === req.params.id && l.userId === req.user.id
    );

    if (index === -1) {
      return res.status(404).json({ success: false, error: 'Listing not found or access denied.' });
    }

    const removed = store.customerListings.splice(index, 1)[0];
    saveStore(store);

    res.json({ success: true, message: `Listing "${removed.makeModel}" deleted successfully.` });
  } catch (err) {
    console.error('[Account] Error deleting listing:', err);
    res.status(500).json({ success: false, error: 'Failed to delete listing.' });
  }
});

/**
 * PATCH /api/account/listings/:id/status
 * Update status (e.g., mark as 'sold' or 'draft')
 */
router.patch('/listings/:id/status', (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ['sold', 'draft', 'pending'];
    if (!allowed.includes(status)) {
      return res.status(400).json({ success: false, error: 'Invalid status update requested.' });
    }

    const store = loadStore();
    const listing = store.customerListings.find(
      (l) => l.id === req.params.id && l.userId === req.user.id
    );

    if (!listing) {
      return res.status(404).json({ success: false, error: 'Listing not found or access denied.' });
    }

    listing.status = status;
    listing.updatedAt = new Date().toISOString();
    saveStore(store);

    res.json({
      success: true,
      data: listing,
      message: `Listing marked as ${status}.`,
    });
  } catch (err) {
    console.error('[Account] Error updating status:', err);
    res.status(500).json({ success: false, error: 'Failed to update listing status.' });
  }
});

export default router;
