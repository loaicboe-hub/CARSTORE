import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config();

import { checkDatabaseConnection } from './config/db.js';
import vehiclesRouter from './routes/vehicles.js';
import testimonialsRouter from './routes/testimonials.js';
import inquiriesRouter from './routes/inquiries.js';
import managementRouter from './routes/management.js';
import authRouter from './routes/auth.js';
import accountRouter from './routes/account.js';
import adminUsersRouter from './routes/adminUsers.js';
import uploadRouter from './routes/upload.js';

import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = process.env.PORT || 5001;

// Trust reverse proxy (Nginx) for accurate client IP resolution in rate-limiting
app.set('trust proxy', 1);

// HTTP Security Headers via Helmet
app.use(
  helmet({
    contentSecurityPolicy: false, // Allows inline CDN resources and images
    crossOriginEmbedderPolicy: false,
    crossOriginResourcePolicy: { policy: 'cross-origin' },
  })
);

// CORS configuration
app.use(cors());

// Anti-DDoS Body Parsers with conservative payload sizes
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ limit: '2mb', extended: true }));

// Rate Limiting Protection (Anti-DDoS & Brute Force Defense)
const globalApiLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 150, // max 150 requests per IP per window
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many requests from this IP. Please try again after 10 minutes.',
    errorAr: 'تم تجاوز الحد الأقصى للطلبات من هذا العنوان. يرجى الانتظار 10 دقائق.',
  },
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // max 10 failed/successful auth attempts per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many authentication attempts. Please try again after 15 minutes.',
    errorAr: 'تم تجاوز عدد محاولات الدخول المسموح بها. يرجى المحاولة بعد 15 دقيقة.',
  },
});

const inquiryLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // max 20 inquiries submitted per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many requests submitted. Please wait before submitting another inquiry.',
    errorAr: 'تم إرسال عدة طلبات مؤخراً. يرجى الانتظار قليلاً قبل الإرسال مجدداً.',
  },
});

const uploadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply global rate limiter to all API endpoints
app.use('/api', globalApiLimiter);

// Serve uploaded vehicle images
const uploadsPath = path.join(__dirname, '../public/uploads');
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}
app.use('/uploads', express.static(uploadsPath));

// Health Check Endpoint
app.get('/api/health', async (req, res) => {
  const dbConnected = await checkDatabaseConnection();
  res.json({
    status: 'ok',
    service: 'CAR IN PostgreSQL Backend & User Account API',
    database: dbConnected ? 'connected' : 'hybrid local storage active',
    security: {
      rateLimiting: 'active (express-rate-limit & nginx)',
      headers: 'active (helmet & nginx)',
      trustProxy: true,
    },
    timestamp: new Date().toISOString(),
  });
});

// Mount API Routes with specialized security limiters
app.use('/api/auth', authLimiter, authRouter);
app.use('/api/account', accountRouter);
app.use('/api/admin', authLimiter, adminUsersRouter);
app.use('/api/upload', uploadLimiter, uploadRouter);
app.use('/api/vehicles', vehiclesRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/inquiries', inquiryLimiter, inquiriesRouter);
app.use('/api/management', inquiryLimiter, managementRouter);

// Serve production frontend bundle (SPA fallback)
const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Start Server
app.listen(PORT, async () => {
  console.log(`===============================================`);
  console.log(`🚗 CAR IN Backend running on port ${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`===============================================`);
  await checkDatabaseConnection();
});
