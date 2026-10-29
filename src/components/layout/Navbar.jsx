import React, { useState, useEffect } from 'react';
import { brandConfig } from '../../config/brandConfig';
import { navigationConfig } from '../../config/navigationConfig';
import { useLanguage } from '../../context/LanguageContext';
import { useStore } from '../../context/StoreContext';
import Button from '../common/Button';
import { Phone, Menu, X, ArrowUpRight, Globe } from 'lucide-react';

export const Navbar = ({ onOpenInquiry, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { t, isArabic, toggleLanguage } = useLanguage();
  const { cmsContent } = useStore();

  // Handle scroll detection for glass navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(targetId);
      }
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t.nav.buy, href: '#inventory', id: 'nav-buy' },
    { label: t.nav.sell, href: '#service-sell', id: 'nav-sell' },
    { label: t.nav.exchange, href: '#service-exchange', id: 'nav-exchange' },
    { label: t.nav.rent, href: '#service-rent', id: 'nav-rent' },
    { label: t.nav.management, href: '#management', id: 'nav-management' },
    { label: t.nav.contact, href: '#contact', id: 'nav-contact' },
  ];

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Dealership Logo & Emblem */}
        <a
          href="#hero"
          className="brand-logo"
          onClick={(e) => handleLinkClick(e, '#hero')}
          aria-label={`${t.brand.name} ${t.brand.nameSuffix} Homepage`}
        >
          <div className="brand-emblem" aria-hidden="true">
            {isArabic ? 'ك' : 'C'}
          </div>
          <span>
            {t.brand.name}
            <span className="suffix">{t.brand.nameSuffix}</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          <ul className="nav-desktop-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action Section */}
        <div className="nav-actions">
          {/* Language Switcher Pill Toggle */}
          <button
            type="button"
            className="lang-switch-btn"
            onClick={toggleLanguage}
            title={isArabic ? 'Switch to English' : 'التحويل إلى اللغة العربية'}
            aria-label="Toggle language between English and Arabic"
          >
            <Globe size={15} />
            <span>{t.switchLabel}</span>
          </button>

          <a
            href={`tel:${brandConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
            className="nav-phone-link"
            title={t.nav.concierge}
          >
            <Phone size={15} />
            <span dir="ltr">{brandConfig.contact.phoneDisplay}</span>
          </a>

          <Button
            as="a"
            href="#inventory"
            variant="primary"
            size="sm"
            onClick={(e) => handleLinkClick(e, '#inventory')}
            iconRight={<ArrowUpRight size={16} className="rtl-flip" />}
          >
            {t.nav.exploreShowroom}
          </Button>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={`mobile-${item.id}`} className="mobile-nav-item">
              <a
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={16} className="rtl-flip" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-cta">
          {/* Mobile Language Switcher */}
          <button
            type="button"
            className="lang-switch-btn"
            style={{ width: '100%', justifyContent: 'center', padding: '10px' }}
            onClick={() => {
              toggleLanguage();
              setMobileMenuOpen(false);
            }}
          >
            <Globe size={16} />
            <span>{t.switchLabel}</span>
          </button>

          <Button
            variant="primary"
            size="md"
            as="a"
            href="#inventory"
            onClick={(e) => handleLinkClick(e, '#inventory')}
            iconRight={<ArrowUpRight size={18} className="rtl-flip" />}
          >
            {t.nav.exploreShowroom}
          </Button>

          {onOpenInquiry && (
            <Button
              variant="secondary"
              size="md"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
            >
              {t.nav.concierge}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
