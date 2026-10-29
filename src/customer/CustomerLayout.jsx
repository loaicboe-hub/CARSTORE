import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import {
  LayoutDashboard,
  Car,
  PlusCircle,
  User,
  LogOut,
  ExternalLink,
  Globe,
  Menu,
  X,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';

export const CustomerLayout = ({ activeTab, onNavigate, children }) => {
  const { user, logout } = useAuth();
  const { isArabic, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'overview', label: isArabic ? 'نظرة عامة' : 'Overview', path: '/account', icon: LayoutDashboard },
    { id: 'listings', label: isArabic ? 'إعلاناتي' : 'My Listings', path: '/account/listings', icon: Car },
    { id: 'new', label: isArabic ? 'أضف سيارتك' : 'List a Car', path: '/account/listings/new', icon: PlusCircle, isCta: true },
    { id: 'profile', label: isArabic ? 'الملف الشخصي' : 'Profile Settings', path: '/account/profile', icon: User },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#070B11',
        color: '#FFFFFF',
        fontFamily: 'var(--font-body, system-ui, sans-serif)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Top Customer Header */}
      <header
        style={{
          height: '70px',
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'sticky',
          top: 0,
          zIndex: 40,
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            height: '100%',
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <button
              type="button"
              onClick={() => onNavigate('/account')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)',
                  color: '#070B11',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                }}
              >
                {isArabic ? 'ك' : 'C'}
              </div>
              <div style={{ textAlign: isArabic ? 'right' : 'left' }}>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.04em' }}>
                  CAR<span style={{ color: 'var(--accent-gold, #C28B14)' }}>IN</span>
                </div>
                <div style={{ fontSize: '0.68rem', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  {isArabic ? 'بوابة العملاء' : 'Customer Portal'}
                </div>
              </div>
            </button>

            {/* Desktop Navigation Tabs */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="desktop-only-flex">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate(item.path)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: item.isCta ? '7px 16px' : '8px 14px',
                      borderRadius: '8px',
                      fontSize: '0.86rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      background: item.isCta
                        ? 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)'
                        : isActive
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'transparent',
                      color: item.isCta ? '#070B11' : isActive ? '#FFFFFF' : '#94A3B8',
                      border: item.isCta
                        ? 'none'
                        : isActive
                        ? '1px solid rgba(255, 255, 255, 0.15)'
                        : '1px solid transparent',
                    }}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Action Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Return to Public Showroom Button */}
            <button
              type="button"
              onClick={() => onNavigate('/')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#CBD5E1',
                padding: '7px 12px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
              title={isArabic ? 'الانتقال إلى المعرض العام' : 'View Public Showroom'}
            >
              <ExternalLink size={14} />
              <span className="desktop-only-inline">{isArabic ? 'المعرض العام' : 'Public Showroom'}</span>
            </button>

            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#CBD5E1',
                padding: '7px 12px',
                borderRadius: '8px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <Globe size={14} />
              <span>{isArabic ? 'EN' : 'العربية'}</span>
            </button>

            {/* User Profile Pill & Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                type="button"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(194, 139, 20, 0.3)',
                  padding: '5px 12px 5px 6px',
                  borderRadius: '30px',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)',
                    color: '#070B11',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                  }}
                >
                  {user?.avatar || 'CL'}
                </div>
                <div style={{ textAlign: isArabic ? 'right' : 'left', maxWidth: '120px' }} className="desktop-only-block">
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {user?.name || 'Customer'}
                  </div>
                </div>
                <ChevronDown size={14} color="#94A3B8" />
              </button>

              {/* User Dropdown */}
              {userDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    [isArabic ? 'left' : 'right']: 0,
                    width: '210px',
                    background: 'rgba(15, 23, 42, 0.96)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '12px',
                    boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.7)',
                    padding: '8px',
                    zIndex: 50,
                  }}
                >
                  <div style={{ padding: '8px 10px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '6px' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>{user?.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.email}</div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onNavigate('/account/profile');
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 10px',
                      background: 'none',
                      border: 'none',
                      color: '#E2E8F0',
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      borderRadius: '6px',
                      textAlign: isArabic ? 'right' : 'left',
                    }}
                  >
                    <User size={15} />
                    <span>{isArabic ? 'إعدادات الحساب' : 'Account Settings'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onNavigate('/account/listings');
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 10px',
                      background: 'none',
                      border: 'none',
                      color: '#E2E8F0',
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      borderRadius: '6px',
                      textAlign: isArabic ? 'right' : 'left',
                    }}
                  >
                    <Car size={15} />
                    <span>{isArabic ? 'سياراتي المعروضة' : 'My Vehicles'}</span>
                  </button>

                  <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', margin: '6px 0' }} />

                  <button
                    type="button"
                    onClick={() => {
                      setUserDropdownOpen(false);
                      logout();
                    }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 10px',
                      background: 'none',
                      border: 'none',
                      color: '#FB7185',
                      fontSize: '0.84rem',
                      cursor: 'pointer',
                      borderRadius: '6px',
                      textAlign: isArabic ? 'right' : 'left',
                    }}
                  >
                    <LogOut size={15} />
                    <span>{isArabic ? 'تسجيل الخروج' : 'Sign Out'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-only-btn"
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                padding: '6px',
                cursor: 'pointer',
                display: 'none',
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              background: '#0B111A',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '16px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate(item.path);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    background: item.isCta
                      ? 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)'
                      : isActive
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'transparent',
                    color: item.isCta ? '#070B11' : '#FFFFFF',
                    border: 'none',
                    textAlign: isArabic ? 'right' : 'left',
                    cursor: 'pointer',
                  }}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '30px 20px', maxWidth: '1280px', width: '100%', margin: '0 auto', boxSizing: 'border-box' }}>
        {children}
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '20px',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: '#64748B',
        }}
      >
        &copy; {new Date().getFullYear()} CAR IN / AUTOHAUS Customer Services. All personal data is encrypted and secure.
      </footer>
    </div>
  );
};

export default CustomerLayout;
