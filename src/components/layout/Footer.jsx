import React from 'react';
import { brandConfig } from '../../config/brandConfig';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';

// Crisp SVG social icons for automotive brand footer
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

export const Footer = () => {
  const { t, isArabic } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'instagram':
        return <InstagramIcon />;
      case 'youtube':
        return <YoutubeIcon />;
      case 'linkedin':
        return <LinkedinIcon />;
      case 'x':
      default:
        return <TwitterIcon />;
    }
  };

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: t.footer.sections.services,
      links: isArabic
        ? [
            { label: 'شراء السيارات المعتمدة', href: '#services' },
            { label: 'بيع سيارتك بأعلى قيمة', href: '#services' },
            { label: 'تأجير أسطول فاخر وخارق', href: '#services' },
            { label: 'استبدال وترقية سيارتك', href: '#services' },
          ]
        : [
            { label: 'Buy Certified Vehicles', href: '#services' },
            { label: 'Sell Your Vehicle', href: '#services' },
            { label: 'Exotic & Luxury Rental', href: '#services' },
            { label: 'Bespoke Exchange / Trade-In', href: '#services' },
          ],
    },
    {
      title: t.footer.sections.showroom,
      links: isArabic
        ? [
            { label: 'سيارات خارقة مميزة', href: '#inventory' },
            { label: 'دفع رباعي عالية الأداء', href: '#inventory' },
            { label: 'سيدان تنفيذية فاخرة', href: '#inventory' },
            { label: 'هايبر جي تي كهربائية', href: '#inventory' },
          ]
        : [
            { label: 'Featured Supercars', href: '#inventory' },
            { label: 'High-Performance SUVs', href: '#inventory' },
            { label: 'Executive Sedans', href: '#inventory' },
            { label: 'Electric GT', href: '#inventory' },
          ],
    },
    {
      title: t.footer.sections.clientCare,
      links: isArabic
        ? [
            { label: 'فحص فني شامل 180 نقطة', href: '#why-us' },
            { label: 'نقل وشحن مغلق VIP', href: '#why-us' },
            { label: 'استفسار عن حجز سيارة', href: '#contact' },
            { label: 'تحديد موعد زيارة الصالة', href: '#contact' },
          ]
        : [
            { label: '180-Point Inspection', href: '#why-us' },
            { label: 'Enclosed Delivery', href: '#why-us' },
            { label: 'Inquire on a Vehicle', href: '#contact' },
            { label: 'Schedule Showroom Visit', href: '#contact' },
          ],
    },
  ];

  return (
    <footer className="footer-wrapper" id="contact">
      <div className="container">
        {/* Main 4-Column Footer Grid */}
        <div className="footer-top-grid">
          {/* Brand & Showroom Info */}
          <div className="footer-brand-col">
            <div className="brand-logo">
              <div className="brand-emblem" aria-hidden="true">
                {isArabic ? 'ك' : 'C'}
              </div>
              <span>
                {t.brand.name}
                <span className="suffix">{t.brand.nameSuffix}</span>
              </span>
            </div>

            <p className="footer-tagline">{t.brand.heroSubtitle}</p>

            <div className="footer-contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="var(--accent-gold)" />
                <span>{t.brand.address}, {t.brand.city}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} color="var(--accent-gold)" />
                <span>{t.brand.hours}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="var(--accent-gold)" />
                <a href={`tel:${brandConfig.contact.phone.replace(/[^0-9+]/g, '')}`} style={{ color: 'var(--text-primary)' }} dir="ltr">
                  {brandConfig.contact.phoneDisplay}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="var(--accent-gold)" />
                <a href={`mailto:${brandConfig.contact.email}`} style={{ color: 'var(--text-primary)' }} dir="ltr">
                  {brandConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="footer-social-links">
              {brandConfig.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  aria-label={`Visit our ${social.name} page`}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="footer-nav-col">
              <h3 className="footer-col-title">{section.title}</h3>
              <ul className="footer-links-list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} {t.brand.name} {t.brand.nameSuffix}. {t.footer.copyright}
          </p>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label={t.footer.backToTop}
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
