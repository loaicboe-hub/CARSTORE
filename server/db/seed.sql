-- =======================================================
-- CAR IN — PostgreSQL Seed Data (Egyptian Market)
-- =======================================================

-- 1. Seed Vehicles
INSERT INTO vehicles (
  id, name_en, name_ar, brand, category, year, price, currency,
  mileage, transmission_en, transmission_ar, engine_en, engine_ar,
  acceleration, top_speed, image_url, badge_en, badge_ar, status, featured
) VALUES
(
  'veh-001',
  '2024 Mercedes-Benz C180 AMG Line',
  'مرسيدس بنز C180 AMG Line (2024)',
  'Mercedes-Benz',
  'sedan',
  2024,
  3450000.00,
  'EGP',
  '4,200 km',
  '9G-TRONIC Automatic',
  'أوتوماتيك 9G-TRONIC',
  '1.5L Turbo EQ Boost (170 HP)',
  '1.5 لتر تيربو EQ Boost بقوة 170 حصان',
  '0-100 in 8.6s',
  '231 km/h',
  '/images/c180_amg.jpg',
  '100% Fabrika Certified',
  'فابريكا بالكامل 100%',
  'available',
  true
),
(
  'veh-002',
  '2023 BMW 520i M-Sport Package',
  'بي إم دبليو 520i الفئة الخامسة M-Sport',
  'BMW',
  'sedan',
  2023,
  4200000.00,
  'EGP',
  '14,000 km',
  '8-Speed Steptronic Sport',
  'أوتوماتيك ستيبترونيك 8 سرعات',
  '2.0L TwinPower Turbo (184 HP)',
  '2.0 لتر توين باور تيربو 184 حصان',
  '0-100 in 7.9s',
  '235 km/h',
  '/images/bmw_520i.jpg',
  'Agency Warranty Active',
  'ضمان الوكيل ساري',
  'available',
  true
),
(
  'veh-003',
  '2024 Land Rover Defender 110 P400 SE',
  'لاند روفر ديفندر 110 P400 SE',
  'Land Rover',
  'suv',
  2024,
  8900000.00,
  'EGP',
  '8,500 km',
  '8-Speed Automatic with Low Range',
  'أوتوماتيك 8 سرعات بدبل وغرز',
  '3.0L i6 Turbo MHEV (400 HP)',
  '3.0 لتر 6 سلندر مايلد هايبرد 400 حصان',
  '0-100 in 6.1s',
  '208 km/h',
  '/images/defender_110.jpg',
  'Zero Powers of Attorney',
  'أول يد بدون توكيلات',
  'available',
  true
),
(
  'veh-004',
  '2024 Porsche Cayenne Coupe GT-Style',
  'بورشه كايين كوبيه 2024',
  'Porsche',
  'suv',
  2024,
  9500000.00,
  'EGP',
  '3,800 km',
  '8-Speed Tiptronic S',
  'تيبترونيك S ثماني السرعات',
  '3.0L Turbocharged V6 (348 HP)',
  '3.0 لتر V6 تيربو 348 حصان',
  '0-100 in 5.7s',
  '248 km/h',
  '/images/cayenne_coupe.jpg',
  'Instant Delivery',
  'استلام فوري بالمعرض',
  'available',
  true
),
(
  'veh-005',
  '2024 Kia Sportage GT-Line 1.6T',
  'كيا سبورتاج GT-Line تيربو 2024',
  'Kia',
  'suv',
  2024,
  2150000.00,
  'EGP',
  '7,000 km',
  '7-Speed Dual Clutch (DCT)',
  'ناقل حركة ثنائي التعشيق 7 سرعات',
  '1.6L Turbo GDI (180 HP)',
  '1.6 لتر تيربو GDI بقوة 180 حصان',
  '0-100 in 8.8s',
  '201 km/h',
  '/images/sportage_gtline.jpg',
  'Top Category GT-Line',
  'الفئة الأعلى GT-Line',
  'available',
  false
),
(
  'veh-006',
  '2024 Skoda Octavia A8 RS Mamba Green',
  'سكودا أوكتافيا A8 RS مامبا جرين',
  'Skoda',
  'sedan',
  2024,
  2750000.00,
  'EGP',
  '9,500 km',
  '7-Speed DSG Wet-Clutch',
  'أوتوماتيك 7 سرعات DSG',
  '2.0L TSI EA888 (245 HP)',
  '2.0 لتر TSI توربو بقوة 245 حصان',
  '0-100 in 6.7s',
  '250 km/h',
  '/images/octavia_rs.jpg',
  'Exclusive Color',
  'لون حصري نادر',
  'available',
  false
)
ON CONFLICT (id) DO UPDATE SET
  price = EXCLUDED.price,
  currency = EXCLUDED.currency,
  mileage = EXCLUDED.mileage,
  image_url = EXCLUDED.image_url;

-- 2. Seed Testimonials
INSERT INTO testimonials (
  id, name_en, name_ar, role_en, role_ar, vehicle_en, vehicle_ar,
  comment_en, comment_ar, rating, verified, year
) VALUES
(
  'test-01',
  'Eng. Tarek El-Sherbini',
  'م. طارق الشربيني',
  'Real Estate Developer, Katameya Dunes',
  'رئيس مجلس إدارة شركة تطوير عقاري، كمبوند القطامية ديونز، التجمع الخامس',
  'Land Rover Defender 110 P400 SE',
  'لاند روفر ديفندر 110 P400 SE (2024)',
  'CAR IN saved me a grueling 9-month official agency waitlist on the Defender 110. Their Fabrika paint micron radar inspection was 100% accurate, zero repaint, and they delivered the vehicle on an enclosed hydraulic VIP flatbed directly to my villa gate in Katameya Dunes.',
  'كار إن وفّروا عليّ انتظار 9 أشهر كاملة في قوائم حجز التوكيل للديفندر 110. فحص رادار الفابريكا وسماكة الدهان بالمايكرون كان دقيقاً بنسبة 100% بدون أي دهانات، وتم تسليم السيارة على ونش هيدروليكي مغلق VIP مباشرة حتى باب الفيلا في القطامية ديونز.',
  5,
  true,
  '2024'
),
(
  'test-02',
  'Dr. Sherif El-Badrawy',
  'د. شريف البدراوي',
  'Consultant Surgeon, Palm Hills, Sheikh Zayed',
  'استشاري جراحة الأورام، بالم هيلز، الشيخ زايد',
  'Mercedes-Benz C180 AMG Line',
  'مرسيدس بنز C180 AMG Line (2024)',
  'In the Egyptian market, finding an authentic first-owner zero powers of attorney car with a pristine maintenance pedigree is rare. CAR IN finalized traffic license documents and delivered a 100% factory original C180 within 24 hours.',
  'في سوق السيارات بمصر، العثور على سيارة أول يد حقيقية بدون توكيلات مع سجل صيانة منتظم أمر نادر. أنهى فريق كار إن كافة إجراءات الفحص ورخصة المرور وسلموني C180 فابريكا بالكامل خلال 24 ساعة فقط وبأعلى درجات الاحترافية.',
  5,
  true,
  '2024'
),
(
  'test-03',
  'Kamal El-Minshawy',
  'أ. كمال المنشاوي',
  'Industrial Group CEO, King Marriott, Alexandria',
  'رئيس مجلس إدارة مجموعة صناعية، كينج مريوط، الإسكندرية',
  'BMW 520i M-Sport Package',
  'بي إم دبليو 520i M-Sport الفئة الخامسة',
  'Trade-in evaluation of my previous car was concluded within 90 minutes at fair market value. Their finance team coordinated directly with CIB for instantaneous credit approval without traditional showroom headaches.',
  'تقييم سيارتي السابقة للاستبدال انتهى خلال 90 دقيقة فقط بسعر عادل يواكب السوق. وتولى فريق التمويل التنسيق مع بنك CIB لاعتماد فرق التمويل في نفس اليوم دون الحاجة لخوض تعقيدات المعارض التقليدية.',
  5,
  true,
  '2024'
)
ON CONFLICT (id) DO UPDATE SET
  comment_en = EXCLUDED.comment_en,
  comment_ar = EXCLUDED.comment_ar;

-- 3. Seed Management Team
INSERT INTO management_team (
  id, name_en, name_ar, role_en, role_ar, bio_en, bio_ar,
  credential_en, credential_ar, sort_order
) VALUES
(
  'lead-1',
  'Eng. Tamer Serag Eldin',
  'م. تامر سراج الدين',
  'Managing Director & Founder',
  'المدير العام والمؤسس',
  'Over 22 years spearheading German luxury automotive retail and certified exotic vehicle acquisitions in Egypt.',
  'أكثر من 22 عاماً في قيادة تجارة السيارات الألمانية الفارهة والاستحواذات المعتمدة في السوق المصري.',
  'Chief Executive Automotive Director',
  'شهادة الإدارة التنفيذية لقطاع السيارات الفاخرة',
  1
),
(
  'lead-2',
  'Sherif El-Badrawy',
  'أ. شريف البدراوي',
  'Head of Acquisitions & Fabrika Appraisals',
  'رئيس قسم الاستحواذ وفحص الفابريكا المعتمد',
  'Forensic vehicle inspection specialist, ultrasonic paint thickness calibration, and provenance verification.',
  'خبير متخصص في معايرة سماكة الطلاء الإلكترونية، ومطابقة ملفات المرور، وتقييم كسر الزيرو.',
  'Master Vehicle Appraiser & Auditor',
  'خبير الاعتماد والتقييم الفني الأول',
  2
),
(
  'lead-3',
  'Karim El-Gohary',
  'أ. كريم الجوهري',
  'Director of VIP Concierge & Banking Finance',
  'مدير علاقات كبار العملاء والتمويل البنكي',
  'Manages direct banking partnerships with CIB, Contact, and ValU, plus compound enclosed deliveries.',
  'يشرف على تسهيلات التمويل مع كبرى البنوك (CIB، Contact)، وعمليات النقل الهيدروليكي المغلق لباب الكومباوند.',
  'VIP Private Client & Finance Services',
  'إدارة الائتمان وخدمات VIP الخاصة',
  3
)
ON CONFLICT (id) DO UPDATE SET
  name_en = EXCLUDED.name_en,
  name_ar = EXCLUDED.name_ar;

-- 4. Seed Dealership Settings
INSERT INTO dealer_settings (key, value)
VALUES
  ('portal_pin', '123456'),
  ('dealership_status', 'operational'),
  ('active_fleet_count', '7'),
  ('system_sync_rate', '99.98%')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
