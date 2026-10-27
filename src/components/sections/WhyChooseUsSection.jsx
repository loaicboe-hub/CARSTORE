import React from 'react';
import { trustPillarsData } from '../../data/testimonialsData';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { ShieldCheck, FileCheck2, Truck, Award, CheckCircle, ArrowRight } from 'lucide-react';

const pillarIcons = {
  ShieldCheck: <ShieldCheck size={26} />,
  FileCheck2: <FileCheck2 size={26} />,
  Truck: <Truck size={26} />,
  Award: <Award size={26} />,
};

export const WhyChooseUsSection = ({ onContactInspection }) => {
  const { t, isArabic } = useLanguage();

  return (
    <section className="why-us-section" id="why-us">
      <div className="container">
        <SectionHeader
          eyebrow={t.whyUs.eyebrow}
          title={t.whyUs.title}
          highlight={t.whyUs.highlight}
          subtitle={t.whyUs.subtitle}
          align="center"
        />

        {/* 4 Pillars Grid */}
        <div className="trust-pillars-grid">
          {trustPillarsData.map((pillar) => (
            <article key={pillar.id} className="trust-pillar-card">
              <div className="trust-pillar-icon-box">
                {pillarIcons[pillar.icon]}
              </div>

              <h3 className="trust-pillar-title">
                {isArabic && pillar.titleAr ? pillar.titleAr : pillar.title}
              </h3>
              <p className="trust-pillar-desc">
                {isArabic && pillar.descriptionAr ? pillar.descriptionAr : pillar.description}
              </p>

              <div className="trust-pillar-metric">
                <CheckCircle size={15} color="var(--accent-gold)" />
                <span>{isArabic && pillar.metricAr ? pillar.metricAr : pillar.metric}</span>
              </div>
            </article>
          ))}
        </div>

        {/* 180-Point Master Inspection Highlight Callout */}
        <div className="inspection-banner">
          <div className="inspection-banner-content">
            <h3 className="inspection-banner-title">
              {t.whyUs.inspectionBanner.title}
            </h3>
            <p className="inspection-banner-desc">
              {t.whyUs.inspectionBanner.desc}
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={onContactInspection}
            iconRight={<ArrowRight size={18} className="rtl-flip" />}
          >
            {t.whyUs.inspectionBanner.btn}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
