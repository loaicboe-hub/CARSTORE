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

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

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
    timestamp: new Date().toISOString(),
  });
});

// Mount API Routes
app.use('/api/auth', authRouter);
app.use('/api/account', accountRouter);
app.use('/api/admin', adminUsersRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/vehicles', vehiclesRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/inquiries', inquiriesRouter);
app.use('/api/management', managementRouter);

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
