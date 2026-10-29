import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { brandConfig } from '../../config/brandConfig';
import Badge from '../common/Badge';
import Button from '../common/Button';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Gauge,
  Zap,
  Activity,
  Navigation,
  Compass,
  Key,
  Calendar,
  Share2,
  Check,
  Calculator,
  Layers,
  ArrowUpRight,
  Car,
  FileCheck,
  MapPin,
  Sparkles,
  CreditCard,
  Building2,
  Eye,
  Truck
} from 'lucide-react';

export const VehicleDetailsModal = ({
  isOpen,
  onClose,
  vehicle,
  onInquire
}) => {
  const { t, isArabic } = useLanguage();
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'fabrika' | 'traffic' | 'finance' | 'gallery'
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Egyptian Financing calculator states
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [loanTermMonths, setLoanTermMonths] = useState(60);
  const [selectedFinancier, setSelectedFinancier] = useState('contact'); // 'contact' | 'cib' | 'valu' | 'drive'

  // Close on Escape key and cycle images with arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeImageIndex, vehicle]);

  // Reset tab & image index when vehicle changes
  useEffect(() => {
    if (vehicle) {
      setActiveImageIndex(0);
      setActiveTab('specs');
      setCopied(false);
    }
  }, [vehicle]);

  if (!isOpen || !vehicle) return null;

  // Extract gallery photos safely
  const gallery = (vehicle.gallery && vehicle.gallery.length > 0)
    ? vehicle.gallery
    : (vehicle.photos && vehicle.photos.length > 0
      ? vehicle.photos
      : [vehicle.image || '/images/hero_car.jpg']);

  // Extract bilingual text
  const title = isArabic && vehicle.titleAr ? vehicle.titleAr : vehicle.title;
  const subtitle = isArabic && vehicle.subtitleAr ? vehicle.subtitleAr : vehicle.subtitle;
  const categoryLabel = isArabic && vehicle.categoryLabelAr ? vehicle.categoryLabelAr : vehicle.categoryLabel;
  const badge = isArabic
    ? (vehicle.badgeAr || vehicle.badge || 'فابريكا شركة بالكامل 100%')
    : (vehicle.badgeEn || (!/[\u0600-\u06FF]/.test(vehicle.badge || '') ? vehicle.badge : '100% Factory Paint Certified'));
  const status = isArabic
    ? (vehicle.statusAr || vehicle.status || 'متوفرة للتسليم الفوري')
    : (vehicle.statusEn || (!/[\u0600-\u06FF]/.test(vehicle.status || '') ? vehicle.status : 'Available for Immediate Delivery'));
  const power = isArabic && vehicle.powerAr ? vehicle.powerAr : (vehicle.powerEn || vehicle.power);
  const accel = isArabic && vehicle.accelerationAr
    ? vehicle.accelerationAr
    : (vehicle.accelerationEn || (vehicle.acceleration ? vehicle.acceleration.replace(/في/, 'in').replace(/ثانية|ثوانٍ/, 's') : vehicle.acceleration));
  const topSpeed = isArabic && vehicle.topSpeedAr
    ? vehicle.topSpeedAr
    : (vehicle.topSpeedEn || (vehicle.topSpeed ? vehicle.topSpeed.replace(/كم\/س/, 'KM/H') : '230 KM/H'));
  const transmission = isArabic && vehicle.transmissionAr ? vehicle.transmissionAr : (vehicle.transmissionEn || vehicle.transmission);
  const drivetrain = isArabic && vehicle.drivetrainAr
    ? vehicle.drivetrainAr
    : (vehicle.drivetrainEn || (vehicle.drivetrain && !/[\u0600-\u06FF]/.test(vehicle.drivetrain) ? vehicle.drivetrain : 'Rear-Wheel Drive (RWD)'));
  const fuel = isArabic && vehicle.fuelAr
    ? vehicle.fuelAr
    : (vehicle.fuelEn ? vehicle.fuelEn : (vehicle.fuel ? vehicle.fuel.replace(/بنزين/, 'Gasoline') : 'Gasoline'));
  const mileage = isArabic && vehicle.mileageAr
    ? vehicle.mileageAr
    : (vehicle.mileageEn || (vehicle.mileage ? vehicle.mileage.replace(/كم/, 'KM') : vehicle.mileage));
  const extColor = isArabic
    ? (vehicle.exteriorColorAr || vehicle.exteriorColor || 'أبيض بولار ميتاليك')
    : (vehicle.exteriorColorEn || (!/[\u0600-\u06FF]/.test(vehicle.exteriorColor || '') ? vehicle.exteriorColor : 'Polar White Metallic'));
  const intColor = isArabic
    ? (vehicle.interiorColorAr || vehicle.interiorColor || 'جلد طبيعي فاخر أسود')
    : (vehicle.interiorColorEn || (!/[\u0600-\u06FF]/.test(vehicle.interiorColor || '') ? vehicle.interiorColor : 'Black Exclusive Nappa Leather'));
  const vin = vehicle.vin || 'EGY-CERTIFIED-AUTO-2024';
  const features = (isArabic && vehicle.featuresAr && vehicle.featuresAr.length > 0)
    ? vehicle.featuresAr
    : (vehicle.features || []);

  // Egyptian Specific Data
  const trafficDept = isArabic ? (vehicle.trafficDept || 'مرور التجمع الخامس') : (vehicle.trafficDeptEn || 'New Cairo Traffic Dept');
  const licenseValidity = isArabic ? (vehicle.licenseValidity || 'رخصة سارية سنتين') : (vehicle.licenseValidityEn || 'Valid for 2 Years');
  const ownership = isArabic ? (vehicle.ownership || 'أول يد من الزيرو - صفر توكيلات') : (vehicle.ownershipEn || '1st Owner - Zero Powers of Attorney');
  const agencyMaintenance = isArabic
    ? (vehicle.agencyMaintenance || 'صيانات دورية منتظمة بالتوكيل الرسمي')
    : (vehicle.agencyMaintenanceEn || 'Official Dealership Service Records with Invoices');
  const fabrikaRadar = vehicle.fabrikaRadar || {
    status: 'فابريكا شركة بالكامل 100%',
    statusEn: '100% Original Factory Paint',
    micronAvg: '95 - 110 µm',
    hood: { label: isArabic ? 'الكبوت' : 'Hood', val: '102 µm', status: 'factory' },
    roof: { label: isArabic ? 'السقف' : 'Roof', val: '95 µm', status: 'factory' },
    trunk: { label: isArabic ? 'الشنطة' : 'Trunk', val: '108 µm', status: 'factory' },
    rightSide: { label: isArabic ? 'الجانب الأيمن' : 'Right Side', val: '104 µm', status: 'factory' },
    leftSide: { label: isArabic ? 'الجانب الأيسر' : 'Left Side', val: '100 µm', status: 'factory' },
    chassis: { label: isArabic ? 'الشاسيه والقوايم' : 'Chassis & Pillars', val: isArabic ? 'عظم شركة سليم 100%' : '100% Intact Structural Pillars', status: 'factory' },
  };

  // Image navigation
  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  // Financing calculation (Egyptian Market APR ~16.5% flat/decreasing equivalent)
  const carPrice = typeof vehicle.price === 'number'
    ? vehicle.price
    : parseInt(String(vehicle.price || '').replace(/[^0-9]/g, ''), 10) || 3000000;

  const downPaymentAmount = Math.round((carPrice * downPaymentPercent) / 100);
  const loanPrincipal = Math.max(0, carPrice - downPaymentAmount);
  
  // Financier interest rates in Egypt
  const financierRates = {
    contact: 0.145, // Contact Cars ~ 14.5%
    cib: 0.155,     // CIB Auto ~ 15.5%
    valu: 0.160,    // ValU ~ 16.0%
    drive: 0.150,   // Drive Capital ~ 15.0%
  };
  const chosenRate = financierRates[selectedFinancier] || 0.15;
  const monthlyRate = chosenRate / 12;
  const estimatedMonthlyPayment = loanPrincipal > 0
    ? Math.round(
        (loanPrincipal * (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths))) /
        (Math.pow(1 + monthlyRate, loanTermMonths) - 1)
      )
    : 0;

  // Build WhatsApp URL with Egyptian phone number
  const buildWhatsAppUrl = (customNote = '') => {
    const text = isArabic
      ? `مرحباً كونسيرج CAR IN مصر، أود الاستفسار وحجز موعد لمعاينة السيارة:\n*${title}* (موديل ${vehicle.year})\nالسعر: ${vehicle.priceFormatted || `${carPrice.toLocaleString()} ج.م`}\nالمرور: ${trafficDept} (${licenseValidity})\nرقم الهيكل: ${vin}${customNote ? `\nطلب إضافي: ${customNote}` : ''}`
      : `Hello CAR IN Egypt Concierge, I would like to inquire about and arrange a viewing for:\n*${title}* (${vehicle.year})\nPrice: ${vehicle.priceFormatted || `${carPrice.toLocaleString()} EGP`}\nTraffic: ${trafficDept} (${licenseValidity})\nVIN: ${vin}${customNote ? `\nNote: ${customNote}` : ''}`;
    return `https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  // Copy vehicle share link
  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#vehicle-${vehicle.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      className="modal-overlay vehicle-details-modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="vehicle-details-modal-title"
    >
      <div className="modal-dialog vehicle-details-dialog">
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label={isArabic ? 'إغلاق' : 'Close'}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="veh-modal-header">
          <div className="veh-modal-header-badges">
            <Badge variant="emerald" icon={<ShieldCheck size={14} />}>
              {isArabic ? 'فابريكا شركة بالكامل 100%' : '100% Factory Paint Certified'}
            </Badge>
            <Badge variant="gold">
              {isArabic ? 'أول يد - صفر توكيلات' : '1st Owner - Zero Powers of Attorney'}
            </Badge>
            <Badge variant="subtle">
              <MapPin size={12} style={{ display: 'inline', marginRight: 4 }} />
              {trafficDept}
            </Badge>
            {status && <Badge variant="emerald">{status}</Badge>}
          </div>

          <div className="veh-modal-header-main">
            <div>
              <div className="veh-modal-year-category">
                <span>{vehicle.year}</span>
                <span>•</span>
                <span>{categoryLabel}</span>
              </div>
              <h2 id="vehicle-details-modal-title" className="veh-modal-title">
                {title}
              </h2>
              <p className="veh-modal-subtitle">{subtitle}</p>
            </div>

            <div className="veh-modal-price-box">
              <span className="veh-modal-price" dir="ltr">
                {isArabic ? (vehicle.priceFormatted || `${carPrice.toLocaleString()} ج.م`) : (vehicle.priceFormattedEn || `${carPrice.toLocaleString()} EGP`)}
              </span>
              <span className="veh-modal-monthly">
                {isArabic
                  ? `تقسيط يبدأ من ${estimatedMonthlyPayment.toLocaleString()} ج.م / شهرياً`
                  : `Installments from ${estimatedMonthlyPayment.toLocaleString()} EGP / mo`}
              </span>
            </div>
          </div>
        </div>

        {/* High-Resolution Carousel Gallery */}
        <div className="veh-modal-gallery-carousel">
          <div className="veh-carousel-stage">
            <img
              src={gallery[activeImageIndex]}
              alt={`${title} - view ${activeImageIndex + 1}`}
              className="veh-carousel-img"
            />

            {gallery.length > 1 && (
              <>
                <button
                  type="button"
                  className="veh-carousel-nav-btn prev"
                  onClick={handlePrevImage}
                  aria-label={isArabic ? 'الصورة السابقة' : 'Previous image'}
                >
                  <ChevronLeft size={22} className="rtl-flip" />
                </button>
                <button
                  type="button"
                  className="veh-carousel-nav-btn next"
                  onClick={handleNextImage}
                  aria-label={isArabic ? 'الصورة التالية' : 'Next image'}
                >
                  <ChevronRight size={22} className="rtl-flip" />
                </button>
                <div className="veh-carousel-counter">
                  {activeImageIndex + 1} / {gallery.length}
                </div>
              </>
            )}
          </div>

          {/* Thumbnails Strip */}
          {gallery.length > 1 && (
            <div className="veh-thumbnails-strip">
              {gallery.map((imgSrc, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`veh-thumbnail-item ${activeImageIndex === idx ? 'active' : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                  aria-label={`Select photo ${idx + 1}`}
                >
                  <img src={imgSrc} alt={`Thumbnail ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Tabs - Tailored for Egyptian Market */}
        <div className="veh-modal-tabs">
          <button
            type="button"
            className={`veh-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            <Gauge size={16} />
            <span>{isArabic ? 'المواصفات الفنية' : 'Specifications'}</span>
          </button>
          
          <button
            type="button"
            className={`veh-tab-btn ${activeTab === 'fabrika' ? 'active' : ''}`}
            onClick={() => setActiveTab('fabrika')}
            style={{ color: activeTab === 'fabrika' ? '#10B981' : undefined }}
          >
            <Sparkles size={16} />
            <span>{isArabic ? '🔍 رادار الفابريكا والبودي' : 'Fabrika Paint Radar'}</span>
          </button>

          <button
            type="button"
            className={`veh-tab-btn ${activeTab === 'traffic' ? 'active' : ''}`}
            onClick={() => setActiveTab('traffic')}
          >
            <FileCheck size={16} />
            <span>{isArabic ? '🏛️ المرور والتوكيلات' : 'Traffic & Licensing'}</span>
          </button>

          <button
            type="button"
            className={`veh-tab-btn ${activeTab === 'finance' ? 'active' : ''}`}
            onClick={() => setActiveTab('finance')}
          >
            <CreditCard size={16} />
            <span>{isArabic ? '💳 تقسيط البنوك المصرية' : 'Bank Installments (EGP)'}</span>
          </button>

          <button
            type="button"
            className={`veh-tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            <Layers size={16} />
            <span>{isArabic ? 'ألبوم الصور' : 'HD Gallery'} ({gallery.length})</span>
          </button>
        </div>

        {/* Tab 1: Full Mechanical Specs */}
        {activeTab === 'specs' && (
          <div className="veh-tab-content veh-specs-content">
            {/* Waitlist vs Instant Delivery Banner */}
            {vehicle.waitlistComparison && (
              <div className="egypt-waitlist-box">
                <div className="waitlist-card agency">
                  <span className="waitlist-tag">{isArabic ? 'حجز التوكيل الرسمي' : 'Official Agency Waitlist'}</span>
                  <div className="waitlist-price">{isArabic ? vehicle.waitlistComparison.agencyPrice : (vehicle.waitlistComparison.agencyPriceEn || vehicle.waitlistComparison.agencyPrice.replace('ج.م', 'EGP'))}</div>
                  <p className="waitlist-desc">{isArabic ? vehicle.waitlistComparison.agencyWait : (vehicle.waitlistComparison.agencyWaitEn || 'Official dealership order with 6-8 months waiting list')}</p>
                </div>
                <div className="waitlist-card instant">
                  <span className="waitlist-tag gold">{isArabic ? 'استلام فوري بمعرضنا اليوم' : 'Instant Showroom Delivery'}</span>
                  <div className="waitlist-price gold">{isArabic ? (vehicle.priceFormatted || `${carPrice.toLocaleString()} ج.م`) : (vehicle.priceFormattedEn || `${carPrice.toLocaleString()} EGP`)}</div>
                  <p className="waitlist-desc">{isArabic ? vehicle.waitlistComparison.instantSaving : (vehicle.waitlistComparison.instantSavingEn || 'Immediate showroom delivery within 1 hour, locked-in price')}</p>
                </div>
              </div>
            )}

            {/* Specs Grid */}
            <div className="veh-full-specs-grid">
              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Activity size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{isArabic ? 'المحرك والقوة' : 'Engine'}</span>
                  <span className="veh-spec-value">{fuel}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Gauge size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{isArabic ? 'القوة الحصانية' : 'Horsepower'}</span>
                  <span className="veh-spec-value">{power}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Zap size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{isArabic ? 'التسارع من 0 إلى 100' : '0–100 km/h'}</span>
                  <span className="veh-spec-value">{accel}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Compass size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{isArabic ? 'السرعة القصوى' : 'Top Speed'}</span>
                  <span className="veh-spec-value">{topSpeed}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Navigation size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{isArabic ? 'ناقل الحركة' : 'Transmission'}</span>
                  <span className="veh-spec-value">{transmission}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Car size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{isArabic ? 'نظام الدفع' : 'Drivetrain'}</span>
                  <span className="veh-spec-value">{drivetrain}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Navigation size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{isArabic ? 'العداد الشرعي' : 'Odometer'}</span>
                  <span className="veh-spec-value">{mileage}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Calendar size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{isArabic ? 'سريان الرخصة' : 'License'}</span>
                  <span className="veh-spec-value">{licenseValidity}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Layers size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{isArabic ? 'اللون الخارجي' : 'Exterior'}</span>
                  <span className="veh-spec-value">{extColor}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Key size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{isArabic ? 'رقم الهيكل (VIN)' : 'Chassis VIN'}</span>
                  <span className="veh-spec-value" style={{ fontFamily: 'monospace', fontSize: '0.825rem' }}>{vin}</span>
                </div>
              </div>
            </div>

            {/* Bespoke Equipment & Features */}
            {features.length > 0 && (
              <div className="veh-features-block">
                <h4 className="veh-features-title">{isArabic ? 'المواصفات والتجهيزات الحصرية' : 'Key Equipment'}</h4>
                <div className="veh-features-grid">
                  {features.map((feat, fIdx) => (
                    <div key={fIdx} className="veh-feature-item">
                      <div className="veh-feature-bullet" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: CRAZY DISRUPTIVE FEATURE - Interactive 3D/Visual Fabrika Paint Radar */}
        {activeTab === 'fabrika' && (
          <div className="veh-tab-content veh-fabrika-tab-content">
            <div className="fabrika-radar-card">
              <div className="fabrika-radar-header">
                <div className="fabrika-badge-big">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h3>{isArabic ? 'رادار الفابريكا وسماكة الدهان بالمايكرون' : 'Fabrika Paint Thickness Radar'}</h3>
                  <p>
                    {isArabic
                      ? 'تم فحص جميع أجزاء الهيكل بجهاز Micron الإلكتروني الرقمي لضمان خلو السيارة التام من أي رش أو معجون أو حوادث سابقة.'
                      : 'All exterior body panels audited via digital coating micron gauge to guarantee 100% factory paint integrity.'}
                  </p>
                </div>
              </div>

              {/* Paint Micron Visual Gauge Scale */}
              <div className="micron-scale-bar-wrap">
                <div className="micron-scale-labels">
                  <span>0 µm</span>
                  <span className="micron-sweet-spot">{isArabic ? '🟢 نطاق فابريكا المصنع (85 - 130 µm)' : '🟢 Factory Paint Range (85 - 130 µm)'}</span>
                  <span>{isArabic ? '200+ µm (رش أو معجون)' : '200+ µm (Repainted / Body filler)'}</span>
                </div>
                <div className="micron-scale-track">
                  <div className="micron-green-zone" />
                </div>
              </div>

              {/* Interactive Body Panels Grid */}
              <div className="fabrika-panels-grid">
                <div className="fabrika-panel-card">
                  <div className="panel-status-icon ok">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="panel-info">
                    <span className="panel-name">{fabrikaRadar.hood.label}</span>
                    <strong className="panel-micron">{fabrikaRadar.hood.val}</strong>
                  </div>
                  <span className="panel-badge ok">{isArabic ? 'فابريكا شركة' : 'Factory'}</span>
                </div>

                <div className="fabrika-panel-card">
                  <div className="panel-status-icon ok">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="panel-info">
                    <span className="panel-name">{fabrikaRadar.roof.label}</span>
                    <strong className="panel-micron">{fabrikaRadar.roof.val}</strong>
                  </div>
                  <span className="panel-badge ok">{isArabic ? 'فابريكا شركة' : 'Factory'}</span>
                </div>

                <div className="fabrika-panel-card">
                  <div className="panel-status-icon ok">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="panel-info">
                    <span className="panel-name">{fabrikaRadar.trunk.label}</span>
                    <strong className="panel-micron">{fabrikaRadar.trunk.val}</strong>
                  </div>
                  <span className="panel-badge ok">{isArabic ? 'فابريكا شركة' : 'Factory'}</span>
                </div>

                <div className="fabrika-panel-card">
                  <div className="panel-status-icon ok">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="panel-info">
                    <span className="panel-name">{fabrikaRadar.rightSide.label}</span>
                    <strong className="panel-micron">{fabrikaRadar.rightSide.val}</strong>
                  </div>
                  <span className="panel-badge ok">{isArabic ? 'فابريكا شركة' : 'Factory'}</span>
                </div>

                <div className="fabrika-panel-card">
                  <div className="panel-status-icon ok">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="panel-info">
                    <span className="panel-name">{fabrikaRadar.leftSide.label}</span>
                    <strong className="panel-micron">{fabrikaRadar.leftSide.val}</strong>
                  </div>
                  <span className="panel-badge ok">{isArabic ? 'فابريكا شركة' : 'Factory'}</span>
                </div>

                <div className="fabrika-panel-card highlight">
                  <div className="panel-status-icon ok">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="panel-info">
                    <span className="panel-name">{fabrikaRadar.chassis.label}</span>
                    <strong className="panel-micron">{fabrikaRadar.chassis.val}</strong>
                  </div>
                  <span className="panel-badge ok">{isArabic ? 'عظم شركة سليم' : '100% Intact'}</span>
                </div>
              </div>

              {/* Certified Inspection Dossier Checkpoints */}
              <div className="fabrika-inspection-footer">
                <div className="fif-header">
                  <ShieldCheck size={18} className="fif-icon" />
                  <h4>{isArabic ? 'تقرير تدقيق الحالة لدى مراكز الفحص المعتمدة في مصر' : 'Certified Inspection Dossier'}</h4>
                </div>
                <div className="fif-points">
                  <div className="fif-point">
                    <Check size={14} color="#10B981" />
                    <span>{isArabic ? 'فحص كمبيوتر المحرك وناقل الحركة وخلوه من الأعطال المخزنة' : 'Zero stored ECU trouble codes'}</span>
                  </div>
                  <div className="fif-point">
                    <Check size={14} color="#10B981" />
                    <span>{isArabic ? 'مطابقة قراءة العداد إلكترونياً مع سجل صيانة التوكيل' : 'Odometer verified with agency database'}</span>
                  </div>
                  <div className="fif-point">
                    <Check size={14} color="#10B981" />
                    <span>{isArabic ? 'سلامة الإيرباجات والشاسيه الداخلي بنسبة 100%' : 'All original factory airbags active'}</span>
                  </div>
                  <div className="fif-point">
                    <Check size={14} color="#10B981" />
                    <span>{isArabic ? 'حالة العفشة ونظام التعليق والمساعدين 95% فما فوق' : 'Suspension and steering 95%+ condition'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Traffic & Legal Ownership Pedigree */}
        {activeTab === 'traffic' && (
          <div className="veh-tab-content veh-traffic-tab-content">
            <div className="traffic-dossier-card">
              <div className="traffic-dossier-header">
                <Building2 size={24} className="traffic-icon" />
                <div>
                  <h3>{isArabic ? 'ملف المرور والترخيص والتوكيلات الرسمي' : 'Traffic, Licensing & Ownership Records'}</h3>
                  <p>{isArabic ? 'جميع الأوراق والشهادات الرسمية جاهزة لنقل الملكية الفوري دون أي تأخير.' : 'All documentation cleared for same-day official transfer.'}</p>
                </div>
              </div>

              <div className="traffic-info-grid">
                <div className="traffic-item">
                  <span className="traffic-lbl">{isArabic ? 'وحدة المرور التابعة لها' : 'Traffic Department'}</span>
                  <strong className="traffic-val">{trafficDept}</strong>
                </div>

                <div className="traffic-item">
                  <span className="traffic-lbl">{isArabic ? 'مدة سريان الرخصة' : 'License Expiry'}</span>
                  <strong className="traffic-val">{licenseValidity}</strong>
                </div>

                <div className="traffic-item">
                  <span className="traffic-lbl">{isArabic ? 'سجل الملكية والتوكيلات' : 'Powers of Attorney'}</span>
                  <strong className="traffic-val gold">{ownership}</strong>
                </div>

                <div className="traffic-item">
                  <span className="traffic-lbl">{isArabic ? 'شهادة براءة الذمة (المخالفات)' : 'Traffic Violations Clearance'}</span>
                  <strong className="traffic-val green">{isArabic ? 'مستخرجة حديثاً (صفر مخالفات)' : 'Cleared (0 Violations)'}</strong>
                </div>

                <div className="traffic-item">
                  <span className="traffic-lbl">{isArabic ? 'سجل صيانات التوكيل' : 'Agency Records'}</span>
                  <strong className="traffic-val">{agencyMaintenance}</strong>
                </div>

                <div className="traffic-item">
                  <span className="traffic-lbl">{isArabic ? 'خدمة كونسيرج المرور VIP' : 'VIP Traffic Concierge'}</span>
                  <strong className="traffic-val">{isArabic ? 'نقل الملكية والتسجيل بدون حضورك' : 'White-Glove License Delivery'}</strong>
                </div>
              </div>

              {/* Traffic Concierge Banner */}
              <div className="traffic-concierge-banner">
                <div className="tcb-icon">
                  <Truck size={24} />
                </div>
                <div>
                  <h4>{isArabic ? 'خدمة "خلصني في المرور" الحصرية' : 'VIP Traffic Concierge Service'}</h4>
                  <p>
                    {isArabic
                      ? 'نوفر لك مندوباً معتمداً لإنهاء إجراءات الشهر العقاري، والفحص الفني، ودفع الضريبة ونقل القيد، واستلام اللوحات ورخصتك الجديدة لحد باب بيتك في التجمع أو زايد.'
                      : 'Our representative handles full ownership transfer, notary contract, traffic fees, and plate issuance without you stepping foot inside the traffic department.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Egyptian Banks & Financing Calculator (EGP) */}
        {activeTab === 'finance' && (
          <div className="veh-tab-content veh-finance-tab-content">
            <div className="veh-finance-card">
              <div className="veh-finance-intro">
                <h4>{isArabic ? 'حاسبة تقسيط البنوك وشركات التمويل المصرية' : 'Egyptian Auto Finance & Bank Estimator'}</h4>
                <p>
                  {isArabic
                    ? 'احسب قسطك الشهري الفعلي بالجنيه المصري واختر جهة التمويل المعتمدة بموافقة سريعة بالبطاقة الشخصية فقط.'
                    : 'Calculate real monthly payments in EGP across top Egyptian automotive finance institutions.'}
                </p>
              </div>

              {/* Financier Selector */}
              <div className="financier-selector-wrap">
                <span className="financier-lbl">{isArabic ? 'جهة التمويل المعتمدة:' : 'Select Financier:'}</span>
                <div className="financier-buttons">
                  <button
                    type="button"
                    className={`financier-btn ${selectedFinancier === 'contact' ? 'active' : ''}`}
                    onClick={() => setSelectedFinancier('contact')}
                  >
                    {isArabic ? 'كونتكت كارز (Contact)' : 'Contact Auto Finance'}
                  </button>
                  <button
                    type="button"
                    className={`financier-btn ${selectedFinancier === 'cib' ? 'active' : ''}`}
                    onClick={() => setSelectedFinancier('cib')}
                  >
                    {isArabic ? 'CIB (البنك التجاري الدولي)' : 'CIB Commercial International Bank'}
                  </button>
                  <button
                    type="button"
                    className={`financier-btn ${selectedFinancier === 'valu' ? 'active' : ''}`}
                    onClick={() => setSelectedFinancier('valu')}
                  >
                    {isArabic ? 'فاليو (valU)' : 'valU Consumer Finance'}
                  </button>
                  <button
                    type="button"
                    className={`financier-btn ${selectedFinancier === 'drive' ? 'active' : ''}`}
                    onClick={() => setSelectedFinancier('drive')}
                  >
                    {isArabic ? 'درايف للتمويل (Drive)' : 'Drive Auto Finance'}
                  </button>
                </div>
              </div>

              <div className="veh-finance-controls">
                {/* Down payment control */}
                <div className="veh-calc-group">
                  <div className="veh-calc-header">
                    <label>{isArabic ? 'الدفعة الأولى (المقدم)' : 'Down Payment'}</label>
                    <span className="veh-calc-val">
                      {downPaymentPercent}% ({downPaymentAmount.toLocaleString()} {isArabic ? 'ج.م' : 'EGP'})
                    </span>
                  </div>
                  <div className="veh-pct-buttons">
                    {[10, 20, 25, 30, 50].map((pct) => (
                      <button
                        key={pct}
                        type="button"
                        className={`veh-pct-btn ${downPaymentPercent === pct ? 'active' : ''}`}
                        onClick={() => setDownPaymentPercent(pct)}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    step="5"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="veh-range-slider"
                  />
                </div>

                {/* Term control */}
                <div className="veh-calc-group">
                  <div className="veh-calc-header">
                    <label>{isArabic ? 'مدة سداد التمويل' : 'Loan Term'}</label>
                    <span className="veh-calc-val">
                      {loanTermMonths / 12} {isArabic ? 'سنوات' : 'years'} ({loanTermMonths} {isArabic ? 'شهر' : 'months'})
                    </span>
                  </div>
                  <div className="veh-pct-buttons">
                    {[24, 36, 48, 60, 72].map((term) => (
                      <button
                        key={term}
                        type="button"
                        className={`veh-pct-btn ${loanTermMonths === term ? 'active' : ''}`}
                        onClick={() => setLoanTermMonths(term)}
                      >
                        {term / 12} {isArabic ? 'سنين' : 'yrs'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Payment Summary Box */}
              <div className="veh-finance-result-box">
                <div className="veh-result-row">
                  <span>{isArabic ? 'سعر السيارة النقدي:' : 'Vehicle Cash Price:'}</span>
                  <strong dir="ltr">{carPrice.toLocaleString()} {isArabic ? 'ج.م' : 'EGP'}</strong>
                </div>
                <div className="veh-result-row">
                  <span>{isArabic ? 'قيمة الدفعة الأولى (المقدم):' : 'Down Payment Amount:'}</span>
                  <strong dir="ltr">-{downPaymentAmount.toLocaleString()} {isArabic ? 'ج.م' : 'EGP'}</strong>
                </div>
                <div className="veh-result-row">
                  <span>{isArabic ? 'المبلغ الممول الصافي:' : 'Financed Balance:'}</span>
                  <strong dir="ltr">{loanPrincipal.toLocaleString()} {isArabic ? 'ج.م' : 'EGP'}</strong>
                </div>
                <div className="veh-result-divider" />
                <div className="veh-result-total">
                  <div>
                    <span className="veh-total-label">{isArabic ? 'القسط الشهري التقديري' : 'Estimated Monthly Payment'}</span>
                    <p className="veh-finance-disclaimer">
                      {isArabic
                        ? 'حساب استرشادي بمعدل فائدة البنوك المصرية الحالي. الموافقة البنكية تصدر خلال 24 ساعة بصورة بطاقة الرقم القومي.'
                        : 'Calculated using current Egyptian banking rates. Fast 24-hr pre-approval with national ID.'}
                    </p>
                  </div>
                  <div className="veh-total-amount" dir="ltr">
                    {estimatedMonthlyPayment.toLocaleString()}
                    <span className="veh-per-mo"> {isArabic ? 'ج.م / شهر' : 'EGP / mo'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Full Photo Gallery Grid */}
        {activeTab === 'gallery' && (
          <div className="veh-tab-content veh-gallery-tab-content">
            <div className="veh-gallery-mosaic">
              {gallery.map((imgSrc, gIdx) => (
                <div
                  key={gIdx}
                  className="veh-gallery-tile"
                  onClick={() => setActiveImageIndex(gIdx)}
                >
                  <img src={imgSrc} alt={`${title} photo ${gIdx + 1}`} loading="lazy" />
                  <div className="veh-gallery-tile-overlay">
                    <span>{isArabic ? 'عرض بجودة كاملة' : 'View Full Image'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal Action Bar */}
        <div className="veh-modal-actions-bar">
          <div className="veh-modal-actions-left">
            <button
              type="button"
              className="veh-share-btn"
              onClick={handleCopyLink}
              title={isArabic ? 'مشاركة رابط السيارة' : 'Share vehicle'}
            >
              {copied ? <Check size={16} color="#10B981" /> : <Share2 size={16} />}
              <span>{copied ? (isArabic ? 'تم نسخ الرابط' : 'Link copied') : (isArabic ? 'مشاركة' : 'Share')}</span>
            </button>

            {/* VIP Gated Compound Test Drive Button */}
            <a
              href={buildWhatsAppUrl(isArabic ? 'طلب معاينة السيارة في مكان إقامتي (الشيخ زايد / التجمع الخامس)' : 'Request Private Gated Compound Test Drive in Zayed/Tagamoa')}
              target="_blank"
              rel="noopener noreferrer"
              className="veh-compound-drive-btn"
              title={isArabic ? 'معاينة السيارة بونش VIP لحد باب فيلتك بالكومباوند' : 'VIP Gated Delivery to your home'}
            >
              <Truck size={15} />
              <span>{isArabic ? 'معاينة على باب الكومباوند' : 'Gated Test Drive'}</span>
            </a>
          </div>

          <div className="veh-modal-actions-right">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="veh-whatsapp-btn"
            >
              <span>{isArabic ? 'استفسار واتساب فوري' : 'Inquire on WhatsApp'}</span>
            </a>

            <Button
              variant="primary"
              size="md"
              onClick={() => {
                onClose();
                if (onInquire) onInquire(vehicle);
              }}
              iconRight={<ArrowUpRight size={17} className="rtl-flip" />}
            >
              {isArabic ? 'حجز ومعاينة بالمعرض' : 'Book Viewing'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsModal;
