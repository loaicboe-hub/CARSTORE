#!/bin/bash
# ==========================================================
# CAR IN — Automated Deployment Script for Hostinger VPS
# ==========================================================

set -e

echo "🚀 Starting CAR IN Deployment on VPS..."

# 1. Pull latest code from GitHub
echo "📥 Pulling latest commits from GitHub..."
git pull origin main

# 2. Install root dependencies & build frontend
echo "📦 Installing frontend dependencies & building production bundle..."
npm install
npm run build

# 3. Install server dependencies
echo "⚙️ Installing server dependencies..."
cd server
npm install
cd ..

# 4. Restart or start PM2 process for backend
echo "🔄 Reloading PM2 backend process..."
if pm2 list | grep -q "carin-backend"; then
    pm2 restart carin-backend
else
    pm2 start server/server.js --name "carin-backend"
fi

# 5. Reload Nginx
echo "🌐 Reloading Nginx web server..."
sudo systemctl reload nginx || true

echo "✅ CAR IN deployed and running live successfully!"
