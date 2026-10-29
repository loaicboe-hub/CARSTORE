import { Router } from 'express';
import { query } from '../config/db.js';
import { loadStore } from '../data/store.js';

const router = Router();

// Helper to convert approved customer listing to vehicle catalog schema
function formatCustomerListingAsVehicle(listing) {
  return {
    id: listing.id,
    name_en: listing.makeModel,
    name_ar: listing.makeModel,
    brand: listing.brand || listing.makeModel.split(' ')[0],
    category: listing.bodyType || 'coupe',
    year: listing.year,
    price: listing.price,
    currency: listing.currency || 'USD',
    mileage: listing.mileage,
    transmission_en: listing.transmission || 'Automatic',
    transmission_ar: listing.transmission || 'أوتوماتيك',
    engine_en: listing.fuelType || 'High Performance',
    engine_ar: listing.fuelType || 'أداء عالي',
    acceleration: '3.4s',
    top_speed: '310 km/h',
    image_url: listing.photos && listing.photos[0] ? listing.photos[0] : '/images/hero_car.jpg',
    badge_en: 'Verified Private Client',
    badge_ar: 'مالك خاص موثق',
    status: 'available',
    featured: false,
    owner_type: 'customer',
    owner_id: listing.userId,
    owner_name: listing.ownerName,
    owner_phone: listing.contactPhone,
    owner_whatsapp: listing.contactWhatsapp,
    created_at: listing.publishedAt || listing.createdAt,
  };
}

// GET all vehicles with optional category filter
router.get('/', async (req, res) => {
  try {
    const { category, status } = req.query;
    let dbRows = [];

    try {
      let sql = 'SELECT * FROM vehicles WHERE 1=1';
      const params = [];

      if (category && category !== 'all') {
        params.push(category);
        sql += ` AND category = $${params.length}`;
      }

      if (status) {
        params.push(status);
        sql += ` AND status = $${params.length}`;
      }

      sql += ' ORDER BY created_at ASC';

      const result = await query(sql, params);
      dbRows = result.rows || [];
    } catch (dbErr) {
      // PostgreSQL might be offline, fallback will use catalog
    }

    // Include approved customer listings (only status === 'approved'!)
    const store = loadStore();
    let approvedCustomerCars = (store.customerListings || [])
      .filter((l) => l.status === 'approved')
      .map(formatCustomerListingAsVehicle);

    if (category && category !== 'all') {
      approvedCustomerCars = approvedCustomerCars.filter((c) => c.category === category);
    }

    const allVehicles = [...dbRows, ...approvedCustomerCars];

    res.json({
      success: true,
      count: allVehicles.length,
      data: allVehicles,
    });
  } catch (err) {
    console.error('Error fetching vehicles:', err);
    res.status(500).json({ success: false, error: 'Database query failed' });
  }
});

// GET single vehicle by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await query('SELECT * FROM vehicles WHERE id = $1', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, error: 'Vehicle not found' });
    }

    res.json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error('Error fetching vehicle by ID:', err);
    res.status(500).json({ success: false, error: 'Database query failed' });
  }
});

// POST create new vehicle
router.post('/', async (req, res) => {
  try {
    const {
      id,
      name_en,
      name_ar,
      brand,
      category,
      year,
      price,
      currency = 'USD',
      mileage,
      transmission_en,
      transmission_ar,
      engine_en,
      engine_ar,
      acceleration,
      top_speed,
      image_url,
      badge_en,
      badge_ar,
      status = 'available',
      featured = true,
    } = req.body;

    const sql = `
      INSERT INTO vehicles (
        id, name_en, name_ar, brand, category, year, price, currency,
        mileage, transmission_en, transmission_ar, engine_en, engine_ar,
        acceleration, top_speed, image_url, badge_en, badge_ar, status, featured
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20)
      RETURNING *
    `;

    const params = [
      id, name_en, name_ar, brand, category, year, price, currency,
      mileage, transmission_en, transmission_ar, engine_en, engine_ar,
      acceleration, top_speed, image_url, badge_en, badge_ar, status, featured,
    ];

    const result = await query(sql, params);
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error('Error creating vehicle in PostgreSQL:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

export default router;
