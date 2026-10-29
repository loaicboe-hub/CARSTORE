import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { hashPassword } from '../utils/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'store.json');

// Initial seed data generator
function getInitialSeed() {
  const clientPass = hashPassword('client123');
  const user2Pass = hashPassword('password123');
  const user3Pass = hashPassword('password123');
  const user4Pass = hashPassword('password123');
  const adminPass = hashPassword('admin123');

  const users = [
    {
      id: 'usr-client-01',
      name: 'Alexander Wright',
      email: 'client@autohaus.com',
      phone: '+1 (555) 345-6789',
      passwordHash: clientPass.hash,
      salt: clientPass.salt,
      role: 'customer',
      status: 'active', // 'active', 'suspended', 'inactive'
      city: 'Los Angeles, CA',
      avatar: 'AW',
      createdAt: '2026-09-15T10:30:00.000Z',
      lastLogin: new Date().toISOString(),
      notes: 'VIP customer. Prefers communication via WhatsApp.',
    },
    {
      id: 'usr-002',
      name: 'Nadia El-Masri',
      email: 'nadia.masri@domain.com',
      phone: '+971 50 882 1940',
      passwordHash: user2Pass.hash,
      salt: user2Pass.salt,
      role: 'customer',
      status: 'active',
      city: 'Dubai, UAE',
      avatar: 'NM',
      createdAt: '2026-10-02T14:15:00.000Z',
      lastLogin: '2026-10-28T19:20:00.000Z',
      notes: 'Collector interested in German track specials.',
    },
    {
      id: 'usr-003',
      name: 'Carlos Mendoza',
      email: 'mendoza.c@venture.mx',
      phone: '+1 (305) 555-0199',
      passwordHash: user3Pass.hash,
      salt: user3Pass.salt,
      role: 'customer',
      status: 'suspended',
      city: 'Miami, FL',
      avatar: 'CM',
      createdAt: '2026-08-20T08:00:00.000Z',
      lastLogin: '2026-10-15T11:45:00.000Z',
      notes: 'Suspended pending identity verification documents.',
    },
    {
      id: 'usr-004',
      name: 'Elena Rostova',
      email: 'elena.r@monaco.mc',
      phone: '+33 6 40 12 34 56',
      passwordHash: user4Pass.hash,
      salt: user4Pass.salt,
      role: 'customer',
      status: 'inactive',
      city: 'Monte Carlo, Monaco',
      avatar: 'ER',
      createdAt: '2026-07-10T12:00:00.000Z',
      lastLogin: '2026-09-01T16:10:00.000Z',
      notes: 'No activity in past 45 days.',
    },
    {
      id: 'usr-admin-01',
      name: 'Executive Administrator',
      email: 'admin@carin.com',
      phone: '+1 (800) 227-4646',
      passwordHash: adminPass.hash,
      salt: adminPass.salt,
      role: 'admin',
      status: 'active',
      city: 'Executive HQ',
      avatar: 'EA',
      createdAt: '2026-01-01T00:00:00.000Z',
      lastLogin: new Date().toISOString(),
      notes: 'Super Administrator Master Account',
    },
  ];

  const customerListings = [
    {
      id: 'cust-list-101',
      userId: 'usr-client-01',
      ownerName: 'Alexander Wright',
      ownerEmail: 'client@autohaus.com',
      ownerPhone: '+1 (555) 345-6789',
      makeModel: '2023 Porsche 911 GT3 RS (Weissach Package)',
      brand: 'Porsche',
      year: 2023,
      price: 365000,
      currency: 'USD',
      mileage: '1,450 mi',
      transmission: '7-Speed Dual-Clutch (PDK)',
      fuelType: 'Petrol (Naturally Aspirated 4.0L)',
      bodyType: 'coupe',
      color: 'GT Silver Metallic',
      condition: 'Like New / Concours',
      city: 'Los Angeles, CA',
      description: 'Single-owner, pristine condition 992 GT3 RS equipped with Weissach Package, magnesium lightweight wheels, front axle lift, ceramic composite brakes (PCCB), and full body satin PPF from delivery. Dealer serviced with full documentation.',
      photos: [
        '/images/porsche_gt3.jpg',
        '/images/hero_car.jpg',
      ],
      contactName: 'Alexander Wright',
      contactPhone: '+1 (555) 345-6789',
      contactWhatsapp: '+1 (555) 345-6789',
      status: 'approved', // 'pending', 'approved', 'rejected', 'draft', 'sold'
      publishedAt: '2026-10-25T14:00:00.000Z',
      adminNotes: 'Verified documentation and clean title. High-demand vehicle.',
      createdAt: '2026-10-24T12:00:00.000Z',
      updatedAt: '2026-10-25T14:00:00.000Z',
    },
    {
      id: 'cust-list-102',
      userId: 'usr-client-01',
      ownerName: 'Alexander Wright',
      ownerEmail: 'client@autohaus.com',
      ownerPhone: '+1 (555) 345-6789',
      makeModel: '2024 Mercedes-AMG G 63 4x4²',
      brand: 'Mercedes-Benz',
      year: 2024,
      price: 389000,
      currency: 'USD',
      mileage: '820 mi',
      transmission: '9G-TRONIC Automatic',
      fuelType: 'Twin-Turbo V8',
      bodyType: 'suv',
      color: 'G Manufaktur Night Black Magno',
      condition: 'Showroom Delivery New',
      city: 'Los Angeles, CA',
      description: 'Ultra-rare portal axle G63 4x4 Squared. Loaded with Burmester 3D surround sound, carbon fiber trim, AMG exclusive nappa leather package, and rooftop light bar. Zero flaws, stored in climate-controlled garage.',
      photos: [
        '/images/gwagon_matte.jpg',
        '/images/audi_rsq8.jpg',
      ],
      contactName: 'Alexander Wright',
      contactPhone: '+1 (555) 345-6789',
      contactWhatsapp: '+1 (555) 345-6789',
      status: 'pending', // Pending Admin Approval
      publishedAt: null,
      adminNotes: null,
      createdAt: '2026-10-28T09:30:00.000Z',
      updatedAt: '2026-10-28T09:30:00.000Z',
    },
    {
      id: 'cust-list-103',
      userId: 'usr-002',
      ownerName: 'Nadia El-Masri',
      ownerEmail: 'nadia.masri@domain.com',
      ownerPhone: '+971 50 882 1940',
      makeModel: '2022 Ferrari F8 Spider',
      brand: 'Ferrari',
      year: 2022,
      price: 340000,
      currency: 'USD',
      mileage: '3,800 km',
      transmission: '7-Speed F1 Dual-Clutch',
      fuelType: 'Twin-Turbo V8',
      bodyType: 'coupe',
      color: 'Rosso Corsa',
      condition: 'Certified Pre-Owned',
      city: 'Dubai, UAE',
      description: 'Ferrari genuine maintenance through 2029. Carbon racing seats, suspension lifter, carbon steering wheel with LED shift lights, titanium sport exhaust. Ceramic coating applied.',
      photos: [
        '/images/hero_car.jpg',
        '/images/porsche_gt3.jpg',
      ],
      contactName: 'Nadia El-Masri',
      contactPhone: '+971 50 882 1940',
      contactWhatsapp: '+971 50 882 1940',
      status: 'approved',
      publishedAt: '2026-10-20T11:00:00.000Z',
      adminNotes: 'Inspection verified by Dubai showroom.',
      createdAt: '2026-10-19T10:00:00.000Z',
      updatedAt: '2026-10-20T11:00:00.000Z',
    },
  ];

  return { users, customerListings, resetTokens: {} };
}

// Load data from file, creating seed if file does not exist
export function loadStore() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      const seed = getInitialSeed();
      fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
      fs.writeFileSync(DATA_FILE, JSON.stringify(seed, null, 2), 'utf8');
      return seed;
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('[Store] Error reading store.json, re-initializing:', err);
    const seed = getInitialSeed();
    fs.writeFileSync(DATA_FILE, JSON.stringify(seed, null, 2), 'utf8');
    return seed;
  }
}

// Save data to file
export function saveStore(data) {
  try {
    fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('[Store] Error writing store.json:', err);
  }
}

// Helper: Get users with listing counts
export function getUsersWithStats() {
  const store = loadStore();
  return store.users.map((u) => {
    const userListings = store.customerListings.filter((l) => l.userId === u.id);
    return {
      id: u.id,
      name: u.name,
      email: u.email,
      phone: u.phone,
      role: u.role,
      status: u.status,
      city: u.city,
      avatar: u.avatar,
      createdAt: u.createdAt,
      lastLogin: u.lastLogin,
      notes: u.notes,
      listingsCount: userListings.length,
      publishedCount: userListings.filter((l) => l.status === 'approved').length,
      pendingCount: userListings.filter((l) => l.status === 'pending').length,
    };
  });
}
