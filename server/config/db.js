import pg from 'pg';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });
dotenv.config();

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:postgrespassword@localhost:5432/carstore_db';

// Check if SSL is required (common for cloud PostgreSQL like Neon, Supabase, Render)
const isCloudPostgres = connectionString.includes('neon.tech') || 
                        connectionString.includes('supabase.co') || 
                        connectionString.includes('sslmode=require');

export const pool = new Pool({
  connectionString,
  ssl: isCloudPostgres ? { rejectUnauthorized: false } : false,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle PostgreSQL client:', err);
});

export const query = (text, params) => pool.query(text, params);

export const checkDatabaseConnection = async () => {
  try {
    const res = await pool.query('SELECT NOW() as current_time, current_database() as db_name');
    console.log(`[PostgreSQL] Connected successfully to "${res.rows[0].db_name}" at ${res.rows[0].current_time}`);
    return true;
  } catch (err) {
    console.warn('[PostgreSQL] Connection warning:', err.message);
    return false;
  }
};
