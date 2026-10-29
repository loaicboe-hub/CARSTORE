# 🚀 دليل رفع وتشغيل CAR IN على Hostinger VPS (Ubuntu)

هذا الدليل يشرح خطوة بخطوة وبأسهل طريقة كيفية تشغيل وتثبيت مشروع **CAR IN / AUTOHAUS** على سيرفر **Hostinger VPS** مع ربط الدومين وتفعيل شهادة الأمان SSL مجاناً.

---

## 📋 المتطلبات قبل البدء:
1. سيرفر **Hostinger VPS** (نظام تشغيل Ubuntu 22.04 أو 24.04 LTS).
2. عنوان الـ **IP** الخاص بالسيرفر وكلمة مرور **root**.
3. الدومين الخاص بك (مثلاً `carin.com` أو رابط الـ IP المباشر).

---

## الخطوة 1: الدخول إلى السيرفر عبر الـ SSH

من جهازك (باستخدام Terminal في ماك/لينكس أو PowerShell / PuTTY في ويندوز):

```bash
ssh root@YOUR_VPS_IP
```
*(استبدل `YOUR_VPS_IP` بعنوان الآي بي الخاص بسيرفرك في هوستنجر، ثم اكتب كلمة المرور).*

---

## الخطوة 2: تحديث السيرفر وتثبيت Node.js و Git و Nginx و PM2

قم بتنفيذ الأوامر التالية بالترتيب:

```bash
# 1. تحديث حزم النظام
sudo apt update && sudo apt upgrade -y

# 2. تثبيت Git و curl و Nginx
sudo apt install -y git curl nginx

# 3. تثبيت Node.js v20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 4. تثبيت مدير العمليات PM2 لتشغيل السيرفر 24/7 دون توقف
sudo npm install -g pm2
```

تأكد من التثبيت بنجاح:
```bash
node -v   # يجب أن يظهر v20.x أو أحدث
npm -v
nginx -v
pm2 -v
```

---

## الخطوة 3: تثبيت وإعداد قاعدة بيانات PostgreSQL (اختياري / موصى به)

لتشغيل قاعدة بيانات PostgreSQL على السيرفر:

```bash
# 1. تثبيت PostgreSQL
sudo apt install -y postgresql postgresql-contrib

# 2. تشغيل الخدمة
sudo systemctl start postgresql
sudo systemctl enable postgresql

# 3. إنشاء قاعدة بيانات ومستخدم للمشروع
sudo -u postgres psql
```

داخل نافذة الـ `psql`، اكتب الأوامر التالية (يمكنك تغيير كلمة المرور):
```sql
CREATE DATABASE carstore_db;
CREATE USER carin_user WITH ENCRYPTED PASSWORD 'CarInSecure2026!';
GRANT ALL PRIVILEGES ON DATABASE carstore_db TO carin_user;
\q
```

---

## الخطوة 4: سحب المشروع من GitHub

```bash
# 1. الانتقال لمجلد المواقع
cd /var/www

# 2. عمل Clone للمشروع من مستودعك
git clone https://github.com/loaicboe-hub/CARSTORE.git carstore

# 3. الدخول إلى مجلد المشروع
cd carstore
```

---

## الخطوة 5: بناء الواجهة (Frontend) وتثبيت الحزم

```bash
# 1. تثبيت حزم الفرونت إند وبناء النسخة النهائية
npm install
npm run build

# 2. تثبيت حزم الباك إند
cd server
npm install

# 3. إنشاء ملف الإعدادات .env
cat <<EOF > .env
PORT=5001
JWT_SECRET=autohaus-production-ultra-secure-key-2026
DATABASE_URL=postgresql://carin_user:CarInSecure2026!@localhost:5432/carstore_db
EOF

# 4. تشغيل مايجريشن قاعدة البيانات (الجداول والحسابات)
node db/migrate.js

# 5. العودة لمجلد المشروع الرئيسي
cd ..
```

---

## الخطوة 6: تشغيل الباك إند باستخدام PM2

```bash
# تشغيل سيرفر Node.js في الخلفية
pm2 start server/server.js --name "carin-backend"

# ضبط PM2 ليعمل تلقائياً عند إعادة تشغيل السيرفر (Reboot)
pm2 save
pm2 startup
```

*(قم بنسخ الأمر الذي يظهره لك `pm2 startup` ونفذه لو طُلب منك).*

---

## الخطوة 7: إعداد Nginx (الربط وعكس المنافذ Reverse Proxy)

```bash
# نسخ إعدادات Nginx المجهزة من المشروع
sudo cp /var/www/carstore/deploy/nginx.conf /etc/nginx/sites-available/carstore

# تفعيل الموقع
sudo ln -sf /etc/nginx/sites-available/carstore /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# اختبار إعدادات Nginx
sudo nginx -t

# إعادة تشغيل Nginx
sudo systemctl restart nginx
```

> **ملاحظة:** إذا كنت تملك دومين (مثل `carin.com`):  
> قم بتعديل السطر الخاص بـ `server_name` داخل الملف:  
> `sudo nano /etc/nginx/sites-available/carstore` واكتب اسم دومينك بدلاً من `_`:  
> `server_name carin.com www.carin.com;`

---

## الخطوة 8: تفعيل شهادة الأمان SSL (HTTPS المجانية)

لو ربطت الدومين بالـ IP في إعدادات الـ DNS (A Record):

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```
*سيقوم Certbot بضبط شهادة HTTPS مجانية وتجديدها تلقائياً.*

---

## 🔄 كيفية تحديث الموقع مستقبلاً بعد عمل PUSH على GitHub:

في أي وقت تعمل فيه تعديل على كودك وتعمل له `git push`، كل ما تحتاجه لتحديث الموقع على سيرفر هوستنجر هو كتابة:

```bash
cd /var/www/carstore
bash deploy/deploy.sh
```

هذا السكربت سينفذ تلقائياً:
1. `git pull origin main`
2. `npm run build`
3. إعادة تشغيل الباك إند على `pm2`
4. إعادة تحميل `nginx` في أقل من 5 ثوانٍ!
