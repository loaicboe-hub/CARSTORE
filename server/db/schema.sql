-- =======================================================
-- CAR IN — PostgreSQL Database Schema
-- Automotive Showroom & Operations Data Architecture
-- =======================================================

-- 1. Vehicles Inventory Table
CREATE TABLE IF NOT EXISTS vehicles (
  id VARCHAR(64) PRIMARY KEY,
  name_en VARCHAR(255) NOT NULL,
  name_ar VARCHAR(255) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL, -- 'supercar', 'suv', 'sedan', 'gt', 'all'
  year INT NOT NULL,
  price NUMERIC(12, 2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'USD',
  mileage VARCHAR(50) NOT NULL,
  transmission_en VARCHAR(100) NOT NULL,
  transmission_ar VARCHAR(100) NOT NULL,
  engine_en VARCHAR(100) NOT NULL,
  engine_ar VARCHAR(100) NOT NULL,
  acceleration VARCHAR(50) NOT NULL,
  top_speed VARCHAR(50) NOT NULL,
  image_url VARCHAR(500) NOT NULL,
  badge_en VARCHAR(100),
  badge_ar VARCHAR(100),
  status VARCHAR(50) DEFAULT 'available', -- 'available', 'reserved', 'sold'
  featured BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Client Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id VARCHAR(64) PRIMARY KEY,
  name_en VARCHAR(255) NOT NULL,
  name_ar VARCHAR(255) NOT NULL,
  role_en VARCHAR(255) NOT NULL,
  role_ar VARCHAR(255) NOT NULL,
  vehicle_en VARCHAR(255) NOT NULL,
  vehicle_ar VARCHAR(255) NOT NULL,
  comment_en TEXT NOT NULL,
  comment_ar TEXT NOT NULL,
  rating INT DEFAULT 5,
  verified BOOLEAN DEFAULT true,
  year VARCHAR(20) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. Customer & Concierge Inquiries Table (Live Leads)
CREATE TABLE IF NOT EXISTS inquiries (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  phone VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  channel VARCHAR(50) DEFAULT 'whatsapp', -- 'whatsapp', 'phone', 'email'
  vehicle_id VARCHAR(64) REFERENCES vehicles(id) ON DELETE SET NULL,
  inquiry_type VARCHAR(50) NOT NULL, -- 'purchase', 'tradein', 'rental', 'testdrive'
  message TEXT,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'contacted', 'closed'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. Executive Management & Dealer Personnel
CREATE TABLE IF NOT EXISTS management_team (
  id VARCHAR(64) PRIMARY KEY,
  name_en VARCHAR(255) NOT NULL,
  name_ar VARCHAR(255) NOT NULL,
  role_en VARCHAR(255) NOT NULL,
  role_ar VARCHAR(255) NOT NULL,
  bio_en TEXT NOT NULL,
  bio_ar TEXT NOT NULL,
  credential_en VARCHAR(255) NOT NULL,
  credential_ar VARCHAR(255) NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Dealership Settings & Portal Authentication
CREATE TABLE IF NOT EXISTS dealer_settings (
  key VARCHAR(100) PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. User Accounts & Customer Authentication
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(64) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(100),
  password_hash VARCHAR(255) NOT NULL,
  salt VARCHAR(64) NOT NULL,
  role VARCHAR(50) DEFAULT 'customer', -- 'customer', 'admin'
  status VARCHAR(50) DEFAULT 'active', -- 'active', 'suspended', 'inactive'
  city VARCHAR(100),
  avatar VARCHAR(10),
  notes TEXT,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. Customer Submitted Vehicle Listings
CREATE TABLE IF NOT EXISTS customer_listings (
  id VARCHAR(64) PRIMARY KEY,
  user_id VARCHAR(64) REFERENCES users(id) ON DELETE CASCADE,
  owner_name VARCHAR(255) NOT NULL,
  owner_email VARCHAR(255) NOT NULL,
  owner_phone VARCHAR(100),
  owner_whatsapp VARCHAR(100),
  make_model VARCHAR(255) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  year INT NOT NULL,
  price NUMERIC(12, 2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'USD',
  mileage VARCHAR(50) NOT NULL,
  transmission VARCHAR(100) NOT NULL,
  fuel_type VARCHAR(100) NOT NULL,
  body_type VARCHAR(50) NOT NULL,
  color VARCHAR(100),
  condition VARCHAR(100),
  city VARCHAR(100),
  description TEXT,
  photos TEXT[], -- Array of image URLs
  status VARCHAR(50) DEFAULT 'pending', -- 'draft', 'pending', 'approved', 'rejected', 'sold'
  admin_notes TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_vehicles_category ON vehicles(category);
CREATE INDEX IF NOT EXISTS idx_vehicles_status ON vehicles(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_status ON users(status);
CREATE INDEX IF NOT EXISTS idx_customer_listings_user ON customer_listings(user_id);
CREATE INDEX IF NOT EXISTS idx_customer_listings_status ON customer_listings(status);

