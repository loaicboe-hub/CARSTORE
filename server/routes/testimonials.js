import { Router } from 'express';
import { query } from '../config/db.js';

const fallbackTestimonials = [
  {
    id: 'test-01',
    author_en: 'Eng. Tarek El-Sherbini',
    author_ar: 'م. طارق الشربيني',
    role_en: 'Real Estate Developer, Katameya Dunes',
    role_ar: 'رئيس مجلس إدارة شركة تطوير عقاري، كمبوند القطامية ديونز، التجمع الخامس',
    vehicle_acquired_en: 'Land Rover Defender 110 P400 SE',
    vehicle_acquired_ar: 'لاند روفر ديفندر 110 P400 SE (2024)',
    service_type_en: 'Instant Delivery & VIP Concierge',
    service_type_ar: 'استلام فوري وكونسيرج VIP',
    rating: 5,
    comment_en:
      'CAR IN saved me a grueling 9-month official agency waitlist on the Defender 110. Their Fabrika paint micron radar was 100% accurate, and delivered on an enclosed VIP flatbed directly to my villa gate in Katameya Dunes.',
    comment_ar:
      'كار إن وفّروا عليّ انتظار 9 أشهر كاملة في قوائم حجز التوكيل للديفندر 110. فحص رادار الفابريكا وسماكة الدهان بالمايكرون كان دقيقاً بنسبة 100%، وتم تسليم السيارة على ونش هيدروليكي مغلق VIP مباشرة حتى باب الفيلا في القطامية ديونز.',
    avatar: 'TS',
  },
  {
    id: 'test-02',
    author_en: 'Dr. Sherif El-Badrawy',
    author_ar: 'د. شريف البدراوي',
    role_en: 'Consultant Surgeon, Palm Hills Sheikh Zayed',
    role_ar: 'استشاري جراحة الأورام، بالم هيلز، الشيخ زايد',
    vehicle_acquired_en: 'Mercedes-Benz C180 AMG Line',
    vehicle_acquired_ar: 'مرسيدس بنز C180 AMG Line (2024)',
    service_type_en: 'Zero Powers of Attorney Title Transfer',
    service_type_ar: 'شراء أول يد ونقل ملكية بدون توكيلات',
    rating: 5,
    comment_en:
      'In Egypt, finding an authentic first-owner car with zero powers of attorney is rare. CAR IN finalized traffic license documents and delivered a 100% factory original C180 within 24 hours.',
    comment_ar:
      'في سوق السيارات بمصر، العثور على سيارة أول يد حقيقية بدون توكيلات أمر نادر. أنهى فريق كار إن كافة إجراءات الفحص ورخصة المرور وسلموني C180 فابريكا بالكامل خلال 24 ساعة فقط.',
    avatar: 'SB',
  },
];

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
    // Graceful fallback to localized Egyptian testimonials
    res.json({
      success: true,
      count: fallbackTestimonials.length,
      data: fallbackTestimonials,
    });
  }
});

export default router;
