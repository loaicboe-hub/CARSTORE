-- =======================================================
-- CAR IN — PostgreSQL Seed Data
-- =======================================================

-- 1. Seed Vehicles
INSERT INTO vehicles (
  id, name_en, name_ar, brand, category, year, price, currency,
  mileage, transmission_en, transmission_ar, engine_en, engine_ar,
  acceleration, top_speed, image_url, badge_en, badge_ar, status, featured
) VALUES
(
  'veh-001',
  'Aston Martin Vantage V8 Coupe',
  'أستون مارتن فانتاج V8 كوبيه',
  'Aston Martin',
  'coupe',
  2024,
  198500.00,
  'USD',
  '2,400 mi',
  '8-Speed ZF Sport-Shift',
  'أوتوماتيك 8 سرعات ZF',
  '4.0L Twin-Turbo V8',
  'محرك 4.0 لتر V8 توين تيربو',
  '0-60 in 3.4s',
  '195 MPH',
  '/images/hero_car.jpg',
  'Showroom Feature',
  'عرض حصري في الصالة',
  'available',
  true
),
(
  'veh-002',
  'Porsche 911 GT3 (992)',
  'بورشه 911 جي تي 3 (992)',
  'Porsche',
  'coupe',
  2024,
  242000.00,
  'USD',
  '1,150 mi',
  '7-Speed Porsche PDK',
  'ناقل حركة PDK بـ 7 سرعات',
  '4.0L Naturally Aspirated Flat-6',
  'محرك 4.0 لتر سحب طبيعي 6 أسطوانات',
  '0-60 in 3.2s',
  '198 MPH',
  '/images/porsche_gt3.jpg',
  'Certified Pre-Owned',
  'مستعملة معتمدة',
  'available',
  true
),
(
  'veh-003',
  'Mercedes-AMG G 63 SUV',
  'مرسيدس AMG G 63 دفع رباعي',
  'Mercedes-Benz',
  'suv',
  2024,
  218000.00,
  'USD',
  '4,200 mi',
  'AMG SPEEDSHIFT TCT 9G',
  'ناقل حركة رياضي AMG بـ 9 سرعات',
  '4.0L V8 Biturbo Handcrafted',
  'محرك 4.0 لتر V8 بايتيربو يدوي الصنع',
  '0-60 in 4.5s',
  '149 MPH',
  '/images/amg_g63.jpg',
  'Exclusive Night Package',
  'باقة الليل الحصرية',
  'available',
  true
),
(
  'veh-004',
  'Audi RS Q8 Performance',
  'أودي RS Q8 الرياضية الفائقة',
  'Audi',
  'suv',
  2023,
  146500.00,
  'USD',
  '8,900 mi',
  '8-Speed Tiptronic Sport',
  'تيبترونيك 8 سرعات رياضي',
  '4.0L Twin-Turbo V8 Mild Hybrid',
  'محرك 4.0 لتر V8 توين تيربو هجين خفيف',
  '0-60 in 3.7s',
  '190 MPH',
  '/images/audi_rsq8.jpg',
  'Quattro Sport Differential',
  'نظام كواترو الرياضي التفاضلي',
  'available',
  true
),
(
  'veh-005',
  'Mercedes-Benz S 580 Executive',
  'مرسيدس بنز S 580 التنفيذية',
  'Mercedes-Benz',
  'sedan',
  2024,
  152000.00,
  'USD',
  '3,100 mi',
  '9G-TRONIC Automatic',
  'أوتوماتيك 9G-TRONIC',
  '4.0L V8 Biturbo with EQ Boost',
  'محرك 4.0 لتر V8 بايتيربو مع EQ Boost',
  '0-60 in 4.4s',
  '155 MPH',
  '/images/mercedes_sclass.jpg',
  'Executive Rear Suite',
  'جناح المقاعد الخلفية التنفيذي',
  'available',
  true
),
(
  'veh-006',
  'Porsche Taycan Turbo S Cross Turismo',
  'بورشه تايكان توربو S كروس توريزمو',
  'Porsche',
  'electric',
  2024,
  189000.00,
  'USD',
  '1,850 mi',
  '2-Speed Rear Transmission',
  'ناقل حركة خلفي بسرعتين للسيارات الكهربائية',
  'Dual Permanent Magnet Motors (750 HP)',
  'محركان كهربائيان متزامنان دائمين (750 حصان)',
  '0-60 in 2.6s',
  '161 MPH',
  '/images/electric_gt.jpg',
  'All-Electric Performance',
  'أداء كهربائي فائق ونظيف',
  'available',
  true
)
ON CONFLICT (id) DO UPDATE SET
  name_en = EXCLUDED.name_en,
  name_ar = EXCLUDED.name_ar,
  price = EXCLUDED.price,
  status = EXCLUDED.status;

-- 2. Seed Testimonials
INSERT INTO testimonials (
  id, name_en, name_ar, role_en, role_ar, vehicle_en, vehicle_ar,
  comment_en, comment_ar, rating, verified, year
) VALUES
(
  'test-01',
  'Harrison Sterling',
  'هاريسون ستيرلينغ',
  'Private Equity Principal, Manhattan',
  'رئيس صندوق أسهم خاصة، مانهاتن',
  'Porsche 911 GT3 (992)',
  'بورشه 911 GT3 (992)',
  'CAR IN orchestrated what was effortlessly the smoothest exotic acquisition I''ve ever experienced. They appraised my Aston Martin trade-in in under 45 minutes and delivered the GT3 directly to my East Hampton estate in an enclosed carrier. Immaculate service.',
  'قدّمت كار إن أسلس وأرقى تجربة اقتناء سيارة خارقة مررت بها على الإطلاق. تم تقييم سيارتي أستون مارتن للاستبدال في أقل من 45 دقيقة، وتم تسليم البورشه GT3 مباشرة إلى قصرنا في إيست هامبتون عبر شاحنة نقل مغلقة فاخرة. خدمة تفوق الوصف.',
  5,
  true,
  '2024'
),
(
  'test-02',
  'Elena Rostova',
  'إيلينا روستوفا',
  'Architecture Director & Collector, Miami',
  'مديرة هندسة معمارية وجامعة سيارات، ميامي',
  'Mercedes-AMG G 63',
  'مرسيدس AMG G 63',
  'Total transparency from day one. Their 180-point inspection documentation included high-res paint depth measurements and complete service logs. The car arrived in condition that exceeded expectations. The entire team behaves like true private bank advisors.',
  'شفافية مطلقة من اليوم الأول. وثائق الفحص الشامل المكونة من 180 نقطة تضمنت قياسات دقيقة لعمق الطلاء وسجلات الصيانة الكاملة. وصلت السيارة بحالة تفوق التوقعات، والفريق بأكمله يتعامل باحترافية تضاهي مستشاري البنوك الخاصة.',
  5,
  true,
  '2024'
),
(
  'test-03',
  'Dr. Julian Vance',
  'د. جوليان فانس',
  'Cardiothoracic Surgeon, Boston',
  'استشاري جراحة القلب والصدر، بوسطن',
  'Mercedes-Benz S 580 Executive',
  'مرسيدس بنز S 580 التنفيذية',
  'I needed an executive transport solution without the usual dealership theater. The concierge handled all paperless contracts within a single afternoon. Pure class, zero pressure, and impeccable attention to detail.',
  'كنت بحاجة إلى سيارة تنفيذية راقية دون الدخول في تعقيدات المعارض التقليدية. أنهى فريق الكونسيرج كافة العقود الإلكترونية خلال فترة ما بعد الظهيرة فقط. رقي حقيقي، ودون أي ضغط، واهتمام فائق بأدق التفاصيل.',
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
  'Marcus Sterling',
  'ماركوس ستيرلينغ',
  'Managing Director & CEO',
  'المدير العام والرئيس التنفيذي',
  'Over 20 years leading high-end European dealership groups and bespoke international exotic acquisitions.',
  'أكثر من 20 عاماً في قيادة مجموعات وكالات السيارات الأوروبية الفاخرة والاستحواذات الدولية.',
  'Master Automotive Executive Certified',
  'شهادة الإدارة التنفيذية المعتمدة للسيارات',
  1
),
(
  'lead-2',
  'Victoria Vance',
  'فيكتوريا فانس',
  'Head of Exotic Acquisitions & Appraisal',
  'رئيس قسم الاستحواذ والتقييم',
  'Specialist in private collection liquidation, live auction underwriting, and high-yield consignment.',
  'خبيرة متخصصة في تصفية المجموعات الخاصة، وتسعير المزادات الحية، والعرض الحصري.',
  'Chief Valuation Director',
  'مدير التقييم والاعتماد الفني الأول',
  2
),
(
  'lead-3',
  'Tariq Al-Mansoor',
  'طارق المنصور',
  'Director of VIP Concierge & Global Fleet',
  'مدير علاقات كبار العملاء والأسطول',
  'Oversees enclosed nationwide transport, corporate fleet leasing, and personalized client deliveries.',
  'يشرف على عمليات النقل المغلق الفاخر، وعقود تأجير الأساطيل، والتسليم الخاص لكبار الشخصيات.',
  'VIP Private Client Services',
  'خدمات كبار العملاء الخاصة VIP',
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
  ('active_fleet_count', '42'),
  ('system_sync_rate', '99.98%')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
