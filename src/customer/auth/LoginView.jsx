import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Globe,
  AlertCircle,
  KeyRound,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const LoginView = ({ onNavigate }) => {
  const { login } = useAuth();
  const { isArabic, toggleLanguage } = useLanguage();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!email || !password) {
      setErrorMsg(isArabic ? 'يرجى إدخال البريد الإلكتروني وكلمة المرور' : 'Please provide both email and password.');
      return;
    }

    setIsLoading(true);
    try {
      await login(email.trim(), password, rememberMe);
      // Redirect to customer dashboard
      onNavigate('/account');
    } catch (err) {
      setErrorMsg(err.message || (isArabic ? 'بيانات الدخول غير صحيحة' : 'Invalid email or password.'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = () => {
    setEmail('client@carrinn.com');
    setPassword('client123');
    setErrorMsg('');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#070B11',
        backgroundImage: `
          radial-gradient(circle at 50% 0%, rgba(194, 139, 20, 0.15) 0%, transparent 60%),
          radial-gradient(circle at 90% 90%, rgba(15, 23, 42, 0.5) 0%, transparent 40%)
        `,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        position: 'relative',
        color: '#FFFFFF',
        fontFamily: 'var(--font-body, system-ui, sans-serif)',
        boxSizing: 'border-box',
      }}
    >
      {/* Top Bar: Return to Showroom & Language Toggle */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          right: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <button
          type="button"
          onClick={() => onNavigate('/')}
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
          <span>{isArabic ? 'العودة للمعرض' : 'Return to Showroom'}</span>
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

      {/* Login Card */}
      <div
        style={{
          width: '100%',
          maxWidth: '430px',
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(194, 139, 20, 0.25)',
          borderRadius: '16px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(194, 139, 20, 0.08)',
          padding: '36px 30px',
          margin: '60px 0 20px 0',
          boxSizing: 'border-box',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '26px' }}>
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)',
              color: '#070B11',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 900,
              margin: '0 auto 12px auto',
              boxShadow: '0 4px 18px rgba(194, 139, 20, 0.45)',
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
              background: 'rgba(194, 139, 20, 0.12)',
              border: '1px solid rgba(194, 139, 20, 0.3)',
              color: 'var(--accent-gold, #C28B14)',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}
          >
            <Sparkles size={12} />
            <span>{isArabic ? 'بوابة العملاء الفاخرة' : 'Client Privileges'}</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.6rem',
              fontWeight: 800,
              margin: '0 0 6px 0',
              color: '#FFFFFF',
            }}
          >
            {isArabic ? 'تسجيل دخول العميل' : 'Customer Sign In'}
          </h1>
          <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.85rem' }}>
            {isArabic ? 'أدخل إلى حسابك لإدارة مركباتك ومتابعة عروضك' : 'Access your dashboard, saved vehicles & active listings'}
          </p>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div
            style={{
              background: 'rgba(225, 29, 72, 0.15)',
              border: '1px solid rgba(225, 29, 72, 0.35)',
              color: '#FB7185',
              padding: '10px 14px',
              borderRadius: '8px',
              fontSize: '0.84rem',
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div style={{ marginBottom: '16px' }}>
            <label
              htmlFor="customer-email"
              style={{
                display: 'block',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#CBD5E1',
                marginBottom: '6px',
              }}
            >
              {isArabic ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="customer-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="name@example.com"
                required
                autoFocus
                style={{
                  width: '100%',
                  height: '44px',
                  padding: isArabic ? '0 38px 0 14px' : '0 14px 0 38px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  [isArabic ? 'right' : 'left']: '12px',
                  color: '#94A3B8',
                  pointerEvents: 'none',
                  display: 'flex',
                }}
              >
                <Mail size={17} />
              </div>
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label
                htmlFor="customer-password"
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: '#CBD5E1',
                }}
              >
                {isArabic ? 'كلمة المرور' : 'Password'}
              </label>
              <button
                type="button"
                onClick={() => onNavigate('/forgot-password')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent-gold, #C28B14)',
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                {isArabic ? 'نسيت كلمة المرور؟' : 'Forgot Password?'}
              </button>
            </div>

            <div style={{ position: 'relative' }}>
              <input
                id="customer-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="••••••••"
                required
                style={{
                  width: '100%',
                  height: '44px',
                  padding: isArabic ? '0 38px 0 42px' : '0 42px 0 38px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.92rem',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  [isArabic ? 'right' : 'left']: '12px',
                  color: '#94A3B8',
                  pointerEvents: 'none',
                  display: 'flex',
                }}
              >
                <Lock size={17} />
              </div>
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
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Demo Fill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              fontSize: '0.84rem',
            }}
          >
            <label style={{ display: 'flex', alignItems: 'center', gap: '7px', cursor: 'pointer', color: '#CBD5E1' }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{
                  width: '15px',
                  height: '15px',
                  accentColor: 'var(--accent-gold, #C28B14)',
                  cursor: 'pointer',
                }}
              />
              <span>{isArabic ? 'تذكرني' : 'Remember me'}</span>
            </label>

            <button
              type="button"
              onClick={handleDemoLogin}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent-gold, #C28B14)',
                fontSize: '0.78rem',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              {isArabic ? 'تجربة حساب عميل' : 'Demo Customer Login'}
            </button>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              height: '46px',
              background: 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)',
              border: 'none',
              borderRadius: '8px',
              color: '#070B11',
              fontSize: '0.94rem',
              fontWeight: 800,
              cursor: isLoading ? 'wait' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 18px rgba(194, 139, 20, 0.35)',
              opacity: isLoading ? 0.7 : 1,
            }}
          >
            {isLoading ? (
              <span>{isArabic ? 'جارِ التحقق...' : 'Signing in...'}</span>
            ) : (
              <>
                <KeyRound size={17} />
                <span>{isArabic ? 'تسجيل الدخول' : 'Sign In to Account'}</span>
              </>
            )}
          </button>
        </form>

        {/* Create Account Link */}
        <div
          style={{
            marginTop: '22px',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#94A3B8',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '18px',
          }}
        >
          <span>{isArabic ? 'ليس لديك حساب بعد؟' : "Don't have an account yet?"} </span>
          <button
            type="button"
            onClick={() => onNavigate('/signup')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-gold, #C28B14)',
              fontWeight: 700,
              cursor: 'pointer',
              padding: 0,
              textDecoration: 'underline',
            }}
          >
            {isArabic ? 'إنشاء حساب جديد' : 'Register Now'}
          </button>
        </div>
      </div>

      <div style={{ fontSize: '0.78rem', color: '#64748B', textAlign: 'center' }}>
        {isArabic
          ? `© ${new Date().getFullYear()} كار إن (CAR IN). جميع الحقوق محفوظة.`
          : `© ${new Date().getFullYear()} CAR IN Luxury Platform. All Rights Reserved.`}
      </div>
    </div>
  );
};

export default LoginView;
