import React from 'react';
import { brandConfig } from '../../config/brandConfig';
import { useLanguage } from '../../context/LanguageContext';
import { useStore } from '../../context/StoreContext';
import { Phone, Mail, MapPin, Clock, ArrowUp, Lock } from 'lucide-react';

export const Footer = ({ onOpenAdmin }) => {
  const { t, isArabic } = useLanguage();
  const { cmsContent } = useStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            { label: 'خدمة واستشارات VIP المعتمدة', href: '#contact' },
          ]
        : [
            { label: '180-Point Inspection', href: '#why-us' },
            { label: 'Enclosed Delivery', href: '#why-us' },
            { label: 'Inquire on a Vehicle', href: '#contact' },
            { label: 'Certified VIP Concierge Service', href: '#contact' },
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

            <div className="footer-contact-details">
              <div className="footer-contact-item">
                <MapPin size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">{t.brand.address}, {t.brand.city}</span>
              </div>
              <div className="footer-contact-item">
                <Clock size={18} className="footer-contact-icon" />
                <span className="footer-contact-text">{t.brand.hours}</span>
              </div>
              <div className="footer-contact-item footer-phone-item">
                <Phone size={20} className="footer-contact-icon footer-phone-icon" />
                <a
                  href={`tel:${(cmsContent?.phone || brandConfig.contact.phone).replace(/[^0-9+]/g, '')}`}
                  className="footer-contact-link footer-phone-link"
                  style={{
                    color: '#FFFFFF',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                  dir="ltr"
                >
                  {cmsContent?.phoneDisplay || brandConfig.contact.phoneDisplay}
                </a>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} className="footer-contact-icon" />
                <a
                  href={`mailto:${brandConfig.contact.email}`}
                  className="footer-contact-link footer-email-link"
                  style={{
                    color: '#E2E8F0',
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                  }}
                  dir="ltr"
                >
                  {brandConfig.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="footer-nav-col">
              <h3 className="footer-col-title">{section.title}</h3>
              <ul className="footer-links-list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="footer-link"
                      onClick={(e) => {
                        if (link.onClick) {
                          e.preventDefault();
                          link.onClick();
                        }
                      }}
                    >
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
