/**
 * Comprehensive Bilingual Translations (English & Arabic)
 * Supports RTL layout, luxury automotive terminology, and verified messaging.
 */

export const translations = {
  en: {
    langLabel: 'English',
    switchLabel: 'العربية',
    switchCode: 'ar',

    brand: {
      name: 'CAR',
      nameSuffix: 'IN',
      tagline: 'The Pinnacle of Automotive Distinction',
      heroSubtitle:
        "Curators of the world's most distinguished luxury, performance, and executive automobiles. Experience unmatched precision in buying, selling, leasing, and bespoke exchanges.",
      hours: 'Mon – Sat: 9:00 AM – 7:30 PM | Sun: By Appointment Only',
      city: 'New York, NY 10021',
      address: '740 Park Avenue, Automotive District, Suite 100',
    },

    stats: [
      { value: '950+', label: 'Vehicles Delivered', description: 'To discerning drivers nationwide' },
      { value: '180-Pt', label: 'Master Inspection', description: 'Rigorous mechanical & cosmetic certification' },
      { value: '99.4%', label: 'Client Satisfaction', description: 'Verified bespoke concierge experience' },
      { value: '15+', label: 'Years of Heritage', description: 'Excellence in high-end automotive trade' },
    ],

    nav: {
      buy: 'Buy',
      sell: 'Sell',
      exchange: 'Exchange',
      rent: 'Rent',
      management: 'Management',
      contact: 'Contact',
      exploreShowroom: 'Explore Showroom',
      concierge: 'Concierge',
    },

    hero: {
      badge: 'Excellence in Luxury & Certified Performance',
      titleP1: 'The Pinnacle of',
      titleP2: 'Automotive Distinction',
      exploreBtn: 'Explore Inventory',
      appraisalBtn: 'Request Free Appraisal',
      liveSpecOutput: 'Twin-Turbo V8',
      liveSpecAccel: '0–60 MPH',
      liveSpecSpeed: 'Top Track Speed',
    },

    services: {
      eyebrow: 'Comprehensive Automotive Solutions',
      title: 'Designed for Discerning',
      highlight: 'Drivers & Collectors',
      subtitle:
        'Whether you are acquiring a certified track weapon, consigning a prized exotic, or transitioning equity to an upgrade, our concierge ensures absolute discretion and market excellence.',
      cards: [
        {
          id: 'buy',
          title: 'Buy Certified Vehicles',
          badge: '180-Pt Certified',
          tagline: 'Hand-curated, immaculate luxury and performance motorcars.',
          description:
            'Every vehicle undergoes our master multi-point mechanical inspection, complete CarFax provenance audit, and professional ceramic detailing before entering our showroom floor.',
          perks: [
            'Rigorous 180-point mechanical & safety audit',
            'Comprehensive transparent provenance report',
            'Available 12–36 month extended exclusionary warranty',
            'White-glove nationwide enclosed delivery',
          ],
          actionText: 'Browse Current Inventory',
        },
        {
          id: 'sell',
          title: 'Sell Your Vehicle',
          badge: 'Instant Valuation',
          tagline: 'Effortless liquidation and high-yield consignment.',
          description:
            'Obtain an aggressive market appraisal within 60 minutes. Choose between immediate bank settlement or our exclusive white-glove consignment program with global VIP exposure.',
          perks: [
            'No-obligation valuation powered by live auction data',
            'Same-day wire transfer or cashier check',
            'Professional 4K showroom photography & marketing',
            'Full lien payoff handling & DMV documentation',
          ],
          actionText: 'Request Fast Appraisal',
        },
        {
          id: 'rent',
          title: 'Luxury & Exotic Rental',
          badge: 'VIP Fleet',
          tagline: 'Unforgettable driving experiences on your schedule.',
          description:
            'Command the world’s most coveted supercars, prestigious SUVs, and chauffeur-ready executive saloons for corporate galas, private weekend retreats, or executive travel.',
          perks: [
            'Flexible daily, weekly, or monthly executive leases',
            'Airport tarmac & luxury hotel valet dispatch',
            'Complimentary high-tier insurance cover options',
            '24/7 dedicated personal concierge support',
          ],
          actionText: 'Inquire About Rentals',
        },
        {
          id: 'exchange',
          title: 'Vehicle Exchange & Trade-In',
          badge: 'Seamless Upgrade',
          tagline: 'Transition smoothly into your next automotive masterpiece.',
          description:
            'Roll your existing equity directly into an upgrade from our current showroom. We provide generous trade-in credits, sales tax offset benefits, and zero downtime.',
          perks: [
            'Substantial sales tax savings on net trade difference',
            'Straightforward keys-in-hand single visit transition',
            'Fair appraisals honoring aftermarket enhancements',
            'Custom tailored financing & lease transfers',
          ],
          actionText: 'Evaluate Your Trade-In',
        },
      ],
    },

    inventory: {
      eyebrow: 'Current Showroom Collection',
      title: 'Curated Masterpieces',
      highlight: 'In Stock Today',
      subtitle:
        'Every vehicle is certified, titled, stored in climate control, and available for immediate acquisition, leasing, or nationwide enclosed delivery.',
      searchPlaceholder: 'Search by make, model, or keyword (e.g., Porsche, Ferrari, G-Wagon)...',
      searchLabel: 'Search collection',
      sortByLabel: 'Sort by:',
      sortOptions: {
        featured: 'Featured Selection',
        priceAsc: 'Price: Low to High',
        priceDesc: 'Price: High to Low',
        yearDesc: 'Year: Newest First',
        yearAsc: 'Year: Oldest First',
        mileageAsc: 'Mileage: Lowest First',
      },
      resultsCount: 'Showing {count} of {total} motorcars',
      clearFilters: 'Clear Filters',
      quickViewBtn: 'View Specs & Gallery',
      categories: {
        all: 'All Vehicles',
        coupe: 'Supercars & Coupes',
        suv: 'Luxury SUVs',
        sedan: 'Executive Sedans',
        electric: 'Electric & Hybrid',
      },
      specs: {
        output: 'Output',
        accel: '0–60 MPH',
        powertrain: 'Powertrain',
        mileage: 'Mileage',
      },
      monthlyPrefix: 'Est.',
      inquireBtn: 'Inquire / Reserve',
      empty: 'No vehicles match your search criteria. Contact our concierge for off-market allocations.',
    },

    vehicleModal: {
      quickViewTitle: 'Vehicle Dossier & Full Specifications',
      certifiedBadge: '180-Point Certified Master Inspection Passed',
      overviewTab: 'Specifications & Performance',
      galleryTab: 'HD Photo Gallery',
      financeTab: 'Financing Estimator',
      specs: {
        engine: 'Engine / Powertrain',
        horsepower: 'Power Output',
        acceleration: '0–60 MPH Acceleration',
        topSpeed: 'Maximum Track Speed',
        transmission: 'Transmission',
        drivetrain: 'Drivetrain',
        mileage: 'Odometer Mileage',
        vin: 'Chassis VIN',
        exterior: 'Exterior Finish',
        interior: 'Interior Upholstery',
        fuel: 'Fuel / Energy Type',
        warranty: 'Warranty Coverage',
        inspectionAudit: '180-Point Certification',
      },
      passedStatus: 'Passed & Certified 100%',
      warrantyVal: '12-Month Comprehensive Master Warranty',
      keyFeaturesTitle: 'Equipment & Bespoke Options',
      inspectionTitle: 'Master 180-Point Technical Verification Checklist',
      inspectionPoints: [
        'Engine Compression & Turbocharger Boost Calibration',
        'Electronic Diagnostic & Full ECU Computer Scan',
        'Transmission Shift Dynamics & AWD Differential Test',
        'Ceramic Composite Rotor Thickness & Brake Hydraulics',
        'Laser Chassis Alignment & Adaptive Suspension Geometry',
        'Multi-Zone Digital Paint Depth Scan (Zero Prior Collision)',
      ],
      finance: {
        title: 'Luxury Lease & Financing Estimator',
        subtitle: 'Customize your down payment and loan term for a live monthly payment estimate.',
        vehiclePrice: 'Vehicle Acquisition Price',
        downPayment: 'Down Payment',
        term: 'Financing Term',
        months: 'months',
        estimatedPayment: 'Estimated Monthly Payment',
        disclaimer: 'Calculated using illustrative 6.49% APR tier-one credit. Excludes local sales tax, registration, and title fees.',
      },
      inquireNow: 'Request Private Viewing',
      whatsappInquire: 'Inquire on WhatsApp',
      shareVehicle: 'Share Vehicle',
      copied: 'Link copied to clipboard',
      close: 'Close',
    },

    whyUs: {
      eyebrow: 'The CAR IN Standard',
      title: 'Engineered Around',
      highlight: 'Uncompromising Trust',
      subtitle:
        'Acquiring or selling a high-value automobile should be exhilarating, transparent, and entirely devoid of typical dealership frictions.',
      inspectionBanner: {
        title: 'Every Vehicle Hand-Certified by Master Technicians',
        desc:
          'We provide an unredacted 180-point inspection dossier including digital paint depth scans, ECU diagnostic readouts, tire tread measurements, and CarFax provenance with every vehicle inquiry.',
        btn: 'Request Sample Inspection Dossier',
      },
      pillars: [
        {
          id: 'pillar-01',
          title: '180-Point Master Certification',
          description:
            'Every vehicle undergoes exhaustive mechanical, electronic diagnostic, chassis alignment, and cosmetic inspection by master certified technicians.',
          metric: '100% Certified',
        },
        {
          id: 'pillar-02',
          title: 'Transparent Provenance & Zero Hidden Fees',
          description:
            'Complete CarFax and AutoCheck provenance documentation, certified maintenance pedigree, clear titles, and upfront out-the-door pricing.',
          metric: 'Full History Guarantee',
        },
        {
          id: 'pillar-03',
          title: 'Enclosed White-Glove Delivery',
          description:
            'Nationwide door-to-door transport in dedicated climate-controlled, air-ride enclosed carriers with GPS tracking and comprehensive transit coverage.',
          metric: 'Door-to-Door',
        },
        {
          id: 'pillar-04',
          title: 'Bespoke Concierge & Financial Structuring',
          description:
            'Personal automotive advisors providing confidential negotiations, competitive luxury lease terms, and effortless vehicle trade equity transfers.',
          metric: 'VIP Private Access',
        },
      ],
    },

    management: {
      eyebrow: 'Executive Governance & Leadership',
      title: 'Dealership',
      highlight: 'Management & Operations',
      subtitle:
        'Directed by seasoned automotive executives and appraisal specialists committed to total client discretion, rapid execution, and operational transparency.',
      team: [
        {
          id: 'lead-1',
          name: 'Eng. Tamer Serag Eldin',
          role: 'Managing Director & Founder',
          bio: 'Over 22 years spearheading German luxury automotive retail and certified exotic vehicle acquisitions in Egypt.',
          credential: 'Chief Executive Automotive Director',
        },
        {
          id: 'lead-2',
          name: 'Sherif El-Badrawy',
          role: 'Head of Acquisitions & Fabrika Appraisals',
          bio: 'Forensic vehicle inspection specialist, ultrasonic paint thickness calibration, and provenance verification.',
          credential: 'Master Vehicle Appraiser & Auditor',
        },
        {
          id: 'lead-3',
          name: 'Karim El-Gohary',
          role: 'Director of VIP Concierge & Banking Finance',
          bio: 'Manages direct banking partnerships with CIB, Contact, and ValU, plus compound enclosed deliveries.',
          credential: 'VIP Private Client & Finance Services',
        },
      ],
      portalBadge: 'Dealer Operations',
      portalTitle: 'Authorized Management & Dealer Portal',
      portalDesc:
        'Secure administrative gateway for showroom inventory telematics, live appraisal sign-offs, and client dispatch.',
      portalBtn: 'Management Portal Access',
      modal: {
        title: 'CAR IN Management Portal',
        subtitle: 'Authorized dealership personnel and executive session verification.',
        roleLabel: 'Select Management Role',
        roles: {
          gm: 'General Management / Executive Office',
          sales: 'Sales & Acquisition Director',
          inventory: 'Inventory & Fleet Manager',
        },
        pinLabel: 'Dealer Authorization Code / PIN',
        pinPlaceholder: 'Enter 6-digit access code (Demo: 123456)',
        submitBtn: 'Authenticate & Enter Portal',
        successMsg: 'Session authenticated successfully. Welcome to CAR IN Executive Operations.',
        closeBtn: 'Close Portal',
      },
    },

    testimonials: {
      eyebrow: 'Verified Client Experiences',
      title: 'Endorsed by Discerning',
      highlight: 'Drivers & Collectors',
      subtitle:
        'Read firsthand testimonials from clients who entrusted CAR IN with their high-performance acquisitions and trade-in transitions.',
    },

    cta: {
      badge: 'Private Automotive Concierge',
      title: 'Ready to Experience',
      highlight: 'Elevated Excellence?',
      desc:
        'Whether you are adding to a private collection, seeking a high-performance daily driver, or scheduling a confidential appraisal, our specialists are at your disposal.',
      scheduleBtn: 'Schedule Private Consultation',
      whatsappBtn: 'Direct WhatsApp Concierge',
    },

    modal: {
      badge: 'VIP Concierge Direct',
      inquirePrefix: 'Inquire:',
      generalTitle: 'Private Automotive Consultation',
      generalSubtitle: 'Connect directly with our master sales, leasing, and appraisal advisors.',
      typeLabel: 'Inquiry Category',
      types: {
        purchase: 'Vehicle Purchase & Reservation',
        tradein: 'Sell / Trade-In Valuation Appraisal',
        rental: 'Exotic Fleet Rental Inquiry',
        testdrive: 'Private Showroom Test Drive',
      },
      fullNameLabel: 'Full Name *',
      fullNamePlaceholder: 'e.g. Eng. Tarek El-Sherbini',
      phoneLabel: 'Phone / Mobile *',
      phonePlaceholder: 'e.g. +20 10 2000 8899 / 01020008899',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'e.g. sherbini@domain.com',
      channelLabel: 'Preferred Response Channel',
      channels: {
        whatsapp: 'WhatsApp',
        phone: 'Phone Call',
        email: 'Email',
      },
      messageLabel: 'Specific Requests / Trade-In Details (Optional)',
      messagePlaceholder: 'Tell us about your timing, financing preferences, or trade-in vehicle details...',
      submitBtn: 'Submit Inquiry',
      whatsappBtn: 'WhatsApp',
      successTitle: 'Inquiry Received',
      successGreeting: 'Thank you',
      successMessage:
        'A dedicated concierge director from CAR IN will contact you shortly.',
      continueWhatsapp: 'Continue via WhatsApp',
      doneBtn: 'Done',
    },

    footer: {
      copyright: 'All rights reserved. Clean architecture ready for multi-page deployment.',
      backToTop: 'Back to Top',
      sections: {
        services: 'Services',
        showroom: 'Showroom',
        clientCare: 'Client Care',
      },
    },
  },

  ar: {
    langLabel: 'العربية',
    switchLabel: 'English',
    switchCode: 'en',

    brand: {
      name: 'كار',
      nameSuffix: 'إن',
      tagline: 'قمة التميز في عالم السيارات الفاخرة',
      heroSubtitle:
        'نخبة منتقاة من أرقى وأندر السيارات الفاخرة وكسر الزيرو في مصر. فابريكا بالكامل بره وجوه، فحص 180 نقطة معتمد، تقسيط مباشر عبر كبرى البنوك، وتسليم فوري ونقل ملكية في نفس اليوم.',
      hours: 'يومياً: 11:00 ص – 11:00 م (المعاينة طوال الأسبوع)',
      city: 'القاهرة والشيخ زايد، مصر',
      address: 'فرع التجمع الخامس: التسعين الشمالي | فرع زايد: وصلة دهشور',
    },

    stats: [
      { value: '1,200+', label: 'سيارة تم تسليمها', description: 'لكبار العملاء في القاهرة والإسكندرية والمحافظات' },
      { value: '180 نقطة', label: 'فحص ميكانيكي وبوية', description: 'تدقيق معتمد لسماكة البوية بالمايكرون وكمبيوتر المحرك' },
      { value: '100%', label: 'فابريكا خالية من الحوادث', description: 'أعلى معايير انتقاء السيارات بدون أي ملاحظات' },
      { value: 'ساعة واحدة', label: 'استلام وترخيص فوري', description: 'إنهاء كافة إجراءات الشهر العقاري والمرور بدون عناء' },
    ],

    nav: {
      buy: 'شراء',
      sell: 'بيع سيارتك',
      exchange: 'استبدال',
      rent: 'تأجير فاخر',
      management: 'الإدارة',
      contact: 'اتصل بنا',
      exploreShowroom: 'المعرض',
      concierge: 'الكونسيرج',
    },

    hero: {
      badge: 'فحص 180 نقطة معتمد • فابريكا بالكامل',
      titleP1: 'قمة التميز في',
      titleP2: 'عالم السيارات الفاخرة بمصر',
      exploreBtn: 'استكشف المعروض المتاح',
      appraisalBtn: 'طلب تقييم فوري لسيارتك',
      liveSpecOutput: '190–585 HP',
      liveSpecAccel: 'فابريكا 100%',
      liveSpecSpeed: 'استلام فوري',
    },

    services: {
      eyebrow: 'حلول سيارات شاملة ومتكاملة',
      title: 'مصممة خصيصاً',
      highlight: 'لعشاق الفخامة والتميز',
      subtitle:
        'سواء كنت تسعى لاقتناء سيارة خارقة معتمدة، أو بيع سيارتك بأعلى قيمة سوقية، أو ترقية سيارتك الحالية، يضمن لك فريقنا تجربة فائقة الخصوصية والاحترافية.',
      cards: [
        {
          id: 'buy',
          title: 'شراء السيارات المعتمدة',
          badge: 'فحص 180 نقطة',
          tagline: 'سيارات فاخرة منتقاة بعناية وبحالة المصنع.',
          description:
            'تخضع كل سيارة لفحص ميكانيكي وهيكلي شامل ومعتمد، مع تقرير فحص تاريخ كامل وتلميع سيراميك احترافي قبل دخولها صالة العرض.',
          perks: [
            'فحص ميكانيكي وأمان صارم من 180 نقطة',
            'تقرير تاريخ كامل وموثق لجميع الفحوصات',
            'ضمان ممتد شامل لمدة 12 إلى 36 شهراً',
            'شحن ونقل مغلق مخصص حتى باب منزلك',
          ],
          actionText: 'تصفح السيارات المتاحة',
        },
        {
          id: 'sell',
          title: 'بيع سيارتك بأعلى عائد',
          badge: 'تقييم فوري مباشر',
          tagline: 'سرعة في التنفيذ وتحويل بنكي في نفس اليوم.',
          description:
            'احصل على تقييم دقيق وسعر منافس لسيارتك خلال 60 دقيقة. اختر بين الشراء النقدي الفوري أو عرض سيارتك في صالتنا بنظام الكونسيرج الحصري.',
          perks: [
            'تقييم تنافسي بدون أي التزام مبني على بيانات السوق الحية',
            'تحويل بنكي فوري وتسوية رسمية في نفس اليوم',
            'تصوير فوتوغرافي بدقة 4K وتسويق لكبار العملاء',
            'إنهاء كافة إجراءات نقل الملكية والمعاملات الرسمية',
          ],
          actionText: 'طلب تقييم فوري لسيارتك',
        },
        {
          id: 'rent',
          title: 'تأجير السيارات الفاخرة والخارقة',
          badge: 'أسطول VIP الخاص',
          tagline: 'تجربة قيادة استثنائية تناسب أسلوب حياتك.',
          description:
            'قد أشهر السيارات الرياضية الخارقة وسيارات الدفع الرباعي وسيارات كبار الشخصيات مع خدمة السائق للمناسبات الراقية ورحلات العمل.',
          perks: [
            'عقود تأجير يومية وأسبوعية وشهرية متميزة ومرنة',
            'تسليم فوري في المطار أو الفندق مع خدمة المساعد',
            'تغطية تأمينية شاملة وشاملة كلياً لأعلى درجات الأمان',
            'كونسيرج شخصي متاح على مدار الساعة طوال أيام الأسبوع',
          ],
          actionText: 'استفسر عن التأجير الفاخر',
        },
        {
          id: 'exchange',
          title: 'استبدال وترقية السيارات',
          badge: 'ترقية فورية سلسة',
          tagline: 'انتقل بكل سهولة إلى سيارتك الحلم القادمة.',
          description:
            'حوّل رصيد وقيمة سيارتك الحالية مباشرة كدفعة للحصول على سيارتك القادمة من مجموعتنا الحالية بأعلى تقييم وبدون أي هدر للوقت.',
          perks: [
            'توفير ملحوظ في التكلفة الإجمالية وفارق القيمة التقديرية',
            'تسليم المفاتيح واستلام سيارتك الجديدة في زيارة واحدة',
            'تقييم عادل يعتمد القيمة الحقيقية للمزايا والتعديلات الأصلية',
            'حلول تمويل مرنة ونقل ملكية فوري وميسر',
          ],
          actionText: 'قيّم سيارتك للاستبدال',
        },
      ],
    },

    inventory: {
      eyebrow: 'المجموعة المتوفرة في الصالة',
      title: 'تحف هندسية نادرة',
      highlight: 'جاهزة للتسليم الفوري',
      subtitle:
        'جميع السيارات معتمدة ومفحوصة بالكامل ومحفوظة في بيئة مكيفة ومحمية، ومتاحة للتسليم الفوري أو النقل المغلق لأي وجهة.',
      searchPlaceholder: 'ابحث بالاسم أو الموديل (مثل: بورشه، فيراري، G-Wagon)...',
      searchLabel: 'البحث في المعرض',
      sortByLabel: 'الترتيب حسب:',
      sortOptions: {
        featured: 'المميز في الصالة',
        priceAsc: 'السعر: من الأقل للأعلى',
        priceDesc: 'السعر: من الأعلى للأقل',
        yearDesc: 'سنة الصنع: الأحدث أولاً',
        yearAsc: 'سنة الصنع: الأقدم أولاً',
        mileageAsc: 'المسافة: الأقل أولاً',
      },
      resultsCount: 'عرض {count} من أصل {total} سيارة',
      clearFilters: 'إعادة ضبط البحث',
      quickViewBtn: 'المواصفات والألبوم',
      categories: {
        all: 'جميع السيارات',
        coupe: 'سيارات خارقة وكوبيه',
        suv: 'دفع رباعي فاخرة',
        sedan: 'سيدان تنفيذية',
        electric: 'كهربائية وهجينة',
      },
      specs: {
        output: 'القوة',
        accel: '0–100 كم/س',
        powertrain: 'المحرك',
        mileage: 'المسافة',
      },
      monthlyPrefix: 'تقديري:',
      inquireBtn: 'حجز / استفسار',
      empty: 'لا توجد سيارات مطابقة لخيارات البحث الحالية. تواصل مع الكونسيرج للاطلاع على المعروض الخاص.',
    },

    vehicleModal: {
      quickViewTitle: 'ملف المواصفات الفنية والألبوم الكامل',
      certifiedBadge: 'فحص الـ 180 نقطة الميكانيكي معتمد بنجاح',
      overviewTab: 'المواصفات والأداء الميكانيكي',
      galleryTab: 'ألبوم الصور عالي الدقة',
      financeTab: 'حاسبة التمويل التقديرية',
      specs: {
        engine: 'نوع المحرك / القوة المحركة',
        horsepower: 'القوة الحصانية',
        acceleration: 'التسارع من 0 إلى 100 كم/س',
        topSpeed: 'السرعة القصوى',
        transmission: 'ناقل الحركة',
        drivetrain: 'نظام الدفع',
        mileage: 'المسافة المقطوعة',
        vin: 'رقم الشاسيه (VIN)',
        exterior: 'اللون الخارجي',
        interior: 'الفرش الداخلي',
        fuel: 'نوع الوقود / الطاقة',
        warranty: 'الضمان المعتمد',
        inspectionAudit: 'فحص الـ 180 نقطة',
      },
      passedStatus: 'مفحوصة ومعتمدة بنسبة 100%',
      warrantyVal: 'ضمان شامل لمدة 12 شهراً قابل للتمديد',
      keyFeaturesTitle: 'المواصفات والتجهيزات الحصرية',
      inspectionTitle: 'سجل تدقيق الفحص الميكانيكي الشامل (180 نقطة)',
      inspectionPoints: [
        'فحص ضغط أسطوانات المحرك ومعايرة شواحن التوربو',
        'الفحص والمسح الإلكتروني الشامل لكمبيوتر المحرك والأنظمة',
        'اختبار استجابة وسلاسة ناقل الحركة ونظام الدفع الكلي',
        'قياس سماكة أقراص المكابح الكربونية وهيدروليك المكابح',
        'معايرة ليزرية للشاسيه وهندسة نظام التعليق النشط',
        'فحص سمك الطلاء الرقمي متعدد النقاط لضمان سلامة الهيكل',
      ],
      finance: {
        title: 'حاسبة خطط التمويل والأقساط الفاخرة',
        subtitle: 'خصص نسبة الدفعة الأولى ومدة التمويل للاطلاع على القسط الشهري التقديري فوراً.',
        vehiclePrice: 'سعر شراء السيارة',
        downPayment: 'الدفعة الأولى',
        term: 'مدة التمويل',
        months: 'شهر',
        estimatedPayment: 'القسط الشهري التقديري',
        disclaimer: 'حساب تقديري بمعدل فائدة 6.49% للعملاء المؤهلين. لا يشمل الرسوم الضريبية والتأمين.',
      },
      inquireNow: 'طلب معاينة خاصة وحجز',
      whatsappInquire: 'استفسار مباشر عبر واتساب',
      shareVehicle: 'مشاركة رابط السيارة',
      copied: 'تم نسخ الرابط بنجاح',
      close: 'إغلاق',
    },

    whyUs: {
      eyebrow: 'معايير كار إن المعتمدة',
      title: 'مرتكزة على مبادئ',
      highlight: 'الشفافية والثقة المطلقة',
      subtitle:
        'امتلاك أو بيع سيارة استثنائية يجب أن يكون تجربة ممتعة ومريحة وراقية، بعيداً عن أسلوب معارض السيارات التقليدية.',
      inspectionBanner: {
        title: 'كل سيارة مفحوصة ومعتمدة بأيدي كبار المهندسين',
        desc:
          'نمنحك ملف فحص شامل ومعتمد من 180 نقطة يتضمن قراءات سماكة الطلاء الإلكترونية، وتشخيص كمبيوتر المحرك، وسجل الصيانة الشامل وتاريخ السيارة الكامل.',
        btn: 'طلب ملف الفحص الكامل',
      },
      pillars: [
        {
          id: 'pillar-01',
          title: 'فحص شامل من 180 نقطة',
          description:
            'تخضع كل سيارة لفحص دقيق يشمل المحرك، وأنظمة الدفع، والإلكترونيات، والشاسيه، والسلامة بواسطة مهندسين معتمدين.',
          metric: 'معتمدة 100%',
        },
        {
          id: 'pillar-02',
          title: 'تاريخ موثق بدون رسوم خفية',
          description:
            'تقارير تاريخ كاملة وشفافة، وتأكيد تاريخ الصيانة الدورية، وأسعار واضحة ومباشرة بدون أي تكاليف مستترة.',
          metric: 'ضمان التوثيق الكامل',
        },
        {
          id: 'pillar-03',
          title: 'نقل مغلق فاخر VIP',
          description:
            'شحن ونقل آمن من الباب إلى الباب عبر شاحنات مغلقة ومكيفة بنظام هيدروليكي وتتبع عبر الأقمار الاصطناعية وتأمين شامل.',
          metric: 'من الباب إلى الباب',
        },
        {
          id: 'pillar-04',
          title: 'كونسيرج وحلول مالية مخصصة',
          description:
            'مستشارون متخصصون لمساعدتك في إتمام الصفقات بمنتهى الخصوصية، وتوفير حلول تمويل وتأجير فاخرة وترقية مرنة.',
          metric: 'عضوية وخدمة VIP',
        },
      ],
    },

    management: {
      eyebrow: 'القيادة التنفيذية وحوكمة الصالة',
      title: 'إدارة الصالة',
      highlight: 'والعمليات التنفيذية',
      subtitle:
        'بإشراف نخبة من كبار خبراء قطاع السيارات الفارهة والاستحواذ الملتزمين بأعلى درجات السرية والاحترافية والشفافية التامة.',
      team: [
        {
          id: 'lead-1',
          name: 'م. تامر سراج الدين',
          role: 'المدير العام والمؤسس',
          bio: 'أكثر من 22 عاماً في قيادة تجارة السيارات الألمانية الفارهة والاستحواذات المعتمدة في السوق المصري.',
          credential: 'شهادة الإدارة التنفيذية لقطاع السيارات الفاخرة',
        },
        {
          id: 'lead-2',
          name: 'أ. شريف البدراوي',
          role: 'رئيس قسم الاستحواذ وفحص الفابريكا المعتمد',
          bio: 'خبير متخصص في معايرة سماكة الطلاء الإلكترونية، ومطابقة ملفات المرور، وتقييم كسر الزيرو.',
          credential: 'خبير الاعتماد والتقييم الفني الأول',
        },
        {
          id: 'lead-3',
          name: 'أ. كريم الجوهري',
          role: 'مدير علاقات كبار العملاء والتمويل البنكي',
          bio: 'يشرف على تسهيلات التمويل مع كبرى البنوك (CIB، Contact)، وعمليات النقل الهيدروليكي المغلق لباب الكومباوند.',
          credential: 'إدارة الائتمان وخدمات VIP الخاصة',
        },
      ],
      portalBadge: 'عمليات الصالة',
      portalTitle: 'بوابة إدارة الصالة والعمليات المعتمدة',
      portalDesc:
        'المدخل الإداري الآمن لإدارة بيانات المخزون، واعتماد تقييمات الشراء المباشرة، وتنسيق مواعيد الكونسيرج.',
      portalBtn: 'دخول بوابة الإدارة',
      modal: {
        title: 'بوابة إدارة CAR IN',
        subtitle: 'تسجيل دخول موظفي الصالة والإدارة التنفيذية المعتمدة.',
        roleLabel: 'الصفة الإدارية',
        roles: {
          gm: 'الإدارة العامة / المكتب التنفيذي',
          sales: 'مدير المبيعات والاستحواذ',
          inventory: 'مدير المخزون والأسطول',
        },
        pinLabel: 'رمز الدخول الإداري / PIN',
        pinPlaceholder: 'أدخل الرمز المكون من 6 أرقام (تجريبي: 123456)',
        submitBtn: 'التحقق وتسجيل الدخول',
        successMsg: 'تم التحقق من الجلسة الإدارية بنجاح. أهلاً بك في نظام إدارة CAR IN.',
        closeBtn: 'إغلاق البوابة',
      },
    },

    testimonials: {
      eyebrow: 'آراء وتجارب العملاء المعتمدة',
      title: 'ثقة راسخة من قِبل',
      highlight: 'الرواد وهواة جمع السيارات',
      subtitle:
        'اطلع على تجارب عملاء وثقوا في كار إن لاقتناء سياراتهم النادرة وإتمام صفقات البيع والاستبدال الفاخرة.',
    },

    cta: {
      badge: 'كونسيرج السيارات الخاص',
      title: 'هل أنت جاهز لتجربة',
      highlight: 'قيادة تفوق التوقعات؟',
      desc:
        'سواء كنت ترغب في إضافة سيارة مميزة لمجموعتك، أو تبحث عن سيارة رياضية يومية، أو تود حجز تقييم لسيارتك الحالية، خبراؤنا في خدمتك.',
      scheduleBtn: 'حجز استشارة خاصة في الصالة',
      whatsappBtn: 'تواصل مباشر عبر واتساب',
    },

    modal: {
      badge: 'الكونسيرج المباشر VIP',
      inquirePrefix: 'استفسار عن:',
      generalTitle: 'استشارة خاصة للسيارات الفاخرة',
      generalSubtitle: 'تواصل مباشرة مع مستشاري المبيعات، والتقييم، والتأجير المعتمدين لدينا.',
      typeLabel: 'نوع الاستفسار',
      types: {
        purchase: 'شراء وحجز سيارة',
        tradein: 'تقييم بيع أو استبدال سيارة',
        rental: 'استفسار عن تأجير سيارة فاخرة',
        testdrive: 'حجز تجربة قيادة خاصة',
      },
      fullNameLabel: 'الاسم بالكامل *',
      fullNamePlaceholder: 'مثال: م. طارق الشربيني',
      phoneLabel: 'رقم الهاتف / الجوال *',
      phonePlaceholder: 'مثال: 01020008899 أو +20 10 2000 8899',
      emailLabel: 'البريد الإلكتروني *',
      emailPlaceholder: 'مثال: tarek@domain.com',
      channelLabel: 'وسيلة التواصل المفضلة لديك',
      channels: {
        whatsapp: 'واتساب',
        phone: 'اتصال هاتفي',
        email: 'البريد الإلكتروني',
      },
      messageLabel: 'ملاحظات إضافية أو تفاصيل سيارتك الحالية للاستبدال (اختياري)',
      messagePlaceholder: 'اكتب لنا عن تفضيلاتك في التمويل، أو تفاصيل ومواصفات سيارتك الحالية...',
      submitBtn: 'إرسال طلب الاستفسار',
      whatsappBtn: 'واتساب',
      successTitle: 'تم استلام طلبك بنجاح',
      successGreeting: 'شكراً لك',
      successMessage:
        'سيتواصل معك أحد مديري الكونسيرج المتخصصين في كار إن عبر وسيلة التواصل المحددة خلال وقت وجيز.',
      continueWhatsapp: 'المتابعة المباشرة عبر واتساب',
      doneBtn: 'تم',
    },

    footer: {
      copyright: 'جميع الحقوق محفوظة. بنية برمجية نقية جاهزة للتوسع متعدد الصفحات.',
      backToTop: 'العودة للأعلى',
      sections: {
        services: 'الخدمات',
        showroom: 'صالة العرض',
        clientCare: 'رعاية العملاء',
      },
    },
  },
};

export default translations;
