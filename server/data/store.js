import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { hashPassword } from '../utils/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'store.json');

// Initial seed data generator with authentic Egyptian market context
function getInitialSeed() {
  const clientPass = hashPassword('client123');
  const user2Pass = hashPassword('password123');
  const user3Pass = hashPassword('password123');
  const user4Pass = hashPassword('password123');
  const adminPass = hashPassword('admin123');

  const users = [
    {
      id: 'usr-client-01',
      name: 'م. تامر سراج الدين',
      email: 'client@autohaus.com',
      phone: '+20 10 2000 8899',
      passwordHash: clientPass.hash,
      salt: clientPass.salt,
      role: 'customer',
      status: 'active', // 'active', 'suspended', 'inactive'
      city: 'التجمع الخامس، القاهرة الجديدة',
      avatar: 'TS',
      createdAt: '2026-09-15T10:30:00.000Z',
      lastLogin: new Date().toISOString(),
      notes: 'عميل VIP دائم. يفضل التواصل عبر واتساب، مهتم بالسيارات الألمانية الفاخرة.',
    },
    {
      id: 'usr-002',
      name: 'د. شريف البدراوي',
      email: 'sherif.badrawy@domain.com',
      phone: '+20 12 3456 7890',
      passwordHash: user2Pass.hash,
      salt: user2Pass.salt,
      role: 'customer',
      status: 'active',
      city: 'الشيخ زايد، الجيزة',
      avatar: 'SB',
      createdAt: '2026-10-02T14:15:00.000Z',
      lastLogin: '2026-10-28T19:20:00.000Z',
      notes: 'طبيب استشاري ومهتم بسيارات الـ SUV الفاخرة وكسر الزيرو فابريكا 100%.',
    },
    {
      id: 'usr-003',
      name: 'كريم الجوهري',
      email: 'karim.gohary@venture.eg',
      phone: '+20 11 9876 5432',
      passwordHash: user3Pass.hash,
      salt: user3Pass.salt,
      role: 'customer',
      status: 'suspended',
      city: 'المعادي، القاهرة',
      avatar: 'KG',
      createdAt: '2026-08-20T08:00:00.000Z',
      lastLogin: '2026-10-15T11:45:00.000Z',
      notes: 'معلق مؤقتاً لحين استكمال مستندات فحص المرور وشهادة البيانات.',
    },
    {
      id: 'usr-004',
      name: 'دينا الشناوي',
      email: 'dina.s@alex-port.com',
      phone: '+20 10 5555 4321',
      passwordHash: user4Pass.hash,
      salt: user4Pass.salt,
      role: 'customer',
      status: 'inactive',
      city: 'سموحة، الإسكندرية',
      avatar: 'DS',
      createdAt: '2026-07-10T12:00:00.000Z',
      lastLogin: '2026-09-01T16:10:00.000Z',
      notes: 'لا يوجد أي نشاط على الحساب خلال آخر 45 يوماً.',
    },
    {
      id: 'usr-admin-01',
      name: 'CAR IN Executive Board',
      email: 'admin@carin.com',
      phone: '+20 10 2000 8899',
      passwordHash: adminPass.hash,
      salt: adminPass.salt,
      role: 'admin',
      status: 'active',
      city: 'المقر الإداري - التسعين الشمالي، التجمع الخامس',
      avatar: 'CI',
      createdAt: '2026-01-01T00:00:00.000Z',
      lastLogin: new Date().toISOString(),
      notes: 'الحساب الرئيسي لإدارة صالات عرض CAR IN مصر',
    },
  ];

  const customerListings = [
    {
      id: 'cust-list-101',
      userId: 'usr-client-01',
      ownerName: 'م. تامر سراج الدين',
      ownerEmail: 'client@autohaus.com',
      ownerPhone: '+20 10 2000 8899',
      makeModel: '2024 Mercedes-Benz C180 AMG Line',
      brand: 'Mercedes-Benz',
      year: 2024,
      price: 3450000,
      currency: 'EGP',
      mileage: '4,200 km',
      transmission: '9G-TRONIC أوتوماتيك',
      fuelType: '1.5L Turbo EQ Boost (170 HP)',
      bodyType: 'sedan',
      color: 'Selenite Grey Metallic',
      condition: 'Showroom Delivery New',
      city: 'التجمع الخامس، القاهرة الجديدة',
      description: 'مرسيدس C180 AMG Line موديل 2024 بحالة كسر الزيرو، عداد 4,200 كم فقط. فابريكا بالكامل 100% بدون أي دهانات، سماكة طلاء 95–110 مايكرون. أول يد من الزيرو بدون أي توكيلات، رخصة سارية سنتين ونصف مرور التجمع الخامس. باقة Night Package وسقف بانوراما.',
      photos: [
        '/images/c180_amg.jpg',
      ],
      contactName: 'م. تامر سراج الدين',
      contactPhone: '+20 10 2000 8899',
      contactWhatsapp: '+20 10 2000 8899',
      status: 'approved', // 'pending', 'approved', 'rejected', 'draft', 'sold'
      publishedAt: '2026-10-25T14:00:00.000Z',
      adminNotes: 'تم فحص الفابريكا بالمايكرون ومطابقة أوراق المرور والترخيص بنجاح. جاهزة للعرض الفوري.',
      createdAt: '2026-10-24T12:00:00.000Z',
      updatedAt: '2026-10-25T14:00:00.000Z',
    },
    {
      id: 'cust-list-102',
      userId: 'usr-client-01',
      ownerName: 'م. تامر سراج الدين',
      ownerEmail: 'client@autohaus.com',
      ownerPhone: '+20 10 2000 8899',
      makeModel: '2024 Land Rover Defender 110 P400 SE',
      brand: 'Land Rover',
      year: 2024,
      price: 8900000,
      currency: 'EGP',
      mileage: '8,500 km',
      transmission: '8-Speed Automatic',
      fuelType: '3.0L i6 Turbo MHEV (400 HP)',
      bodyType: 'suv',
      color: 'Santorini Black Metallic',
      condition: 'Like New / Concours',
      city: 'الشيخ زايد، الجيزة',
      description: 'ديفندر 110 P400 SE أسود ميتاليك 400 حصان، بحالة المصنع. فابريكا 100% بالكامل، عداد شرعي 8,500 كم صيانات منتظمة بالتوكيل. سقف بانوراما، نظام تعليق هوائي هيدروليكي، رخصة سارية مرور الشيخ زايد بدون أي توكيلات نهائياً.',
      photos: [
        '/images/defender_110.jpg',
      ],
      contactName: 'م. تامر سراج الدين',
      contactPhone: '+20 10 2000 8899',
      contactWhatsapp: '+20 10 2000 8899',
      status: 'pending', // Pending Admin Approval
      publishedAt: null,
      adminNotes: null,
      createdAt: '2026-10-28T09:30:00.000Z',
      updatedAt: '2026-10-28T09:30:00.000Z',
    },
    {
      id: 'cust-list-103',
      userId: 'usr-002',
      ownerName: 'د. شريف البدراوي',
      ownerEmail: 'sherif.badrawy@domain.com',
      ownerPhone: '+20 12 3456 7890',
      makeModel: '2023 BMW 520i M-Sport Package',
      brand: 'BMW',
      year: 2023,
      price: 4200000,
      currency: 'EGP',
      mileage: '14,000 km',
      transmission: '8-Speed Steptronic Sport',
      fuelType: '2.0L TwinPower Turbo (184 HP)',
      bodyType: 'sedan',
      color: 'Alpine White / Cognac Dakota',
      condition: 'Certified Pre-Owned',
      city: 'الشيخ زايد، الجيزة',
      description: 'بي إم دبليو 520i الفئة الخامسة M-Sport. وكيل بافاريا، صيانة مجانية سارية، فابريكا بالكامل 100%. فرش جملي داكوتا، فتحة سقف، جنوط 19 M. رخصة سارية سنتين مرور النزهة بدون أي توكيلات.',
      photos: [
        '/images/bmw_520i.jpg',
      ],
      contactName: 'د. شريف البدراوي',
      contactPhone: '+20 12 3456 7890',
      contactWhatsapp: '+20 12 3456 7890',
      status: 'approved',
      publishedAt: '2026-10-20T11:00:00.000Z',
      adminNotes: 'تم فحص أجهزة الدهان الرقمية ومطابقة كتيب الصيانة الدورية. مطابقة لمعايير CAR IN.',
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
