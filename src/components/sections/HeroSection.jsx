import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useStore } from '../../context/StoreContext';
import Badge from '../common/Badge';
import { Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const { t, isArabic } = useLanguage();
  const { cmsContent } = useStore();

  const titleP1 = isArabic
    ? (cmsContent.heroTitleP1Ar || t.hero.titleP1)
    : (cmsContent.heroTitleP1 && !/[\u0600-\u06FF]/.test(cmsContent.heroTitleP1) ? cmsContent.heroTitleP1 : t.hero.titleP1);
  const titleP2 = isArabic
    ? (cmsContent.heroTitleP2Ar || t.hero.titleP2)
    : (cmsContent.heroTitleP2 && !/[\u0600-\u06FF]/.test(cmsContent.heroTitleP2) ? cmsContent.heroTitleP2 : t.hero.titleP2);
  const subtitle = isArabic
    ? (cmsContent.heroSubtitleAr || t.brand.heroSubtitle)
    : (cmsContent.heroSubtitle && !/[\u0600-\u06FF]/.test(cmsContent.heroSubtitle) ? cmsContent.heroSubtitle : t.brand.heroSubtitle);
  const heroBadge = isArabic
    ? (cmsContent.heroBadgeAr || t.hero.badge)
    : (cmsContent.heroBadge && !/[\u0600-\u06FF]/.test(cmsContent.heroBadge) ? cmsContent.heroBadge : t.hero.badge);
  const specOutput = isArabic
    ? (cmsContent.specOutputAr || '190–585 HP')
    : (cmsContent.specOutput || '656 HP');
  const specAccel = isArabic
    ? (cmsContent.specAccelAr || '0–100 في 4.5 ثوانٍ')
    : (cmsContent.specAccel && !/[\u0600-\u06FF]/.test(cmsContent.specAccel) ? cmsContent.specAccel : '3.4s');
  const specSpeed = isArabic
    ? (cmsContent.specSpeedAr || 'استلام فوري')
    : (cmsContent.specSpeed && !/[\u0600-\u06FF]/.test(cmsContent.specSpeed) ? cmsContent.specSpeed : '202 MPH');

  return (
    <section className="hero-section" id="hero">
      {/* Background radial glow */}
      <div className="hero-glow-orb" aria-hidden="true" />

      <div className="container">
        {/* Prominent Car Image Banner at the Very Top of the Landing Page */}
        <div className="hero-car-banner">
          <div className="hero-banner-image-wrap">
            {/* The Featured Luxury Supercar Image */}
            <img
              src="/images/defender_110.jpg"
              alt={isArabic ? 'لاند روفر ديفندر 110 P400 SE في صالة عرض الشيخ زايد' : 'Land Rover Defender 110 P400 SE in Cairo Showroom'}
              loading="eager"
              className="hero-banner-img"
            />

            {/* Gradient Overlay for Depth and Text Contrast */}
            <div className="hero-banner-overlay" />

            {/* Top Bar inside Banner: Badge & Live Specs */}
            <div className="hero-banner-top-bar">
              <Badge variant="gold" icon={<Sparkles size={14} />}>
                {heroBadge}
              </Badge>

              {/* Live Technical Specs on Banner */}
              <div className="hero-floating-spec">
                <div className="spec-item">
                  <span className="spec-val">{specOutput}</span>
                  <span className="spec-lbl">{t.hero.liveSpecOutput}</span>
                </div>
                <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)' }} />
                <div className="spec-item">
                  <span className="spec-val">{specAccel}</span>
                  <span className="spec-lbl">{t.hero.liveSpecAccel}</span>
                </div>
                <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.2)' }} />
                <div className="spec-item">
                  <span className="spec-val">{specSpeed}</span>
                  <span className="spec-lbl">{t.hero.liveSpecSpeed}</span>
                </div>
              </div>
            </div>

            {/* Bottom Caption inside Banner: Headline & Tagline */}
            <div className="hero-banner-caption">
              <h1 className="hero-banner-title">
                {titleP1}{' '}
                <span className="title-accent">{titleP2}</span>
              </h1>
              <p className="hero-banner-subtitle">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* Central Dealership Stats Banner */}
        <div className="stats-banner">
          <div className="stats-grid">
            {t.stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-desc">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
