import { Router } from 'express';
import { query } from '../config/db.js';

const router = Router();

// GET all testimonials
router.get('/', async (req, res) => {
  try {
    const result = await query('SELECT * FROM testimonials ORDER BY created_at ASC');
    res.json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    });
  } catch (err) {
    console.error('Error fetching testimonials from PostgreSQL:', err);
    res.status(500).json({ success: false, error: 'Database query failed' });
  }
});

export default router;
