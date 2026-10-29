import React from 'react';
import { brandConfig } from '../../config/brandConfig';
import { useLanguage } from '../../context/LanguageContext';
import { useStore } from '../../context/StoreContext';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';

export const CtaSection = ({ onOpenConsultation }) => {
  const { t } = useLanguage();
  const { cmsContent } = useStore();

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-frame">
          <Badge variant="gold" icon={<Sparkles size={14} />}>
            {t.cta.badge}
          </Badge>

          <h2 className="cta-title">
            {t.cta.title}{' '}
            <span className="text-gradient-gold">{t.cta.highlight}</span>
          </h2>

          <p className="cta-desc">{t.cta.desc}</p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenConsultation}
              iconRight={<ArrowUpRight size={18} className="rtl-flip" />}
            >
              {t.cta.scheduleBtn}
            </Button>

            <Button
              as="a"
              href={brandConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
              icon={<MessageSquare size={18} />}
            >
              {t.cta.whatsappBtn}
            </Button>
          </div>

          {/* Quick Contact Info Row */}
          <div className="cta-contact-row">
            <div className="cta-contact-item">
              <Phone size={18} />
              <a href={`tel:${(cmsContent?.phone || brandConfig.contact.phone).replace(/[^0-9+]/g, '')}`} style={{ color: 'var(--text-primary)' }} dir="ltr">
                {cmsContent?.phoneDisplay || brandConfig.contact.phoneDisplay}
              </a>
            </div>

            <div className="cta-contact-item">
              <Mail size={18} />
              <a href={`mailto:${brandConfig.contact.email}`} style={{ color: 'var(--text-primary)' }} dir="ltr">
                {brandConfig.contact.email}
              </a>
            </div>

            <div className="cta-contact-item">
              <MapPin size={18} />
              <span>{t.brand.address}, {t.brand.city}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
