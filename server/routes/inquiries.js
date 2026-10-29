import { Router } from 'express';
import { query } from '../config/db.js';

const router = Router();

// POST new client inquiry (Lead capture)
router.post('/', async (req, res) => {
  try {
    const {
      full_name,
      phone,
      email,
      channel = 'whatsapp',
      vehicle_id = null,
      inquiry_type = 'purchase',
      message = '',
    } = req.body;

    if (!full_name || !phone || !email) {
      return res.status(400).json({
        success: false,
        error: 'Full name, phone, and email are required fields.',
      });
    }

    const sql = `
      INSERT INTO inquiries (full_name, phone, email, channel, vehicle_id, inquiry_type, message, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending')
      RETURNING *
    `;

    const result = await query(sql, [
      full_name,
      phone,
      email,
      channel,
      vehicle_id,
      inquiry_type,
      message,
    ]);

    res.status(201).json({
      success: true,
      message: 'Inquiry registered successfully into database.',
      data: result.rows[0],
    });
  } catch (err) {
    console.error('Error inserting inquiry into PostgreSQL:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET all inquiries (for Dealer Portal)
router.get('/', async (req, res) => {
  try {
    const sql = `
      SELECT i.*, v.name_en as vehicle_name_en, v.name_ar as vehicle_name_ar
      FROM inquiries i
      LEFT JOIN vehicles v ON i.vehicle_id = v.id
      ORDER BY i.created_at DESC
      LIMIT 100
    `;
    const result = await query(sql);
    res.json({ success: true, count: result.rows.length, data: result.rows });
  } catch (err) {
    console.error('Error fetching inquiries from PostgreSQL:', err);
    res.status(500).json({ success: false, error: 'Database query failed' });
  }
});

export default router;
