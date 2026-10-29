import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  createListing,
  updateListing,
  uploadVehiclePhoto,
} from '../../services/customerListingService';
import {
  Car,
  DollarSign,
  Calendar,
  Gauge,
  Fuel,
  Cog,
  Palette,
  MapPin,
  FileText,
  Camera,
  Upload,
  User,
  Phone,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  X,
  Info,
} from 'lucide-react';

const PRESET_CAR_PHOTOS = [
  { label: 'Porsche 911 GT3 RS', url: '/images/porsche_gt3.jpg' },
  { label: 'Mercedes-AMG G-Wagon', url: '/images/gwagon_matte.jpg' },
  { label: 'Audi RS Q8 Performance', url: '/images/audi_rsq8.jpg' },
  { label: 'Exotic Supercar Concept', url: '/images/hero_car.jpg' },
  { label: 'Aston Martin Superleggera', url: '/images/aston_dbs.jpg' },
  { label: 'Porsche Panamera Executive', url: '/images/panamera_exec.jpg' },
];

export const SubmitListingView = ({ onNavigate, editingListing, onSaveSuccess }) => {
  const { user } = useAuth();
  const { isArabic } = useLanguage();

  const isEditing = Boolean(editingListing);

  // Form State
  const [makeModel, setMakeModel] = useState(editingListing?.makeModel || '');
  const [brand, setBrand] = useState(editingListing?.brand || '');
  const [year, setYear] = useState(editingListing?.year || new Date().getFullYear());
  const [price, setPrice] = useState(editingListing?.price || '');
  const [mileage, setMileage] = useState(editingListing?.mileage || '');
  const [transmission, setTransmission] = useState(editingListing?.transmission || 'Automatic');
  const [fuelType, setFuelType] = useState(editingListing?.fuelType || 'Petrol');
  const [bodyType, setBodyType] = useState(editingListing?.bodyType || 'coupe');
  const [color, setColor] = useState(editingListing?.color || 'Onyx Black');
  const [condition, setCondition] = useState(editingListing?.condition || 'Certified Pre-Owned');
  const [city, setCity] = useState(editingListing?.city || user?.city || 'Dubai');
  const [description, setDescription] = useState(editingListing?.description || '');

  // Photos: Array of URLs
  const [photos, setPhotos] = useState(editingListing?.photos || ['/images/hero_car.jpg']);
  const [customPhotoUrl, setCustomPhotoUrl] = useState('');

  // Contact
  const [contactName, setContactName] = useState(editingListing?.contactName || user?.name || '');
  const [contactPhone, setContactPhone] = useState(editingListing?.contactPhone || user?.phone || '');
  const [contactWhatsapp, setContactWhatsapp] = useState(editingListing?.contactWhatsapp || user?.phone || '');

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);

  // Populate brand if user types makeModel
  const handleMakeModelChange = (val) => {
    setMakeModel(val);
    if (!brand || brand === 'Other') {
      const firstWord = val.trim().split(' ')[0];
      if (firstWord.length > 2) {
        setBrand(firstWord);
      }
    }
  };

  // Add photo URL
  const handleAddPhotoUrl = () => {
    if (customPhotoUrl && customPhotoUrl.trim()) {
      setPhotos([...photos, customPhotoUrl.trim()]);
      setCustomPhotoUrl('');
    }
  };

  // Select preset photo
  const handleAddPresetPhoto = (url) => {
    if (!photos.includes(url)) {
      setPhotos([...photos, url]);
    }
  };

  // Remove photo
  const handleRemovePhoto = (index) => {
    const updated = photos.filter((_, i) => i !== index);
    setPhotos(updated.length > 0 ? updated : ['/images/hero_car.jpg']);
  };

  // Handle local file upload
  const handleFileUpload = async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setErrorMsg(isArabic ? 'صيغة الصورة غير مدعومة (يسمح بـ JPG, PNG, WEBP)' : 'Invalid image format. Allowed: JPG, PNG, WEBP.');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg(isArabic ? 'حجم الصورة يتجاوز الحد المسموح به (5 ميجابايت)' : 'Image exceeds the 5MB maximum limit.');
      return;
    }

    setIsUploadingPhoto(true);
    setErrorMsg('');

    try {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const uploadedUrl = await uploadVehiclePhoto(reader.result, file.name);
          setPhotos([...photos, uploadedUrl]);
        } catch (uploadErr) {
          setErrorMsg(uploadErr.message || 'Photo upload failed.');
        } finally {
          setIsUploadingPhoto(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setErrorMsg('Failed to process image file.');
      setIsUploadingPhoto(false);
    }
  };

  // Handle Submit / Save Draft
  const handleSubmit = async (isDraft = false) => {
    setErrorMsg('');
    setSuccessMsg('');

    if (!makeModel.trim() || !price || !year) {
      setErrorMsg(isArabic ? 'يرجى إدخال اسم السيارة، السعر وسنة الصنع' : 'Make & model, price, and year are required.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        makeModel: makeModel.trim(),
        brand: brand.trim() || makeModel.split(' ')[0],
        year: Number(year),
        price: Number(price),
        currency: 'EGP',
        mileage: mileage.trim() || '0 km',
        transmission,
        fuelType,
        bodyType,
        color: color.trim(),
        condition,
        city: city.trim(),
        description: description.trim(),
        photos,
        contactName: contactName.trim() || user?.name,
        contactPhone: contactPhone.trim(),
        contactWhatsapp: contactWhatsapp.trim(),
        isDraft,
      };

      if (isEditing) {
        await updateListing(editingListing.id, payload);
        setSuccessMsg(
          isArabic
            ? 'تم حفظ التعديلات بنجاح. إذا تم تعديل سيارة معتمدة، تخضع لإعادة مراجعة سريعة.'
            : 'Listing updated successfully. If modified, it has been resubmitted for admin review.'
        );
      } else {
        await createListing(payload);
        setSuccessMsg(
          isDraft
            ? isArabic ? 'تم حفظ الإعلان كمسودة.' : 'Listing saved as draft.'
            : isArabic
            ? 'تم إرسال إعلانك للمراجعة بنجاح! سيظهر في المعرض العام بمجرد اعتماده من إدارة AUTOHAUS.'
            : 'Vehicle submitted for review! It will appear in the public showroom once approved by AUTOHAUS administrators.'
        );
      }

      setTimeout(() => {
        if (onSaveSuccess) onSaveSuccess();
        onNavigate('/account/listings');
      }, 1600);
    } catch (err) {
      setErrorMsg(err.message || 'Failed to submit vehicle listing.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      {/* Top Breadcrumb & Title */}
      <div style={{ marginBottom: '24px' }}>
        <button
          type="button"
          onClick={() => onNavigate('/account/listings')}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--accent-gold, #C28B14)',
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: 0,
            marginBottom: '8px',
          }}
        >
          {isArabic ? <ArrowRight size={15} /> : <ArrowLeft size={15} />}
          <span>{isArabic ? 'العودة إلى إعلاناتي' : 'Back to My Listings'}</span>
        </button>

        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.8rem',
            fontWeight: 800,
            margin: '0 0 6px 0',
            color: '#FFFFFF',
          }}
        >
          {isEditing
            ? isArabic ? 'تعديل بيانات السيارة' : 'Edit Vehicle Listing'
            : isArabic ? 'أضف سيارتك للبيع في المعرض' : 'List Your Luxury Vehicle'}
        </h1>
        <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.88rem' }}>
          {isArabic
            ? 'قدم تفاصيل سيارتك بدقة. تخضع جميع الإعلانات لمراجعة الجودة والاعتماد من قبل إدارة AUTOHAUS.'
            : 'Complete the verified vehicle appraisal form. All client submissions are verified by administrators before public catalogue publication.'}
        </p>
      </div>

      {/* Policy Notice Box */}
      <div
        style={{
          background: 'rgba(194, 139, 20, 0.08)',
          border: '1px solid rgba(194, 139, 20, 0.25)',
          borderRadius: '12px',
          padding: '16px 20px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          color: '#ECC880',
          fontSize: '0.85rem',
        }}
      >
        <Info size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <div style={{ fontWeight: 700, marginBottom: '2px' }}>
            {isArabic ? 'إجراءات الاعتماد والنشر العام:' : 'Approval & Public Showroom Policy:'}
          </div>
          <div>
            {isArabic
              ? 'الإعلانات الجديدة تبدأ بحالة "قيد المراجعة" (Pending Approval). فور مراجعة المواصفات والصور من قبل الإدارة، ستظهر سيارتك فوراً في المعرض العام للمشترين.'
              : 'New vehicle submissions default to "Pending Approval". Upon administrative review of specs and photos, your listing will be immediately published to the public showcase.'}
          </div>
        </div>
      </div>

      {/* Alerts */}
      {errorMsg && (
        <div
          style={{
            background: 'rgba(225, 29, 72, 0.15)',
            border: '1px solid rgba(225, 29, 72, 0.35)',
            color: '#FB7185',
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.86rem',
          }}
        >
          <AlertCircle size={16} />
          <span>{errorMsg}</span>
        </div>
      )}

      {successMsg && (
        <div
          style={{
            background: 'rgba(16, 185, 129, 0.15)',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            color: '#34D399',
            padding: '14px 18px',
            borderRadius: '8px',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '0.88rem',
            fontWeight: 600,
          }}
        >
          <CheckCircle2 size={18} />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Guided Form Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Card 1: Primary Vehicle Information */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '24px',
          }}
        >
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 18px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Car size={18} style={{ color: 'var(--accent-gold, #C28B14)' }} />
            <span>{isArabic ? '1. معلومات المركبة الأساسية' : '1. Core Vehicle Specifications'}</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {/* Make & Model */}
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'الماركة والموديل' : 'Make & Model'} *
              </label>
              <input
                type="text"
                value={makeModel}
                onChange={(e) => handleMakeModelChange(e.target.value)}
                placeholder={isArabic ? 'مثال: 2024 Porsche 911 GT3 RS' : 'e.g. 2024 Porsche 911 GT3 RS'}
                required
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Brand */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'الشركة المصنعة' : 'Manufacturer Brand'}
              </label>
              <input
                type="text"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                placeholder="e.g. Porsche, Ferrari, BMW"
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Year */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'سنة الصنع' : 'Year'} *
              </label>
              <input
                type="number"
                min="1990"
                max={new Date().getFullYear() + 2}
                value={year}
                onChange={(e) => setYear(e.target.value)}
                required
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Asking Price */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'السعر المطلوب (ج.م EGP)' : 'Asking Price (EGP)'} *
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="number"
                  min="1000"
                  step="5000"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g. 3450000"
                  required
                  style={{
                    width: '100%',
                    height: '42px',
                    padding: isArabic ? '0 50px 0 14px' : '0 14px 0 50px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '0.92rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    [isArabic ? 'right' : 'left']: '12px',
                    color: 'var(--accent-gold, #C28B14)',
                    pointerEvents: 'none',
                    display: 'flex',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                  }}
                >
                  {isArabic ? 'ج.م' : 'EGP'}
                </div>
              </div>
            </div>

            {/* Mileage */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'المسافة المقطوعة' : 'Mileage'}
              </label>
              <input
                type="text"
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
                placeholder="e.g. 4,200 mi / 6,500 km"
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Body Type */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'نوع الهيكل والتصنيف' : 'Body Type / Category'}
              </label>
              <select
                value={bodyType}
                onChange={(e) => setBodyType(e.target.value)}
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px',
                  background: '#0B111A',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              >
                <option value="coupe">{isArabic ? 'سيارة خارقة / كوبيه' : 'Supercar / Coupe'}</option>
                <option value="suv">{isArabic ? 'دفع رباعي فاخرة' : 'Luxury Performance SUV'}</option>
                <option value="sedan">{isArabic ? 'سيدان تنفيذية' : 'Executive Luxury Sedan'}</option>
                <option value="electric">{isArabic ? 'هايبر جي تي كهربائية' : 'Electric & Hybrid GT'}</option>
              </select>
            </div>

            {/* Condition */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'حالة المركبة' : 'Vehicle Condition'}
              </label>
              <select
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px',
                  background: '#0B111A',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              >
                <option value="Showroom Delivery New">{isArabic ? 'جديدة بالكامل (وكالة)' : 'Brand New / Delivery Mileage'}</option>
                <option value="Certified Pre-Owned">{isArabic ? 'مستعملة معتمدة' : 'Certified Pre-Owned'}</option>
                <option value="Like New / Concours">{isArabic ? 'شبه جديدة / حالة متحفية' : 'Like New / Concours'}</option>
                <option value="Excellent / One-Owner">{isArabic ? 'ممتازة / مالك أول' : 'Excellent / Single Owner'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Card 2: Technical Specs & Powertrain */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '24px',
          }}
        >
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 18px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Cog size={18} style={{ color: 'var(--accent-gold, #C28B14)' }} />
            <span>{isArabic ? '2. ناقل الحركة والمحرك والمظهر الخارجي' : '2. Transmission, Powertrain & Exterior'}</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {/* Transmission */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'ناقل الحركة' : 'Transmission'}
              </label>
              <select
                value={transmission}
                onChange={(e) => setTransmission(e.target.value)}
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px',
                  background: '#0B111A',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              >
                <option value="Automatic">Automatic Transmission</option>
                <option value="Dual-Clutch / F1">Dual-Clutch (PDK / DCT / F1)</option>
                <option value="6-Speed Manual">Manual Transmission</option>
                <option value="Direct-Drive EV">Direct-Drive Electric</option>
              </select>
            </div>

            {/* Fuel Type */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'نوع الوقود والمحرك' : 'Fuel / Engine Type'}
              </label>
              <select
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px',
                  background: '#0B111A',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              >
                <option value="Twin-Turbo V8">Twin-Turbo V8</option>
                <option value="Naturally Aspirated Flat-6">Naturally Aspirated Flat-6 / V10</option>
                <option value="Twin-Turbo V12">Twin-Turbo V12</option>
                <option value="Plug-in Hybrid (PHEV)">Plug-in Hybrid Performance</option>
                <option value="Dual-Motor All-Electric">Dual-Motor All-Electric</option>
              </select>
            </div>

            {/* Exterior Color */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'اللون الخارجي' : 'Exterior Paint Color'}
              </label>
              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="e.g. GT Silver, Rosso Corsa, Nero Daytona"
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Location / City */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'مدينة وموقع تواجد السيارة' : 'City & Location'}
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={isArabic ? 'مثال: التجمع الخامس، الشيخ زايد، الإسكندرية' : 'e.g. New Cairo, Sheikh Zayed, Alexandria'}
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>

          {/* Description */}
          <div style={{ marginTop: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
              {isArabic ? 'تفاصيل ومواصفات السيارة' : 'Vehicle Highlights & Description'}
            </label>
            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={
                isArabic
                  ? 'اذكر تاريخ الصيانة، الباقات الإضافية، الحماية الشفافة PPF، حالة الإطارات، أو أي تفاصيل تميز سيارتك...'
                  : 'Detail optional equipment, ceramic brakes, service history, paint protection film, exhaust packages, and condition...'
              }
              style={{
                width: '100%',
                padding: '12px 14px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '8px',
                color: '#FFFFFF',
                fontSize: '0.9rem',
                outline: 'none',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                resize: 'vertical',
              }}
            />
          </div>
        </div>

        {/* Card 3: Vehicle Photos Management */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '24px',
          }}
        >
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Camera size={18} style={{ color: 'var(--accent-gold, #C28B14)' }} />
            <span>{isArabic ? '3. صور السيارة (معاينة ورفع متعدد)' : '3. Multiple Vehicle Photos'}</span>
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '0.84rem', margin: '0 0 18px 0' }}>
            {isArabic
              ? 'ارفع صوراً حقيقية لسيارتك (JPG, PNG, WEBP بحد أقصى 5 ميجابايت) أو اختر من مكتبة المعرض الحصرية.'
              : 'Upload high-resolution vehicle photos (JPG, PNG, WEBP up to 5MB) or select from our verified studio library.'}
          </p>

          {/* Current Attached Photos Gallery */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '12px', marginBottom: '18px' }}>
            {photos.map((url, idx) => (
              <div
                key={idx}
                style={{
                  position: 'relative',
                  height: '90px',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: idx === 0 ? '2px solid var(--accent-gold, #C28B14)' : '1px solid rgba(255, 255, 255, 0.12)',
                }}
              >
                <img src={url} alt={`Photo ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {idx === 0 && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '4px',
                      left: '4px',
                      background: 'rgba(194, 139, 20, 0.9)',
                      color: '#070B11',
                      padding: '1px 5px',
                      borderRadius: '4px',
                      fontSize: '0.62rem',
                      fontWeight: 800,
                    }}
                  >
                    Cover
                  </span>
                )}
                {photos.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemovePhoto(idx)}
                    style={{
                      position: 'absolute',
                      top: '4px',
                      right: '4px',
                      background: 'rgba(0, 0, 0, 0.75)',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '50%',
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    }}
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Photo Actions: Upload Local File OR Add URL */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
            {/* File Upload Button */}
            <div>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  height: '42px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px dashed rgba(255, 255, 255, 0.25)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: isUploadingPhoto ? 'wait' : 'pointer',
                }}
              >
                <Upload size={16} />
                <span>{isUploadingPhoto ? 'Uploading Image...' : 'Upload Image File (< 5MB)'}</span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                  disabled={isUploadingPhoto}
                />
              </label>
            </div>

            {/* URL Input */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="url"
                value={customPhotoUrl}
                onChange={(e) => setCustomPhotoUrl(e.target.value)}
                placeholder="Or paste external image URL"
                style={{
                  flex: 1,
                  height: '42px',
                  padding: '0 12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.84rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              <button
                type="button"
                onClick={handleAddPhotoUrl}
                style={{
                  padding: '0 14px',
                  height: '42px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Add
              </button>
            </div>
          </div>

          {/* Quick Studio Presets */}
          <div>
            <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginBottom: '8px' }}>
              {isArabic ? 'أو اختر صور تجريبية من معرض AUTOHAUS:' : 'Or pick from verified AUTOHAUS studio showcase:'}
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {PRESET_CAR_PHOTOS.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAddPresetPhoto(p.url)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '0.76rem',
                    color: '#CBD5E1',
                    cursor: 'pointer',
                  }}
                >
                  + {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Card 4: Seller & Contact Information */}
        <div
          style={{
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '14px',
            padding: '24px',
          }}
        >
          <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 18px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <User size={18} style={{ color: 'var(--accent-gold, #C28B14)' }} />
            <span>{isArabic ? '4. بيانات الاتصال بالبائع' : '4. Seller Contact & Negotiation Channels'}</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {/* Contact Name */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'اسم البائع' : 'Seller Name'}
              </label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="e.g. Alexander Vance"
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Contact Phone */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'رقم الهاتف المباشر' : 'Direct Phone Number'}
              </label>
              <input
                type="tel"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}>
                {isArabic ? 'رقم الواتساب للتواصل السريع' : 'WhatsApp Number for Inquiries'}
              </label>
              <input
                type="tel"
                value={contactWhatsapp}
                onChange={(e) => setContactWhatsapp(e.target.value)}
                placeholder="+1 (555) 000-0000"
                style={{
                  width: '100%',
                  height: '42px',
                  padding: '0 14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>
        </div>

        {/* Action Buttons: Submit for Approval vs Save Draft */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '14px',
            padding: '16px 0',
            flexWrap: 'wrap',
          }}
        >
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleSubmit(true)}
            style={{
              padding: '12px 24px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              color: '#FFFFFF',
              fontSize: '0.92rem',
              fontWeight: 600,
              cursor: isSubmitting ? 'wait' : 'pointer',
            }}
          >
            {isArabic ? 'حفظ كمسودة' : 'Save as Draft'}
          </button>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleSubmit(false)}
            style={{
              padding: '12px 28px',
              background: 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)',
              border: 'none',
              borderRadius: '8px',
              color: '#070B11',
              fontSize: '0.95rem',
              fontWeight: 800,
              cursor: isSubmitting ? 'wait' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 20px rgba(194, 139, 20, 0.4)',
              opacity: isSubmitting ? 0.7 : 1,
            }}
          >
            {isSubmitting ? (
              <span>{isArabic ? 'جارِ الإرسال...' : 'Submitting for Review...'}</span>
            ) : (
              <>
                <Clock size={17} />
                <span>
                  {isEditing
                    ? isArabic ? 'حفظ وإعادة الإرسال للمراجعة' : 'Update & Submit for Review'
                    : isArabic ? 'إرسال السيارة للاعتماد' : 'Submit for Admin Approval'}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitListingView;
