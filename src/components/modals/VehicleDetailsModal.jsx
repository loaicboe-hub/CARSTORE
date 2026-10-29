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
  Car
} from 'lucide-react';

export const VehicleDetailsModal = ({
  isOpen,
  onClose,
  vehicle,
  onInquire
}) => {
  const { t, isArabic } = useLanguage();
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'gallery' | 'finance'
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Financing calculator states
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [loanTermMonths, setLoanTermMonths] = useState(48);

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
  const badge = isArabic && vehicle.badgeAr ? vehicle.badgeAr : vehicle.badge;
  const status = isArabic && vehicle.statusAr ? vehicle.statusAr : vehicle.status;
  const power = isArabic && vehicle.powerAr ? vehicle.powerAr : vehicle.power;
  const accel = isArabic && vehicle.accelerationAr ? vehicle.accelerationAr : vehicle.acceleration;
  const topSpeed = isArabic && vehicle.topSpeedAr ? vehicle.topSpeedAr : (vehicle.topSpeed || '190 mph (305 km/h)');
  const transmission = isArabic && vehicle.transmissionAr ? vehicle.transmissionAr : vehicle.transmission;
  const drivetrain = isArabic && vehicle.drivetrainAr ? vehicle.drivetrainAr : (vehicle.drivetrain || 'All-Wheel Drive (AWD)');
  const fuel = isArabic && vehicle.fuelAr ? vehicle.fuelAr : vehicle.fuel;
  const mileage = isArabic && vehicle.mileageAr ? vehicle.mileageAr : vehicle.mileage;
  const extColor = vehicle.exteriorColor || (isArabic ? 'حسب المواصفات' : 'As Specified');
  const intColor = vehicle.interiorColor || (isArabic ? 'جلد طبيعي فاخر' : 'Luxury Nappa Leather');
  const vin = vehicle.vin || 'AUTOHAUS-VIP-CERTIFIED';
  const features = (isArabic && vehicle.featuresAr && vehicle.featuresAr.length > 0)
    ? vehicle.featuresAr
    : (vehicle.features || []);

  // Image navigation
  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  // Financing calculation
  const carPrice = typeof vehicle.price === 'number'
    ? vehicle.price
    : parseInt(String(vehicle.price || '').replace(/[^0-9]/g, ''), 10) || 150000;

  const downPaymentAmount = Math.round((carPrice * downPaymentPercent) / 100);
  const loanPrincipal = Math.max(0, carPrice - downPaymentAmount);
  const annualInterestRate = 0.0649; // 6.49% APR
  const monthlyRate = annualInterestRate / 12;
  const estimatedMonthlyPayment = loanPrincipal > 0
    ? Math.round(
        (loanPrincipal * (monthlyRate * Math.pow(1 + monthlyRate, loanTermMonths))) /
        (Math.pow(1 + monthlyRate, loanTermMonths) - 1)
      )
    : 0;

  // Build WhatsApp URL
  const buildWhatsAppUrl = () => {
    const text = isArabic
      ? `مرحباً كونسيرج ${brandConfig.name}، أود الاستفسار وحجز موعد معاينة خاصة للسيارة:\n*${title}* (${vehicle.year})\nالسعر: ${vehicle.priceFormatted || `$${carPrice.toLocaleString()}`}\nرقم الهيكل (VIN): ${vin}`
      : `Hello ${brandConfig.name} Concierge, I would like to inquire about and arrange a private VIP viewing for:\n*${title}* (${vehicle.year})\nPrice: ${vehicle.priceFormatted || `$${carPrice.toLocaleString()}`}\nVIN: ${vin}`;
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
          aria-label={t.vehicleModal.close}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="veh-modal-header">
          <div className="veh-modal-header-badges">
            <Badge variant="gold" icon={<ShieldCheck size={14} />}>
              {t.vehicleModal.certifiedBadge}
            </Badge>
            {badge && <Badge variant="subtle">{badge}</Badge>}
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
                {vehicle.priceFormatted || `$${carPrice.toLocaleString()}`}
              </span>
              <span className="veh-modal-monthly">
                {isArabic && vehicle.monthlyEstimateAr
                  ? vehicle.monthlyEstimateAr
                  : (vehicle.monthlyEstimate ? `Est. ${vehicle.monthlyEstimate}` : `Est. $${estimatedMonthlyPayment}/mo`)}
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

        {/* Navigation Tabs */}
        <div className="veh-modal-tabs">
          <button
            type="button"
            className={`veh-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            <Gauge size={16} />
            <span>{t.vehicleModal.overviewTab}</span>
          </button>
          <button
            type="button"
            className={`veh-tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
          >
            <Layers size={16} />
            <span>{t.vehicleModal.galleryTab} ({gallery.length})</span>
          </button>
          <button
            type="button"
            className={`veh-tab-btn ${activeTab === 'finance' ? 'active' : ''}`}
            onClick={() => setActiveTab('finance')}
          >
            <Calculator size={16} />
            <span>{t.vehicleModal.financeTab}</span>
          </button>
        </div>

        {/* Tab 1: Full Mechanical & Technical Specs */}
        {activeTab === 'specs' && (
          <div className="veh-tab-content veh-specs-content">
            {/* Specs Grid */}
            <div className="veh-full-specs-grid">
              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Activity size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{t.vehicleModal.specs.engine}</span>
                  <span className="veh-spec-value">{fuel}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Gauge size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{t.vehicleModal.specs.horsepower}</span>
                  <span className="veh-spec-value">{power}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Zap size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{t.vehicleModal.specs.acceleration}</span>
                  <span className="veh-spec-value">{accel}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Compass size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{t.vehicleModal.specs.topSpeed}</span>
                  <span className="veh-spec-value">{topSpeed}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Navigation size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{t.vehicleModal.specs.transmission}</span>
                  <span className="veh-spec-value">{transmission}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Car size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{t.vehicleModal.specs.drivetrain}</span>
                  <span className="veh-spec-value">{drivetrain}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Navigation size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{t.vehicleModal.specs.mileage}</span>
                  <span className="veh-spec-value">{mileage}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Calendar size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{t.vehicleModal.specs.warranty}</span>
                  <span className="veh-spec-value">{t.vehicleModal.warrantyVal}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Layers size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{t.vehicleModal.specs.exterior}</span>
                  <span className="veh-spec-value">{extColor}</span>
                </div>
              </div>

              <div className="veh-spec-card">
                <div className="veh-spec-icon-wrapper">
                  <Key size={18} />
                </div>
                <div>
                  <span className="veh-spec-label">{t.vehicleModal.specs.vin}</span>
                  <span className="veh-spec-value" style={{ fontFamily: 'monospace', fontSize: '0.825rem' }}>{vin}</span>
                </div>
              </div>
            </div>

            {/* 180-Point Certified Inspection Checklist */}
            <div className="veh-inspection-dossier">
              <div className="veh-inspection-header">
                <div className="veh-inspection-badge">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="veh-inspection-title">{t.vehicleModal.inspectionTitle}</h4>
                  <p className="veh-inspection-subtitle">
                    {isArabic
                      ? 'تم تدقيق واجتياز جميع المحاور الميكانيكية والإلكترونية والهيكلية بواسطة فنيين معتمدين دولياً.'
                      : 'All mechanical, chassis, electronic, and safety audit checkpoints passed with 100% compliance.'}
                  </p>
                </div>
              </div>

              <div className="veh-inspection-points-grid">
                {t.vehicleModal.inspectionPoints.map((point, pIdx) => (
                  <div key={pIdx} className="veh-inspection-point-item">
                    <CheckCircle2 size={16} className="veh-point-check" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bespoke Equipment & Features */}
            {features.length > 0 && (
              <div className="veh-features-block">
                <h4 className="veh-features-title">{t.vehicleModal.keyFeaturesTitle}</h4>
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

        {/* Tab 2: Full Photo Gallery Grid */}
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
                    <span>{isArabic ? 'عرض بالكامل' : 'View Full Image'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Interactive Financing Estimator */}
        {activeTab === 'finance' && (
          <div className="veh-tab-content veh-finance-tab-content">
            <div className="veh-finance-card">
              <div className="veh-finance-intro">
                <h4>{t.vehicleModal.finance.title}</h4>
                <p>{t.vehicleModal.finance.subtitle}</p>
              </div>

              <div className="veh-finance-controls">
                {/* Down payment control */}
                <div className="veh-calc-group">
                  <div className="veh-calc-header">
                    <label>{t.vehicleModal.finance.downPayment}</label>
                    <span className="veh-calc-val">
                      {downPaymentPercent}% (${downPaymentAmount.toLocaleString()})
                    </span>
                  </div>
                  <div className="veh-pct-buttons">
                    {[10, 20, 30, 50].map((pct) => (
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
                    <label>{t.vehicleModal.finance.term}</label>
                    <span className="veh-calc-val">
                      {loanTermMonths} {t.vehicleModal.finance.months}
                    </span>
                  </div>
                  <div className="veh-pct-buttons">
                    {[36, 48, 60, 72].map((term) => (
                      <button
                        key={term}
                        type="button"
                        className={`veh-pct-btn ${loanTermMonths === term ? 'active' : ''}`}
                        onClick={() => setLoanTermMonths(term)}
                      >
                        {term} {t.vehicleModal.finance.months}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Payment Summary Box */}
              <div className="veh-finance-result-box">
                <div className="veh-result-row">
                  <span>{t.vehicleModal.finance.vehiclePrice}:</span>
                  <strong dir="ltr">${carPrice.toLocaleString()}</strong>
                </div>
                <div className="veh-result-row">
                  <span>{t.vehicleModal.finance.downPayment}:</span>
                  <strong dir="ltr">-${downPaymentAmount.toLocaleString()}</strong>
                </div>
                <div className="veh-result-row">
                  <span>{isArabic ? 'المبلغ الممول الصافي:' : 'Net Financed Principal:'}</span>
                  <strong dir="ltr">${loanPrincipal.toLocaleString()}</strong>
                </div>
                <div className="veh-result-divider" />
                <div className="veh-result-total">
                  <div>
                    <span className="veh-total-label">{t.vehicleModal.finance.estimatedPayment}</span>
                    <p className="veh-finance-disclaimer">{t.vehicleModal.finance.disclaimer}</p>
                  </div>
                  <div className="veh-total-amount" dir="ltr">
                    ${estimatedMonthlyPayment.toLocaleString()}
                    <span className="veh-per-mo"> / mo</span>
                  </div>
                </div>
              </div>
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
              title={t.vehicleModal.shareVehicle}
            >
              {copied ? <Check size={16} color="#10B981" /> : <Share2 size={16} />}
              <span>{copied ? t.vehicleModal.copied : t.vehicleModal.shareVehicle}</span>
            </button>
          </div>

          <div className="veh-modal-actions-right">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="veh-whatsapp-btn"
            >
              <span>{t.vehicleModal.whatsappInquire}</span>
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
              {t.vehicleModal.inquireNow}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsModal;
