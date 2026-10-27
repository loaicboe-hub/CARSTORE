import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Badge from '../common/Badge';
import Button from '../common/Button';
import { Gauge, Zap, Activity, Navigation, ArrowUpRight } from 'lucide-react';

export const VehicleCard = ({ vehicle, onInquire }) => {
  const { t, isArabic } = useLanguage();

  const title = isArabic && vehicle.titleAr ? vehicle.titleAr : vehicle.title;
  const subtitle = isArabic && vehicle.subtitleAr ? vehicle.subtitleAr : vehicle.subtitle;
  const categoryLabel = isArabic && vehicle.categoryLabelAr ? vehicle.categoryLabelAr : vehicle.categoryLabel;
  const badge = isArabic && vehicle.badgeAr ? vehicle.badgeAr : vehicle.badge;
  const status = isArabic && vehicle.statusAr ? vehicle.statusAr : vehicle.status;
  const power = isArabic && vehicle.powerAr ? vehicle.powerAr : vehicle.power;
  const accel = isArabic && vehicle.accelerationAr ? vehicle.accelerationAr : vehicle.acceleration.replace('0-60 in ', '');
  const fuel = isArabic && vehicle.fuelAr ? vehicle.fuelAr : vehicle.fuel.split(' ')[0];
  const mileage = isArabic && vehicle.mileageAr ? vehicle.mileageAr : vehicle.mileage;
  const monthly = isArabic && vehicle.monthlyEstimateAr ? vehicle.monthlyEstimateAr : `Est. ${vehicle.monthlyEstimate}`;

  return (
    <article className="vehicle-card" id={`vehicle-${vehicle.id}`}>
      {/* Vehicle Media Header */}
      <div className="vehicle-image-container">
        <img
          src={vehicle.image}
          alt={`${vehicle.year} ${title}`}
          loading="lazy"
        />

        <div className="vehicle-badge-overlay">
          <Badge variant="gold">{badge}</Badge>
        </div>

        <div className="vehicle-status-overlay">
          <Badge variant="emerald">{status}</Badge>
        </div>
      </div>

      {/* Vehicle Details Body */}
      <div className="vehicle-card-body">
        <div className="vehicle-year-category">
          <span>{vehicle.year}</span>
          <span>•</span>
          <span>{categoryLabel}</span>
        </div>

        <h3 className="vehicle-title">{title}</h3>
        <p className="vehicle-subtitle" title={subtitle}>
          {subtitle}
        </p>

        {/* 4-Item Mini Specs Grid */}
        <div className="specs-mini-grid">
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

          <Button
            variant="primary"
            size="sm"
            onClick={() => onInquire(vehicle)}
            iconRight={<ArrowUpRight size={15} className="rtl-flip" />}
          >
            {t.inventory.inquireBtn}
          </Button>
        </div>
      </div>
    </article>
  );
};

export default VehicleCard;
