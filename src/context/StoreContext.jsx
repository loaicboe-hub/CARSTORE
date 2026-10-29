import React, { createContext, useContext, useState, useEffect } from 'react';
import { vehiclesData } from '../data/vehiclesData';
import { brandConfig } from '../config/brandConfig';
import { getVehicles } from '../services/api';

const StoreContext = createContext(null);

// Initial Sell / Consignment Requests (Egyptian Market Context)
const initialSellRequests = [
  {
    id: 'sell-101',
    customerName: 'م. شريف فهمي',
    phone: '+20 10 1122 3344',
    email: 'sherif.fahmy@develop.eg',
    vehicleTitle: '2023 Mercedes-Benz C200 AMG',
    year: 2023,
    mileage: '18,500 كم',
    condition: 'فابريكا بالكامل / صيانات بالتوكيل',
    askingPrice: 3200000,
    estimatedValuation: 3100000,
    currency: 'EGP',
    status: 'under_review', // 'new', 'under_review', 'offer_sent', 'approved', 'rejected'
    date: '2026-10-28',
    notes: 'فابريكا 100% بالكامل، أول يد بدون توكيلات، رخصة سارية سنتين مرور التجمع الخامس.',
  },
  {
    id: 'sell-102',
    customerName: 'د. أحمد عبد المنعم',
    phone: '+20 12 8899 7766',
    email: 'ahmed.monem@cairo-clinic.com',
    vehicleTitle: '2022 BMW 520i Luxury Line',
    year: 2022,
    mileage: '28,000 كم',
    condition: 'ممتازة / صيانة بافاريا المعتمدة',
    askingPrice: 3500000,
    estimatedValuation: 3400000,
    currency: 'EGP',
    status: 'offer_sent',
    date: '2026-10-27',
    notes: 'رخصة سارية مرور الشيخ زايد، دهان إكصدام أمامي نظافة فقط وباقي السيارة فابريكا 100%.',
  },
  {
    id: 'sell-103',
    customerName: 'كريم الجوهري',
    phone: '+20 11 9876 5432',
    email: 'karim.gohary@venture.eg',
    vehicleTitle: '2024 Kia Sportage GT-Line 1.6T',
    year: 2024,
    mileage: '6,200 كم',
    condition: 'كسر زيرو فابريكا 100%',
    askingPrice: 2050000,
    estimatedValuation: 2000000,
    currency: 'EGP',
    status: 'new',
    date: '2026-10-29',
    notes: 'أول يد بدون توكيلات، رخصة سارية مرور المعادي، طلب شراء نقدي فوري بالصالة.',
  },
];

// Initial Rental Fleet (VIP Compound Rentals & Executive Delegations)
const initialRentalFleet = [
  {
    id: 'rent-01',
    title: 'Mercedes-Benz S 450 Maybach Trim',
    category: 'سيدان رئاسية وتنفيذية',
    dailyRate: 18000,
    weeklyRate: 110000,
    deposit: 30000,
    currency: 'EGP',
    status: 'available', // 'available', 'rented', 'maintenance'
    image: '/images/c180_amg.jpg',
    fuel: 'Twin-Turbo V6 (367 HP)',
    seats: 4,
  },
  {
    id: 'rent-02',
    title: 'Land Rover Defender 110 P400 SE',
    category: 'دفع رباعي فاخرة للمواكب والمناسبات',
    dailyRate: 15000,
    weeklyRate: 90000,
    deposit: 25000,
    currency: 'EGP',
    status: 'available',
    image: '/images/defender_110.jpg',
    fuel: '3.0L i6 Turbo MHEV (400 HP)',
    seats: 5,
  },
  {
    id: 'rent-03',
    title: 'Porsche Cayenne Coupe GT Style',
    category: 'سوبر SUV رياضية فاخرة',
    dailyRate: 16500,
    weeklyRate: 98000,
    deposit: 25000,
    currency: 'EGP',
    status: 'rented',
    image: '/images/cayenne_coupe.jpg',
    fuel: '3.0L Twin-Turbo V6 (348 HP)',
    seats: 5,
  },
  {
    id: 'rent-04',
    title: 'Mercedes-AMG G 63 Night Package',
    category: 'أيقونة الدفع الرباعي الخارقة',
    dailyRate: 25000,
    weeklyRate: 150000,
    deposit: 40000,
    currency: 'EGP',
    status: 'available',
    image: '/images/amg_g63.jpg',
    fuel: 'Handcrafted V8 Biturbo (577 HP)',
    seats: 5,
  },
];

// Initial Rental Inquiries
const initialRentalInquiries = [
  {
    id: 'rinq-201',
    customerName: 'أ. حازم ممدوح',
    phone: '+20 10 9988 7766',
    email: 'hazem.m@events-cairo.com',
    vehicleTitle: 'Mercedes-Benz S 450 Maybach Trim',
    startDate: '2026-11-05',
    endDate: '2026-11-08',
    days: 3,
    totalEstimated: 54000,
    currency: 'EGP',
    status: 'confirmed', // 'pending', 'confirmed', 'completed', 'cancelled'
    notes: 'موكب زفاف فاخر في فندق فورسيزونز نايل بلازا مع سائق محترف.',
  },
  {
    id: 'rinq-202',
    customerName: 'م. ليلي النجار',
    phone: '+20 12 3344 5566',
    email: 'layla@elnaggar-holdings.eg',
    vehicleTitle: 'Land Rover Defender 110 P400 SE',
    startDate: '2026-11-12',
    endDate: '2026-11-15',
    days: 3,
    totalEstimated: 45000,
    currency: 'EGP',
    status: 'pending',
    notes: 'استقبال وفد استثماري بمطار القاهرة الدولي والتوصيل لكمبوند بالم هيلز.',
  },
];

// Initial Exchange / Trade-In Requests
const initialExchangeRequests = [
  {
    id: 'exch-301',
    customerName: 'م. طارق الشربيني',
    phone: '+20 10 2000 8899',
    email: 'sherbini@dunes-eg.com',
    currentCar: '2022 Skoda Octavia A8 RS',
    currentCarMileage: '24,000 كم',
    currentCarValue: 1850000,
    desiredCarId: 'veh-001',
    desiredCarTitle: '2024 Mercedes-Benz C180 AMG Line',
    desiredCarPrice: 3450000,
    equityDifference: 1600000,
    currency: 'EGP',
    status: 'inspection_scheduled', // 'pending', 'inspection_scheduled', 'offer_made', 'completed', 'declined'
    date: '2026-10-28',
    notes: 'جاهز لدفع الفرق كاش أو تمويل بنكي CIB بعد فحص الفابريكا في الصالة.',
  },
  {
    id: 'exch-302',
    customerName: 'د. مروان الشافعي',
    phone: '+20 11 5566 7788',
    email: 'marwan@elshafei-med.eg',
    currentCar: '2023 Kia Sportage GT-Line',
    currentCarMileage: '12,000 كم',
    currentCarValue: 1950000,
    desiredCarId: 'veh-002',
    desiredCarTitle: '2023 BMW 520i M-Sport Package',
    desiredCarPrice: 4200000,
    equityDifference: 2250000,
    currency: 'EGP',
    status: 'pending',
    date: '2026-10-29',
    notes: 'طلب معاينة على باب الكومباوند في سوديك ويست الشيخ زايد.',
  },
];

// Initial Inquiries / Leads CRM
const initialInquiries = [
  {
    id: 'inq-401',
    fullName: 'م. وائل البنا',
    phone: '+20 10 6677 8899',
    email: 'wael.banna@construction.eg',
    channel: 'whatsapp',
    type: 'purchase',
    vehicleTitle: '2024 Mercedes-Benz C180 AMG Line',
    message: 'استفسار عن إمكانية التقسيط المباشر عبر بنك CIB ومدة استخراج كارت بنك التوكيل.',
    status: 'new', // 'new', 'contacted', 'in_progress', 'closed'
    date: '2026-10-29 08:30',
  },
  {
    id: 'inq-402',
    fullName: 'فريدة المنياوي',
    phone: '+20 12 4455 6677',
    email: 'farida.m@lifestyle.eg',
    channel: 'phone',
    type: 'testdrive',
    vehicleTitle: '2024 Porsche Cayenne Coupe',
    message: 'طلب حجز معاينة VIP وتجربة قيادة داخل كمبوند سوان ليك التجمع الأول.',
    status: 'contacted',
    date: '2026-10-28 16:15',
  },
  {
    id: 'inq-403',
    fullName: 'أحمد رسلان',
    phone: '+20 10 3344 9911',
    email: 'raslan@tradex-eg.com',
    channel: 'email',
    type: 'tradein',
    vehicleTitle: '2024 Land Rover Defender 110',
    message: 'استفسار عن استبدال سيارتي بورش ماكان 2022 ودفع الفرق وتقييم فابريكا بالمعرض.',
    status: 'in_progress',
    date: '2026-10-27 11:20',
  },
];

// Initial CMS Editable Content (Bilingual EN & AR)
const initialCmsContent = {
  brandName: 'CAR',
  brandNameAr: 'كار',
  brandSuffix: 'IN',
  brandSuffixAr: 'إن',
  legalName: 'CAR IN Luxury Automotive Egypt S.A.E',
  legalNameAr: 'مجموعة كار إن للسيارات الفاخرة ش.م.م',
  // Tagline
  tagline: 'The Pinnacle of Automotive Distinction in Egypt',
  taglineAr: 'الصفوة في تجارة واقتناء السيارات الفاخرة والمعتمدة بمصر',
  // Hero Badge
  heroBadge: '180-Point Certified Master Inspection Passed',
  heroBadgeAr: 'فحص 180 نقطة معتمد • فابريكا بالكامل',
  // Hero Titles
  heroTitleP1: 'The Pinnacle of',
  heroTitleP1Ar: 'قمة التميز في',
  heroTitleP2: 'Automotive Distinction in Egypt',
  heroTitleP2Ar: 'عالم السيارات الفاخرة بمصر',
  // Hero Subtitle
  heroSubtitle:
    "Curators of Egypt's most distinguished luxury, performance, and executive motorcars. Master 180-point certification, direct banking finance, and same-day delivery.",
  heroSubtitleAr:
    'وجهتك الأولى لأرقى وأندر السيارات الفاخرة وكسر الزيرو في مصر. فابريكا بالكامل، فحص معتمد من 180 نقطة، تقسيط مباشر عبر كبرى البنوك، وتسليم فوري بدون قوائم انتظار.',
  // Live Banner Specs
  specOutput: '190–585 HP',
  specOutputAr: '190–585 حصان',
  specAccel: '0–60 in 4.5s',
  specAccelAr: '0–100 في 4.5 ثوانٍ',
  specSpeed: 'Instant Delivery',
  specSpeedAr: 'استلام فوري',
  // Contact
  phone: '+201004491026',
  phoneDisplay: '+20 100 449 1026',
  whatsappNumber: '201004491026',
  email: 'concierge@carin-egypt.com',
  address: 'New Cairo: North 90th St | Sheikh Zayed: Dahshur Link',
  addressAr: 'فرع التجمع الخامس: التسعين الشمالي | فرع زايد: وصلة دهشور',
  city: 'Cairo & Sheikh Zayed, Egypt',
  cityAr: 'القاهرة والشيخ زايد، مصر',
  hours: 'Daily: 11:00 AM – 11:00 PM',
  hoursAr: 'يومياً: 11:00 صباحاً – 11:00 مساءً',
  currency: 'EGP',
  currencySymbol: 'EGP',
  currencySymbolAr: 'ج.م',
  bannerAnnouncement: '✨ Immediate delivery for certified 2024 zero-km luxury inventory with CIB & Contact financing',
  bannerAnnouncementAr: '✨ تسليم فوري لسيارات 2024 كسر زيرو وفابريكا بالكامل مع برامج تقسيط CIB وContact',
  showBanner: true,
};

const sanitizeCmsContent = (saved) => {
  if (!saved) return initialCmsContent;
  const hasAr = (str) => /[\u0600-\u06FF]/.test(str || '');

  return {
    ...initialCmsContent,
    ...saved,
    // Phone numbers: override legacy default numbers
    phone: (!saved.phone || saved.phone === '+201020008899') ? initialCmsContent.phone : saved.phone,
    phoneDisplay: (!saved.phoneDisplay || saved.phoneDisplay === '+20 (10) 2000-8899') ? initialCmsContent.phoneDisplay : saved.phoneDisplay,
    whatsappNumber: (!saved.whatsappNumber || saved.whatsappNumber === '201020008899') ? initialCmsContent.whatsappNumber : saved.whatsappNumber,

    // English fields: strictly purge any Arabic text
    brandName: hasAr(saved.brandName) ? initialCmsContent.brandName : (saved.brandName || initialCmsContent.brandName),
    brandSuffix: hasAr(saved.brandSuffix) ? initialCmsContent.brandSuffix : (saved.brandSuffix || initialCmsContent.brandSuffix),
    legalName: hasAr(saved.legalName) ? initialCmsContent.legalName : (saved.legalName || initialCmsContent.legalName),
    tagline: hasAr(saved.tagline) ? initialCmsContent.tagline : (saved.tagline || initialCmsContent.tagline),
    heroBadge: hasAr(saved.heroBadge) ? initialCmsContent.heroBadge : (saved.heroBadge || initialCmsContent.heroBadge),
    heroTitleP1: hasAr(saved.heroTitleP1) ? initialCmsContent.heroTitleP1 : (saved.heroTitleP1 || initialCmsContent.heroTitleP1),
    heroTitleP2: hasAr(saved.heroTitleP2) ? initialCmsContent.heroTitleP2 : (saved.heroTitleP2 || initialCmsContent.heroTitleP2),
    heroSubtitle: hasAr(saved.heroSubtitle) ? initialCmsContent.heroSubtitle : (saved.heroSubtitle || initialCmsContent.heroSubtitle),
    specOutput: hasAr(saved.specOutput) ? initialCmsContent.specOutput : (saved.specOutput || initialCmsContent.specOutput),
    specAccel: hasAr(saved.specAccel) ? initialCmsContent.specAccel : (saved.specAccel || initialCmsContent.specAccel),
    specSpeed: hasAr(saved.specSpeed) ? initialCmsContent.specSpeed : (saved.specSpeed || initialCmsContent.specSpeed),
    address: hasAr(saved.address) ? initialCmsContent.address : (saved.address || initialCmsContent.address),
    city: hasAr(saved.city) ? initialCmsContent.city : (saved.city || initialCmsContent.city),
    hours: hasAr(saved.hours) ? initialCmsContent.hours : (saved.hours || initialCmsContent.hours),

    // Arabic fields: preserve or fallback to initial Arabic values
    brandNameAr: saved.brandNameAr || (hasAr(saved.brandName) ? saved.brandName : initialCmsContent.brandNameAr),
    brandSuffixAr: saved.brandSuffixAr || (hasAr(saved.brandSuffix) ? saved.brandSuffix : initialCmsContent.brandSuffixAr),
    legalNameAr: saved.legalNameAr || (hasAr(saved.legalName) ? saved.legalName : initialCmsContent.legalNameAr),
    taglineAr: saved.taglineAr || (hasAr(saved.tagline) ? saved.tagline : initialCmsContent.taglineAr),
    heroBadgeAr: saved.heroBadgeAr || (hasAr(saved.heroBadge) ? saved.heroBadge : initialCmsContent.heroBadgeAr),
    heroTitleP1Ar: saved.heroTitleP1Ar || (hasAr(saved.heroTitleP1) ? saved.heroTitleP1 : initialCmsContent.heroTitleP1Ar),
    heroTitleP2Ar: saved.heroTitleP2Ar || (hasAr(saved.heroTitleP2) ? saved.heroTitleP2 : initialCmsContent.heroTitleP2Ar),
    heroSubtitleAr: saved.heroSubtitleAr || (hasAr(saved.heroSubtitle) ? saved.heroSubtitle : initialCmsContent.heroSubtitleAr),
    specOutputAr: saved.specOutputAr || (hasAr(saved.specOutput) ? saved.specOutput : initialCmsContent.specOutputAr),
    specAccelAr: saved.specAccelAr || (hasAr(saved.specAccel) ? saved.specAccel : initialCmsContent.specAccelAr),
    specSpeedAr: saved.specSpeedAr || (hasAr(saved.specSpeed) ? saved.specSpeed : initialCmsContent.specSpeedAr),
    addressAr: saved.addressAr || (hasAr(saved.address) ? saved.address : initialCmsContent.addressAr),
    cityAr: saved.cityAr || (hasAr(saved.city) ? saved.city : initialCmsContent.cityAr),
    hoursAr: saved.hoursAr || (hasAr(saved.hours) ? saved.hours : initialCmsContent.hoursAr),
  };
};

export const StoreProvider = ({ children }) => {
  // 1. Vehicles Store
  const [vehicles, setVehicles] = useState(() => {
    try {
      const saved = localStorage.getItem('autohaus_vehicles');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure data is up to date with Egyptian market EGP inventory
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].currency === 'EGP') {
          return parsed;
        }
      }
      return vehiclesData;
    } catch {
      return vehiclesData;
    }
  });

  // 2. Sell Requests Store
  const [sellRequests, setSellRequests] = useState(() => {
    try {
      const saved = localStorage.getItem('autohaus_sell_requests');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].currency === 'EGP') return parsed;
      }
      return initialSellRequests;
    } catch {
      return initialSellRequests;
    }
  });

  // 3. Rental Fleet Store
  const [rentalFleet, setRentalFleet] = useState(() => {
    try {
      const saved = localStorage.getItem('autohaus_rental_fleet');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].currency === 'EGP') return parsed;
      }
      return initialRentalFleet;
    } catch {
      return initialRentalFleet;
    }
  });

  // 4. Rental Inquiries Store
  const [rentalInquiries, setRentalInquiries] = useState(() => {
    try {
      const saved = localStorage.getItem('autohaus_rental_inquiries');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].currency === 'EGP') return parsed;
      }
      return initialRentalInquiries;
    } catch {
      return initialRentalInquiries;
    }
  });

  // 5. Exchange Requests Store
  const [exchangeRequests, setExchangeRequests] = useState(() => {
    try {
      const saved = localStorage.getItem('autohaus_exchange_requests');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].currency === 'EGP') return parsed;
      }
      return initialExchangeRequests;
    } catch {
      return initialExchangeRequests;
    }
  });

  // 6. Customers & Inquiries Store
  const [inquiries, setInquiries] = useState(() => {
    try {
      const saved = localStorage.getItem('autohaus_inquiries');
      return saved ? JSON.parse(saved) : initialInquiries;
    } catch {
      return initialInquiries;
    }
  });

  // 7. CMS Content Store
  const [cmsContent, setCmsContent] = useState(() => {
    try {
      localStorage.removeItem('autohaus_cms_content'); // Purge legacy Arabic-contaminated cache
      const saved = localStorage.getItem('carin_cms_content_v2');
      return saved ? sanitizeCmsContent(JSON.parse(saved)) : initialCmsContent;
    } catch {
      return initialCmsContent;
    }
  });

  // 8. General Settings Store
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('autohaus_settings');
      return saved
        ? JSON.parse(saved)
        : {
            adminUsername: 'admin',
            adminPassword: 'admin123',
            portalPin: '123456',
            autoApproveInquiries: false,
            emailNotifications: true,
            themeMode: 'light',
            languageDefault: 'en',
          };
    } catch {
      return {
        adminUsername: 'admin',
        adminPassword: 'admin123',
        portalPin: '123456',
        autoApproveInquiries: false,
        emailNotifications: true,
        themeMode: 'light',
        languageDefault: 'en',
      };
    }
  });

  // Persistence Effects
  useEffect(() => {
    try {
      localStorage.setItem('autohaus_vehicles', JSON.stringify(vehicles));
    } catch (e) {
      console.warn('Storage quota note:', e);
    }
  }, [vehicles]);

  useEffect(() => {
    try {
      localStorage.setItem('autohaus_sell_requests', JSON.stringify(sellRequests));
    } catch (e) {
      console.warn('Storage quota note:', e);
    }
  }, [sellRequests]);

  useEffect(() => {
    try {
      localStorage.setItem('autohaus_rental_fleet', JSON.stringify(rentalFleet));
    } catch (e) {
      console.warn('Storage quota note:', e);
    }
  }, [rentalFleet]);

  useEffect(() => {
    try {
      localStorage.setItem('autohaus_rental_inquiries', JSON.stringify(rentalInquiries));
    } catch (e) {
      console.warn('Storage quota note:', e);
    }
  }, [rentalInquiries]);

  useEffect(() => {
    try {
      localStorage.setItem('autohaus_exchange_requests', JSON.stringify(exchangeRequests));
    } catch (e) {
      console.warn('Storage quota note:', e);
    }
  }, [exchangeRequests]);

  useEffect(() => {
    try {
      localStorage.setItem('autohaus_inquiries', JSON.stringify(inquiries));
    } catch (e) {
      console.warn('Storage quota note:', e);
    }
  }, [inquiries]);

  useEffect(() => {
    try {
      localStorage.setItem('carin_cms_content_v2', JSON.stringify(cmsContent));
    } catch (e) {
      console.warn('Storage quota note:', e);
    }
  }, [cmsContent]);

  useEffect(() => {
    try {
      localStorage.setItem('autohaus_settings', JSON.stringify(settings));
    } catch (e) {
      console.warn('Storage quota note:', e);
    }
  }, [settings]);

  // Synchronize Live Catalog (including approved customer vehicles)
  useEffect(() => {
    async function syncCatalog() {
      try {
        const liveCatalog = await getVehicles();
        if (liveCatalog && Array.isArray(liveCatalog) && liveCatalog.length > 0) {
          setVehicles((prev) => {
            const customerVehicles = liveCatalog.filter((v) => v.owner_type === 'customer');
            if (customerVehicles.length === 0) return prev;
            const prevIds = new Set(prev.map((p) => p.id));
            const newVehicles = customerVehicles.filter((c) => !prevIds.has(c.id));
            return newVehicles.length > 0 ? [...prev, ...newVehicles] : prev;
          });
        }
      } catch (err) {
        // Fallback to local catalog
      }
    }
    syncCatalog();
  }, []);

  // ==========================================
  // Vehicle Actions (CRUD)
  // ==========================================
  const addVehicle = (newVehicle) => {
    const id = newVehicle.id || `veh-${Date.now().toString().slice(-4)}`;
    const priceNum = Number(newVehicle.price) || 0;
    const vehicleObj = {
      ...newVehicle,
      id,
      currency: 'EGP',
      priceFormatted: `${priceNum.toLocaleString()} ج.م`,
      monthlyEstimate: `${Math.round(priceNum * 0.022).toLocaleString()} EGP / mo`,
      monthlyEstimateAr: `${Math.round(priceNum * 0.022).toLocaleString()} ج.م / شهرياً`,
      image: newVehicle.image || '/images/hero_car.jpg',
      status: newVehicle.status || 'Available',
      statusAr: newVehicle.statusAr || 'متوفرة للتسليم',
    };
    setVehicles((prev) => [vehicleObj, ...prev]);
    return vehicleObj;
  };

  const updateVehicle = (id, updatedFields) => {
    setVehicles((prev) =>
      prev.map((v) => {
        if (v.id === id) {
          const priceNum = updatedFields.price !== undefined ? Number(updatedFields.price) : v.price;
          return {
            ...v,
            ...updatedFields,
            currency: 'EGP',
            priceFormatted: `${priceNum.toLocaleString()} ج.م`,
            monthlyEstimate: `${Math.round(priceNum * 0.022).toLocaleString()} EGP / mo`,
          };
        }
        return v;
      })
    );
  };

  const deleteVehicle = (id) => {
    setVehicles((prev) => prev.filter((v) => v.id !== id));
  };

  const updateVehicleStatus = (id, newStatus, newStatusAr) => {
    setVehicles((prev) =>
      prev.map((v) =>
        v.id === id
          ? {
              ...v,
              status: newStatus,
              statusAr: newStatusAr || (newStatus === 'Sold' ? 'تم البيع' : newStatus === 'Reserved' ? 'محجوزة' : 'متوفرة للتسليم'),
            }
          : v
      )
    );
  };

  // ==========================================
  // Sell Requests Actions
  // ==========================================
  const addSellRequest = (request) => {
    const newReq = {
      id: `sell-${Date.now().toString().slice(-4)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'new',
      ...request,
    };
    setSellRequests((prev) => [newReq, ...prev]);
    return newReq;
  };

  const updateSellRequestStatus = (id, newStatus, valuation) => {
    setSellRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? {
              ...req,
              status: newStatus,
              ...(valuation !== undefined ? { estimatedValuation: Number(valuation) } : {}),
            }
          : req
      )
    );
  };

  const deleteSellRequest = (id) => {
    setSellRequests((prev) => prev.filter((r) => r.id !== id));
  };

  // ==========================================
  // Rental Fleet Actions
  // ==========================================
  const addRentalCar = (car) => {
    const newCar = {
      id: `rent-${Date.now().toString().slice(-4)}`,
      status: 'available',
      ...car,
    };
    setRentalFleet((prev) => [newCar, ...prev]);
    return newCar;
  };

  const updateRentalCar = (id, updatedFields) => {
    setRentalFleet((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updatedFields } : c))
    );
  };

  const deleteRentalCar = (id) => {
    setRentalFleet((prev) => prev.filter((c) => c.id !== id));
  };

  const updateRentalInquiryStatus = (id, newStatus) => {
    setRentalInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
    );
  };

  // ==========================================
  // Exchange Actions
  // ==========================================
  const addExchangeRequest = (request) => {
    const newEx = {
      id: `exch-${Date.now().toString().slice(-4)}`,
      date: new Date().toISOString().split('T')[0],
      status: 'pending',
      ...request,
    };
    setExchangeRequests((prev) => [newEx, ...prev]);
    return newEx;
  };

  const updateExchangeStatus = (id, newStatus) => {
    setExchangeRequests((prev) =>
      prev.map((ex) => (ex.id === id ? { ...ex, status: newStatus } : ex))
    );
  };

  const deleteExchangeRequest = (id) => {
    setExchangeRequests((prev) => prev.filter((ex) => ex.id !== id));
  };

  // ==========================================
  // Inquiry / Lead Actions
  // ==========================================
  const addInquiry = (inq) => {
    const newInq = {
      id: `inq-${Date.now().toString().slice(-4)}`,
      date: new Date().toLocaleString(),
      status: 'new',
      ...inq,
    };
    setInquiries((prev) => [newInq, ...prev]);
    return newInq;
  };

  const updateInquiryStatus = (id, newStatus) => {
    setInquiries((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status: newStatus } : i))
    );
  };

  const deleteInquiry = (id) => {
    setInquiries((prev) => prev.filter((i) => i.id !== id));
  };

  // ==========================================
  // CMS Content Actions
  // ==========================================
  const updateCmsContent = (fields) => {
    setCmsContent((prev) => ({ ...prev, ...fields }));
  };

  const resetCmsContent = () => {
    setCmsContent(initialCmsContent);
  };

  // ==========================================
  // Settings Actions
  // ==========================================
  const updateSettings = (fields) => {
    setSettings((prev) => ({ ...prev, ...fields }));
  };

  const resetAllDataToDefault = () => {
    localStorage.removeItem('autohaus_vehicles');
    localStorage.removeItem('autohaus_sell_requests');
    localStorage.removeItem('autohaus_rental_fleet');
    localStorage.removeItem('autohaus_rental_inquiries');
    localStorage.removeItem('autohaus_exchange_requests');
    localStorage.removeItem('autohaus_inquiries');
    localStorage.removeItem('autohaus_cms_content');
    localStorage.removeItem('carin_cms_content_v2');
    localStorage.removeItem('autohaus_settings');

    setVehicles(vehiclesData);
    setSellRequests(initialSellRequests);
    setRentalFleet(initialRentalFleet);
    setRentalInquiries(initialRentalInquiries);
    setExchangeRequests(initialExchangeRequests);
    setInquiries(initialInquiries);
    setCmsContent(initialCmsContent);
  };

  return (
    <StoreContext.Provider
      value={{
        // Data
        vehicles,
        sellRequests,
        rentalFleet,
        rentalInquiries,
        exchangeRequests,
        inquiries,
        cmsContent,
        settings,

        // Actions
        addVehicle,
        updateVehicle,
        deleteVehicle,
        updateVehicleStatus,

        addSellRequest,
        updateSellRequestStatus,
        deleteSellRequest,

        addRentalCar,
        updateRentalCar,
        deleteRentalCar,
        updateRentalInquiryStatus,

        addExchangeRequest,
        updateExchangeStatus,
        deleteExchangeRequest,

        addInquiry,
        updateInquiryStatus,
        deleteInquiry,

        updateCmsContent,
        resetCmsContent,
        updateSettings,
        resetAllDataToDefault,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};

export default StoreContext;
