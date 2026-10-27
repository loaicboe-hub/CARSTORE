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
      empty: 'No vehicles found in this category currently. Contact our concierge for off-market access.',
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
          name: 'Marcus Sterling',
          role: 'Managing Director & CEO',
          bio: 'Over 20 years leading high-end European dealership groups and bespoke international exotic acquisitions.',
          credential: 'Master Automotive Executive Certified',
        },
        {
          id: 'lead-2',
          name: 'Victoria Vance',
          role: 'Head of Exotic Acquisitions & Appraisal',
          bio: 'Specialist in private collection liquidation, live auction underwriting, and high-yield consignment.',
          credential: 'Chief Valuation Director',
        },
        {
          id: 'lead-3',
          name: 'Tariq Al-Mansoor',
          role: 'Director of VIP Concierge & Global Fleet',
          bio: 'Oversees enclosed nationwide transport, corporate fleet leasing, and personalized client deliveries.',
          credential: 'VIP Private Client Services',
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
      fullNamePlaceholder: 'e.g. Alexander Vance',
      phoneLabel: 'Phone / Mobile *',
      phonePlaceholder: 'e.g. +1 (555) 019-2834',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'e.g. vance@estate.com',
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
        'نخبة منتقاة من أرقى السيارات الفاخرة وعالية الأداء والتنفيذية في العالم. تجربة لا تُضاهى في الشراء، والبيع، والتأجير، والترقية بأعلى معايير الاحترافية.',
      hours: 'السبت – الخميس: 9:00 ص – 7:30 م | الجمعة: بموعد مسبق',
      city: 'الرياض، المملكة العربية السعودية',
      address: 'طريق الملك فهد، حي الصحافة، برج السيارات الفاخرة',
    },

    stats: [
      { value: '+950', label: 'سيارة تم تسليمها', description: 'لنخبة العملاء وعشاق التميز' },
      { value: '180 نقطة', label: 'فحص فني شامل', description: 'شهادة جودة ميكانيكية وهيكلية معتمدة' },
      { value: '99.4%', label: 'نسبة رضا العملاء', description: 'تجربة كونسيرج حصرية واستثنائية' },
      { value: '+15 عاماً', label: 'ريادة وخبرة عريقة', description: 'التميز والريادة في قطاع السيارات الفارهة' },
    ],

    nav: {
      buy: 'شراء',
      sell: 'بيع',
      exchange: 'استبدال',
      rent: 'تأجير',
      management: 'الإدارة',
      contact: 'اتصل بنا',
      exploreShowroom: 'المعرض',
      concierge: 'الكونسيرج',
    },

    hero: {
      badge: 'الريادة في عالم السيارات الفاخرة والأداء الفائق',
      titleP1: 'قمة التميز في',
      titleP2: 'عالم السيارات الفارهة',
      exploreBtn: 'استكشف المعرض الحالي',
      appraisalBtn: 'طلب تقييم مجاني فوري',
      liveSpecOutput: 'محرك V8 توين تيربو',
      liveSpecAccel: '0–100 كم/س',
      liveSpecSpeed: 'السرعة القصوى',
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
      empty: 'لا توجد سيارات مطابقة في هذا التصنيف حالياً. تواصل مع الكونسيرج للاطلاع على المعروض الخاص.',
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
          name: 'ماركوس ستيرلينغ',
          role: 'المدير العام والرئيس التنفيذي',
          bio: 'أكثر من 20 عاماً في قيادة مجموعات وكالات السيارات الأوروبية الفاخرة والاستحواذات الدولية.',
          credential: 'شهادة الإدارة التنفيذية المعتمدة للسيارات',
        },
        {
          id: 'lead-2',
          name: 'فيكتوريا فانس',
          role: 'رئيس قسم الاستحواذ والتقييم',
          bio: 'خبيرة متخصصة في تصفية المجموعات الخاصة، وتسعير المزادات الحية، والعرض الحصري.',
          credential: 'مدير التقييم والاعتماد الفني الأول',
        },
        {
          id: 'lead-3',
          name: 'طارق المنصور',
          role: 'مدير علاقات كبار العملاء والأسطول',
          bio: 'يشرف على عمليات النقل المغلق الفاخر، وعقود تأجير الأساطيل، والتسليم الخاص لكبار الشخصيات.',
          credential: 'خدمات كبار العملاء الخاصة VIP',
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
      fullNamePlaceholder: 'مثال: فيصل المحمد',
      phoneLabel: 'رقم الهاتف / الجوال *',
      phonePlaceholder: 'مثال: +966 50 123 4567',
      emailLabel: 'البريد الإلكتروني *',
      emailPlaceholder: 'مثال: faisal@domain.com',
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
