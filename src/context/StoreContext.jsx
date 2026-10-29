import React, { createContext, useContext, useState, useEffect } from 'react';
import { vehiclesData } from '../data/vehiclesData';
import { brandConfig } from '../config/brandConfig';

const StoreContext = createContext(null);

// Initial Sell / Consignment Requests
const initialSellRequests = [
  {
    id: 'sell-101',
    customerName: 'Marcus Vance',
    phone: '+1 (555) 234-8901',
    email: 'm.vance@capital.com',
    vehicleTitle: '2023 Porsche Cayenne Turbo GT',
    year: 2023,
    mileage: '8,400 mi',
    condition: 'Excellent / One-Owner',
    askingPrice: 175000,
    estimatedValuation: 168000,
    status: 'under_review', // 'new', 'under_review', 'offer_sent', 'approved', 'rejected'
    date: '2026-10-28',
    notes: 'Clean CarFax, full PPF wrap, ceramic brakes in mint condition.',
  },
  {
    id: 'sell-102',
    customerName: 'Sarah Jenkins',
    phone: '+1 (555) 789-1234',
    email: 'sarah.j@estate.org',
    vehicleTitle: '2022 Ferrari F8 Tributo',
    year: 2022,
    mileage: '3,200 mi',
    condition: 'Concours / Collector Grade',
    askingPrice: 310000,
    estimatedValuation: 295000,
    status: 'offer_sent',
    date: '2026-10-27',
    notes: 'Rosso Corsa over Cuoio leather. Carbon racing seats.',
  },
  {
    id: 'sell-103',
    customerName: 'Tariq Al-Faisal',
    phone: '+966 50 123 4567',
    email: 'tariq@alfaisal.sa',
    vehicleTitle: '2024 Mercedes-AMG GT 63 S E-Performance',
    year: 2024,
    mileage: '1,800 mi',
    condition: 'Like New / Showroom',
    askingPrice: 205000,
    estimatedValuation: 198000,
    status: 'new',
    date: '2026-10-29',
    notes: 'Full titanium exhaust option. Looking for immediate cash buyout.',
  },
];

// Initial Rental Fleet
const initialRentalFleet = [
  {
    id: 'rent-01',
    title: 'Rolls-Royce Ghost Black Badge',
    category: 'Ultra-Luxury Sedan',
    dailyRate: 1850,
    weeklyRate: 11500,
    deposit: 5000,
    status: 'available', // 'available', 'rented', 'maintenance'
    image: '/images/hero_car.jpg',
    fuel: 'Twin-Turbo V12',
    seats: 5,
  },
  {
    id: 'rent-02',
    title: 'Lamborghini Urus Performante',
    category: 'Super SUV',
    dailyRate: 1450,
    weeklyRate: 9200,
    deposit: 4000,
    status: 'rented',
    image: '/images/audi_rsq8.jpg',
    fuel: 'Twin-Turbo V8 (657 HP)',
    seats: 5,
  },
  {
    id: 'rent-03',
    title: 'Porsche 911 GT3 RS',
    category: 'Track Weapon Coupe',
    dailyRate: 1650,
    weeklyRate: 10500,
    deposit: 6000,
    status: 'available',
    image: '/images/porsche_gt3.jpg',
    fuel: 'Naturally Aspirated Flat-6',
    seats: 2,
  },
  {
    id: 'rent-04',
    title: 'Mercedes-AMG G 63 Magno Edition',
    category: 'Luxury SUV',
    dailyRate: 1250,
    weeklyRate: 7800,
    deposit: 3500,
    status: 'available',
    image: '/images/amg_g63.jpg',
    fuel: 'Handcrafted V8 Biturbo',
    seats: 5,
  },
];

// Initial Rental Inquiries
const initialRentalInquiries = [
  {
    id: 'rinq-201',
    customerName: 'Alexander Hayes',
    phone: '+1 (555) 432-1098',
    email: 'hayes@globalventures.com',
    vehicleTitle: 'Rolls-Royce Ghost Black Badge',
    startDate: '2026-11-05',
    endDate: '2026-11-08',
    days: 3,
    totalEstimated: 5550,
    status: 'confirmed', // 'pending', 'confirmed', 'completed', 'cancelled'
    notes: 'Airport VIP tarmac delivery requested at JFK private terminal.',
  },
  {
    id: 'rinq-202',
    customerName: 'Layla Mansoor',
    phone: '+971 50 987 6543',
    email: 'layla.m@luxurytravel.ae',
    vehicleTitle: 'Porsche 911 GT3 RS',
    startDate: '2026-11-12',
    endDate: '2026-11-15',
    days: 3,
    totalEstimated: 4950,
    status: 'pending',
    notes: 'Track day insurance coverage discussion required.',
  },
];

// Initial Exchange / Trade-In Requests
const initialExchangeRequests = [
  {
    id: 'exch-301',
    customerName: 'David Sterling',
    phone: '+1 (555) 345-6789',
    email: 'david@sterlingholdings.com',
    currentCar: '2022 BMW M8 Competition Gran Coupe',
    currentCarMileage: '12,500 mi',
    currentCarValue: 98000,
    desiredCarId: 'veh-001',
    desiredCarTitle: 'Aston Martin Vantage V8 Coupe',
    desiredCarPrice: 198500,
    equityDifference: 100500,
    status: 'inspection_scheduled', // 'pending', 'inspection_scheduled', 'offer_made', 'completed', 'declined'
    date: '2026-10-28',
    notes: 'Client ready to pay cash difference upon physical inspection of Vantage.',
  },
  {
    id: 'exch-302',
    customerName: 'Nasser Al-Ghamdi',
    phone: '+966 55 876 5432',
    email: 'nasser@ghamdi.sa',
    currentCar: '2023 Range Rover SV Autobiography',
    currentCarMileage: '6,200 mi',
    currentCarValue: 185000,
    desiredCarId: 'veh-003',
    desiredCarTitle: 'Mercedes-AMG G 63 SUV',
    desiredCarPrice: 218000,
    equityDifference: 33000,
    status: 'pending',
    date: '2026-10-29',
    notes: 'Trade-in value requested online. Enclosed carrier required.',
  },
];

// Initial Inquiries / Leads CRM
const initialInquiries = [
  {
    id: 'inq-401',
    fullName: 'Christian Bale',
    phone: '+1 (555) 890-1234',
    email: 'c.bale@manhattan.com',
    channel: 'whatsapp',
    type: 'purchase',
    vehicleTitle: 'Aston Martin Vantage V8 Coupe',
    message: 'Interested in arranging a private viewing and confidential wire transfer terms.',
    status: 'new', // 'new', 'contacted', 'in_progress', 'closed'
    date: '2026-10-29 08:30',
  },
  {
    id: 'inq-402',
    fullName: 'Fatima Al-Zahra',
    phone: '+971 52 345 6789',
    email: 'fatima@alzahra.ae',
    channel: 'phone',
    type: 'rental',
    vehicleTitle: 'Lamborghini Urus Performante',
    message: 'Weekly rental inquiry for upcoming Formula 1 VIP weekend.',
    status: 'contacted',
    date: '2026-10-28 16:15',
  },
  {
    id: 'inq-403',
    fullName: 'Robert De Vries',
    phone: '+31 6 12345678',
    email: 'r.devries@amsterdam-art.nl',
    channel: 'email',
    type: 'tradein',
    vehicleTitle: 'Porsche 911 GT3 (992)',
    message: 'Seeking official appraisal for EU export and trade-in against GT3 RS.',
    status: 'in_progress',
    date: '2026-10-27 11:20',
  },
];

// Initial CMS Editable Content
const initialCmsContent = {
  brandName: 'AUTOHAUS',
  brandSuffix: 'CAR IN',
  legalName: 'AUTOHAUS & CAR IN Luxury Automotive Group Ltd.',
  tagline: 'The Pinnacle of Automotive Distinction',
  heroBadge: 'Excellence in Luxury & Certified Performance',
  heroTitleP1: 'The Pinnacle of',
  heroTitleP2: 'Automotive Distinction',
  heroSubtitle:
    "Curators of the world's most distinguished luxury, performance, and executive automobiles. Experience unmatched precision in buying, selling, leasing, and bespoke exchanges.",
  specOutput: 'Twin-Turbo V8',
  specAccel: '0–60 in 3.2s',
  specSpeed: 'Top Track Speed 200+ MPH',
  phone: '+1 (800) 835-6231',
  phoneDisplay: '+1 (800) AUTOHAUS',
  whatsappNumber: '18008356231',
  email: 'concierge@autohaus-carin.com',
  address: '740 Park Avenue, Automotive District, Suite 100',
  city: 'New York, NY 10021',
  hours: 'Mon – Sat: 9:00 AM – 7:30 PM | Sun: By Appointment Only',
  currency: 'USD',
  currencySymbol: '$',
  bannerAnnouncement: '✨ Exclusive Private Showcase: 2025 Allocation Registrations Now Open',
  showBanner: true,
};

export const StoreProvider = ({ children }) => {
  // 1. Vehicles Store
  const [vehicles, setVehicles] = useState(() => {
    try {
      const saved = localStorage.getItem('autohaus_vehicles');
      return saved ? JSON.parse(saved) : vehiclesData;
    } catch {
      return vehiclesData;
    }
  });

  // 2. Sell Requests Store
  const [sellRequests, setSellRequests] = useState(() => {
    try {
      const saved = localStorage.getItem('autohaus_sell_requests');
      return saved ? JSON.parse(saved) : initialSellRequests;
    } catch {
      return initialSellRequests;
    }
  });

  // 3. Rental Fleet Store
  const [rentalFleet, setRentalFleet] = useState(() => {
    try {
      const saved = localStorage.getItem('autohaus_rental_fleet');
      return saved ? JSON.parse(saved) : initialRentalFleet;
    } catch {
      return initialRentalFleet;
    }
  });

  // 4. Rental Inquiries Store
  const [rentalInquiries, setRentalInquiries] = useState(() => {
    try {
      const saved = localStorage.getItem('autohaus_rental_inquiries');
      return saved ? JSON.parse(saved) : initialRentalInquiries;
    } catch {
      return initialRentalInquiries;
    }
  });

  // 5. Exchange Requests Store
  const [exchangeRequests, setExchangeRequests] = useState(() => {
    try {
      const saved = localStorage.getItem('autohaus_exchange_requests');
      return saved ? JSON.parse(saved) : initialExchangeRequests;
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
      const saved = localStorage.getItem('autohaus_cms_content');
      return saved ? JSON.parse(saved) : initialCmsContent;
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
            portalPin: '123456',
            autoApproveInquiries: false,
            emailNotifications: true,
            themeMode: 'light',
            languageDefault: 'en',
          };
    } catch {
      return {
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
      localStorage.setItem('autohaus_cms_content', JSON.stringify(cmsContent));
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

  // ==========================================
  // Vehicle Actions (CRUD)
  // ==========================================
  const addVehicle = (newVehicle) => {
    const id = newVehicle.id || `veh-${Date.now().toString().slice(-4)}`;
    const priceNum = Number(newVehicle.price) || 0;
    const vehicleObj = {
      ...newVehicle,
      id,
      priceFormatted: `$${priceNum.toLocaleString()}`,
      monthlyEstimate: `$${Math.round(priceNum * 0.013).toLocaleString()} / mo`,
      monthlyEstimateAr: `${Math.round(priceNum * 0.013).toLocaleString()} دولار / شهرياً`,
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
            priceFormatted: `$${priceNum.toLocaleString()}`,
            monthlyEstimate: `$${Math.round(priceNum * 0.013).toLocaleString()} / mo`,
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
