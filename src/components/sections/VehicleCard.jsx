import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { Gauge, Zap, Activity, Navigation, ArrowUpRight, Eye, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

export const VehicleCard = ({ vehicle, onInquire, onViewDetails }) => {
  const { t, isArabic } = useLanguage();

  const title = isArabic && vehicle.titleAr ? vehicle.titleAr : vehicle.title;
  const subtitle = isArabic && vehicle.subtitleAr ? vehicle.subtitleAr : vehicle.subtitle;
  const categoryLabel = isArabic && vehicle.categoryLabelAr ? vehicle.categoryLabelAr : vehicle.categoryLabel;
  const badge = isArabic && vehicle.badgeAr ? vehicle.badgeAr : vehicle.badge;
  const status = isArabic && vehicle.statusAr ? vehicle.statusAr : vehicle.status;
  const power = isArabic && vehicle.powerAr ? vehicle.powerAr : vehicle.power;
  const accel = isArabic && vehicle.accelerationAr ? vehicle.accelerationAr : vehicle.acceleration;
  const fuel = isArabic && vehicle.fuelAr ? vehicle.fuelAr : vehicle.fuel.split(' ')[0];
  const mileage = isArabic && vehicle.mileageAr ? vehicle.mileageAr : vehicle.mileage;
  const monthly = isArabic && vehicle.monthlyEstimateAr ? vehicle.monthlyEstimateAr : `قسط: ${vehicle.monthlyEstimate}`;
  const trafficDept = isArabic ? (vehicle.trafficDept || 'مرور التجمع') : (vehicle.trafficDeptEn || 'Cairo Traffic');
  const licenseVal = isArabic ? (vehicle.licenseValidity || 'رخصة سارية') : (vehicle.licenseValidityEn || 'Valid License');

  const handleOpenDetails = () => {
    if (onViewDetails) {
      onViewDetails(vehicle);
    }
  };

  return (
    <article className="vehicle-card" id={`vehicle-${vehicle.id}`}>
      {/* Vehicle Media Header */}
      <div
        className="vehicle-image-container clickable"
        onClick={handleOpenDetails}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleOpenDetails();
          }
        }}
        aria-label={`${isArabic ? 'عرض تفاصيل' : 'View specs for'} ${title}`}
      >
        <img
          src={vehicle.image}
          alt={`${vehicle.year} ${title}`}
          loading="lazy"
        />

        <div className="vehicle-badge-overlay">
          <Badge variant="emerald" icon={<Sparkles size={12} />}>{badge || (isArabic ? 'فابريكا شركة' : 'Factory')}</Badge>
        </div>

        <div className="vehicle-status-overlay">
          <Badge variant="gold">{status || (isArabic ? 'استلام فوري' : 'Instant')}</Badge>
        </div>

        <div className="vehicle-image-hover-hint">
          <Eye size={16} />
          <span>{isArabic ? 'رادار الفابريكا والمواصفات' : 'View Fabrika & Specs'}</span>
        </div>
      </div>

      {/* Vehicle Details Body */}
      <div className="vehicle-card-body">
        <div className="vehicle-year-category">
          <span>{vehicle.year}</span>
          <span>•</span>
          <span>{categoryLabel}</span>
        </div>

        <h3
          className="vehicle-title clickable-title"
          onClick={handleOpenDetails}
          title={title}
        >
          {title}
        </h3>
        <p className="vehicle-subtitle" title={subtitle}>
          {subtitle}
        </p>

        {/* Traffic & Ownership Pill Tag for Egypt */}
        <div className="vehicle-egypt-meta" onClick={handleOpenDetails}>
          <div className="egypt-meta-item">
            <MapPin size={13} className="egypt-meta-icon" />
            <span>{trafficDept}</span>
          </div>
          <span className="egypt-meta-dot">•</span>
          <div className="egypt-meta-item">
            <ShieldCheck size={13} className="egypt-meta-icon green" />
            <span>{licenseVal}</span>
          </div>
        </div>

        {/* 4-Item Mini Specs Grid */}
        <div className="specs-mini-grid" onClick={handleOpenDetails} style={{ cursor: 'pointer' }} title={isArabic ? 'انقر لعرض المواصفات ورادار الفابريكا' : 'Click for complete technical dossier'}>
          <div className="spec-mini-item">
            <Gauge size={16} className="spec-mini-icon" />
            <span className="spec-mini-val">{power}</span>
            <span className="spec-mini-lbl">{t.inventory.specs.output}</span>
          </div>

          <div className="spec-mini-item">
            <Zap size={16} className="spec-mini-icon" />
            <span className="spec-mini-val">{accel}</span>
            <span className="spec-mini-lbl">{t.inventory.specs.accel}</span>
          </div>

          <div className="spec-mini-item">
            <Activity size={16} className="spec-mini-icon" />
            <span className="spec-mini-val">{fuel}</span>
            <span className="spec-mini-lbl">{t.inventory.specs.powertrain}</span>
          </div>

          <div className="spec-mini-item">
            <Navigation size={16} className="spec-mini-icon" />
            <span className="spec-mini-val">{mileage}</span>
            <span className="spec-mini-lbl">{t.inventory.specs.mileage}</span>
          </div>
        </div>

        {/* Pricing and Action Footer */}
        <div className="vehicle-card-footer">
          <div className="vehicle-pricing">
            <span className="vehicle-price" dir="ltr">{vehicle.priceFormatted}</span>
            <span className="vehicle-monthly">{monthly}</span>
          </div>

          <div className="vehicle-card-actions">
            <button
              type="button"
              className="btn-quick-view-action egypt-action"
              onClick={handleOpenDetails}
              title={isArabic ? 'عرض رادار الفابريكا والألبوم' : 'View Fabrika & Specs'}
            >
              <Sparkles size={14} color="#10B981" />
              <span>{isArabic ? 'الفابريكا' : 'Fabrika'}</span>
            </button>

            <Button
              variant="primary"
              size="sm"
              onClick={() => onInquire(vehicle)}
              iconRight={<ArrowUpRight size={15} className="rtl-flip" />}
            >
              {isArabic ? 'حجز / معاينة' : 'Inquire'}
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VehicleCard;
