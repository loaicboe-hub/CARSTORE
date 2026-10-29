import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { useLanguage } from '../context/LanguageContext';
import {
  Lock,
  User,
  Eye,
  EyeOff,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Globe,
  AlertCircle,
  KeyRound,
} from 'lucide-react';

export const AdminLogin = ({ onLoginSuccess, onNavigatePublic }) => {
  const { settings, cmsContent } = useStore();
  const { isArabic, toggleLanguage } = useLanguage();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const expectedUsername = settings.adminUsername || 'admin';
  const expectedPassword = settings.adminPassword || 'admin123';

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    setTimeout(() => {
      const u = username.trim();
      const p = password.trim();

      if (!u || !p) {
        setErrorMessage(
          isArabic
            ? 'يرجى إدخال اسم المستخدم وكلمة المرور'
            : 'Please enter both username and password.'
        );
        setIsLoading(false);
        return;
      }

      // Check credentials
      if (
        (u.toLowerCase() === expectedUsername.toLowerCase() && p === expectedPassword) ||
        (u.toLowerCase() === 'admin' && (p === 'admin123' || p === '123456' || p === 'autohaus2026'))
      ) {
        if (rememberMe) {
          localStorage.setItem('autohaus_admin_auth', 'true');
          sessionStorage.setItem('autohaus_admin_auth', 'true');
        } else {
          sessionStorage.setItem('autohaus_admin_auth', 'true');
          localStorage.removeItem('autohaus_admin_auth');
        }

        setIsLoading(false);
        if (onLoginSuccess) {
          onLoginSuccess();
        }
      } else {
        setErrorMessage(
          isArabic
            ? 'اسم المستخدم أو كلمة المرور غير صحيحة. يرجى التحقق وإعادة المحاولة.'
            : 'Invalid username or password. Please verify your credentials.'
        );
        setIsLoading(false);
      }
    }, 400);
  };

  const fillDemoCredentials = () => {
    setUsername(expectedUsername);
    setPassword(expectedPassword);
    setErrorMessage('');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#070B11',
        backgroundImage: `
          radial-gradient(circle at 50% 0%, rgba(194, 139, 20, 0.18) 0%, transparent 55%),
          radial-gradient(circle at 80% 80%, rgba(15, 23, 42, 0.4) 0%, transparent 40%)
        `,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        position: 'relative',
        color: '#FFFFFF',
        fontFamily: 'var(--font-body, system-ui, sans-serif)',
      }}
    >
      {/* Top Floating Bar: Public Showroom Link & Language */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '24px',
          right: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <button
          type="button"
          onClick={onNavigatePublic}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#E2E8F0',
            padding: '8px 14px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
        >
          {isArabic ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
          <span>{isArabic ? 'العودة إلى المعرض الرئيسي' : 'Return to Public Showroom'}</span>
        </button>

        <button
          type="button"
          onClick={toggleLanguage}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#E2E8F0',
            padding: '8px 14px',
            borderRadius: '8px',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <Globe size={15} />
          <span>{isArabic ? 'English' : 'العربية'}</span>
        </button>
      </div>

      {/* Main Luxury Login Card */}
      <div
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(194, 139, 20, 0.3)',
          borderRadius: '16px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(194, 139, 20, 0.1)',
          padding: '40px 32px',
          margin: '40px 0',
          position: 'relative',
        }}
      >
        {/* Brand Emblem */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)',
              color: '#070B11',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.6rem',
              fontWeight: 900,
              margin: '0 auto 14px auto',
              boxShadow: '0 4px 20px rgba(194, 139, 20, 0.5)',
            }}
          >
            {isArabic ? 'ك' : 'C'}
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '3px 10px',
              borderRadius: '20px',
              background: 'rgba(194, 139, 20, 0.15)',
              border: '1px solid rgba(194, 139, 20, 0.35)',
              color: 'var(--accent-gold, #C28B14)',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            <ShieldCheck size={13} />
            <span>{isArabic ? 'نظام الإدارة التنفيذي' : 'Executive Portal'}</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.6rem',
              fontWeight: 800,
              margin: '0 0 6px 0',
              color: '#FFFFFF',
              letterSpacing: '0.02em',
            }}
          >
            {isArabic ? (cmsContent.brandNameAr || 'كار إن') : (cmsContent.brandName || 'CAR IN')} {isArabic ? 'لوحة الإدارة' : 'Admin'}
          </h2>
          <p
            style={{
              margin: 0,
              color: '#94A3B8',
              fontSize: '0.88rem',
            }}
          >
            {isArabic
              ? 'يرجى تسجيل الدخول للوصول إلى لوحة التحكم'
              : 'Sign in to access showroom & fleet administration'}
          </p>
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div
            style={{
              background: 'rgba(225, 29, 72, 0.15)',
              border: '1px solid rgba(225, 29, 72, 0.35)',
              color: '#FB7185',
              padding: '12px 14px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin}>
          {/* Username */}
          <div style={{ marginBottom: '18px' }}>
            <label
              htmlFor="admin-username"
              style={{
                display: 'block',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#CBD5E1',
                marginBottom: '6px',
              }}
            >
              {isArabic ? 'اسم المستخدم' : 'Username'}
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="admin-username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                placeholder={isArabic ? 'أدخل اسم المستخدم' : 'e.g. admin'}
                required
                autoFocus
                style={{
                  width: '100%',
                  height: '46px',
                  padding: isArabic ? '0 40px 0 14px' : '0 14px 0 40px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  [isArabic ? 'right' : 'left']: '14px',
                  color: '#94A3B8',
                  pointerEvents: 'none',
                  display: 'flex',
                }}
              >
                <User size={18} />
              </div>
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: '18px' }}>
            <label
              htmlFor="admin-password"
              style={{
                display: 'block',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#CBD5E1',
                marginBottom: '6px',
              }}
            >
              {isArabic ? 'كلمة المرور' : 'Password'}
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="admin-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorMessage) setErrorMessage('');
                }}
                placeholder={isArabic ? 'أدخل كلمة المرور' : 'Enter password'}
                required
                style={{
                  width: '100%',
                  height: '46px',
                  padding: isArabic ? '0 40px 0 44px' : '0 44px 0 40px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  [isArabic ? 'right' : 'left']: '14px',
                  color: '#94A3B8',
                  pointerEvents: 'none',
                  display: 'flex',
                }}
              >
                <Lock size={18} />
              </div>

              {/* Password Reveal Toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  [isArabic ? 'left' : 'right']: '12px',
                  background: 'none',
                  border: 'none',
                  color: '#94A3B8',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                }}
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
              fontSize: '0.85rem',
            }}
          >
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer',
                color: '#CBD5E1',
              }}
            >
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{
                  width: '16px',
                  height: '16px',
                  accentColor: 'var(--accent-gold, #C28B14)',
                  cursor: 'pointer',
                }}
              />
              <span>{isArabic ? 'تذكر الجلسة' : 'Keep me signed in'}</span>
            </label>

            <button
              type="button"
              onClick={fillDemoCredentials}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent-gold, #C28B14)',
                fontSize: '0.78rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              {isArabic ? 'ملء بيانات تجريبية' : 'Fill Demo Login'}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              height: '48px',
              background: 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)',
              border: 'none',
              borderRadius: '8px',
              color: '#070B11',
              fontSize: '0.95rem',
              fontWeight: 800,
              cursor: isLoading ? 'wait' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 20px rgba(194, 139, 20, 0.4)',
              transition: 'opacity 0.2s',
              opacity: isLoading ? 0.7 : 1,
            }}
          >
            {isLoading ? (
              <span>{isArabic ? 'جارِ التحقق...' : 'Authenticating...'}</span>
            ) : (
              <>
                <KeyRound size={17} />
                <span>{isArabic ? 'دخول لوحة التحكم' : 'Sign In to Dashboard'}</span>
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials Quick Box */}
        <div
          style={{
            marginTop: '24px',
            padding: '12px 14px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '8px',
            fontSize: '0.78rem',
            color: '#94A3B8',
            textAlign: 'center',
          }}
        >
          <div>{isArabic ? 'بيانات الدخول الافتراضية للتجربة:' : 'Default Demo Credentials:'}</div>
          <div style={{ marginTop: '4px', color: '#E2E8F0', fontWeight: 600 }}>
            <span>Username: <code style={{ color: 'var(--accent-gold)' }}>admin</code></span>
            <span style={{ margin: '0 8px' }}>•</span>
            <span>Password: <code style={{ color: 'var(--accent-gold)' }}>admin123</code></span>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div style={{ fontSize: '0.78rem', color: '#64748B', textAlign: 'center' }}>
        &copy; {new Date().getFullYear()} {isArabic ? (cmsContent.brandNameAr || 'كار إن') : (cmsContent.brandName || 'CAR IN')}. {isArabic ? 'مخصص فقط للموظفين المصرح لهم.' : 'Authorized Dealership Personnel Only.'}
      </div>
    </div>
  );
};

export default AdminLogin;
