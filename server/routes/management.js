import { Router } from 'express';
import { query } from '../config/db.js';

const router = Router();

// GET management team
router.get('/team', async (req, res) => {
  try {
    const result = await query('SELECT * FROM management_team ORDER BY sort_order ASC');
    res.json({ success: true, count: result.rows.length, data: result.rows });
  } catch (err) {
    console.error('Error fetching management team from PostgreSQL:', err);
    res.status(500).json({ success: false, error: 'Database query failed' });
  }
});

// POST verify dealer PIN
router.post('/verify-pin', async (req, res) => {
  try {
    const { pin, role } = req.body;
    if (!pin) {
      return res.status(400).json({ success: false, error: 'PIN is required' });
    }

    const result = await query("SELECT value FROM dealer_settings WHERE key = 'portal_pin'");
    const expectedPin = result.rows[0]?.value || '123456';

    if (pin.trim() === expectedPin) {
      // Get live telematics from database
      const vehiclesCountRes = await query("SELECT COUNT(*) FROM vehicles WHERE status = 'available'");
      const inquiriesCountRes = await query("SELECT COUNT(*) FROM inquiries WHERE status = 'pending'");
      
      return res.json({
        success: true,
        authenticated: true,
        role: role || 'gm',
        stats: {
          activeVehicles: parseInt(vehiclesCountRes.rows[0]?.count || 0, 10),
          pendingInquiries: parseInt(inquiriesCountRes.rows[0]?.count || 0, 10),
          syncRate: '99.98%',
        },
      });
    }

    res.status(401).json({
      success: false,
      authenticated: false,
      error: 'Invalid authorization code. (Demo PIN: 123456)',
    });
  } catch (err) {
    console.error('Error verifying management PIN in PostgreSQL:', err);
    res.status(500).json({ success: false, error: 'Database verification failed' });
  }
});

export default router;
