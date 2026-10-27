import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import SectionHeader from '../common/SectionHeader';
import Badge from '../common/Badge';
import Button from '../common/Button';
import {
  KeyRound,
  BadgeDollarSign,
  Sparkles,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  buy: <KeyRound size={26} />,
  sell: <BadgeDollarSign size={26} />,
  rent: <Sparkles size={26} />,
  exchange: <RefreshCw size={26} />,
};

const accentMap = {
  buy: 'gold',
  sell: 'emerald',
  rent: 'cyan',
  exchange: 'amber',
};

export const ServiceCard = ({ service, onAction }) => {
  return (
    <article className="service-card" id={`service-${service.id}`}>
      <div className="service-header">
        <div className="service-icon-box">{iconMap[service.id]}</div>
        <Badge variant={accentMap[service.id] || 'gold'}>{service.badge}</Badge>
      </div>

      <h3 className="service-card-title">{service.title}</h3>
      <div className="service-card-tagline">{service.tagline}</div>
      <p className="service-card-desc">{service.description}</p>

      <ul className="service-perks-list">
        {service.perks.map((perk, idx) => (
          <li key={idx} className="service-perk-item">
            <CheckCircle2 size={16} />
            <span>{perk}</span>
          </li>
        ))}
      </ul>

      <div className="service-card-footer">
        <Button
          variant="outline-gold"
          size="sm"
          style={{ width: '100%' }}
          onClick={() => onAction(service)}
          iconRight={<ArrowRight size={16} className="rtl-flip" />}
        >
          {service.actionText}
        </Button>
      </div>
    </article>
  );
};

export const ServicesSection = ({ onServiceSelect }) => {
  const { t } = useLanguage();

  return (
    <section className="services-section" id="services">
      <div className="container">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          highlight={t.services.highlight}
          subtitle={t.services.subtitle}
          align="center"
        />

        <div className="services-grid">
          {t.services.cards.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onAction={onServiceSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
