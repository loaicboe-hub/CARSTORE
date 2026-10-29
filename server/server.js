import express from 'express';
import cors from 'cors';
import path from 'path';
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

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/api/health', async (req, res) => {
  const dbConnected = await checkDatabaseConnection();
  res.json({
    status: 'ok',
    service: 'CAR IN PostgreSQL Backend',
    database: dbConnected ? 'connected' : 'disconnected / waiting',
    timestamp: new Date().toISOString(),
  });
});

// Mount Routes
app.use('/api/vehicles', vehiclesRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/inquiries', inquiriesRouter);
app.use('/api/management', managementRouter);

// Start Server
app.listen(PORT, async () => {
  console.log(`===============================================`);
  console.log(`🚗 CAR IN Backend running on port ${PORT}`);
  console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
  console.log(`===============================================`);
  await checkDatabaseConnection();
});
