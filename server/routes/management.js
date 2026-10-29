import { Router } from 'express';
import { query } from '../config/db.js';

const fallbackTeam = [
  {
    id: 'lead-1',
    name_en: 'Eng. Tamer Serag Eldin',
    name_ar: 'م. تامر سراج الدين',
    role_en: 'Managing Director & Founder',
    role_ar: 'المدير العام والمؤسس',
    bio_en: 'Over 22 years spearheading German luxury automotive retail and certified exotic vehicle acquisitions in Egypt.',
    bio_ar: 'أكثر من 22 عاماً في قيادة تجارة السيارات الألمانية الفارهة والاستحواذات المعتمدة في السوق المصري.',
    credential_en: 'Chief Executive Automotive Director',
    credential_ar: 'شهادة الإدارة التنفيذية لقطاع السيارات الفاخرة',
  },
  {
    id: 'lead-2',
    name_en: 'Sherif El-Badrawy',
    name_ar: 'أ. شريف البدراوي',
    role_en: 'Head of Acquisitions & Fabrika Appraisals',
    role_ar: 'رئيس قسم الاستحواذ وفحص الفابريكا المعتمد',
    bio_en: 'Forensic vehicle inspection specialist, ultrasonic paint thickness calibration, and provenance verification.',
    bio_ar: 'خبير متخصص في معايرة سماكة الطلاء الإلكترونية، ومطابقة ملفات المرور، وتقييم كسر الزيرو.',
    credential_en: 'Master Vehicle Appraiser & Auditor',
    credential_ar: 'خبير الاعتماد والتقييم الفني الأول',
  },
  {
    id: 'lead-3',
    name_en: 'Karim El-Gohary',
    name_ar: 'أ. كريم الجوهري',
    role_en: 'Director of VIP Concierge & Banking Finance',
    role_ar: 'مدير علاقات كبار العملاء والتمويل البنكي',
    bio_en: 'Manages direct banking partnerships with CIB, Contact, and ValU, plus compound enclosed deliveries.',
    bio_ar: 'يشرف على تسهيلات التمويل مع كبرى البنوك (CIB، Contact)، وعمليات النقل الهيدروليكي المغلق لباب الكومباوند.',
    credential_en: 'VIP Private Client & Finance Services',
    credential_ar: 'إدارة الائتمان وخدمات VIP الخاصة',
  },
];

const router = Router();

// GET management team
router.get('/team', async (req, res) => {
  try {
    const result = await query('SELECT * FROM management_team ORDER BY sort_order ASC');
    res.json({ success: true, count: result.rows.length, data: result.rows });
  } catch (err) {
    res.json({ success: true, count: fallbackTeam.length, data: fallbackTeam });
  }
});

// POST verify dealer PIN
router.post('/verify-pin', async (req, res) => {
  try {
    const { pin, role } = req.body;
    if (!pin) {
      return res.status(400).json({ success: false, error: 'PIN is required' });
    }

    let expectedPin = '123456';
    try {
      const result = await query("SELECT value FROM dealer_settings WHERE key = 'portal_pin'");
      if (result.rows[0]?.value) expectedPin = result.rows[0].value;
    } catch (dbErr) {
      // Offline fallback
    }

    if (pin.trim() === expectedPin) {
      return res.json({
        success: true,
        authenticated: true,
        role: role || 'gm',
        stats: {
          activeVehicles: 7,
          pendingInquiries: 3,
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
    res.status(500).json({ success: false, error: 'Verification failed' });
  }
});

export default router;
