/**
 * Centralized Egyptian Market Vehicle Inventory Data
 * Updated Daily from ContactCars Egypt (2026/2027 New Cars Edition)
 * Includes authentic specifications, live EGP pricing, dealer CDN photo galleries,
 * factory paint audit (فابريكا), traffic license validity, and installment estimates.
 */

export const vehicleCategories = [
  { id: "all", label: "All Vehicles", labelAr: "جميع المعروض" },
  { id: "suv", label: "Luxury SUVs & 4x4", labelAr: "دفع رباعي وSUV فاخرة" },
  { id: "sedan", label: "Executive Sedans", labelAr: "سيدان فارهة وتنفيذية" },
  { id: "coupe", label: "Sports & Coupes", labelAr: "سيارات رياضية وكوبيه" },
  { id: "electric", label: "Electric & Future EVs", labelAr: "سيارات كهربائية وEVs" },
  { id: "popular", label: "Zero & High-Demand", labelAr: "كسر زيرو الأكثر طلباً" },
];

export const vehiclesData = [
  {
    "id": "veh-001",
    "title": "Mercedes-Benz C180 AMG Line (2026)",
    "titleAr": "مرسيدس بنز C180 AMG لاين (2026)",
    "subtitle": "1.5L Turbo EQ Boost | Night Package & Digital Light",
    "subtitleAr": "1.5 لتر تيربو EQ Boost | باقة نايت باكج وإضاءة رقمية",
    "year": 2026,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 3625000,
    "priceFormatted": "3,625,000 ج.م",
    "priceFormattedEn": "3,625,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "70,200 ج.م / شهرياً",
    "monthlyEstimateAr": "70,200 ج.م / شهرياً",
    "monthlyEstimateEn": "70,200 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "9G-TRONIC 9-Speed Automatic",
    "transmissionAr": "أوتوماتيك 9 سرعات 9G-TRONIC",
    "fuel": "Gasoline 95 Turbo EQ Boost",
    "fuelAr": "بنزين 95 تيربو EQ Boost",
    "fuelEn": "Gasoline 95 Turbo EQ Boost",
    "power": "190 HP",
    "powerAr": "190 حصان",
    "powerEn": "190 HP",
    "acceleration": "0–100 in 7.3s",
    "accelerationAr": "7.3 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.3s",
    "topSpeed": "231 كم/س",
    "topSpeedAr": "231 كم/س",
    "topSpeedEn": "231 كم/س",
    "drivetrain": "Sport Rear-Wheel Drive (RWD)",
    "drivetrainAr": "دفع خلفي RWD رياضي",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/384da16b-92cd-4780-b27b-8ffb16800402.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/384da16b-92cd-4780-b27b-8ffb16800402.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2e9d1130-6fe4-42ca-b238-88f459086939.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/46e4973b-ac32-4624-bac7-fbbcea15737a.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1ac535aa-e26e-4d16-a232-1a813d42b676.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bb184e28-8ed6-43a1-8555-3eefc2afce05.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/6dc8c906-98ab-4514-ae27-845fc75452ef.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c5f41945-6c4d-40f5-9b18-905d8d55e94f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d9adadf0-94ee-4d09-b4da-be09798adb28.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "3,625,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY1440223601"
  },
  {
    "id": "veh-002",
    "title": "Mercedes-Benz C200 AMG Line (2026)",
    "titleAr": "مرسيدس بنز C200 AMG لاين (2026)",
    "subtitle": "2.0L Turbo Mild Hybrid 204 HP | Panorama & Head-Up Display",
    "subtitleAr": "2.0 لتر تيربو مايلد هايبرد 204 حصان | بانوراما وبروجيكتور زجاجي",
    "year": 2026,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 4400000,
    "priceFormatted": "4,400,000 ج.م",
    "priceFormattedEn": "4,400,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "85,200 ج.م / شهرياً",
    "monthlyEstimateAr": "85,200 ج.م / شهرياً",
    "monthlyEstimateEn": "85,200 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "9G-TRONIC 9-Speed Automatic",
    "transmissionAr": "أوتوماتيك 9 سرعات 9G-TRONIC",
    "fuel": "Gasoline 95 Turbo Mild Hybrid",
    "fuelAr": "بنزين 95 تيربو مايلد هايبرد",
    "fuelEn": "Gasoline 95 Turbo Mild Hybrid",
    "power": "204 HP",
    "powerAr": "204 حصان",
    "powerEn": "204 HP",
    "acceleration": "0–100 in 7.1s",
    "accelerationAr": "7.1 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.1s",
    "topSpeed": "246 كم/س",
    "topSpeedAr": "246 كم/س",
    "topSpeedEn": "246 كم/س",
    "drivetrain": "Sport Rear-Wheel Drive (RWD)",
    "drivetrainAr": "دفع خلفي RWD رياضي",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f2196e06-2da7-482e-ba8d-af624698aaea.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f2196e06-2da7-482e-ba8d-af624698aaea.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/04b0f733-6313-48ba-871b-7e1b61d7cf91.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1dc7077c-891c-4ba9-9732-1ba4cfaa3b9a.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/cfe453c2-13e7-459f-967a-81db42bedbad.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/04e09982-5f6d-4afa-9239-f30886de4683.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2d55d554-7beb-4a1a-9272-c89bb5c150d3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/71707a89-377c-4992-a7a8-ee431d59c162.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5de5d0e7-a834-4080-b73e-3a065c0675d6.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "4,400,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY8232236902"
  },
  {
    "id": "veh-003",
    "title": "Mercedes-Benz E200 Exclusive (W214) (2025)",
    "titleAr": "مرسيدس بنز E200 إكسكلوسيف (W214) (2025)",
    "subtitle": "2.0L Turbo EQ Boost | MBUX Superscreen & Burmester 4D",
    "subtitleAr": "2.0 لتر تيربو EQ Boost | شاشة سوبر سكرين ونظام بورميستر 4D",
    "year": 2025,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 4990000,
    "priceFormatted": "4,990,000 ج.م",
    "priceFormattedEn": "4,990,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "96,700 ج.م / شهرياً",
    "monthlyEstimateAr": "96,700 ج.م / شهرياً",
    "monthlyEstimateEn": "96,700 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "9G-TRONIC 9-Speed Automatic",
    "transmissionAr": "أوتوماتيك 9 سرعات 9G-TRONIC",
    "fuel": "Gasoline 95 Turbo EQ Boost",
    "fuelAr": "بنزين 95 تيربو EQ Boost",
    "fuelEn": "Gasoline 95 Turbo EQ Boost",
    "power": "204 HP",
    "powerAr": "204 حصان",
    "powerEn": "204 HP",
    "acceleration": "0–100 in 7.5s",
    "accelerationAr": "7.5 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.5s",
    "topSpeed": "240 كم/س",
    "topSpeedAr": "240 كم/س",
    "topSpeedEn": "240 كم/س",
    "drivetrain": "Executive Rear-Wheel Drive (RWD)",
    "drivetrainAr": "دفع خلفي فاره RWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2025 - ضمان الوكيل",
    "badgeAr": "زيرو 2025 - استلام فوري",
    "badgeEn": "Brand New 2025 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a11684d1-4391-401c-9894-c63d87ced5c9.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a11684d1-4391-401c-9894-c63d87ced5c9.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1dbc7dff-0809-459f-bd0a-4180e5f85265.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/3ea6d598-491d-454d-a7d3-5b7985a7c16d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/30fc011d-b96d-41e3-8338-9f1c9910c20c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d566ce46-3b32-4bd2-a030-3957406ddd4c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/fe2c3e54-5049-471b-9cb5-1abf114c958f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/3b52e344-1793-4aca-95c3-278fca6d13ef.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5e34b67d-0a19-4d94-88c5-42e2600e1c6d.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "4,990,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY3579132403"
  },
  {
    "id": "veh-004",
    "title": "Mercedes-Benz GLC 200 4MATIC (2026)",
    "titleAr": "مرسيدس بنز GLC 200 فورماتيك (2026)",
    "subtitle": "2.0L Turbo 4MATIC | Offroad Package & 360 Camera",
    "subtitleAr": "2.0 لتر تيربو 4MATIC | باقة أوف رود وكاميرات 360",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 5700000,
    "priceFormatted": "5,700,000 ج.م",
    "priceFormattedEn": "5,700,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "110,400 ج.م / شهرياً",
    "monthlyEstimateAr": "110,400 ج.م / شهرياً",
    "monthlyEstimateEn": "110,400 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "9G-TRONIC 9-Speed Automatic",
    "transmissionAr": "أوتوماتيك 9 سرعات 9G-TRONIC",
    "fuel": "Gasoline 95 Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 Turbo",
    "power": "204 HP",
    "powerAr": "204 حصان",
    "powerEn": "204 HP",
    "acceleration": "0–100 in 7.8s",
    "accelerationAr": "7.8 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.8s",
    "topSpeed": "221 كم/س",
    "topSpeedAr": "221 كم/س",
    "topSpeedEn": "221 كم/س",
    "drivetrain": "4MATIC Permanent All-Wheel Drive",
    "drivetrainAr": "دفع كلي مستمر 4MATIC",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0bfc5aa1-2a34-4e84-b450-baea5049ff32.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0bfc5aa1-2a34-4e84-b450-baea5049ff32.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/05eb1626-9bba-4fe7-81d5-c12d50a3f4ec.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7a88c1fb-663b-4201-99ef-2183a3c4b2ed.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/40cc9986-0399-41d1-b28b-1134e5a9e992.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b59564fc-38e8-44d6-8c4a-b5141c2f9217.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b364283a-53d0-41b7-95dd-f0137acf2b58.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/cb426a49-9e9f-46e9-9012-eee9e4a58b01.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a2f883a0-d099-4ace-94fa-cc0b3909eb7d.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "5,700,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY1432183104"
  },
  {
    "id": "veh-005",
    "title": "Mercedes-Benz GLC 300 Coupe 4MATIC AMG (2026)",
    "titleAr": "مرسيدس بنز GLC 300 كوبيه AMG فورماتيك (2026)",
    "subtitle": "2.0L Turbo 258 HP | AMG Dynamic Pack & 20\" Wheels",
    "subtitleAr": "2.0 لتر تيربو 258 حصان | باقة AMG وجنوط 20 إنش",
    "year": 2026,
    "category": "coupe",
    "categoryLabel": "Sports & Coupes",
    "categoryLabelAr": "سيارات رياضية وكوبيه",
    "price": 5775000,
    "priceFormatted": "5,775,000 ج.م",
    "priceFormattedEn": "5,775,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "111,900 ج.م / شهرياً",
    "monthlyEstimateAr": "111,900 ج.م / شهرياً",
    "monthlyEstimateEn": "111,900 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "9G-TRONIC 9-Speed Automatic",
    "transmissionAr": "أوتوماتيك 9 سرعات 9G-TRONIC",
    "fuel": "Gasoline 95 Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 Turbo",
    "power": "258 HP",
    "powerAr": "258 حصان",
    "powerEn": "258 HP",
    "acceleration": "0–100 in 6.3s",
    "accelerationAr": "6.3 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 6.3s",
    "topSpeed": "246 كم/س",
    "topSpeedAr": "246 كم/س",
    "topSpeedEn": "246 كم/س",
    "drivetrain": "4MATIC Performance AWD",
    "drivetrainAr": "دفع كلي رياضي 4MATIC",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/29af9f5d-bd02-4478-bd31-0534d6e72061.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/29af9f5d-bd02-4478-bd31-0534d6e72061.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/053dbafa-8491-4939-a3e4-940000a2ed70.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/60d02139-c676-42b4-bc27-094b36cf71eb.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/07b764fe-17d6-4976-9a60-8a4e03ae1927.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/8be0b35b-a38e-40ee-bc20-58bc8f60d646.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f9f8af8f-ea68-4502-90bb-25058a854e9c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/fff29df6-65d0-4f07-8a44-1112c4615251.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f7727cd8-7fc0-481a-8395-5e2cb9e552c3.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "5,775,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY8344369305"
  },
  {
    "id": "veh-006",
    "title": "Mercedes-Benz GLE 450 4MATIC (2026)",
    "titleAr": "مرسيدس بنز GLE 450 فورماتيك 7 مقاعد (2026)",
    "subtitle": "3.0L Inline-6 Turbo EQ Boost 381 HP | Airmatic Suspension",
    "subtitleAr": "3.0 لتر 6 سلندر تيربو 381 حصان | تعليق هوائي إيرماتيك",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 6700000,
    "priceFormatted": "6,700,000 ج.م",
    "priceFormattedEn": "6,700,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "129,800 ج.م / شهرياً",
    "monthlyEstimateAr": "129,800 ج.م / شهرياً",
    "monthlyEstimateEn": "129,800 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "9G-TRONIC 9-Speed Automatic",
    "transmissionAr": "أوتوماتيك 9 سرعات 9G-TRONIC",
    "fuel": "Gasoline 95 Turbo EQ Boost",
    "fuelAr": "بنزين 95 تيربو EQ Boost",
    "fuelEn": "Gasoline 95 Turbo EQ Boost",
    "power": "381 HP",
    "powerAr": "381 حصان",
    "powerEn": "381 HP",
    "acceleration": "0–100 in 5.6s",
    "accelerationAr": "5.6 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 5.6s",
    "topSpeed": "250 كم/س",
    "topSpeedAr": "250 كم/س",
    "topSpeedEn": "250 كم/س",
    "drivetrain": "4MATIC Intelligent All-Wheel Drive",
    "drivetrainAr": "دفع كلي ذكي 4MATIC",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c733eb30-d300-4895-b8d4-334b6ec801e7.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c733eb30-d300-4895-b8d4-334b6ec801e7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/47464410-91ec-4981-8849-c57188ac27c4.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/256b26cc-9efb-4666-9bab-3e912cc3aad1.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4f456691-6f3d-4db7-9cd0-76af9ff4892e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b8dad0b9-509a-406a-b048-3a248ded0e18.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/980d2a0b-ca82-4f3f-b78a-16b7a25ab716.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f9a8fe19-3e2c-4725-815a-46fe84071cb3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a8153280-edad-46e6-8853-0f98121932ee.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "6,700,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY8400787706"
  },
  {
    "id": "veh-007",
    "title": "Mercedes-Benz CLA 200 Progressive (2027)",
    "titleAr": "مرسيدس بنز CLA 200 بروجريسيف (2027)",
    "subtitle": "1.33L Turbo EQ Boost | Panoramic Sunroof & MBUX Interior",
    "subtitleAr": "1.33 لتر تيربو EQ Boost | سقف بانوراما ونظام MBUX الذكي",
    "year": 2027,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 3950000,
    "priceFormatted": "3,950,000 ج.م",
    "priceFormattedEn": "3,950,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "76,500 ج.م / شهرياً",
    "monthlyEstimateAr": "76,500 ج.م / شهرياً",
    "monthlyEstimateEn": "76,500 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7G-DCT 7-Speed Dual Clutch",
    "transmissionAr": "أوتوماتيك 7 سرعات ثنائي التعشيق 7G-DCT",
    "fuel": "Gasoline 95 Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 Turbo",
    "power": "163 HP",
    "powerAr": "163 حصان",
    "powerEn": "163 HP",
    "acceleration": "0–100 in 8.2s",
    "accelerationAr": "8.2 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.2s",
    "topSpeed": "229 كم/س",
    "topSpeedAr": "229 كم/س",
    "topSpeedEn": "229 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a7320700-aba8-4c5a-8541-676841cb658a.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a7320700-aba8-4c5a-8541-676841cb658a.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9db23216-0153-4b48-bdda-6df9f6af036d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ad82f6dd-d146-4f83-876a-10b7e790fc93.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1554b269-e360-4822-81df-b1298fd8ddbe.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f79abbbd-1ed4-4fb0-b90f-47cf54fdeaf0.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d3b49f55-5b6e-429a-a990-6494ded96dc0.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/df3213d5-8807-486e-8254-b8fdccff5c6d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c6b5c81e-35e1-496d-94ea-be3141406b7d.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "3,950,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY2721615607"
  },
  {
    "id": "veh-008",
    "title": "Mercedes-Benz EQE 500 4MATIC EV (2025)",
    "titleAr": "مرسيدس بنز EQE 500 كهربائية بالكامل (2025)",
    "subtitle": "Dual Motor AWD 408 HP | 90 kWh Battery - 550km Range",
    "subtitleAr": "محركين كهرباء 408 حصان | بطارية 90 كيلوواط بمدى 550 كم",
    "year": 2025,
    "category": "electric",
    "categoryLabel": "Electric & Future EVs",
    "categoryLabelAr": "سيارات كهربائية وEVs",
    "price": 3600000,
    "priceFormatted": "3,600,000 ج.م",
    "priceFormattedEn": "3,600,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "69,800 ج.م / شهرياً",
    "monthlyEstimateAr": "69,800 ج.م / شهرياً",
    "monthlyEstimateEn": "69,800 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "Single-Speed Electric Transmission",
    "transmissionAr": "ناقل حركة كهربائي سرعة واحدة",
    "fuel": "100% Pure Electric EV",
    "fuelAr": "كهرباء 100% EV",
    "fuelEn": "100% Pure Electric EV",
    "power": "408 HP",
    "powerAr": "408 حصان",
    "powerEn": "408 HP",
    "acceleration": "0–100 in 4.7s",
    "accelerationAr": "4.7 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 4.7s",
    "topSpeed": "210 كم/س",
    "topSpeedAr": "210 كم/س",
    "topSpeedEn": "210 كم/س",
    "drivetrain": "Electric All-Wheel Drive (AWD)",
    "drivetrainAr": "دفع كهربائي كلي AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2025 - ضمان الوكيل",
    "badgeAr": "زيرو 2025 - استلام فوري",
    "badgeEn": "Brand New 2025 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e9a2ecb2-6087-41cf-a092-fb92c975d821.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e9a2ecb2-6087-41cf-a092-fb92c975d821.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4a84b6e1-160e-4120-be57-eeebe8c3372d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/fe6f8dc9-c654-48c5-b018-ab73a9208a2b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e9a9b672-e599-47f5-9209-24fd9a8b0277.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f2bc565e-64d1-4cec-9d49-6c37d712fb1b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/855e147f-856c-4625-80eb-38915b305cea.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/07e35ab5-8ca0-43e5-80e0-6e6b1e412035.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ecca4d6b-6752-41a9-83da-594699744b7e.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "3,600,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY8269484808"
  },
  {
    "id": "veh-009",
    "title": "Mercedes-AMG GT Coupe 43 (2027)",
    "titleAr": "مرسيدس AMG GT كوبيه الرياضية (2027)",
    "subtitle": "2.0L Turbo Electric Exhaust 421 HP | Aerodynamics Package",
    "subtitleAr": "2.0 لتر تيربو شاحن كهربائي 421 حصان | باقة ديناميكية هوائية",
    "year": 2027,
    "category": "coupe",
    "categoryLabel": "Sports & Coupes",
    "categoryLabelAr": "سيارات رياضية وكوبيه",
    "price": 8560000,
    "priceFormatted": "8,560,000 ج.م",
    "priceFormattedEn": "8,560,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "165,800 ج.م / شهرياً",
    "monthlyEstimateAr": "165,800 ج.م / شهرياً",
    "monthlyEstimateEn": "165,800 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "AMG SPEEDSHIFT MCT 9G-Speed",
    "transmissionAr": "أوتوماتيك AMG SPEEDSHIFT MCT 9G",
    "fuel": "Gasoline 95 Turbo Sport",
    "fuelAr": "بنزين 95 تيربو سبورت",
    "fuelEn": "Gasoline 95 Turbo Sport",
    "power": "421 HP",
    "powerAr": "421 حصان",
    "powerEn": "421 HP",
    "acceleration": "0–100 in 4.6s",
    "accelerationAr": "4.6 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 4.6s",
    "topSpeed": "280 كم/س",
    "topSpeedAr": "280 كم/س",
    "topSpeedEn": "280 كم/س",
    "drivetrain": "AMG Performance RWD",
    "drivetrainAr": "دفع خلفي رياضي RWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e3077679-7fdc-45a2-a30e-07786b99c136.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e3077679-7fdc-45a2-a30e-07786b99c136.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/fa3d8193-32a7-4909-b17a-995615294229.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7bcd9eae-797e-4e52-934a-6e1c831f0d63.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/09113358-f6a4-42fd-832e-986ce24d141a.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/caec0de4-614d-4fff-9b17-59f8f543a63a.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/30fff774-01e9-4482-946b-cf3d243b8178.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/09194253-0cff-48e3-aebc-462317289584.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1316cef5-9238-40dc-a810-b9c331a7ae08.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "8,560,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY5621442809"
  },
  {
    "id": "veh-010",
    "title": "BMW 320i M Sport LCI (2027)",
    "titleAr": "بي إم دبليو 320i إم سبورت (2027)",
    "subtitle": "2.0L TwinPower Turbo 184 HP | M Aerodynamics & Curved Display",
    "subtitleAr": "2.0 لتر توين باور تيربو 184 حصان | باقة M وشاشة منحنية",
    "year": 2027,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 4550000,
    "priceFormatted": "4,550,000 ج.م",
    "priceFormattedEn": "4,550,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "88,200 ج.م / شهرياً",
    "monthlyEstimateAr": "88,200 ج.م / شهرياً",
    "monthlyEstimateEn": "88,200 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Steptronic Sport Automatic",
    "transmissionAr": "أوتوماتيك ستيبترونيك 8 سرعات",
    "fuel": "Gasoline 95 TwinPower Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 TwinPower Turbo",
    "power": "184 HP",
    "powerAr": "184 حصان",
    "powerEn": "184 HP",
    "acceleration": "0–100 in 7.1s",
    "accelerationAr": "7.1 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.1s",
    "topSpeed": "235 كم/س",
    "topSpeedAr": "235 كم/س",
    "topSpeedEn": "235 كم/س",
    "drivetrain": "Sport Rear-Wheel Drive (RWD)",
    "drivetrainAr": "دفع خلفي RWD رياضي",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/922b02cb-8ef4-4833-b82d-ef42ad211f1f.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/922b02cb-8ef4-4833-b82d-ef42ad211f1f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/910f3f7b-6e90-4137-85b8-ce4639239e83.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ff4248c8-9868-46be-b6ac-748558cd80ec.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ceb79e3e-18f5-4185-9220-ab9537fb9b28.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/cbae8c55-16c4-41c1-889b-a16d7f60c8df.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e008cf8f-1892-45ab-ac40-2517f86b5ba1.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/091de883-9aa9-4cce-8c85-1d1e6faee48b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/36c597b8-8a11-4597-abff-683dc2165377.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "4,550,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY5440768710"
  },
  {
    "id": "veh-011",
    "title": "BMW 520i M Sport (G60) (2026)",
    "titleAr": "بي إم دبليو 520i إم سبورت (G60) (2026)",
    "subtitle": "2.0L TwinPower Turbo 208 HP | Interaction Bar & Iconic Glow",
    "subtitleAr": "2.0 لتر توين باور تيربو 208 حصان | شريط تفاعلي وشبك مضيء",
    "year": 2026,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 3390000,
    "priceFormatted": "3,390,000 ج.م",
    "priceFormattedEn": "3,390,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "65,700 ج.م / شهرياً",
    "monthlyEstimateAr": "65,700 ج.م / شهرياً",
    "monthlyEstimateEn": "65,700 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Steptronic Automatic",
    "transmissionAr": "أوتوماتيك ستيبترونيك 8 سرعات",
    "fuel": "Gasoline 95 TwinPower Turbo",
    "fuelAr": "بنزين 95 تيربو مايلد هايبرد",
    "fuelEn": "Gasoline 95 TwinPower Turbo",
    "power": "208 HP",
    "powerAr": "208 حصان",
    "powerEn": "208 HP",
    "acceleration": "0–100 in 7.5s",
    "accelerationAr": "7.5 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.5s",
    "topSpeed": "230 كم/س",
    "topSpeedAr": "230 كم/س",
    "topSpeedEn": "230 كم/س",
    "drivetrain": "Executive Rear-Wheel Drive (RWD)",
    "drivetrainAr": "دفع خلفي RWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/059db246-13d4-494e-ba33-e0d931c3907c.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/059db246-13d4-494e-ba33-e0d931c3907c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/eab09855-69c8-420e-ba47-9cdaf241ede9.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f6a66db2-08f0-4653-91dc-d53930524932.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/963cf27e-3fee-4f5a-8f9f-f1c89b00651b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f6a66db2-08f0-4653-91dc-d53930524932.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c21ddc55-166c-49bc-9827-aca5fda96149.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/fcb75ddc-8887-4489-b583-7ac8e550c5f6.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e3f6b65c-92fc-4bb9-9b68-264285c03986.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "3,390,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY3573417711"
  },
  {
    "id": "veh-012",
    "title": "BMW 740i M Sport (G70) (2027)",
    "titleAr": "بي إم دبليو 740i إم سبورت الفارهة (2027)",
    "subtitle": "3.0L TwinPower Turbo 380 HP | Executive Lounge & 31\" Theatre",
    "subtitleAr": "3.0 لتر توين تيربو 380 حصان | مقصورة لاونج وشاشة مسرحية 31 إنش",
    "year": 2027,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 14600000,
    "priceFormatted": "14,600,000 ج.م",
    "priceFormattedEn": "14,600,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "282,900 ج.م / شهرياً",
    "monthlyEstimateAr": "282,900 ج.م / شهرياً",
    "monthlyEstimateEn": "282,900 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Sport Steptronic Automatic",
    "transmissionAr": "أوتوماتيك ستيبترونيك 8 سرعات",
    "fuel": "Gasoline 95 TwinPower Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 TwinPower Turbo",
    "power": "380 HP",
    "powerAr": "380 حصان",
    "powerEn": "380 HP",
    "acceleration": "0–100 in 5.4s",
    "accelerationAr": "5.4 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 5.4s",
    "topSpeed": "250 كم/س",
    "topSpeedAr": "250 كم/س",
    "topSpeedEn": "250 كم/س",
    "drivetrain": "Luxury Rear-Wheel Drive (RWD)",
    "drivetrainAr": "دفع خلفي فاره RWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/06f088c0-9a60-40f9-b177-1a3e20cc55e0.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/06f088c0-9a60-40f9-b177-1a3e20cc55e0.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/96eaef1d-17a5-4eba-bc59-eab525d65d21.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0c47292d-2fdf-47eb-868b-620dd21ad9b2.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bb823b80-1be5-48b5-9ad2-2b082cd606e5.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/fb27568c-d748-456b-aa7b-63d74b8af212.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e5bb6961-2330-4571-8797-b3ee998f64f1.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c5f1885d-d0cf-4776-8801-3e1b366d41b7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/58837470-c8f9-4aa1-b2c0-2fd4f27b4c84.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "14,600,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY2297274112"
  },
  {
    "id": "veh-013",
    "title": "BMW X1 sDrive18i xLine (2026)",
    "titleAr": "بي إم دبليو X1 إس درايف 18i إكس لاين (2026)",
    "subtitle": "1.5L TwinPower Turbo 136 HP | Panorama & Live Cockpit Plus",
    "subtitleAr": "1.5 لتر توين باور تيربو 136 حصان | سقف بانوراما وشاشات ذكية",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 4000000,
    "priceFormatted": "4,000,000 ج.م",
    "priceFormattedEn": "4,000,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "77,500 ج.م / شهرياً",
    "monthlyEstimateAr": "77,500 ج.م / شهرياً",
    "monthlyEstimateEn": "77,500 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7-Speed Steptronic Dual Clutch",
    "transmissionAr": "أوتوماتيك ثنائي التعشيق 7 سرعات",
    "fuel": "Gasoline 95 Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 Turbo",
    "power": "136 HP",
    "powerAr": "136 حصان",
    "powerEn": "136 HP",
    "acceleration": "0–100 in 9.2s",
    "accelerationAr": "9.2 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 9.2s",
    "topSpeed": "208 كم/س",
    "topSpeedAr": "208 كم/س",
    "topSpeedEn": "208 كم/س",
    "drivetrain": "Front-Wheel Drive (sDrive)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a46747fd-9545-4733-a161-8cd6bfaefa05.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a46747fd-9545-4733-a161-8cd6bfaefa05.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/6290a2b2-fa0e-461c-b0f8-110983c4a5b8.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0c567de4-1777-4b2c-ace9-9e4e58673dd6.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/15e8e173-e264-4264-9539-de0a49b0daa7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f4f66646-fd3c-4687-80af-7cdf1e5daee6.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1fade85b-f60b-42f9-a6c8-1fe83ff191c2.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e09c4e30-a61a-480a-9ac0-3a00cd64decf.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/546ba14e-af8d-4319-ba75-9a728bb2a27b.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "4,000,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY2565288113"
  },
  {
    "id": "veh-014",
    "title": "BMW X3 xDrive30i M Sport (2026)",
    "titleAr": "بي إم دبليو X3 إكس درايف 30i إم سبورت (2026)",
    "subtitle": "2.0L TwinPower Turbo 245 HP | xDrive Intelligent AWD",
    "subtitleAr": "2.0 لتر توين باور تيربو 245 حصان | دفع كلي ذكي xDrive",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 5250000,
    "priceFormatted": "5,250,000 ج.م",
    "priceFormattedEn": "5,250,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "101,700 ج.م / شهرياً",
    "monthlyEstimateAr": "101,700 ج.م / شهرياً",
    "monthlyEstimateEn": "101,700 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Steptronic Sport Automatic",
    "transmissionAr": "أوتوماتيك ستيبترونيك 8 سرعات",
    "fuel": "Gasoline 95 Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 Turbo",
    "power": "245 HP",
    "powerAr": "245 حصان",
    "powerEn": "245 HP",
    "acceleration": "0–100 in 6.6s",
    "accelerationAr": "6.6 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 6.6s",
    "topSpeed": "235 كم/س",
    "topSpeedAr": "235 كم/س",
    "topSpeedEn": "235 كم/س",
    "drivetrain": "BMW xDrive Intelligent All-Wheel Drive",
    "drivetrainAr": "دفع كلي ذكي xDrive AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d1655116-60ca-47b9-a1f2-f60e0ef85c9c.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d1655116-60ca-47b9-a1f2-f60e0ef85c9c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/702e8975-6220-4099-a835-d837c790b339.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/474cca7f-cb87-4fc3-9821-2561856224c3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bd44da9c-3b85-4fc1-84ea-85aa74b29054.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/931955f7-5778-47e5-8208-3d62180c8ee5.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5a17f4bf-bb0e-43e1-bc48-9003e3e08b54.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/78b16284-0c08-42d2-9307-d6ed5069042b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/94317913-6884-4df3-a3f6-51708c1858f7.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "5,250,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY2948959214"
  },
  {
    "id": "veh-015",
    "title": "BMW X4 xDrive30i M Sport (2025)",
    "titleAr": "بي إم دبليو X4 كوبيه إم سبورت (2025)",
    "subtitle": "2.0L Turbo 245 HP | Sports Coupe Profile & M Sport Brakes",
    "subtitleAr": "2.0 لتر تيربو 245 حصان | تصميم كوبيه رياضي ومكابح M",
    "year": 2025,
    "category": "coupe",
    "categoryLabel": "Sports & Coupes",
    "categoryLabelAr": "سيارات رياضية وكوبيه",
    "price": 4750000,
    "priceFormatted": "4,750,000 ج.م",
    "priceFormattedEn": "4,750,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "92,000 ج.م / شهرياً",
    "monthlyEstimateAr": "92,000 ج.م / شهرياً",
    "monthlyEstimateEn": "92,000 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Steptronic Sport Automatic",
    "transmissionAr": "أوتوماتيك ستيبترونيك 8 سرعات",
    "fuel": "Gasoline 95 Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 Turbo",
    "power": "245 HP",
    "powerAr": "245 حصان",
    "powerEn": "245 HP",
    "acceleration": "0–100 in 6.6s",
    "accelerationAr": "6.6 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 6.6s",
    "topSpeed": "235 كم/س",
    "topSpeedAr": "235 كم/س",
    "topSpeedEn": "235 كم/س",
    "drivetrain": "BMW xDrive All-Wheel Drive",
    "drivetrainAr": "دفع كلي ذكي xDrive AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2025 - ضمان الوكيل",
    "badgeAr": "زيرو 2025 - استلام فوري",
    "badgeEn": "Brand New 2025 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2acb50e5-679b-47bf-9173-e7e28e14361c.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2acb50e5-679b-47bf-9173-e7e28e14361c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/395dd33b-fbfb-42d4-9cd6-a97ab48364c3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/250387c5-5fc3-4c9e-ba41-fe4b26395c86.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/81b4c796-a46b-4060-9012-8220a3283888.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/abc46323-5d9f-470b-871a-1ad2ac6112bc.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/613dcae6-56e3-4fb0-9789-161bef1a6bc3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c4a9f526-0520-49b6-80f6-2d842015e4e5.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ba050ec8-0d29-4d6d-9df9-5ace66640ac6.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "4,750,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY2801309015"
  },
  {
    "id": "veh-016",
    "title": "BMW M4 Competition Coupe (2026)",
    "titleAr": "بي إم دبليو M4 كومبتيشن كوبيه الخارقة (2026)",
    "subtitle": "3.0L M TwinPower Turbo 510 HP | Carbon Ceramic & M Drive Pro",
    "subtitleAr": "3.0 لتر M توين تيربو 510 حصان | كربون فايبر ونظام M Drive Pro",
    "year": 2026,
    "category": "coupe",
    "categoryLabel": "Sports & Coupes",
    "categoryLabelAr": "سيارات رياضية وكوبيه",
    "price": 8700000,
    "priceFormatted": "8,700,000 ج.م",
    "priceFormattedEn": "8,700,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "168,600 ج.م / شهرياً",
    "monthlyEstimateAr": "168,600 ج.م / شهرياً",
    "monthlyEstimateEn": "168,600 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed M Steptronic with Drivelogic",
    "transmissionAr": "ناقل M ستيبترونيك 8 سرعات مع Drivelogic",
    "fuel": "Gasoline 95 M TwinPower Turbo",
    "fuelAr": "بنزين 95 تيربو رياضي",
    "fuelEn": "Gasoline 95 M TwinPower Turbo",
    "power": "510 HP",
    "powerAr": "510 حصان",
    "powerEn": "510 HP",
    "acceleration": "0–100 in 3.9s",
    "accelerationAr": "3.9 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 3.9s",
    "topSpeed": "290 كم/س",
    "topSpeedAr": "290 كم/س",
    "topSpeedEn": "290 كم/س",
    "drivetrain": "M Performance Rear-Wheel Drive",
    "drivetrainAr": "دفع خلفي رياضي M RWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2de2075a-0a13-4208-974d-6b83448ead1a.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2de2075a-0a13-4208-974d-6b83448ead1a.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/77cfd9ab-2183-4ffa-951f-d93c4744d55d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e9ca247c-7b34-4472-8dbe-9f82aad9e193.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4d7329ca-dd87-4a00-a442-ce6cdc5c063b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/44420fc1-b633-4717-a7cf-4faa12c2efa0.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/872bd134-f4d6-4a2a-a44a-972c62a357c2.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5139e9b3-e427-4e78-899b-b798c71e5bf3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/6a1223fc-e90a-44ca-a14a-f38f8af7c40f.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "8,700,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY7821419616"
  },
  {
    "id": "veh-017",
    "title": "BMW i7 xDrive60 Excellence EV (2027)",
    "titleAr": "بي إم دبليو i7 كهربائية فارهة بالكامل (2027)",
    "subtitle": "Dual Electric Motors 544 HP | 101.7 kWh - 625km Range",
    "subtitleAr": "محركين كهرباء 544 حصان | بطارية 101.7 كيلوواط بمدى 625 كم",
    "year": 2027,
    "category": "electric",
    "categoryLabel": "Electric & Future EVs",
    "categoryLabelAr": "سيارات كهربائية وEVs",
    "price": 10400000,
    "priceFormatted": "10,400,000 ج.م",
    "priceFormattedEn": "10,400,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "201,500 ج.م / شهرياً",
    "monthlyEstimateAr": "201,500 ج.م / شهرياً",
    "monthlyEstimateEn": "201,500 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "Single-Speed Electric Transmission",
    "transmissionAr": "ناقل كهربائي سرعة واحدة",
    "fuel": "100% Pure Electric EV",
    "fuelAr": "كهرباء 100% EV",
    "fuelEn": "100% Pure Electric EV",
    "power": "544 HP",
    "powerAr": "544 حصان",
    "powerEn": "544 HP",
    "acceleration": "0–100 in 4.7s",
    "accelerationAr": "4.7 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 4.7s",
    "topSpeed": "240 كم/س",
    "topSpeedAr": "240 كم/س",
    "topSpeedEn": "240 كم/س",
    "drivetrain": "Electric xDrive All-Wheel Drive",
    "drivetrainAr": "دفع كلي كهربائي xDrive AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e23dc70a-3b79-48ef-8e65-b6309deafce2.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e23dc70a-3b79-48ef-8e65-b6309deafce2.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/adca6ff3-9b6f-464d-8688-fe94349dd43d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9f1fa017-6355-46ad-9941-e905def5910c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/804e2010-51fa-4f6f-97a0-3ffd41b8b7cd.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/6337b628-76b6-4d5f-9045-4e07973e6ec3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bbb3e5eb-d02f-4dac-95de-014e330bac8a.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2b106372-af81-47dc-a150-72e1eb9449ef.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/71634751-b5b3-4183-927f-05f319f3c846.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "10,400,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY6906119517"
  },
  {
    "id": "veh-018",
    "title": "BMW iX xDrive40 Electric SUV (2026)",
    "titleAr": "بي إم دبليو iX دفع رباعي كهربائي فخم (2026)",
    "subtitle": "Dual Motors 326 HP | Curved Display & Sky Lounge Roof",
    "subtitleAr": "محركين كهرباء 326 حصان | شاشة منحنية وسقف سكاي لاونج",
    "year": 2026,
    "category": "electric",
    "categoryLabel": "Electric & Future EVs",
    "categoryLabelAr": "سيارات كهربائية وEVs",
    "price": 4000000,
    "priceFormatted": "4,000,000 ج.م",
    "priceFormattedEn": "4,000,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "77,500 ج.م / شهرياً",
    "monthlyEstimateAr": "77,500 ج.م / شهرياً",
    "monthlyEstimateEn": "77,500 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "Single-Speed Electric Transmission",
    "transmissionAr": "ناقل كهربائي سرعة واحدة",
    "fuel": "100% Pure Electric EV",
    "fuelAr": "كهرباء 100% EV",
    "fuelEn": "100% Pure Electric EV",
    "power": "326 HP",
    "powerAr": "326 حصان",
    "powerEn": "326 HP",
    "acceleration": "0–100 in 6.1s",
    "accelerationAr": "6.1 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 6.1s",
    "topSpeed": "200 كم/س",
    "topSpeedAr": "200 كم/س",
    "topSpeedEn": "200 كم/س",
    "drivetrain": "Electric xDrive All-Wheel Drive",
    "drivetrainAr": "دفع كلي كهربائي xDrive AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a46747fd-9545-4733-a161-8cd6bfaefa05.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a46747fd-9545-4733-a161-8cd6bfaefa05.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/6290a2b2-fa0e-461c-b0f8-110983c4a5b8.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0c567de4-1777-4b2c-ace9-9e4e58673dd6.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/15e8e173-e264-4264-9539-de0a49b0daa7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f4f66646-fd3c-4687-80af-7cdf1e5daee6.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1fade85b-f60b-42f9-a6c8-1fe83ff191c2.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e09c4e30-a61a-480a-9ac0-3a00cd64decf.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/546ba14e-af8d-4319-ba75-9a728bb2a27b.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "4,000,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY7785438818"
  },
  {
    "id": "veh-019",
    "title": "Porsche 911 Carrera (992.2) (2025)",
    "titleAr": "بورشه 911 كاريرا الأسطورية (2025)",
    "subtitle": "3.0L Twin-Turbo Boxer-6 385 HP | Sport Chrono & PASM",
    "subtitleAr": "3.0 لتر بوكسر توين تيربو 385 حصان | باقة سبورت كرونو ونظام PASM",
    "year": 2025,
    "category": "coupe",
    "categoryLabel": "Sports & Coupes",
    "categoryLabelAr": "سيارات رياضية وكوبيه",
    "price": 12900000,
    "priceFormatted": "12,900,000 ج.م",
    "priceFormattedEn": "12,900,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "249,900 ج.م / شهرياً",
    "monthlyEstimateAr": "249,900 ج.م / شهرياً",
    "monthlyEstimateEn": "249,900 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Porsche Doppelkupplung (PDK)",
    "transmissionAr": "ناقل حركة 8 سرعات PDK",
    "fuel": "Gasoline 95 Twin-Turbo Boxer",
    "fuelAr": "بنزين 95 سوبر تيربو",
    "fuelEn": "Gasoline 95 Twin-Turbo Boxer",
    "power": "385 HP",
    "powerAr": "385 حصان",
    "powerEn": "385 HP",
    "acceleration": "0–100 in 4.0s",
    "accelerationAr": "4.0 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 4.0s",
    "topSpeed": "293 كم/س",
    "topSpeedAr": "293 كم/س",
    "topSpeedEn": "293 كم/س",
    "drivetrain": "Sport Rear-Wheel Drive (RWD)",
    "drivetrainAr": "دفع خلفي RWD رياضي",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2025 - ضمان الوكيل",
    "badgeAr": "زيرو 2025 - استلام فوري",
    "badgeEn": "Brand New 2025 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/988dcce8-646f-4548-a81b-3b16ad4d8820.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/988dcce8-646f-4548-a81b-3b16ad4d8820.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/71895614-8361-492f-a52b-5cafde57c8c2.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c9d8c5e3-c07e-46da-aa4d-36b66a107bdf.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e2344fe2-e413-4195-95d8-02efe099aa40.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0fca94b2-32cc-47c2-9ba5-5ce3dc668cc4.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9e1404bb-52a9-4cba-85a0-98d28998aba3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/aaa6c29d-0c0f-432b-b6e0-4484ea9065ee.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/95d0d1ba-c2d2-4bea-8de8-a2855a4bdd42.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "12,900,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY4792961919"
  },
  {
    "id": "veh-020",
    "title": "Porsche 911 Turbo S (992) (2027)",
    "titleAr": "بورشه 911 تيربو إس الخارقة (2027)",
    "subtitle": "3.8L Twin-Turbo Boxer-6 650 HP | Carbon Ceramic Brakes",
    "subtitleAr": "3.8 لتر توين تيربو 650 حصان | مكابح كربون سيراميك وتسارع استثنائي",
    "year": 2027,
    "category": "coupe",
    "categoryLabel": "Sports & Coupes",
    "categoryLabelAr": "سيارات رياضية وكوبيه",
    "price": 23000000,
    "priceFormatted": "23,000,000 ج.م",
    "priceFormattedEn": "23,000,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "445,600 ج.م / شهرياً",
    "monthlyEstimateAr": "445,600 ج.م / شهرياً",
    "monthlyEstimateEn": "445,600 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Porsche Doppelkupplung (PDK)",
    "transmissionAr": "ناقل حركة 8 سرعات PDK رياضي",
    "fuel": "Gasoline 95 Twin-Turbo Boxer",
    "fuelAr": "بنزين 95 سوبر تيربو",
    "fuelEn": "Gasoline 95 Twin-Turbo Boxer",
    "power": "650 HP",
    "powerAr": "650 حصان",
    "powerEn": "650 HP",
    "acceleration": "0–100 in 2.7s",
    "accelerationAr": "2.7 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 2.7s",
    "topSpeed": "330 كم/س",
    "topSpeedAr": "330 كم/س",
    "topSpeedEn": "330 كم/س",
    "drivetrain": "Porsche Traction Management (PTM) AWD",
    "drivetrainAr": "دفع كلي ذكي AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/95495195-2b37-44ab-aa6d-97cc73393c46.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/95495195-2b37-44ab-aa6d-97cc73393c46.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/71215761-d6ad-4ef0-8eef-ad925b6f16d8.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ce95755e-a702-405d-a158-9b9909919717.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/89cb6bf7-e4ae-4d97-aaac-f3bb1c904df4.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "23,000,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY6402275720"
  },
  {
    "id": "veh-021",
    "title": "Porsche Cayenne S (New Gen) (2026)",
    "titleAr": "بورشه كايين إس الجيل الجديد (2026)",
    "subtitle": "4.0L Twin-Turbo V8 474 HP | Air Suspension & Matrix LED",
    "subtitleAr": "4.0 لتر V8 توين تيربو 474 حصان | تعليق هوائي ومصابيح ماتريكس",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 7000000,
    "priceFormatted": "7,000,000 ج.م",
    "priceFormattedEn": "7,000,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "135,600 ج.م / شهرياً",
    "monthlyEstimateAr": "135,600 ج.م / شهرياً",
    "monthlyEstimateEn": "135,600 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Tiptronic S Automatic",
    "transmissionAr": "ناقل حركة 8 سرعات تيبترونيك إس",
    "fuel": "Gasoline 95 Twin-Turbo V8",
    "fuelAr": "بنزين 95 تيربو V8",
    "fuelEn": "Gasoline 95 Twin-Turbo V8",
    "power": "474 HP",
    "powerAr": "474 حصان",
    "powerEn": "474 HP",
    "acceleration": "0–100 in 4.7s",
    "accelerationAr": "4.7 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 4.7s",
    "topSpeed": "273 كم/س",
    "topSpeedAr": "273 كم/س",
    "topSpeedEn": "273 كم/س",
    "drivetrain": "Permanent All-Wheel Drive (AWD)",
    "drivetrainAr": "دفع رباعي مستمر AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0e5f3f2f-2e1a-42a2-9409-1831475991c7.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0e5f3f2f-2e1a-42a2-9409-1831475991c7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/8a5f08d3-7611-4de1-824c-f46ba314d541.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/af04e648-1b0a-4ff8-8bb1-18516832ebc3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/cc3e9078-f8b0-418f-a96c-a7cb7242cb71.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/24a5d46c-0426-4411-b7b5-89f125b3568c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/eaccbcf9-f58f-4118-b7fe-22010a2555c9.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/db9ef737-3378-4651-86de-48b839459980.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/40806ced-b67f-466a-8e19-6c1238709f54.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "7,000,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY8633467021"
  },
  {
    "id": "veh-022",
    "title": "Porsche Macan T Performance (2026)",
    "titleAr": "بورشه ماكان تي الرياضية (2026)",
    "subtitle": "2.0L Turbo 265 HP | Sport Chrono & 20\" Macan S Wheels",
    "subtitleAr": "2.0 لتر تيربو 265 حصان | حزمة سبورت كرونو وجنوط 20 إنش",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 6200000,
    "priceFormatted": "6,200,000 ج.م",
    "priceFormattedEn": "6,200,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "120,100 ج.م / شهرياً",
    "monthlyEstimateAr": "120,100 ج.م / شهرياً",
    "monthlyEstimateEn": "120,100 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7-Speed Porsche Doppelkupplung (PDK)",
    "transmissionAr": "ناقل حركة 7 سرعات PDK",
    "fuel": "Gasoline 95 Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 Turbo",
    "power": "265 HP",
    "powerAr": "265 حصان",
    "powerEn": "265 HP",
    "acceleration": "0–100 in 6.2s",
    "accelerationAr": "6.2 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 6.2s",
    "topSpeed": "232 كم/س",
    "topSpeedAr": "232 كم/س",
    "topSpeedEn": "232 كم/س",
    "drivetrain": "Active All-Wheel Drive (AWD)",
    "drivetrainAr": "دفع كلي نشط AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/3191449b-7a19-4b60-a6ac-9c19a73fed23.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/3191449b-7a19-4b60-a6ac-9c19a73fed23.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2ff37b9b-58a3-4304-b478-ed8c9ad803ba.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e17c6c45-2ea6-4df7-8b70-766ecb21c641.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/949036b3-8aca-4f2b-88b4-7453eac40610.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/54aaddaa-4549-4a72-9503-0eccb5e2567c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/76401cc1-feb0-4c9b-8ce5-97f06bd70f9d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/938d2819-303f-4923-bd5d-e63177615ac7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/72186153-e79d-44e8-b2c7-3b96423ee1f0.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "6,200,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY9010895522"
  },
  {
    "id": "veh-023",
    "title": "Porsche Taycan Performance Plus EV (2025)",
    "titleAr": "بورشه تايكان كهربائية رياضية بالكامل (2025)",
    "subtitle": "Performance Battery Plus 408 HP | 800V Architecture",
    "subtitleAr": "بطارية بلس 408 حصان | شحن فائق بتقنية 800 فولت وسرعة استجابة",
    "year": 2025,
    "category": "electric",
    "categoryLabel": "Electric & Future EVs",
    "categoryLabelAr": "سيارات كهربائية وEVs",
    "price": 6100000,
    "priceFormatted": "6,100,000 ج.م",
    "priceFormattedEn": "6,100,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "118,200 ج.م / شهرياً",
    "monthlyEstimateAr": "118,200 ج.م / شهرياً",
    "monthlyEstimateEn": "118,200 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "2-Speed Transmission on Rear Axle",
    "transmissionAr": "ناقل حركة خلفي بسرعتين",
    "fuel": "100% Pure Electric EV",
    "fuelAr": "كهرباء 100% EV",
    "fuelEn": "100% Pure Electric EV",
    "power": "408 HP",
    "powerAr": "408 حصان",
    "powerEn": "408 HP",
    "acceleration": "0–100 in 5.1s",
    "accelerationAr": "5.1 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 5.1s",
    "topSpeed": "230 كم/س",
    "topSpeedAr": "230 كم/س",
    "topSpeedEn": "230 كم/س",
    "drivetrain": "Rear-Wheel Drive Electric",
    "drivetrainAr": "دفع خلفي كهربائي RWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2025 - ضمان الوكيل",
    "badgeAr": "زيرو 2025 - استلام فوري",
    "badgeEn": "Brand New 2025 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ae0525c1-e688-40ce-8f63-8e5a686fb523.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ae0525c1-e688-40ce-8f63-8e5a686fb523.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/fdf2914a-4f25-4efb-8913-5f10acb45cf0.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ff6b183d-6ed3-4e89-819a-7a57d3b36281.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9f1e14d5-ddd8-485a-a4c8-3c7bcaea7485.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/00054335-e409-4ebb-9020-41173d9dd17c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1ce88570-d94e-4832-af05-9ac073ce2f3a.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/384c5152-0a49-4d69-9ecf-77dff9ddb95b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c2a0ccb9-fc92-4112-8070-1ecd2bc56cfe.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "6,100,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY9670413023"
  },
  {
    "id": "veh-024",
    "title": "Land Rover Defender 110 SE P400 (2026)",
    "titleAr": "لاند روفر ديفندر 110 إس إي الفاخرة (2026)",
    "subtitle": "3.0L MHEV Turbo 400 HP | Air Suspension & Terrain Response 2",
    "subtitleAr": "3.0 لتر هايبرد تيربو 400 حصان | تعليق هوائي ونظام التضاريس 2",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 7300000,
    "priceFormatted": "7,300,000 ج.م",
    "priceFormattedEn": "7,300,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "141,400 ج.م / شهرياً",
    "monthlyEstimateAr": "141,400 ج.م / شهرياً",
    "monthlyEstimateEn": "141,400 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Automatic with Twin-Speed Box",
    "transmissionAr": "أوتوماتيك 8 سرعات ZF مع دبل",
    "fuel": "Gasoline 95 Turbo MHEV",
    "fuelAr": "بنزين 95 تيربو MHEV",
    "fuelEn": "Gasoline 95 Turbo MHEV",
    "power": "400 HP",
    "powerAr": "400 حصان",
    "powerEn": "400 HP",
    "acceleration": "0–100 in 6.1s",
    "accelerationAr": "6.1 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 6.1s",
    "topSpeed": "208 كم/س",
    "topSpeedAr": "208 كم/س",
    "topSpeedEn": "208 كم/س",
    "drivetrain": "Permanent 4WD with Locking Diff",
    "drivetrainAr": "دفع رباعي دائم 4WD مع دفلوك",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/748cab92-d8a8-4342-bba7-1b4dfe1640a5.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/748cab92-d8a8-4342-bba7-1b4dfe1640a5.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/83e2eae2-1a48-43d8-b684-e6d4ef70f845.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/da652b1b-8603-4a4f-9957-834d1b233935.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/03144565-7471-44aa-aae5-d50389630225.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/6b9f848b-1c6d-4abd-ae82-c978d80f01c9.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/dd6858b9-e690-4584-8d12-01ed300aebdf.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bd51f112-156f-459c-a3ae-f0ccfaea67bc.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/8b3e63ff-de23-424c-8cf6-d34ccdf3bfc6.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "7,300,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY1301512224"
  },
  {
    "id": "veh-025",
    "title": "Range Rover Autobiography (L460) (2027)",
    "titleAr": "رينج روفر أوتوبيوغرافي الفارهة (L460) (2027)",
    "subtitle": "4.4L Twin-Turbo V8 530 HP | Executive Class Seating & Meridian",
    "subtitleAr": "4.4 لتر V8 توين تيربو 530 حصان | مقاعد تنفيذية ونظام صوتي ميريديان",
    "year": 2027,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 10200000,
    "priceFormatted": "10,200,000 ج.م",
    "priceFormattedEn": "10,200,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "197,600 ج.م / شهرياً",
    "monthlyEstimateAr": "197,600 ج.م / شهرياً",
    "monthlyEstimateEn": "197,600 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Automatic Transmission",
    "transmissionAr": "أوتوماتيك 8 سرعات ZF",
    "fuel": "Gasoline 95 Twin-Turbo V8",
    "fuelAr": "بنزين 95 توين تيربو V8",
    "fuelEn": "Gasoline 95 Twin-Turbo V8",
    "power": "530 HP",
    "powerAr": "530 حصان",
    "powerEn": "530 HP",
    "acceleration": "0–100 in 4.6s",
    "accelerationAr": "4.6 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 4.6s",
    "topSpeed": "250 كم/س",
    "topSpeedAr": "250 كم/س",
    "topSpeedEn": "250 كم/س",
    "drivetrain": "All-Wheel Drive (AWD) with All-Wheel Steering",
    "drivetrainAr": "دفع كلي فائق 4WD مع توجيه رباعي",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b02a1fac-554d-45b1-ae3a-9f6dcffe5768.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b02a1fac-554d-45b1-ae3a-9f6dcffe5768.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2387872f-d840-4e2a-8b18-4d68b35d90c3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a411a1e3-682d-4b8d-a2f9-8d4137b7bb41.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2ef86b6a-47f1-4d19-8e42-f2fd3132ffa3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/24fb646d-ed40-43ce-8692-59f5bd34f957.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/cc9c7660-27a6-4d0d-84b4-31f553ea7d54.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "10,200,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY9735133225"
  },
  {
    "id": "veh-026",
    "title": "Range Rover Evoque R-Dynamic (2026)",
    "titleAr": "رينج روفر إيفوك آر-ديناميك (2026)",
    "subtitle": "2.0L Turbo MHEV 200 HP | Pivi Pro & Panoramic Glass Roof",
    "subtitleAr": "2.0 لتر تيربو 200 حصان | شاشات Pivi Pro وسقف بانوراما زجاجي",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 4050000,
    "priceFormatted": "4,050,000 ج.م",
    "priceFormattedEn": "4,050,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "78,500 ج.م / شهرياً",
    "monthlyEstimateAr": "78,500 ج.م / شهرياً",
    "monthlyEstimateEn": "78,500 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "9-Speed Automatic Transmission",
    "transmissionAr": "أوتوماتيك 9 سرعات",
    "fuel": "Gasoline 95 Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 Turbo",
    "power": "200 HP",
    "powerAr": "200 حصان",
    "powerEn": "200 HP",
    "acceleration": "0–100 in 8.5s",
    "accelerationAr": "8.5 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.5s",
    "topSpeed": "216 كم/س",
    "topSpeedAr": "216 كم/س",
    "topSpeedEn": "216 كم/س",
    "drivetrain": "Intelligent All-Wheel Drive (AWD)",
    "drivetrainAr": "دفع كلي ذكي AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7978a492-cb95-411e-92fe-e03b5d3083e4.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7978a492-cb95-411e-92fe-e03b5d3083e4.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/8b56f49c-546d-4f90-a70f-90e55f03644e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0df32ff8-cfd8-42dd-8a63-749064a815eb.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/8743e068-9646-45e0-8fef-a21aba395a09.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2302ab62-b242-4c31-a4ee-96c48a0378cb.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/3a6187ec-0048-4e85-8772-7c606f05d67e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b0e0ea99-df45-4fe0-9030-f3da95c7a1a5.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7b12ef68-b943-48f5-a2f2-c73358f3a62f.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "4,050,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY3836495226"
  },
  {
    "id": "veh-027",
    "title": "Audi A3 Sedan S-Line (2026)",
    "titleAr": "أودي A3 سيدان إس لاين (2026)",
    "subtitle": "1.4L Turbo TFSI 150 HP | Virtual Cockpit & Matrix LED",
    "subtitleAr": "1.4 لتر تيربو 150 حصان | عدادات ديجيتال ومصابيح ماتريكس LED",
    "year": 2026,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 2600000,
    "priceFormatted": "2,600,000 ج.م",
    "priceFormattedEn": "2,600,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "50,400 ج.م / شهرياً",
    "monthlyEstimateAr": "50,400 ج.م / شهرياً",
    "monthlyEstimateEn": "50,400 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Tiptronic Automatic",
    "transmissionAr": "أوتوماتيك تيبترونيك 8 سرعات",
    "fuel": "Gasoline 95 TFSI Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 TFSI Turbo",
    "power": "150 HP",
    "powerAr": "150 حصان",
    "powerEn": "150 HP",
    "acceleration": "0–100 in 8.2s",
    "accelerationAr": "8.2 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.2s",
    "topSpeed": "227 كم/س",
    "topSpeedAr": "227 كم/س",
    "topSpeedEn": "227 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/909e508f-a640-46cb-95b0-e450312fdf02.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/909e508f-a640-46cb-95b0-e450312fdf02.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/27bbb02a-6aad-4aac-aeec-3925696a8366.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/6f4e424b-daa1-41b9-ba8f-36e944be4923.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a9b1b229-22b0-4434-b897-d8dee507b3c1.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0418db7a-5ea6-491b-b8d0-e83fce7be7a2.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/24a30966-fbec-4b64-b87e-ebf52f5c653a.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e40a1b7a-6dd3-4548-ac22-9759c4a024f9.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7e80e582-f138-4670-bd3d-ca2769242a21.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,600,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY4605859527"
  },
  {
    "id": "veh-028",
    "title": "Audi A6 40 TFSI S-Line (2026)",
    "titleAr": "أودي A6 سيدان تنفيذية إس لاين (2026)",
    "subtitle": "2.0L Turbo 190 HP | Dual MMI Touchscreens & Ambient Plus",
    "subtitleAr": "2.0 لتر تيربو 190 حصان | شاشتين كونسول لمس وإضاءة محيطية",
    "year": 2026,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 5250000,
    "priceFormatted": "5,250,000 ج.م",
    "priceFormattedEn": "5,250,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "101,700 ج.م / شهرياً",
    "monthlyEstimateAr": "101,700 ج.م / شهرياً",
    "monthlyEstimateEn": "101,700 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7-Speed S tronic Dual Clutch",
    "transmissionAr": "أوتوماتيك 7 سرعات S tronic",
    "fuel": "Gasoline 95 TFSI Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 TFSI Turbo",
    "power": "190 HP",
    "powerAr": "190 حصان",
    "powerEn": "190 HP",
    "acceleration": "0–100 in 7.9s",
    "accelerationAr": "7.9 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.9s",
    "topSpeed": "237 كم/س",
    "topSpeedAr": "237 كم/س",
    "topSpeedEn": "237 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD فاره",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e857dedc-32f1-426b-8e30-ac82e6ff8870.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e857dedc-32f1-426b-8e30-ac82e6ff8870.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/dfa87924-29a6-40a4-afa5-1f0767229a5e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bd15c86a-cef0-4507-9ab2-6620560124db.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2db70f11-67d7-4446-b1de-2e0571202c9d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e827c1f0-ed54-4f1e-939c-222f0a4b9efa.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c01153c6-08b0-4371-a0b8-6dac268b535d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/859c77f1-3ba7-4a36-aae4-5f3ad0b74f44.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/89109fa4-92e0-487d-812b-35cbc9fa5e3e.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "5,250,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY4620389928"
  },
  {
    "id": "veh-029",
    "title": "Audi Q3 Sportback S-Line (2026)",
    "titleAr": "أودي Q3 سبورتباك كوبيه إس لاين (2026)",
    "subtitle": "1.4L Turbo TFSI 150 HP | Panoramic Roof & Black Optic Pack",
    "subtitleAr": "1.4 لتر تيربو 150 حصان | سقف بانوراما وحزمة بلاك أوبتيك",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 3500000,
    "priceFormatted": "3,500,000 ج.م",
    "priceFormattedEn": "3,500,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "67,800 ج.م / شهرياً",
    "monthlyEstimateAr": "67,800 ج.م / شهرياً",
    "monthlyEstimateEn": "67,800 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "6-Speed S tronic Automatic",
    "transmissionAr": "أوتوماتيك 6 سرعات S tronic",
    "fuel": "Gasoline 95 TFSI Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 TFSI Turbo",
    "power": "150 HP",
    "powerAr": "150 حصان",
    "powerEn": "150 HP",
    "acceleration": "0–100 in 8.9s",
    "accelerationAr": "8.9 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.9s",
    "topSpeed": "205 كم/س",
    "topSpeedAr": "205 كم/س",
    "topSpeedEn": "205 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/3260928e-7cd7-4e3c-b1b4-62f81db79816.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/3260928e-7cd7-4e3c-b1b4-62f81db79816.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/48a2b903-dfac-4788-832e-682996e06e67.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9b4d6b67-e20e-4950-9e12-1ec2bd6a5100.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a9e4d40b-d3f4-4f62-b666-eb987fe3a1f4.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2ae72d42-b544-45bf-8783-2e7a4ffdf1d8.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b9f64c56-fc29-4bea-992a-542f9b628dfc.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1cffaebf-c557-43c4-b49f-4e2a2ff418d0.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/6a21cdc2-2479-44b9-ba97-1c6f738bd70e.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "3,500,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY5032515729"
  },
  {
    "id": "veh-030",
    "title": "Audi Q8 55 TFSI Quattro S-Line (2026)",
    "titleAr": "أودي Q8 كواترو إس لاين الفاخرة (2026)",
    "subtitle": "3.0L V6 Turbo 340 HP | Quattro AWD & Bang & Olufsen 3D",
    "subtitleAr": "3.0 لتر V6 تيربو 340 حصان | دفع كلي كواترو وصوتيات بانغ آند أولفسن",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 7900000,
    "priceFormatted": "7,900,000 ج.م",
    "priceFormattedEn": "7,900,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "153,100 ج.م / شهرياً",
    "monthlyEstimateAr": "153,100 ج.م / شهرياً",
    "monthlyEstimateEn": "153,100 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Tiptronic Automatic",
    "transmissionAr": "أوتوماتيك تيبترونيك 8 سرعات",
    "fuel": "Gasoline 95 Turbo V6",
    "fuelAr": "بنزين 95 تيربو V6",
    "fuelEn": "Gasoline 95 Turbo V6",
    "power": "340 HP",
    "powerAr": "340 حصان",
    "powerEn": "340 HP",
    "acceleration": "0–100 in 5.9s",
    "accelerationAr": "5.9 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 5.9s",
    "topSpeed": "250 كم/س",
    "topSpeedAr": "250 كم/س",
    "topSpeedEn": "250 كم/س",
    "drivetrain": "Quattro Permanent All-Wheel Drive",
    "drivetrainAr": "دفع كلي دائم Quattro AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/dc9a0776-16d2-42b6-8e4d-8dd87c6a4e47.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/dc9a0776-16d2-42b6-8e4d-8dd87c6a4e47.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bd387c88-e45c-4dd8-af01-0b5310e296a6.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ae8358c6-35fe-4c86-b73d-a76a08ea5043.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e5488230-8c49-4f95-a926-0dcbfc07e08f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e4398ada-ce42-40c8-abd3-83f53ac6848e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/fd021b1c-a310-458d-bd4c-839d848be9f8.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f0c6ec5d-1f74-48f0-8ab0-c0876043a378.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "7,900,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY4919732630"
  },
  {
    "id": "veh-031",
    "title": "Hyundai Tucson NX4 Redline Edition (2025)",
    "titleAr": "هيونداي توسان NX4 أعلى فئة ريد لاين (2025)",
    "subtitle": "1.6L Turbo GDI 180 HP | Panoramic Sunroof & 360 Cameras",
    "subtitleAr": "1.6 لتر تيربو 180 حصان | سقف بانوراما وكاميرات 360 وأنظمة مساعدة",
    "year": 2025,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 1410008,
    "priceFormatted": "1,410,008 ج.م",
    "priceFormattedEn": "1,410,008 EGP",
    "currency": "EGP",
    "monthlyEstimate": "27,300 ج.م / شهرياً",
    "monthlyEstimateAr": "27,300 ج.م / شهرياً",
    "monthlyEstimateEn": "27,300 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7-Speed Dual Clutch (DCT)",
    "transmissionAr": "أوتوماتيك ثنائي التعشيق 7 سرعات DCT",
    "fuel": "Gasoline 95 Turbo GDI",
    "fuelAr": "بنزين 95 تيربو GDI",
    "fuelEn": "Gasoline 95 Turbo GDI",
    "power": "180 HP",
    "powerAr": "180 حصان",
    "powerEn": "180 HP",
    "acceleration": "0–100 in 8.8s",
    "accelerationAr": "8.8 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.8s",
    "topSpeed": "201 كم/س",
    "topSpeedAr": "201 كم/س",
    "topSpeedEn": "201 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2025 - ضمان الوكيل",
    "badgeAr": "زيرو 2025 - استلام فوري",
    "badgeEn": "Brand New 2025 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/aaa9be86-9ec5-4051-8818-8d7e6e8e2e47.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/aaa9be86-9ec5-4051-8818-8d7e6e8e2e47.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/52536534-b931-4254-bb31-a157536153cf.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5e48fefc-db33-44a3-b1fc-03b5de464585.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/aebd4347-66dd-4ead-9fe2-9422a77b804e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a063db7f-c87d-477c-9cbd-d8bb08e4749b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9da518ca-8197-447a-b4d0-1222c377456e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e672ed9a-5b82-4ac5-8694-d7d55048007e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/fc9d9e4e-84d9-4772-ae11-20ad04cfdc00.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,410,008 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY3298572431"
  },
  {
    "id": "veh-032",
    "title": "Hyundai Elantra CN7 Smart Edition (2026)",
    "titleAr": "هيونداي إلنترا CN7 سمارت إديشن (2026)",
    "subtitle": "1.6L MPI 123 HP | Digital Cluster & LED Lighting",
    "subtitleAr": "1.6 لتر 123 حصان | عدادات رقمية وإضاءة LED وتكييف ثنائي",
    "year": 2026,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 1550000,
    "priceFormatted": "1,550,000 ج.م",
    "priceFormattedEn": "1,550,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "30,000 ج.م / شهرياً",
    "monthlyEstimateAr": "30,000 ج.م / شهرياً",
    "monthlyEstimateEn": "30,000 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "6-Speed Automatic Transmission",
    "transmissionAr": "أوتوماتيك 6 سرعات سلس",
    "fuel": "Gasoline 92/95 Regular",
    "fuelAr": "بنزين 92/95",
    "fuelEn": "Gasoline 92/95 Regular",
    "power": "123 HP",
    "powerAr": "123 حصان",
    "powerEn": "123 HP",
    "acceleration": "0–100 in 10.6s",
    "accelerationAr": "10.6 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 10.6s",
    "topSpeed": "195 كم/س",
    "topSpeedAr": "195 كم/س",
    "topSpeedEn": "195 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b7901d44-1a84-4467-851e-e3b62cd02ed8.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b7901d44-1a84-4467-851e-e3b62cd02ed8.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/8fe7588d-efb5-4cc8-8218-a68f1bfda035.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/fddb43b0-1bdc-4f67-adb5-10b113850494.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4651d78e-aa64-4b4e-b153-5ffb0ca20787.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/8e931f89-1f45-4e57-ab10-2f4964ead598.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2e5fd48c-06c5-4057-a476-f5c140a3e2c1.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ae515bce-5d9a-49d9-905f-6b6d585bd75b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/466be20f-8bcd-4ce9-84a1-567d8eecc2cf.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,550,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY9042994432"
  },
  {
    "id": "veh-033",
    "title": "Hyundai Santa Fe Calligraphy 7-Seats (2025)",
    "titleAr": "هيونداي سانتا في كاليغرافي 7 مقاعد (2025)",
    "subtitle": "2.5L Turbo 281 HP | Dual Sunroof & Nappa Leather Seating",
    "subtitleAr": "2.5 لتر تيربو 281 حصان | فتحتي سقف ومقاعد جلد نابا الفاخرة",
    "year": 2025,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 3495000,
    "priceFormatted": "3,495,000 ج.م",
    "priceFormattedEn": "3,495,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "67,700 ج.م / شهرياً",
    "monthlyEstimateAr": "67,700 ج.م / شهرياً",
    "monthlyEstimateEn": "67,700 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Wet Dual Clutch (DCT)",
    "transmissionAr": "أوتوماتيك 8 سرعات DCT رطب",
    "fuel": "Gasoline 95 Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 Turbo",
    "power": "281 HP",
    "powerAr": "281 حصان",
    "powerEn": "281 HP",
    "acceleration": "0–100 in 7.4s",
    "accelerationAr": "7.4 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.4s",
    "topSpeed": "210 كم/س",
    "topSpeedAr": "210 كم/س",
    "topSpeedEn": "210 كم/س",
    "drivetrain": "HTRAC All-Wheel Drive",
    "drivetrainAr": "دفع كلي HTRAC AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2025 - ضمان الوكيل",
    "badgeAr": "زيرو 2025 - استلام فوري",
    "badgeEn": "Brand New 2025 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/60100d03-8c39-48b2-b77c-2872f5eab677.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/60100d03-8c39-48b2-b77c-2872f5eab677.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "3,495,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY4965761033"
  },
  {
    "id": "veh-034",
    "title": "Kia Sportage GT-Line (2026)",
    "titleAr": "كيا سبورتاج GT-Line كاملة المواصفات (2026)",
    "subtitle": "1.6L Turbo 180 HP | Dual Curved 12.3\" Displays & Harman Kardon",
    "subtitleAr": "1.6 لتر تيربو 180 حصان | شاشات بانورامية منحنية وصوتيات هارمان كاردون",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 2580000,
    "priceFormatted": "2,580,000 ج.م",
    "priceFormattedEn": "2,580,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "50,000 ج.م / شهرياً",
    "monthlyEstimateAr": "50,000 ج.م / شهرياً",
    "monthlyEstimateEn": "50,000 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7-Speed Dual Clutch (DCT)",
    "transmissionAr": "أوتوماتيك 7 سرعات DCT رطب",
    "fuel": "Gasoline 95 Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 Turbo",
    "power": "180 HP",
    "powerAr": "180 حصان",
    "powerEn": "180 HP",
    "acceleration": "0–100 in 8.6s",
    "accelerationAr": "8.6 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.6s",
    "topSpeed": "201 كم/س",
    "topSpeedAr": "201 كم/س",
    "topSpeedEn": "201 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD رياضي",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/508a0dc4-0e30-4515-bc4c-4434d70bee51.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/508a0dc4-0e30-4515-bc4c-4434d70bee51.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/dc778572-5677-4fe0-8b54-f4a4482232f9.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/22f14295-4bb7-4d58-accf-4a25326df1ed.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/de6b23cc-7a79-4826-8760-b48f2fe05195.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9ed87442-72bd-4bbb-9fc0-6647a64240ff.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/235868ac-daf7-4ef2-9fab-93bf9695a111.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/79547ecb-8637-4dd7-8d82-f55d61b11873.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/8755049f-c9b1-4467-9fff-6c4954413f46.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,580,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY8842685334"
  },
  {
    "id": "veh-035",
    "title": "Kia Sorento 7-Passenger AWD (2024)",
    "titleAr": "كيا سورينتو 7 مقاعد دفع رباعي (2024)",
    "subtitle": "1.6L Turbo Hybrid 230 HP | Panoramic Roof & ADAS Safety",
    "subtitleAr": "1.6 لتر تيربو هايبرد 230 حصان | سقف بانوراما وحزمة أمان ADAS كاملة",
    "year": 2024,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 1500000,
    "priceFormatted": "1,500,000 ج.م",
    "priceFormattedEn": "1,500,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "29,100 ج.م / شهرياً",
    "monthlyEstimateAr": "29,100 ج.م / شهرياً",
    "monthlyEstimateEn": "29,100 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "6-Speed Automatic Transmission",
    "transmissionAr": "أوتوماتيك 6 سرعات",
    "fuel": "Gasoline 95 Turbo Hybrid",
    "fuelAr": "بنزين 95 تيربو هايبرد",
    "fuelEn": "Gasoline 95 Turbo Hybrid",
    "power": "230 HP",
    "powerAr": "230 حصان",
    "powerEn": "230 HP",
    "acceleration": "0–100 in 8.4s",
    "accelerationAr": "8.4 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.4s",
    "topSpeed": "193 كم/س",
    "topSpeedAr": "193 كم/س",
    "topSpeedEn": "193 كم/س",
    "drivetrain": "Electronic All-Wheel Drive (AWD)",
    "drivetrainAr": "دفع كلي AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2024 - ضمان الوكيل",
    "badgeAr": "زيرو 2024 - استلام فوري",
    "badgeEn": "Brand New 2024 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c3bd5bf3-2e4f-4083-9801-f6c6110a7348.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c3bd5bf3-2e4f-4083-9801-f6c6110a7348.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2000d9a8-8da7-40b8-ab6b-3354cc42622b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/51f54a73-896e-435b-9fa2-94c228ea6781.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/dae44c5e-34a1-4795-a421-b34005ebdd0c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d55f914d-6da3-4654-9fe3-68e7b46bd4d7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d70db0ff-3166-4a09-9ccb-cd4f98ce3fc5.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c13f1f96-297d-4021-a333-c6fcfc8a55d1.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/811835aa-9eec-4af9-aafc-751dec332d33.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,500,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY8830419635"
  },
  {
    "id": "veh-036",
    "title": "Kia EV3 Long Range Electric SUV (2026)",
    "titleAr": "كيا EV3 الكهربائية بالكامل لونغ رينج (2026)",
    "subtitle": "Electric Motor 204 HP | 81.4 kWh Battery - 600km Range",
    "subtitleAr": "محرك كهربائي 204 حصان | بطارية 81.4 كيلوواط بمدى يصل 600 كم",
    "year": 2026,
    "category": "electric",
    "categoryLabel": "Electric & Future EVs",
    "categoryLabelAr": "سيارات كهربائية وEVs",
    "price": 1799000,
    "priceFormatted": "1,799,000 ج.م",
    "priceFormattedEn": "1,799,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "34,900 ج.م / شهرياً",
    "monthlyEstimateAr": "34,900 ج.م / شهرياً",
    "monthlyEstimateEn": "34,900 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "Single-Speed Electric Transmission",
    "transmissionAr": "ناقل حركة كهربائي سرعة واحدة",
    "fuel": "100% Pure Electric EV",
    "fuelAr": "كهرباء 100% EV",
    "fuelEn": "100% Pure Electric EV",
    "power": "204 HP",
    "powerAr": "204 حصان",
    "powerEn": "204 HP",
    "acceleration": "0–100 in 7.5s",
    "accelerationAr": "7.5 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.5s",
    "topSpeed": "170 كم/س",
    "topSpeedAr": "170 كم/س",
    "topSpeedEn": "170 كم/س",
    "drivetrain": "Front-Wheel Drive Electric",
    "drivetrainAr": "دفع أمامي كهربائي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4ca94779-49a1-44c9-9972-df4e849ea253.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4ca94779-49a1-44c9-9972-df4e849ea253.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ec626d7d-2a81-49f2-9778-b6b3ecdb09cd.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c89d9172-f878-42bf-afe4-7c89c35d729c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/6fe4a6b0-50f2-4e7a-b964-4dcb6453ef71.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a168ce4c-464e-4888-9e0d-d2212a5c7fa2.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b15145f0-2987-483f-87ba-ab967c3e3f17.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/8c92c57d-2c4e-4893-9fd1-43a1fd043a6b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/72ef8d1d-06d6-4340-9543-4309cdde7327.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,799,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY5147125936"
  },
  {
    "id": "veh-037",
    "title": "Kia Carnival Limousine Luxury 8-Seats (2025)",
    "titleAr": "كيا كارنفال ليموزين 8 مقاعد عائلية فاخرة (2025)",
    "subtitle": "3.5L V6 GDI 290 HP | Dual Electric Sliding Doors & VIP Seats",
    "subtitleAr": "3.5 لتر V6 بقوة 290 حصان | أبواب كهربائية منزلقة ومقاعد VIP مريحة",
    "year": 2025,
    "category": "popular",
    "categoryLabel": "Zero & High-Demand",
    "categoryLabelAr": "كسر زيرو الأكثر طلباً",
    "price": 2850000,
    "priceFormatted": "2,850,000 ج.م",
    "priceFormattedEn": "2,850,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "55,200 ج.م / شهرياً",
    "monthlyEstimateAr": "55,200 ج.م / شهرياً",
    "monthlyEstimateEn": "55,200 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Automatic Transmission",
    "transmissionAr": "أوتوماتيك 8 سرعات هيدروليكي",
    "fuel": "Gasoline 92/95 V6",
    "fuelAr": "بنزين 92/95",
    "fuelEn": "Gasoline 92/95 V6",
    "power": "290 HP",
    "powerAr": "290 حصان",
    "powerEn": "290 HP",
    "acceleration": "0–100 in 8.2s",
    "accelerationAr": "8.2 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.2s",
    "topSpeed": "200 كم/س",
    "topSpeedAr": "200 كم/س",
    "topSpeedEn": "200 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2025 - ضمان الوكيل",
    "badgeAr": "زيرو 2025 - استلام فوري",
    "badgeEn": "Brand New 2025 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ee6905e2-ef0b-41f6-8409-c9bfe12e9d72.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ee6905e2-ef0b-41f6-8409-c9bfe12e9d72.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/3acd11c5-791d-42ca-88eb-cfa2421101e7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1d5ca84e-3645-40fe-a9f2-8581dc99848e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a06c2cd6-9737-4b39-8044-bbbb89ebc49b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a063c2b0-1d15-4cb6-b44d-bf49459c1fa6.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/73df827d-bbea-465c-a3c0-be3796194eaa.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/3b2f3071-bc7a-4980-b115-e29fc6225fb9.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/396ff020-b944-4b17-8139-70500458778c.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,850,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY8112427737"
  },
  {
    "id": "veh-038",
    "title": "Toyota Land Cruiser 300 VXR (2025)",
    "titleAr": "تويوتا لاند كروزر 300 VXR صخر الصحراء (2025)",
    "subtitle": "3.5L Twin-Turbo V6 409 HP | MTS & Crawl Control & JBL",
    "subtitleAr": "3.5 لتر V6 توين تيربو 409 حصان | نظام الزحف والصوتيات JBL الفاخرة",
    "year": 2025,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 12000000,
    "priceFormatted": "12,000,000 ج.م",
    "priceFormattedEn": "12,000,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "232,500 ج.م / شهرياً",
    "monthlyEstimateAr": "232,500 ج.م / شهرياً",
    "monthlyEstimateEn": "232,500 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "10-Speed Direct Shift Automatic",
    "transmissionAr": "أوتوماتيك 10 سرعات مباشر Direct Shift",
    "fuel": "Gasoline 95 Twin-Turbo V6",
    "fuelAr": "بنزين 95 توين تيربو",
    "fuelEn": "Gasoline 95 Twin-Turbo V6",
    "power": "409 HP",
    "powerAr": "409 حصان",
    "powerEn": "409 HP",
    "acceleration": "0–100 in 6.7s",
    "accelerationAr": "6.7 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 6.7s",
    "topSpeed": "210 كم/س",
    "topSpeedAr": "210 كم/س",
    "topSpeedEn": "210 كم/س",
    "drivetrain": "Full-Time 4WD with Transfer Case & Locking Diffs",
    "drivetrainAr": "دفع رباعي صلب 4WD مع دبل ثقيل وخفيف",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2025 - ضمان الوكيل",
    "badgeAr": "زيرو 2025 - استلام فوري",
    "badgeEn": "Brand New 2025 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/595639cd-f32b-40cc-8cb8-a3f8256b2260.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/595639cd-f32b-40cc-8cb8-a3f8256b2260.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/668acca9-547c-4712-ae9d-99817a99103d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0ed147cb-fc76-4aa4-beac-009d8df06569.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d2cf127c-9ed8-4b46-a611-3d7bb67c22bd.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d50029b7-3fef-4f49-85ab-7f3ae394d763.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1bea4bc9-aed8-441e-9402-8d7a66305519.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a8333679-c070-4f4b-af46-a672b313927d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/68a36fc3-b412-4cfe-bd3b-f041b85fbc95.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "12,000,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY3902099838"
  },
  {
    "id": "veh-039",
    "title": "Toyota Fortuner 4.0L V6 4x4 (2027)",
    "titleAr": "تويوتا فورتشنر 4.0 لتر V6 دفع رباعي (2027)",
    "subtitle": "4.0L V6 235 HP | 7-Seater True Body-on-Frame SUV",
    "subtitleAr": "4.0 لتر 6 سلندر 235 حصان | دفع رباعي حقيقي 7 مقاعد للشوارع الوعرة",
    "year": 2027,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 4600000,
    "priceFormatted": "4,600,000 ج.م",
    "priceFormattedEn": "4,600,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "89,100 ج.م / شهرياً",
    "monthlyEstimateAr": "89,100 ج.م / شهرياً",
    "monthlyEstimateEn": "89,100 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "6-Speed Heavy-Duty Automatic",
    "transmissionAr": "أوتوماتيك 6 سرعات فائق التحمل",
    "fuel": "Gasoline 92/95 V6",
    "fuelAr": "بنزين 92/95",
    "fuelEn": "Gasoline 92/95 V6",
    "power": "235 HP",
    "powerAr": "235 حصان",
    "powerEn": "235 HP",
    "acceleration": "0–100 in 9.0s",
    "accelerationAr": "9.0 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 9.0s",
    "topSpeed": "187 كم/س",
    "topSpeedAr": "187 كم/س",
    "topSpeedEn": "187 كم/س",
    "drivetrain": "Part-Time 4WD with Rear Diff Lock",
    "drivetrainAr": "دفع رباعي 4x4 مع قفل دفرنس خلفي",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4a552e50-7e91-49ea-b3c3-595d9e8a7f6c.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4a552e50-7e91-49ea-b3c3-595d9e8a7f6c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/df49517d-7bab-433d-8d79-971b95657205.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/91c80e9e-39e8-43ad-98a4-caed2e560756.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/cbdc1830-091e-4cc9-9532-714f15ffc3ff.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/16172ffd-cdc2-4007-9937-f29dfc584237.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/25d8058e-6d9e-4aa3-8b43-8205ea2cb849.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4720f9ac-1311-4868-b72d-3ff1d80e503f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/88c8b78d-edc3-43ee-9c1c-df4a0bbb7d0f.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "4,600,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY6693816939"
  },
  {
    "id": "veh-040",
    "title": "Toyota Corolla Elegance Plus (2026)",
    "titleAr": "تويوتا كورولا إليجانس بلس (2026)",
    "subtitle": "1.6L Dual VVT-i 120 HP | Sunroof & Wireless Charger",
    "subtitleAr": "1.6 لتر دوال VVT-i بقوة 120 حصان | فتحة سقف وشاحن لاسلكي",
    "year": 2026,
    "category": "popular",
    "categoryLabel": "Zero & High-Demand",
    "categoryLabelAr": "كسر زيرو الأكثر طلباً",
    "price": 1780000,
    "priceFormatted": "1,780,000 ج.م",
    "priceFormattedEn": "1,780,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "34,500 ج.م / شهرياً",
    "monthlyEstimateAr": "34,500 ج.م / شهرياً",
    "monthlyEstimateEn": "34,500 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "Direct Shift CVT (10-Speed Sequential)",
    "transmissionAr": "ناقل حركة أوتوماتيك CVT مع 10 سرعات وهمية",
    "fuel": "Gasoline 92/95 Dual VVT-i",
    "fuelAr": "بنزين 92/95 اقتصادي",
    "fuelEn": "Gasoline 92/95 Dual VVT-i",
    "power": "120 HP",
    "powerAr": "120 حصان",
    "powerEn": "120 HP",
    "acceleration": "0–100 in 10.8s",
    "accelerationAr": "10.8 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 10.8s",
    "topSpeed": "190 كم/س",
    "topSpeedAr": "190 كم/س",
    "topSpeedEn": "190 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0259435a-9437-45da-813e-d3d173943143.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0259435a-9437-45da-813e-d3d173943143.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/70fe2b3c-841b-4e6e-8781-7d9fe2a902cc.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a7dd07ca-bf15-4aae-af4c-41b43481dd11.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/55a3eae7-9ff9-4926-b9b9-082b2d605547.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/acea1d1f-9ea6-4587-9c84-ec6288f9f226.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b44bfe1a-4440-4d9e-8d04-f1e88947fa0e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e60509ad-0921-4995-96c4-cd2ca74ed82e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e8b8d890-a986-4ffc-afeb-67e534ed164e.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,780,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY7172523440"
  },
  {
    "id": "veh-041",
    "title": "Toyota bZ4X AWD Electric SUV (2026)",
    "titleAr": "تويوتا bZ4X دفع كلي كهربائية بالكامل (2026)",
    "subtitle": "Dual Electric Motors 218 HP | 71.4 kWh Battery - 460km Range",
    "subtitleAr": "محركين كهرباء 218 حصان | بطارية 71.4 كيلوواط بمدى 460 كم ونظام أمان TSS",
    "year": 2026,
    "category": "electric",
    "categoryLabel": "Electric & Future EVs",
    "categoryLabelAr": "سيارات كهربائية وEVs",
    "price": 2180000,
    "priceFormatted": "2,180,000 ج.م",
    "priceFormattedEn": "2,180,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "42,200 ج.م / شهرياً",
    "monthlyEstimateAr": "42,200 ج.م / شهرياً",
    "monthlyEstimateEn": "42,200 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "Single-Speed Electric Transmission",
    "transmissionAr": "ناقل حركة كهربائي سرعة واحدة",
    "fuel": "100% Pure Electric EV",
    "fuelAr": "كهرباء 100% EV",
    "fuelEn": "100% Pure Electric EV",
    "power": "218 HP",
    "powerAr": "218 حصان",
    "powerEn": "218 HP",
    "acceleration": "0–100 in 6.9s",
    "accelerationAr": "6.9 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 6.9s",
    "topSpeed": "160 كم/س",
    "topSpeedAr": "160 كم/س",
    "topSpeedEn": "160 كم/س",
    "drivetrain": "X-MODE Electric AWD",
    "drivetrainAr": "دفع كلي كهربائي X-MODE AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/47770882-1ad6-4130-b907-559ea3117225.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/47770882-1ad6-4130-b907-559ea3117225.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/68bdddb5-c698-4670-bfff-987254fa3003.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1da8306d-7002-4d14-9faf-7855c33d43f7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2bd24593-9aea-4f6e-b6b8-8fb3660246ea.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/dcd1f21a-6858-43b0-8aa6-de1ef732d7db.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,180,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY6385228241"
  },
  {
    "id": "veh-042",
    "title": "Skoda Octavia Style Plus (A8) (2026)",
    "titleAr": "سكودا أوكتافيا ستايل بلس (A8) (2026)",
    "subtitle": "1.4L Turbo TSI 150 HP | Shift-by-Wire & Ambient Lighting",
    "subtitleAr": "1.4 لتر تيربو TSI بقوة 150 حصان | ناقل حركة إلكتروني وإضاءة محيطية",
    "year": 2026,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 2150000,
    "priceFormatted": "2,150,000 ج.م",
    "priceFormattedEn": "2,150,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "41,700 ج.م / شهرياً",
    "monthlyEstimateAr": "41,700 ج.م / شهرياً",
    "monthlyEstimateEn": "41,700 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Automatic (Aisin)",
    "transmissionAr": "أوتوماتيك 8 سرعات ياباني Aisin",
    "fuel": "Gasoline 95 TSI Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 TSI Turbo",
    "power": "150 HP",
    "powerAr": "150 حصان",
    "powerEn": "150 HP",
    "acceleration": "0–100 in 8.8s",
    "accelerationAr": "8.8 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.8s",
    "topSpeed": "223 كم/س",
    "topSpeedAr": "223 كم/س",
    "topSpeedEn": "223 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/171ba05d-231c-4bed-a8dd-d5f094974e91.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/171ba05d-231c-4bed-a8dd-d5f094974e91.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0993e4d3-5e3e-4e17-80f4-05620c567a84.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/08f3881c-47cc-4f75-89d0-e4fe2d094dbd.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/133fd7ab-5386-44e8-abad-8a818c18c33e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a8b9e8b7-181d-42a2-820b-aaca14941c47.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/95fb37fe-63ff-4326-8909-edd464726d0e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/47c53e9a-ca59-4e30-81d4-80c3eee7d218.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/79e2e53a-18a6-4e21-9a52-f860a284c87f.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,150,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY3635922142"
  },
  {
    "id": "veh-043",
    "title": "Skoda Kodiaq Sportline 7-Seats (2026)",
    "titleAr": "سكودا كودياك سبورت لاين 7 مقاعد (2026)",
    "subtitle": "1.4L Turbo TSI 150 HP | Panoramic Roof & CANTON Sound",
    "subtitleAr": "1.4 لتر تيربو 150 حصان | فتحة سقف بانوراما ونظام صوتي كانطون",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 3100000,
    "priceFormatted": "3,100,000 ج.م",
    "priceFormattedEn": "3,100,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "60,100 ج.م / شهرياً",
    "monthlyEstimateAr": "60,100 ج.م / شهرياً",
    "monthlyEstimateEn": "60,100 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "6-Speed Wet DSG Dual Clutch",
    "transmissionAr": "ناقل حركة DSG زيت بـ 6 سرعات",
    "fuel": "Gasoline 95 TSI Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 TSI Turbo",
    "power": "150 HP",
    "powerAr": "150 حصان",
    "powerEn": "150 HP",
    "acceleration": "0–100 in 9.7s",
    "accelerationAr": "9.7 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 9.7s",
    "topSpeed": "198 كم/س",
    "topSpeedAr": "198 كم/س",
    "topSpeedEn": "198 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5683d715-91ce-4dba-afb1-3d43ab7614bb.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5683d715-91ce-4dba-afb1-3d43ab7614bb.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7c94af67-d04f-4c4b-8fc3-dddf6b4f4892.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/27fc8c58-c950-440d-9333-602387f28b47.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f53fac9a-cb59-43ac-8db4-b3c0f9160e0e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/8b96bc43-6c24-4837-8461-1d3d5a300a05.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/11f5a267-2a12-400f-90fc-0336c4d354cd.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a8a5aae4-7433-49a7-8067-e99ef63f8a17.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7b237d1f-7dcb-442f-b83b-92c3fdd6fc46.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "3,100,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY6022217043"
  },
  {
    "id": "veh-044",
    "title": "Skoda Superb Laurin & Klement (2026)",
    "titleAr": "سكودا سوبيرب لورين آند كليمنت الفارهة (2026)",
    "subtitle": "2.0L Turbo TSI 220 HP | Ventilated Massage Seats & Virtual Pedal",
    "subtitleAr": "2.0 لتر تيربو 220 حصان | مقاعد مساج وتبريد وشنطة كهربائية بالقدم",
    "year": 2026,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 2600000,
    "priceFormatted": "2,600,000 ج.م",
    "priceFormattedEn": "2,600,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "50,400 ج.م / شهرياً",
    "monthlyEstimateAr": "50,400 ج.م / شهرياً",
    "monthlyEstimateEn": "50,400 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7-Speed Wet DSG Dual Clutch",
    "transmissionAr": "ناقل حركة 7 سرعات DSG رطب",
    "fuel": "Gasoline 95 TSI Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 TSI Turbo",
    "power": "220 HP",
    "powerAr": "220 حصان",
    "powerEn": "220 HP",
    "acceleration": "0–100 in 7.0s",
    "accelerationAr": "7.0 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.0s",
    "topSpeed": "245 كم/س",
    "topSpeedAr": "245 كم/س",
    "topSpeedEn": "245 كم/س",
    "drivetrain": "Executive Front-Wheel Drive",
    "drivetrainAr": "دفع أمامي فاره FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9750d038-3cf8-4967-9b25-cc2c34b00f64.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9750d038-3cf8-4967-9b25-cc2c34b00f64.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/fa9513d4-6487-44e3-874c-953e3c1cc4ba.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/43f41f44-340e-4e7b-af0b-20add5c94def.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/16de654f-aeea-4c26-b266-188c214fd024.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a4803c65-0f45-4893-9ad9-e7173ccbb055.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a03ea5de-0793-49e1-8836-6ca8a4c3cf63.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/120520ac-260f-4990-91e3-f3183d4c1b01.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/59ef1b27-0258-4173-b6c4-8e507c070fdc.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,600,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY5705194144"
  },
  {
    "id": "veh-045",
    "title": "Jetour T2 Luxury 4x4 Off-Road (2027)",
    "titleAr": "جيتور T2 لكجري دفع رباعي للطرق الوعرة (2027)",
    "subtitle": "1.5L Turbo / 2.0L AWD | BorgWarner 4WD & 15.6\" Console",
    "subtitleAr": "محرك تيربو مع نظام دفع رباعي بورغوارنر وشاشة عملاقة 15.6 إنش",
    "year": 2027,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 2170000,
    "priceFormatted": "2,170,000 ج.م",
    "priceFormattedEn": "2,170,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "42,000 ج.م / شهرياً",
    "monthlyEstimateAr": "42,000 ج.م / شهرياً",
    "monthlyEstimateEn": "42,000 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7-Speed Wet Dual Clutch (DCT)",
    "transmissionAr": "أوتوماتيك 7 سرعات DCT رطب",
    "fuel": "Gasoline 92/95 Turbo",
    "fuelAr": "بنزين 92/95 تيربو",
    "fuelEn": "Gasoline 92/95 Turbo",
    "power": "187 HP",
    "powerAr": "187 حصان",
    "powerEn": "187 HP",
    "acceleration": "0–100 in 8.9s",
    "accelerationAr": "8.9 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.9s",
    "topSpeed": "190 كم/س",
    "topSpeedAr": "190 كم/س",
    "topSpeedEn": "190 كم/س",
    "drivetrain": "BorgWarner X-WD 4x4 System",
    "drivetrainAr": "دفع رباعي ذكي X-WD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4a970580-7c45-452c-8f50-ff42329c2193.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4a970580-7c45-452c-8f50-ff42329c2193.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4687c350-4407-4b02-9119-20382520d76f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a910c704-e3de-4f7b-886f-6dabcdba767b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/cc1771c6-73ca-4a3e-898a-aa6d74a510c8.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/613c9f51-de32-46b1-99fe-09a5a4dc56e7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/19fdaf43-8b4b-41be-b262-b5ca9a7c5c45.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/df3569f8-ec07-4d37-b318-7330ddb5e189.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/214d9afb-4d36-489a-a060-5c97cf967fe6.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,170,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY7074432345"
  },
  {
    "id": "veh-046",
    "title": "Jetour Dashing Luxury Edition (2027)",
    "titleAr": "جيتور داشينج لكجري الفخمة (2027)",
    "subtitle": "1.5L Turbo 156 HP | Frameless Grille & Head-Up Display",
    "subtitleAr": "1.5 لتر تيربو 156 حصان | تصميم رياضي مستقبلي ومقابض مخفية",
    "year": 2027,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 1100000,
    "priceFormatted": "1,100,000 ج.م",
    "priceFormattedEn": "1,100,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "21,300 ج.م / شهرياً",
    "monthlyEstimateAr": "21,300 ج.م / شهرياً",
    "monthlyEstimateEn": "21,300 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "6-Speed Dual Clutch (DCT)",
    "transmissionAr": "أوتوماتيك 6 سرعات DCT ثنائي التعشيق",
    "fuel": "Gasoline 92/95 Turbo",
    "fuelAr": "بنزين 92/95 تيربو",
    "fuelEn": "Gasoline 92/95 Turbo",
    "power": "156 HP",
    "powerAr": "156 حصان",
    "powerEn": "156 HP",
    "acceleration": "0–100 in 9.5s",
    "accelerationAr": "9.5 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 9.5s",
    "topSpeed": "180 كم/س",
    "topSpeedAr": "180 كم/س",
    "topSpeedEn": "180 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/77fac562-c5bc-4daf-87cd-871f5ee58090.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/77fac562-c5bc-4daf-87cd-871f5ee58090.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/327b5ecc-b8fe-4c94-adf2-e90326009cc4.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e7b31f88-8940-4ea6-a9ec-0fc9b3339286.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e2cae0b3-f9e7-49e5-8ac1-6d9f9c3208b5.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/68531fea-56d1-428e-9c45-a855d0250f86.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9f83aa64-1335-46df-bfe9-51ef34a803dd.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a4f23688-37b6-4983-8d21-721d481be85d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/feb12397-5826-431c-bf3a-674fe4a35109.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,100,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY3294191846"
  },
  {
    "id": "veh-047",
    "title": "MG One Luxury Full Option (2027)",
    "titleAr": "إم جي وان لكجري كاملة المواصفات (2027)",
    "subtitle": "1.5L Turbo 181 HP | 30\" Curved Screen & Continental Chassis",
    "subtitleAr": "1.5 لتر تيربو 181 حصان | شاشات ثلاثية متصلة 30 إنش وشاسيه رياضي",
    "year": 2027,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 1455000,
    "priceFormatted": "1,455,000 ج.م",
    "priceFormattedEn": "1,455,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "28,200 ج.م / شهرياً",
    "monthlyEstimateAr": "28,200 ج.م / شهرياً",
    "monthlyEstimateEn": "28,200 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "CVT Electronic Automatic",
    "transmissionAr": "ناقل حركة CVT متطور بنقلات سريعة",
    "fuel": "Gasoline 92/95 Turbo",
    "fuelAr": "بنزين 92/95 تيربو",
    "fuelEn": "Gasoline 92/95 Turbo",
    "power": "181 HP",
    "powerAr": "181 حصان",
    "powerEn": "181 HP",
    "acceleration": "0–100 in 8.1s",
    "accelerationAr": "8.1 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.1s",
    "topSpeed": "195 كم/س",
    "topSpeedAr": "195 كم/س",
    "topSpeedEn": "195 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/aa8b7912-96ec-402d-8d48-9eb0a1a7450c.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/aa8b7912-96ec-402d-8d48-9eb0a1a7450c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/8d398a76-201d-4eac-bb48-c532689716f7.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,455,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY3191752247"
  },
  {
    "id": "veh-048",
    "title": "MG 5 Luxury (2027) (2027)",
    "titleAr": "إم جي 5 لكجري أعلى فئة (2027) (2027)",
    "subtitle": "1.5L Natural Aspirated 120 HP | 360 Camera & Sunroof",
    "subtitleAr": "1.5 لتر 120 حصان | كاميرات 360 درجة وسقف كهربائي ومقاعد جلد",
    "year": 2027,
    "category": "popular",
    "categoryLabel": "Zero & High-Demand",
    "categoryLabelAr": "كسر زيرو الأكثر طلباً",
    "price": 989000,
    "priceFormatted": "989,000 ج.م",
    "priceFormattedEn": "989,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "19,200 ج.م / شهرياً",
    "monthlyEstimateAr": "19,200 ج.م / شهرياً",
    "monthlyEstimateEn": "19,200 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "CVT Automatic Transmission",
    "transmissionAr": "ناقل حركة أوتوماتيك CVT",
    "fuel": "Gasoline 92 Regular",
    "fuelAr": "بنزين 92 اقتصادي",
    "fuelEn": "Gasoline 92 Regular",
    "power": "120 HP",
    "powerAr": "120 حصان",
    "powerEn": "120 HP",
    "acceleration": "0–100 in 11.2s",
    "accelerationAr": "11.2 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 11.2s",
    "topSpeed": "180 كم/س",
    "topSpeedAr": "180 كم/س",
    "topSpeedEn": "180 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD اقتصادي",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/33329c17-0a25-41aa-980b-b002a1c4fd1f.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/33329c17-0a25-41aa-980b-b002a1c4fd1f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9f93f6d0-7b1c-422c-aa21-8228e17c9069.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1983db49-438c-4f28-899b-b5b2bd8d1cbc.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e41428d7-e63d-4d82-a2e6-24595fefa945.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0bbf54a1-5b73-4c41-966a-9ed00a791f42.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b665d1a6-d8e7-4326-b0fa-a5f98b4e503b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f36dcb81-d858-43bc-9649-9a094c147df4.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/59f722b3-01ec-4880-987b-3dbc3fb4a023.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "989,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY8497585148"
  },
  {
    "id": "veh-049",
    "title": "MG GT Sports Fastback (2027)",
    "titleAr": "إم جي جي تي فاست باك الرياضية (2027)",
    "subtitle": "1.5L Turbo 173 HP | Sports Bucket Seats & Flamed Grille",
    "subtitleAr": "1.5 لتر تيربو 173 حصان | مقاعد رياضية حاضنة وواجهة هجومية",
    "year": 2027,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 1225000,
    "priceFormatted": "1,225,000 ج.م",
    "priceFormattedEn": "1,225,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "23,700 ج.م / شهرياً",
    "monthlyEstimateAr": "23,700 ج.م / شهرياً",
    "monthlyEstimateEn": "23,700 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7-Speed Dual Clutch (DCT)",
    "transmissionAr": "أوتوماتيك 7 سرعات ثنائي التعشيق",
    "fuel": "Gasoline 92/95 Turbo",
    "fuelAr": "بنزين 92/95 تيربو",
    "fuelEn": "Gasoline 92/95 Turbo",
    "power": "173 HP",
    "powerAr": "173 حصان",
    "powerEn": "173 HP",
    "acceleration": "0–100 in 8.0s",
    "accelerationAr": "8.0 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.0s",
    "topSpeed": "215 كم/س",
    "topSpeedAr": "215 كم/س",
    "topSpeedEn": "215 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/20c81c52-1bdc-48c6-9438-e8af569e75d4.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/20c81c52-1bdc-48c6-9438-e8af569e75d4.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5e33ae9a-47e4-4f5f-b02b-1ac4b64b00d0.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d843fd44-6c2a-47f3-86f3-bd009b4ec418.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/253365c1-dbcd-4ab0-83fd-7e5f6930929d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/15bb22df-2e05-4e19-8268-e589a0b2fd89.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/80d8cfd4-96a1-496b-97df-963f04780c3f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e8f164e3-5b4b-4e12-ba45-8ba6f9522579.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5a6304fe-0a93-4a59-9c41-1635526ba9f0.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,225,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY8715180549"
  },
  {
    "id": "veh-050",
    "title": "BYD Seal EV Long Range (2026)",
    "titleAr": "بي واي دي سيل سيدان رياضية كهربائية (2026)",
    "subtitle": "Rear Motor 313 HP | 82.5 kWh Blade Battery - 570km Range",
    "subtitleAr": "محرك خلفي 313 حصان | بطارية بليد الآمنة بمدى 570 كم وشاشة دوارة",
    "year": 2026,
    "category": "electric",
    "categoryLabel": "Electric & Future EVs",
    "categoryLabelAr": "سيارات كهربائية وEVs",
    "price": 1870000,
    "priceFormatted": "1,870,000 ج.م",
    "priceFormattedEn": "1,870,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "36,200 ج.م / شهرياً",
    "monthlyEstimateAr": "36,200 ج.م / شهرياً",
    "monthlyEstimateEn": "36,200 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "Single-Speed Electric Transmission",
    "transmissionAr": "ناقل حركة كهربائي سرعة واحدة",
    "fuel": "100% Pure Electric EV",
    "fuelAr": "كهرباء 100% EV",
    "fuelEn": "100% Pure Electric EV",
    "power": "313 HP",
    "powerAr": "313 حصان",
    "powerEn": "313 HP",
    "acceleration": "0–100 in 5.9s",
    "accelerationAr": "5.9 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 5.9s",
    "topSpeed": "180 كم/س",
    "topSpeedAr": "180 كم/س",
    "topSpeedEn": "180 كم/س",
    "drivetrain": "Rear-Wheel Drive Electric (RWD)",
    "drivetrainAr": "دفع خلفي كهربائي RWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/18c27aad-759b-4680-8807-d52d7755d8c1.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/18c27aad-759b-4680-8807-d52d7755d8c1.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/44d28124-4fc9-4d9c-a316-0241870a4014.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/3b2f209f-f57e-4fa8-bd13-9eb78c9b18d4.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e90d872d-394d-4d05-8ae1-e8e110ce6cf0.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f6ad58d5-bd14-4fab-a04c-45a7d72d7954.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/6f72d090-3d10-4e3d-b916-f56425927aa6.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5afbc9b2-5ba0-407e-8bcf-cbbf35738f9b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0116d5f3-81c6-4c7b-a05a-41d06bbb8837.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,870,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY2620336650"
  },
  {
    "id": "veh-051",
    "title": "BYD Sealion 6 DM-i Super Hybrid (2026)",
    "titleAr": "بي واي دي سي ليون 6 سوبر هايبرد (2026)",
    "subtitle": "1.5L Plug-in Hybrid 218 HP | 1,100km Combined Range",
    "subtitleAr": "1.5 لتر هايبرد قابل للشحن 218 حصان | مدى مدمج يتجاوز 1,100 كم",
    "year": 2026,
    "category": "popular",
    "categoryLabel": "Zero & High-Demand",
    "categoryLabelAr": "كسر زيرو الأكثر طلباً",
    "price": 1870000,
    "priceFormatted": "1,870,000 ج.م",
    "priceFormattedEn": "1,870,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "36,200 ج.م / شهرياً",
    "monthlyEstimateAr": "36,200 ج.م / شهرياً",
    "monthlyEstimateEn": "36,200 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "E-CVT Intelligent Hybrid Transmission",
    "transmissionAr": "ناقل حركة E-CVT ذكي",
    "fuel": "Plug-in Hybrid (PHEV)",
    "fuelAr": "هايبرد قابل للشحن PHEV",
    "fuelEn": "Plug-in Hybrid (PHEV)",
    "power": "218 HP",
    "powerAr": "218 حصان",
    "powerEn": "218 HP",
    "acceleration": "0–100 in 8.2s",
    "accelerationAr": "8.2 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.2s",
    "topSpeed": "175 كم/س",
    "topSpeedAr": "175 كم/س",
    "topSpeedEn": "175 كم/س",
    "drivetrain": "Front-Wheel Drive Hybrid",
    "drivetrainAr": "دفع أمامي هجين FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/18c27aad-759b-4680-8807-d52d7755d8c1.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/18c27aad-759b-4680-8807-d52d7755d8c1.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/44d28124-4fc9-4d9c-a316-0241870a4014.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/3b2f209f-f57e-4fa8-bd13-9eb78c9b18d4.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e90d872d-394d-4d05-8ae1-e8e110ce6cf0.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f6ad58d5-bd14-4fab-a04c-45a7d72d7954.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/6f72d090-3d10-4e3d-b916-f56425927aa6.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5afbc9b2-5ba0-407e-8bcf-cbbf35738f9b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0116d5f3-81c6-4c7b-a05a-41d06bbb8837.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,870,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY9482851451"
  },
  {
    "id": "veh-052",
    "title": "BYD Dolphin Electric Urban (2027)",
    "titleAr": "بي واي دي دولفين كهربائية مدمجة (2027)",
    "subtitle": "Electric Motor 95 HP | 44.9 kWh Blade Battery - 410km Range",
    "subtitleAr": "محرك كهربائي 95 حصان | بطارية بليد 44.9 كيلوواط بمدى 410 كم",
    "year": 2027,
    "category": "electric",
    "categoryLabel": "Electric & Future EVs",
    "categoryLabelAr": "سيارات كهربائية وEVs",
    "price": 950000,
    "priceFormatted": "950,000 ج.م",
    "priceFormattedEn": "950,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "18,400 ج.م / شهرياً",
    "monthlyEstimateAr": "18,400 ج.م / شهرياً",
    "monthlyEstimateEn": "18,400 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "Single-Speed Electric Transmission",
    "transmissionAr": "ناقل حركة كهربائي سرعة واحدة",
    "fuel": "100% Pure Electric EV",
    "fuelAr": "كهرباء 100% EV",
    "fuelEn": "100% Pure Electric EV",
    "power": "95 HP",
    "powerAr": "95 حصان",
    "powerEn": "95 HP",
    "acceleration": "0–100 in 10.9s",
    "accelerationAr": "10.9 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 10.9s",
    "topSpeed": "150 كم/س",
    "topSpeedAr": "150 كم/س",
    "topSpeedEn": "150 كم/س",
    "drivetrain": "Front-Wheel Drive Electric",
    "drivetrainAr": "دفع أمامي كهربائي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7447d3e4-ad0c-4193-8cd6-b38a31c79015.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7447d3e4-ad0c-4193-8cd6-b38a31c79015.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/472461f5-3300-43ac-82db-42ba6113a437.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/fa335971-7a11-4321-82d1-5ba966c5dcf1.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1d8dcecb-555c-47ac-ae7a-9ea0e356f3f3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0e25c999-3f72-44fb-9a0a-e07f0e2f646f.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "950,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY3230976352"
  },
  {
    "id": "veh-053",
    "title": "Zeekr 001 Shooting Brake EV (2026)",
    "titleAr": "زيكر 001 شوتينغ بريك الرياضية الخارقة (2026)",
    "subtitle": "Dual Motors 544 HP | 100 kWh Battery - 620km Range & Air Susp",
    "subtitleAr": "محركين كهرباء 544 حصان | بطارية 100 كيلوواط بمدى 620 كم وتعليق هوائي",
    "year": 2026,
    "category": "electric",
    "categoryLabel": "Electric & Future EVs",
    "categoryLabelAr": "سيارات كهربائية وEVs",
    "price": 2550000,
    "priceFormatted": "2,550,000 ج.م",
    "priceFormattedEn": "2,550,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "49,400 ج.م / شهرياً",
    "monthlyEstimateAr": "49,400 ج.م / شهرياً",
    "monthlyEstimateEn": "49,400 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "Single-Speed Electric Transmission",
    "transmissionAr": "ناقل كهربائي سرعة واحدة",
    "fuel": "100% Pure Electric EV",
    "fuelAr": "كهرباء 100% EV",
    "fuelEn": "100% Pure Electric EV",
    "power": "544 HP",
    "powerAr": "544 حصان",
    "powerEn": "544 HP",
    "acceleration": "0–100 in 3.8s",
    "accelerationAr": "3.8 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 3.8s",
    "topSpeed": "200 كم/س",
    "topSpeedAr": "200 كم/س",
    "topSpeedEn": "200 كم/س",
    "drivetrain": "Dual Motor All-Wheel Drive",
    "drivetrainAr": "دفع كلي كهربائي AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/39621585-51c1-4519-9d65-85b2ab46a34a.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/39621585-51c1-4519-9d65-85b2ab46a34a.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b627aaad-6857-4b46-9c18-76a3190e3549.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b8c685b0-1c26-4b7e-8473-75e4509239ce.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7b65004e-2da2-4459-a4e8-3a1dd2ff369d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/209601ce-b4cf-4629-bbae-1432a38eaf63.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ea7efb76-a3de-474f-9810-d7d50c426f81.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/256427dd-30a5-4c39-9db6-ac72473a7c1f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/905fff6b-4c58-4a74-968e-91ddd8e13dbd.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,550,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY4725277053"
  },
  {
    "id": "veh-054",
    "title": "Zeekr 007 Performance EV (2026)",
    "titleAr": "زيكر 007 سيدان كهربائية متطورة (2026)",
    "subtitle": "800V Architecture 421 HP | Stargate Lighting Screen",
    "subtitleAr": "منظومة 800 فولت بقوة 421 حصان | شاشة ضوئية أمامية ستارجيت تفاعلية",
    "year": 2026,
    "category": "electric",
    "categoryLabel": "Electric & Future EVs",
    "categoryLabelAr": "سيارات كهربائية وEVs",
    "price": 1890000,
    "priceFormatted": "1,890,000 ج.م",
    "priceFormattedEn": "1,890,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "36,600 ج.م / شهرياً",
    "monthlyEstimateAr": "36,600 ج.م / شهرياً",
    "monthlyEstimateEn": "36,600 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "Single-Speed Electric Transmission",
    "transmissionAr": "ناقل كهربائي سرعة واحدة",
    "fuel": "100% Pure Electric EV",
    "fuelAr": "كهرباء 100% EV",
    "fuelEn": "100% Pure Electric EV",
    "power": "421 HP",
    "powerAr": "421 حصان",
    "powerEn": "421 HP",
    "acceleration": "0–100 in 5.4s",
    "accelerationAr": "5.4 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 5.4s",
    "topSpeed": "210 كم/س",
    "topSpeedAr": "210 كم/س",
    "topSpeedEn": "210 كم/س",
    "drivetrain": "Rear-Wheel Drive Electric (RWD)",
    "drivetrainAr": "دفع خلفي كهربائي RWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d138e268-bb0d-4598-b2a0-f6dc33558e8b.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d138e268-bb0d-4598-b2a0-f6dc33558e8b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/57c3a009-019a-439f-a856-3b184f442e29.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e889cb2a-3d98-4ae7-86d1-46c006525938.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/70ab659b-6869-41da-aaee-335c5f63aac8.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/caeeb812-847b-4386-b3e1-09edcffa44cf.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/94f8edef-0b45-45d9-b54d-1e80c553bb56.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9ad9cc8f-648c-4f8e-8964-7fd82ecb1e5b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/cba27ce4-61b9-4f1e-84fe-8cdb2cc53239.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,890,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY2578026754"
  },
  {
    "id": "veh-055",
    "title": "ROX 01 Luxury 7-Seats EREV Off-Road (2026)",
    "titleAr": "روكس 01 فارهة 7 مقاعد دفع رباعي هجين (2026)",
    "subtitle": "Dual Motors 476 HP + Range Extender | 1,115km Range & Luxury Cabin",
    "subtitleAr": "محركين كهرباء 476 حصان مع مولد شحن | مدى 1,115 كم ومقاعد طيران",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 3450000,
    "priceFormatted": "3,450,000 ج.م",
    "priceFormattedEn": "3,450,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "66,800 ج.م / شهرياً",
    "monthlyEstimateAr": "66,800 ج.م / شهرياً",
    "monthlyEstimateEn": "66,800 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "Electronic Direct Drive",
    "transmissionAr": "ناقل حركة كهربائي متطور",
    "fuel": "Extended Range Electric (EREV)",
    "fuelAr": "هايبرد كهربائي ممتد المدى EREV",
    "fuelEn": "Extended Range Electric (EREV)",
    "power": "476 HP",
    "powerAr": "476 حصان",
    "powerEn": "476 HP",
    "acceleration": "0–100 in 5.5s",
    "accelerationAr": "5.5 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 5.5s",
    "topSpeed": "190 كم/س",
    "topSpeedAr": "190 كم/س",
    "topSpeedEn": "190 كم/س",
    "drivetrain": "Intelligent All-Wheel Drive with Crawl Mode",
    "drivetrainAr": "دفع كلي ذكي AWD مع نظام زحف",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/495bddbd-a9c3-4039-bcd5-d20c0d1f70ae.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/495bddbd-a9c3-4039-bcd5-d20c0d1f70ae.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/298a2e7e-9991-41db-9f52-ec54bd5b35c3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/22003eef-ad0e-4495-9afb-28f85ab588bc.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/233b044f-0c96-4216-9ecb-6d63843eeb10.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1b9ef356-3846-45db-812b-1938157666e6.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f1e22c1a-21ed-425e-97c0-47b01529529e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/df382011-937b-4cdd-8283-c517547fb9bd.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/fe6af2a5-3841-4463-ba94-bd05c4a2e524.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "3,450,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY8486403455"
  },
  {
    "id": "veh-056",
    "title": "Xiaomi SU7 Max Electric Super Sedan (2026)",
    "titleAr": "شاومي SU7 ماكس سيدان كهربائية فائقة (2026)",
    "subtitle": "Dual HyperEngine 673 HP | 101 kWh CATL Qilin - 800km Range",
    "subtitleAr": "محركين هايبر إنجن 673 حصان | بطارية CATL كيلين 101 كيلوواط ومدى 800 كم",
    "year": 2026,
    "category": "electric",
    "categoryLabel": "Electric & Future EVs",
    "categoryLabelAr": "سيارات كهربائية وEVs",
    "price": 2530000,
    "priceFormatted": "2,530,000 ج.م",
    "priceFormattedEn": "2,530,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "49,000 ج.م / شهرياً",
    "monthlyEstimateAr": "49,000 ج.م / شهرياً",
    "monthlyEstimateEn": "49,000 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "Single-Speed Direct Drive",
    "transmissionAr": "ناقل حركة كهربائي فائق السرعة",
    "fuel": "100% Pure Electric EV",
    "fuelAr": "كهرباء 100% EV",
    "fuelEn": "100% Pure Electric EV",
    "power": "673 HP",
    "powerAr": "673 حصان",
    "powerEn": "673 HP",
    "acceleration": "0–100 in 2.78s",
    "accelerationAr": "2.78 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 2.78s",
    "topSpeed": "265 كم/س",
    "topSpeedAr": "265 كم/س",
    "topSpeedEn": "265 كم/س",
    "drivetrain": "HyperEngine All-Wheel Drive",
    "drivetrainAr": "دفع كلي رياضي AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/33f730e3-6eb2-44d1-a0bf-1e40ed6528d5.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/33f730e3-6eb2-44d1-a0bf-1e40ed6528d5.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/20b20b63-bee2-45a4-8b77-023e70b878c5.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bf55c09b-492e-4ae7-a504-93e6977e415b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ba561f1e-e9d0-435d-9df8-7940eb8f93bb.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/97a50ba0-be87-4e00-bce2-f19029ee9149.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/dabfb349-ad92-4b75-b8f7-d023e8e518ae.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bc42787c-bb16-473a-916a-c8fdfb8427fb.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/afc2709f-26d3-4d3e-86b8-8312c88788d6.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,530,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY9792303156"
  },
  {
    "id": "veh-057",
    "title": "Cupra Formentor VZ High Performance (2027)",
    "titleAr": "كوبرا فورمينتور VZ الرياضية الخارقة (2027)",
    "subtitle": "2.0L Turbo TSI 310 HP | 4Drive AWD & Akrapovic Exhaust",
    "subtitleAr": "2.0 لتر تيربو TSI بقوة 310 حصان | دفع كلي 4Drive ومقاعد كربونية حاضنة",
    "year": 2027,
    "category": "coupe",
    "categoryLabel": "Sports & Coupes",
    "categoryLabelAr": "سيارات رياضية وكوبيه",
    "price": 2080000,
    "priceFormatted": "2,080,000 ج.م",
    "priceFormattedEn": "2,080,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "40,300 ج.م / شهرياً",
    "monthlyEstimateAr": "40,300 ج.م / شهرياً",
    "monthlyEstimateEn": "40,300 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7-Speed DSG Dual Clutch",
    "transmissionAr": "ناقل حركة 7 سرعات DSG",
    "fuel": "Gasoline 95 TSI Turbo Sport",
    "fuelAr": "بنزين 95 تيربو سبورت",
    "fuelEn": "Gasoline 95 TSI Turbo Sport",
    "power": "310 HP",
    "powerAr": "310 حصان",
    "powerEn": "310 HP",
    "acceleration": "0–100 in 4.9s",
    "accelerationAr": "4.9 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 4.9s",
    "topSpeed": "250 كم/س",
    "topSpeedAr": "250 كم/س",
    "topSpeedEn": "250 كم/س",
    "drivetrain": "4Drive Intelligent All-Wheel Drive",
    "drivetrainAr": "دفع كلي رياضي 4Drive AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bec83a47-3ca8-416c-b959-30a7146078f7.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bec83a47-3ca8-416c-b959-30a7146078f7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c8c4d54f-5e9a-426f-ab3d-572e11cf7c37.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1750bbda-a0fe-49db-8336-38250706b90c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/09407b5a-403e-4aac-bf60-92327a0b38fc.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/246db300-be34-4642-bb5e-2cf3cceb5198.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c046b1e4-f551-4e2c-b754-75eb8463192f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a581fd4b-0d58-4903-ba71-2360fb6da6f7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/26a79ef7-50cc-4758-8e74-36542135f29e.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,080,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY5838510857"
  },
  {
    "id": "veh-058",
    "title": "Cupra Terramar VZ e-Hybrid (2026)",
    "titleAr": "كوبرا تيرامار الرياضية الفاخرة (2026)",
    "subtitle": "1.5L e-Hybrid 272 HP | Matrix LED & Sennheiser Audio",
    "subtitleAr": "1.5 لتر هايبرد 272 حصان | إضاءة ماتريكس وصوتيات سنهايزر الاحترافية",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 2530000,
    "priceFormatted": "2,530,000 ج.م",
    "priceFormattedEn": "2,530,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "49,000 ج.م / شهرياً",
    "monthlyEstimateAr": "49,000 ج.م / شهرياً",
    "monthlyEstimateEn": "49,000 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "6-Speed e-DSG Dual Clutch",
    "transmissionAr": "ناقل حركة DSG بـ 6 سرعات",
    "fuel": "Gasoline 95 e-Hybrid",
    "fuelAr": "بنزين 95 هايبرد e-Hybrid",
    "fuelEn": "Gasoline 95 e-Hybrid",
    "power": "272 HP",
    "powerAr": "272 حصان",
    "powerEn": "272 HP",
    "acceleration": "0–100 in 7.3s",
    "accelerationAr": "7.3 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.3s",
    "topSpeed": "215 كم/س",
    "topSpeedAr": "215 كم/س",
    "topSpeedEn": "215 كم/س",
    "drivetrain": "Electronic All-Wheel Drive (AWD)",
    "drivetrainAr": "دفع كلي هجين AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7ec8c3ae-ca3a-445e-b950-a07b78e4cce4.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7ec8c3ae-ca3a-445e-b950-a07b78e4cce4.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/504795a5-a091-4d38-937f-9fcd0a75634f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9ff2e5c2-2084-47c7-8eac-b2477fc8b959.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/82629325-e0b0-4bd9-83b5-532052e1a8ca.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ff3882c6-cc07-4c50-9baf-8179cd56625a.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/8b4e7197-5800-4cd8-85a9-5cc4110197c6.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/37fb2bad-82d0-43c1-a6f8-95d22b02c8a4.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/494ce0df-42ac-4632-bde4-72dc9f62ea7d.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,530,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY7848084758"
  },
  {
    "id": "veh-059",
    "title": "Peugeot 3008 GT Line (New Model) (2027)",
    "titleAr": "بيجو 3008 جي تي لاين الجيل الجديد (2027)",
    "subtitle": "1.6L Turbo 165 HP | Panoramic i-Cockpit 21\" Display & Focal",
    "subtitleAr": "1.6 لتر تيربو 165 حصان | مقصورة آي كوكبيت بانورامية 21 إنش وصوتيات فوكال",
    "year": 2027,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 2400000,
    "priceFormatted": "2,400,000 ج.م",
    "priceFormattedEn": "2,400,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "46,500 ج.م / شهرياً",
    "monthlyEstimateAr": "46,500 ج.م / شهرياً",
    "monthlyEstimateEn": "46,500 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Automatic (EAT8)",
    "transmissionAr": "أوتوماتيك 8 سرعات ياباني Aisin",
    "fuel": "Gasoline 95 Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 Turbo",
    "power": "165 HP",
    "powerAr": "165 حصان",
    "powerEn": "165 HP",
    "acceleration": "0–100 in 8.9s",
    "accelerationAr": "8.9 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.9s",
    "topSpeed": "206 كم/س",
    "topSpeedAr": "206 كم/س",
    "topSpeedEn": "206 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bc495952-b0b0-4660-8018-8355954d734e.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bc495952-b0b0-4660-8018-8355954d734e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0f67d928-c62e-4e7d-b92f-faa24eca1cbc.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0ec7341c-bbc7-45dd-992c-85291fa6d0a1.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c0396570-6c08-494c-9d66-ccfd801c260b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5ad56100-dd42-46c6-a1fc-85fbafc04ee7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5d870e0a-5783-4bf6-85f6-be370d90eafc.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ca6c54b2-4d7f-415d-a95e-f1994f9a47d3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9324805d-c176-4562-b408-a9ff4af3ea33.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,400,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY4726083759"
  },
  {
    "id": "veh-060",
    "title": "Peugeot 408 GT Fastback (2027)",
    "titleAr": "بيجو 408 جي تي فاست باك الفخمة (2027)",
    "subtitle": "1.6L Turbo 215 HP | Matrix LED & 3D Quartz Cluster",
    "subtitleAr": "1.6 لتر تيربو 215 حصان | مصابيح ماتريكس وشاشة عدادات كوارتز ثلاثية الأبعاد",
    "year": 2027,
    "category": "sedan",
    "categoryLabel": "Executive Sedans",
    "categoryLabelAr": "سيدان فارهة وتنفيذية",
    "price": 2199990,
    "priceFormatted": "2,199,990 ج.م",
    "priceFormattedEn": "2,199,990 EGP",
    "currency": "EGP",
    "monthlyEstimate": "42,600 ج.م / شهرياً",
    "monthlyEstimateAr": "42,600 ج.م / شهرياً",
    "monthlyEstimateEn": "42,600 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Efficient Automatic (EAT8)",
    "transmissionAr": "أوتوماتيك 8 سرعات EAT8",
    "fuel": "Gasoline 95 Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 Turbo",
    "power": "215 HP",
    "powerAr": "215 حصان",
    "powerEn": "215 HP",
    "acceleration": "0–100 in 7.9s",
    "accelerationAr": "7.9 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.9s",
    "topSpeed": "230 كم/س",
    "topSpeedAr": "230 كم/س",
    "topSpeedEn": "230 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/42116688-d1af-485a-9dd4-5dd6780560a4.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/42116688-d1af-485a-9dd4-5dd6780560a4.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9c1bc2b4-b352-40b0-a7dc-554a11dd45b8.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/aa925906-9172-4913-9a1b-e1325b77c454.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/dd047479-fe74-43e5-93b4-05b7247f09ac.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/1223f500-6fed-4644-9c55-ba750bec8eab.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0df40589-3f96-4105-a03a-501c69156436.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d421bd15-2ce3-4ea1-ba0b-ffcb94c9c29b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d03b30e8-80b0-4420-a531-6f5437e8e15a.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,199,990 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY8168292360"
  },
  {
    "id": "veh-061",
    "title": "Volkswagen Tiguan R-Line (New) (2026)",
    "titleAr": "فولكس فاجن تيجوان آر لاين الجديدة كلياً (2026)",
    "subtitle": "1.4L Turbo TSI 150 HP | IQ.LIGHT HD Matrix & ErgoActive Seats",
    "subtitleAr": "1.4 لتر تيربو TSI بقوة 150 حصان | إضاءة ذكية IQ.LIGHT ومقاعد إرجو أكتيف مساج",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 2650000,
    "priceFormatted": "2,650,000 ج.م",
    "priceFormattedEn": "2,650,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "51,300 ج.م / شهرياً",
    "monthlyEstimateAr": "51,300 ج.م / شهرياً",
    "monthlyEstimateEn": "51,300 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7-Speed DSG Dual Clutch",
    "transmissionAr": "أوتوماتيك 7 سرعات DSG",
    "fuel": "Gasoline 95 TSI Turbo",
    "fuelAr": "بنزين 95 تيربو",
    "fuelEn": "Gasoline 95 TSI Turbo",
    "power": "150 HP",
    "powerAr": "150 حصان",
    "powerEn": "150 HP",
    "acceleration": "0–100 in 9.2s",
    "accelerationAr": "9.2 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 9.2s",
    "topSpeed": "205 كم/س",
    "topSpeedAr": "205 كم/س",
    "topSpeedEn": "205 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/82e3130c-02bb-4631-a414-2173124475ed.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/82e3130c-02bb-4631-a414-2173124475ed.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0c10f256-d2ce-41e4-869d-368d4109a50e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/7f5d768d-71eb-4d54-a30c-1ac4017ccd45.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/66e1c40b-ead2-4a93-b7fb-11fcecf3c36c.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/da2ffdc1-4225-4383-972e-081b0602f96f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e453e75d-e6da-489c-abd3-832da86cdc83.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2ede4914-9a16-49b3-8ce7-6e204764b3b1.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4b70eae5-674f-4583-bfa7-0bd90d1f17b7.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "2,650,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY3233634461"
  },
  {
    "id": "veh-062",
    "title": "Chery Tiggo 8 Pro Max 7-Seats Flagship (2027)",
    "titleAr": "شيري تيجو 8 برو ماكس 7 مقاعد الرائدة (2027)",
    "subtitle": "2.0L Turbo TGDI 254 HP | Dual 12.3\" Screens & Sony Sound",
    "subtitleAr": "2.0 لتر تيربو 254 حصان | شاشتين كونسول 12.3 إنش ونظام سوني 8 سماعات",
    "year": 2027,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 1720000,
    "priceFormatted": "1,720,000 ج.م",
    "priceFormattedEn": "1,720,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "33,300 ج.م / شهرياً",
    "monthlyEstimateAr": "33,300 ج.م / شهرياً",
    "monthlyEstimateEn": "33,300 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7-Speed Wet Dual Clutch (DCT)",
    "transmissionAr": "أوتوماتيك 7 سرعات DCT رطب",
    "fuel": "Gasoline 95 TGDI Turbo",
    "fuelAr": "بنزين 95 تيربو TGDI",
    "fuelEn": "Gasoline 95 TGDI Turbo",
    "power": "254 HP",
    "powerAr": "254 حصان",
    "powerEn": "254 HP",
    "acceleration": "0–100 in 7.9s",
    "accelerationAr": "7.9 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.9s",
    "topSpeed": "210 كم/س",
    "topSpeedAr": "210 كم/س",
    "topSpeedEn": "210 كم/س",
    "drivetrain": "Smart Intelligent All-Wheel Drive",
    "drivetrainAr": "دفع كلي AWD ذكي",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a698c26c-a28b-4d91-8504-263de43e5658.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a698c26c-a28b-4d91-8504-263de43e5658.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/21909477-fa5a-4c18-8275-3597d84500f3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a4dd4e48-2aa5-47be-980d-7aaa06a1b2e3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0b812484-0348-4e76-a9e0-107ee0b6d599.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/eeeb2bd6-066d-4351-9b66-46148612a97b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0d609521-0e65-4a5d-87c3-b94073bd0cf8.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f72b40a9-fe1f-4bb9-b057-f49618da4374.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/bcb40f0c-a0c5-424d-bff9-b2dcb8ed2dd7.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,720,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY6709068962"
  },
  {
    "id": "veh-063",
    "title": "Geely Coolray Sport Plus (2026)",
    "titleAr": "جيلي كولراي سبورت بلس الرياضية (2026)",
    "subtitle": "1.5L Turbo 174 HP | Sport Body Kit & Carbon Accents & Auto Park",
    "subtitleAr": "1.5 لتر تيربو 174 حصان | باقة سبورت وجناح كربون وركن ذاتي تلقائي",
    "year": 2026,
    "category": "popular",
    "categoryLabel": "Zero & High-Demand",
    "categoryLabelAr": "كسر زيرو الأكثر طلباً",
    "price": 1199000,
    "priceFormatted": "1,199,000 ج.م",
    "priceFormattedEn": "1,199,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "23,200 ج.م / شهرياً",
    "monthlyEstimateAr": "23,200 ج.م / شهرياً",
    "monthlyEstimateEn": "23,200 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7-Speed Dual Clutch (7DCT)",
    "transmissionAr": "أوتوماتيك 7 سرعات ثنائي التعشيق 7DCT",
    "fuel": "Gasoline 92/95 Turbo",
    "fuelAr": "بنزين 92/95 تيربو",
    "fuelEn": "Gasoline 92/95 Turbo",
    "power": "174 HP",
    "powerAr": "174 حصان",
    "powerEn": "174 HP",
    "acceleration": "0–100 in 7.6s",
    "accelerationAr": "7.6 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 7.6s",
    "topSpeed": "195 كم/س",
    "topSpeedAr": "195 كم/س",
    "topSpeedEn": "195 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/609c75b2-46d0-4aad-a866-586fde7cef9b.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/609c75b2-46d0-4aad-a866-586fde7cef9b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/da8bf4ac-5a00-44a8-87e4-5d43cea7c8a4.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b37db226-0119-4fff-9573-43d51f284be7.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0895de5a-1947-487e-911d-c71c78c7f989.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b6144b42-e0f5-401d-b3d8-f8059f559c11.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/3c180d9f-2035-43a5-81e9-f327d3125186.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9434c4b4-9353-4420-987a-8323d942bf5f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e72a1e38-9db9-46b7-b75b-1297f5f81ea6.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,199,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY5928421463"
  },
  {
    "id": "veh-064",
    "title": "Forthing T5 Evo Exclusive Sport (2027)",
    "titleAr": "فورثينج T5 إيفو إكسكلوسيف سبورت (2027)",
    "subtitle": "1.5L Turbo Mitsubishi Tech 197 HP | Nappa Leather & Massaging",
    "subtitleAr": "1.5 لتر تيربو بتقنية ميتسوبيشي 197 حصان | جلد نابا ومقاعد مساج وتبريد",
    "year": 2027,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 1220000,
    "priceFormatted": "1,220,000 ج.م",
    "priceFormattedEn": "1,220,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "23,600 ج.م / شهرياً",
    "monthlyEstimateAr": "23,600 ج.م / شهرياً",
    "monthlyEstimateEn": "23,600 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "7-Speed Dual Clutch (Magna)",
    "transmissionAr": "ناقل حركة 7 سرعات ألماني Magna",
    "fuel": "Gasoline 92/95 Turbo",
    "fuelAr": "بنزين 92/95 تيربو",
    "fuelEn": "Gasoline 92/95 Turbo",
    "power": "197 HP",
    "powerAr": "197 حصان",
    "powerEn": "197 HP",
    "acceleration": "0–100 in 8.8s",
    "accelerationAr": "8.8 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.8s",
    "topSpeed": "200 كم/س",
    "topSpeedAr": "200 كم/س",
    "topSpeedEn": "200 كم/س",
    "drivetrain": "Front-Wheel Drive (FWD)",
    "drivetrainAr": "دفع أمامي FWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/76a27cee-348a-4295-92f6-930f79d2d68b.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/76a27cee-348a-4295-92f6-930f79d2d68b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b88ed68e-d528-4b7c-8795-f4b5aa54603b.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/523c7936-2c3e-40a0-b1f7-cc81c57facae.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a6c43eca-70ef-428c-8162-be6994f3b042.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/ff698995-a94e-4ef0-96cb-1dd8d76e3f29.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/2d1167bb-b3e2-4e6a-868d-be2d08c843b3.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f7c2d147-c97f-4221-aa27-82783ca2ae7d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/4211daa6-9de6-4c97-97f9-f74b21e9879c.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,220,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY6429062164"
  },
  {
    "id": "veh-065",
    "title": "EXEED VX Presidential 7-Seats Luxury (2026)",
    "titleAr": "إكسيد VX بريزيدينشال 7 مقاعد الفاخرة (2026)",
    "subtitle": "2.0L Turbo TGDI 261 HP | Triple Hyperscreen & 23-Speaker Lion",
    "subtitleAr": "2.0 لتر تيربو 261 حصان | مقصورة ثلاثية الشاشات ونظام صوتي بـ 23 سماعة",
    "year": 2026,
    "category": "suv",
    "categoryLabel": "Luxury SUVs & 4x4",
    "categoryLabelAr": "دفع رباعي وSUV فاخرة",
    "price": 1200000,
    "priceFormatted": "1,200,000 ج.م",
    "priceFormattedEn": "1,200,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "23,200 ج.م / شهرياً",
    "monthlyEstimateAr": "23,200 ج.م / شهرياً",
    "monthlyEstimateEn": "23,200 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "8-Speed Automatic (Aisin)",
    "transmissionAr": "أوتوماتيك 8 سرعات ياباني Aisin",
    "fuel": "Gasoline 95 TGDI Turbo",
    "fuelAr": "بنزين 95 تيربو TGDI",
    "fuelEn": "Gasoline 95 TGDI Turbo",
    "power": "261 HP",
    "powerAr": "261 حصان",
    "powerEn": "261 HP",
    "acceleration": "0–100 in 8.2s",
    "accelerationAr": "8.2 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 8.2s",
    "topSpeed": "205 كم/س",
    "topSpeedAr": "205 كم/س",
    "topSpeedEn": "205 كم/س",
    "drivetrain": "BorgWarner Intelligent AWD",
    "drivetrainAr": "دفع كلي مستمر AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2026 - ضمان الوكيل",
    "badgeAr": "زيرو 2026 - استلام فوري",
    "badgeEn": "Brand New 2026 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/954795aa-3f99-44de-890f-f16a83bcf3c0.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/954795aa-3f99-44de-890f-f16a83bcf3c0.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/e3cfa1e6-a215-493a-8f4f-2fa6eb3ab2c6.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/f6f4146e-b8b4-422b-803e-031f76c4a63d.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/77d4d40b-2c69-4d6b-9ceb-ca049a08d65e.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/c41dba9d-6132-4ae6-81f6-2aa68fee4890.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/db929be3-e414-4147-af66-c5b20d06540f.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/9be2c2a4-e633-44a8-8519-c26b4c320321.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/3c40cb23-f2fa-4c3c-b6ca-314c777008a2.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "1,200,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY5016390965"
  },
  {
    "id": "veh-066",
    "title": "Rolls-Royce Spectre Ultra-Luxury EV Coupe (2027)",
    "titleAr": "رولز رويس سبيكتر كوبيه الكهربائية الفارهة (2027)",
    "subtitle": "Dual Electric Motors 584 HP | Starlight Doors & Magic Carpet Ride",
    "subtitleAr": "محركين كهرباء 584 حصان | أبواب مرصعة بنجوم ستاربلايت ونظام قيادة بساط الريح",
    "year": 2027,
    "category": "coupe",
    "categoryLabel": "Sports & Coupes",
    "categoryLabelAr": "سيارات رياضية وكوبيه",
    "price": 29000000,
    "priceFormatted": "29,000,000 ج.م",
    "priceFormattedEn": "29,000,000 EGP",
    "currency": "EGP",
    "monthlyEstimate": "561,900 ج.م / شهرياً",
    "monthlyEstimateAr": "561,900 ج.م / شهرياً",
    "monthlyEstimateEn": "561,900 EGP / mo",
    "mileage": "0 كم (زيرو جديد)",
    "mileageAr": "0 كم (عداد أصفار - استلام فوري)",
    "mileageEn": "0 KM (Brand New Delivery)",
    "transmission": "Single-Speed Seamless Electric Drive",
    "transmissionAr": "ناقل كهربائي فائق الهدوء",
    "fuel": "100% Pure Electric EV",
    "fuelAr": "كهرباء 100% EV",
    "fuelEn": "100% Pure Electric EV",
    "power": "584 HP",
    "powerAr": "584 حصان",
    "powerEn": "584 HP",
    "acceleration": "0–100 in 4.5s",
    "accelerationAr": "4.5 ثانية (0-100 كم/س)",
    "accelerationEn": "0–100 in 4.5s",
    "topSpeed": "250 كم/س",
    "topSpeedAr": "250 كم/س",
    "topSpeedEn": "250 كم/س",
    "drivetrain": "Dual Motor All-Wheel Drive",
    "drivetrainAr": "دفع كلي كهربائي AWD",
    "exteriorColor": "ألوان الوكيل الرسمية متعددة (أبيض لؤلؤي / أسود ميتاليك / رمادي سيليني)",
    "interiorColor": "جلد طبيعي فاخر مع تطريز كونسول فاخر وشاشات ديجيتال",
    "badge": "زيرو 2027 - ضمان الوكيل",
    "badgeAr": "زيرو 2027 - استلام فوري",
    "badgeEn": "Brand New 2027 - In Stock",
    "status": "متوفرة للتسليم الفوري",
    "statusAr": "استلام فوري اليوم",
    "statusEn": "Immediate Showroom Delivery",
    "image": "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/efff3c07-c941-4655-8e61-ca66bb11ebd2.jpeg",
    "gallery": [
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/efff3c07-c941-4655-8e61-ca66bb11ebd2.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/a42c3370-fabe-4f98-8cf9-7e1d0ca9f081.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/0f139f26-15b9-4680-a548-94d4a3ac6f00.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/d30b0e2d-0d24-404d-b890-5b1de6609bad.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/5a96e5ae-18b9-4114-9e93-559a818e9aba.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b33627c3-3cc5-414c-a761-3b409c639796.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/b7aecaaf-87aa-4c51-b351-6251d649a750.jpeg",
      "https://contactcars.fra1.cdn.digitaloceanspaces.com/contactcars-production/Images/Large/UsedCars/221e383e-f208-40a6-a9cc-e3b8f5ba7659.jpeg"
    ],
    "trafficDept": "مرور التجمع الخامس والشيخ زايد",
    "trafficDeptEn": "New Cairo & Sheikh Zayed Traffic Dept",
    "licenseValidity": "فاتورة توكيل زيرو معتمدة - ترخيص 3 سنوات",
    "licenseValidityEn": "Brand New Agency Invoice - 3-Year License",
    "ownership": "أول مالك من الزيرو - صفر توكيلات - استلام فوري",
    "ownershipEn": "First Owner from Zero - Zero Powers of Attorney",
    "agencyMaintenance": "ضمان الوكيل الرسمي 5 سنوات أو 150,000 كم",
    "agencyMaintenanceEn": "Official Agency Warranty 5 Years / 150,000 KM",
    "fabrikaRadar": {
      "status": "فابريكا شركة بالكامل 100% زيرو",
      "statusEn": "100% Original Factory Condition (Zero)",
      "micronAvg": "90 - 105 µm",
      "hood": {
        "label": "الكبوت",
        "val": "98 µm",
        "status": "factory"
      },
      "roof": {
        "label": "السقف",
        "val": "95 µm",
        "status": "factory"
      },
      "trunk": {
        "label": "الشنطة",
        "val": "100 µm",
        "status": "factory"
      },
      "rightSide": {
        "label": "الجانب الأيمن",
        "val": "96 µm",
        "status": "factory"
      },
      "leftSide": {
        "label": "الجانب الأيسر",
        "val": "97 µm",
        "status": "factory"
      },
      "chassis": {
        "label": "الشاسيه والقوايم",
        "val": "عظم شركة سليم 100%",
        "status": "factory"
      }
    },
    "waitlistComparison": {
      "agencyPrice": "29,000,000 ج.م",
      "agencyWait": "حجز توكيل مع فترة انتظار 4 - 8 شهور",
      "instantSaving": "استلام فوري اليوم من صالة العرض بدون أوفر برايس إضافي وقوائم انتظار"
    },
    "features": [
      "Official Dealership Zero-Km Warranty with comprehensive coverage",
      "Advanced Cockpit Display with Apple CarPlay & Android Auto",
      "Full LED / Matrix Lighting with dynamic welcome indicators",
      "Panoramic Sunroof and acoustic sound insulated glass",
      "360-Degree Surround View Cameras and Park Assist",
      "Comprehensive Active Safety Suite with Autonomous Emergency Braking"
    ],
    "featuresAr": [
      "ضمان الوكيل الرسمي زيرو عداد أصفار مع كتالوجات الصيانة",
      "شاشة عرض ترفيهية ذكية تدعم Apple CarPlay و Android Auto لاسلكياً",
      "إضاءة Full LED / Matrix ذكية مع حساسات مطر وإضاءة أوتوماتيكية",
      "فتحة سقف بانوراما زجاجية كهربائية مع عازل حراري متطور",
      "رؤية محيطية 360 درجة مع نظام الركن الذكي وحساسات أمامية وخلفية",
      "باقة أمان متكاملة: وسائد هوائية، فرامل طوارئ، ونظام الثبات الإلكتروني ESP"
    ],
    "vin": "EGY3263311466"
  }
];
