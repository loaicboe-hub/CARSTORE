import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool } from '../config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runMigrations() {
  console.log('[Migration] Starting PostgreSQL database setup...');

  try {
    const schemaSql = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf-8');
    console.log('[Migration] Executing schema.sql...');
    await pool.query(schemaSql);
    console.log('[Migration] Schema created successfully.');

    const seedSql = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf-8');
    console.log('[Migration] Executing seed.sql...');
    await pool.query(seedSql);
    console.log('[Migration] Seed data inserted successfully.');

    console.log('[Migration] PostgreSQL database setup complete!');
    process.exit(0);
  } catch (err) {
    console.error('[Migration Error]:', err);
    process.exit(1);
  }
}

runMigrations();
