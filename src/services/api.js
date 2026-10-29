/**
 * CAR IN — API Service Layer
 * Connects Frontend UI directly to PostgreSQL Backend endpoints
 */

const API_BASE = '/api';

export function normalizeVehicle(row) {
  if (!row) return row;
  const numPrice = Number(row.price) || 0;
  const monthlyNum = Math.round(numPrice * 0.013);

  return {
    ...row,
    id: row.id,
    title: row.name_en || row.title || 'Luxury Automobile',
    titleAr: row.name_ar || row.titleAr || row.name_en,
    subtitle: row.engine_en || row.subtitle || `${row.year} ${row.brand}`,
    subtitleAr: row.engine_ar || row.subtitleAr || row.engine_en,
    year: row.year,
    category: row.category,
    categoryLabel:
      row.category === 'coupe'
        ? 'Supercar / Coupe'
        : row.category === 'suv'
        ? 'Luxury SUV'
        : row.category === 'sedan'
        ? 'Executive Sedan'
        : 'Electric & Hybrid',
    categoryLabelAr:
      row.category === 'coupe'
        ? 'سيارة خارقة / كوبيه'
        : row.category === 'suv'
        ? 'دفع رباعي فاخرة'
        : row.category === 'sedan'
        ? 'سيدان تنفيذية'
        : 'كهربائية وهجينة',
    price: numPrice,
    priceFormatted: `${numPrice.toLocaleString()} ج.م`,
    monthlyEstimate: `${monthlyNum.toLocaleString()} EGP / mo`,
    monthlyEstimateAr: `${monthlyNum.toLocaleString()} ج.م / شهرياً`,
    mileage: row.mileage,
    mileageAr: row.mileage,
    power: row.engine_en ? row.engine_en.split(' ')[0] : 'High HP',
    powerAr: row.engine_ar || 'أداء عالي',
    acceleration: row.acceleration || '3.2s',
    accelerationAr: row.acceleration || '3.2 ثانية',
    fuel: row.category === 'electric' ? 'Electric' : 'Petrol V8',
    fuelAr: row.category === 'electric' ? 'كهرباء' : 'بنزين',
    badge: row.badge_en || 'Showroom Feature',
    badgeAr: row.badge_ar || 'عرض حصري',
    status: row.status === 'available' ? 'Available' : row.status,
    statusAr: row.status === 'available' ? 'متوفرة للتسليم' : row.status,
    image: row.image_url || row.image || '/images/hero_car.jpg',
  };
}

export function normalizeTestimonial(row) {
  if (!row) return row;
  return {
    id: row.id,
    author: row.name_en || row.author,
    authorAr: row.name_ar || row.authorAr,
    role: row.role_en || row.role,
    roleAr: row.role_ar || row.roleAr,
    vehicleAcquired: row.vehicle_en || row.vehicleAcquired,
    vehicleAcquiredAr: row.vehicle_ar || row.vehicleAcquiredAr,
    rating: row.rating || 5,
    date: row.year || '2024',
    dateAr: row.year || '2024',
    avatar: (row.name_en || 'CS')
      .split(' ')
      .map((n) => n[0])
      .join(''),
    avatarAr: (row.name_ar || 'ك')
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('.'),
    comment: row.comment_en || row.comment,
    commentAr: row.comment_ar || row.commentAr,
  };
}

/**
 * Fetch all vehicles or by category from PostgreSQL
 */
export async function getVehicles(category = 'all') {
  try {
    const url =
      category && category !== 'all'
        ? `${API_BASE}/vehicles?category=${encodeURIComponent(category)}`
        : `${API_BASE}/vehicles`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const json = await res.json();
    if (json.data && Array.isArray(json.data)) {
      return json.data.map(normalizeVehicle);
    }
    return [];
  } catch (err) {
    console.warn('[API] Could not fetch vehicles from PostgreSQL backend:', err.message);
    return null;
  }
}

/**
 * Fetch client testimonials from PostgreSQL
 */
export async function getTestimonials() {
  try {
    const res = await fetch(`${API_BASE}/testimonials`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const json = await res.json();
    if (json.data && Array.isArray(json.data)) {
      return json.data.map(normalizeTestimonial);
    }
    return [];
  } catch (err) {
    console.warn('[API] Could not fetch testimonials from PostgreSQL backend:', err.message);
    return null;
  }
}

/**
 * Fetch executive management team from PostgreSQL
 */
export async function getManagementTeam() {
  try {
    const res = await fetch(`${API_BASE}/management/team`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const json = await res.json();
    if (json.data && Array.isArray(json.data)) {
      return json.data;
    }
    return [];
  } catch (err) {
    console.warn('[API] Could not fetch management team from PostgreSQL backend:', err.message);
    return null;
  }
}

/**
 * Submit client inquiry (lead capture) to PostgreSQL
 */
export async function submitInquiry(inquiryData) {
  try {
    const res = await fetch(`${API_BASE}/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiryData),
    });
    const json = await res.json();
    return json;
  } catch (err) {
    console.error('[API] Failed to save inquiry to PostgreSQL database:', err);
    throw err;
  }
}

/**
 * Authenticate Dealer PIN with PostgreSQL
 */
export async function verifyManagementPin(pin, role) {
  try {
    const res = await fetch(`${API_BASE}/management/verify-pin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pin, role }),
    });
    const json = await res.json();
    return json;
  } catch (err) {
    console.error('[API] Failed to verify PIN with PostgreSQL backend:', err);
    throw err;
  }
}
