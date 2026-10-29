import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  Lock,
  Mail,
  User,
  Phone,
  MapPin,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Globe,
  AlertCircle,
  UserPlus,
  ShieldCheck,
} from 'lucide-react';

export const SignupView = ({ onNavigate }) => {
  const { register } = useAuth();
  const { isArabic, toggleLanguage } = useLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Compute simple password strength
  const getPasswordStrength = () => {
    if (!password) return 0;
    let score = 0;
    if (password.length >= 6) score += 1;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password) || /[^A-Za-z0-9]/.test(password)) score += 1;
    return score; // 0 to 4
  };

  const strength = getPasswordStrength();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim() || !email.trim() || !password) {
      setErrorMsg(isArabic ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg(isArabic ? 'يجب أن تتكون كلمة المرور من 6 أحرف على الأقل' : 'Password must be at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg(isArabic ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match. Please verify.');
      return;
    }

    if (!agreeTerms) {
      setErrorMsg(isArabic ? 'يرجى الموافقة على شروط الاستخدام والخصوصية' : 'Please agree to the Terms of Service.');
      return;
    }

    setIsLoading(true);
    try {
      await register({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        city: city.trim(),
        password,
      });
      // Redirect to customer dashboard
      onNavigate('/account');
    } catch (err) {
      setErrorMsg(err.message || (isArabic ? 'فشل إنشاء الحساب' : 'Failed to register account.'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#070B11',
        backgroundImage: `
          radial-gradient(circle at 50% 0%, rgba(194, 139, 20, 0.15) 0%, transparent 60%),
          radial-gradient(circle at 10% 90%, rgba(15, 23, 42, 0.5) 0%, transparent 40%)
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
      {/* Top Floating Bar */}
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

      {/* Signup Card */}
      <div
        style={{
          width: '100%',
          maxWidth: '480px',
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
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
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
            <ShieldCheck size={12} />
            <span>{isArabic ? 'عضوية معتمدة' : 'Verified Membership'}</span>
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
            {isArabic ? 'إنشاء حساب جديد' : 'Join AUTOHAUS'}
          </h1>
          <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.85rem' }}>
            {isArabic ? 'سجل لعرض سياراتك، تتبع الإعلانات وإتمام الصفقات' : 'Create your account to list vehicles and access VIP inventory'}
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
          {/* Full Name */}
          <div style={{ marginBottom: '14px' }}>
            <label
              htmlFor="reg-name"
              style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '5px' }}
            >
              {isArabic ? 'الاسم الكامل' : 'Full Name'} *
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="reg-name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder={isArabic ? 'مثال: محمد العمري' : 'e.g. Alexander Vance'}
                required
                style={{
                  width: '100%',
                  height: '42px',
                  padding: isArabic ? '0 38px 0 14px' : '0 14px 0 38px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
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
                <User size={16} />
              </div>
            </div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: '14px' }}>
            <label
              htmlFor="reg-email"
              style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '5px' }}
            >
              {isArabic ? 'البريد الإلكتروني' : 'Email Address'} *
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="reg-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="name@example.com"
                required
                style={{
                  width: '100%',
                  height: '42px',
                  padding: isArabic ? '0 38px 0 14px' : '0 14px 0 38px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
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
                <Mail size={16} />
              </div>
            </div>
          </div>

          {/* Phone & City 2-col Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
            {/* Phone */}
            <div>
              <label
                htmlFor="reg-phone"
                style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '5px' }}
              >
                {isArabic ? 'رقم الهاتف' : 'Phone'}
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="reg-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  style={{
                    width: '100%',
                    height: '42px',
                    padding: isArabic ? '0 34px 0 10px' : '0 10px 0 34px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '0.88rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    [isArabic ? 'right' : 'left']: '10px',
                    color: '#94A3B8',
                    pointerEvents: 'none',
                    display: 'flex',
                  }}
                >
                  <Phone size={15} />
                </div>
              </div>
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="reg-city"
                style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '5px' }}
              >
                {isArabic ? 'المدينة' : 'City / Location'}
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="reg-city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder={isArabic ? 'الرياض / دبي' : 'Dubai, UAE'}
                  style={{
                    width: '100%',
                    height: '42px',
                    padding: isArabic ? '0 34px 0 10px' : '0 10px 0 34px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '8px',
                    color: '#FFFFFF',
                    fontSize: '0.88rem',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    [isArabic ? 'right' : 'left']: '10px',
                    color: '#94A3B8',
                    pointerEvents: 'none',
                    display: 'flex',
                  }}
                >
                  <MapPin size={15} />
                </div>
              </div>
            </div>
          </div>

          {/* Password */}
          <div style={{ marginBottom: '14px' }}>
            <label
              htmlFor="reg-password"
              style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '5px' }}
            >
              {isArabic ? 'كلمة المرور' : 'Password'} *
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="reg-password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="At least 6 characters"
                required
                style={{
                  width: '100%',
                  height: '42px',
                  padding: isArabic ? '0 38px 0 38px' : '0 38px 0 38px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
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
                <Lock size={16} />
              </div>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  [isArabic ? 'left' : 'right']: '10px',
                  background: 'none',
                  border: 'none',
                  color: '#94A3B8',
                  cursor: 'pointer',
                  padding: '4px',
                  display: 'flex',
                }}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            {/* Strength Bar */}
            {password && (
              <div style={{ marginTop: '6px' }}>
                <div style={{ display: 'flex', gap: '4px', height: '4px' }}>
                  {[1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      style={{
                        flex: 1,
                        borderRadius: '2px',
                        background:
                          step <= strength
                            ? strength <= 1
                              ? '#E11D48'
                              : strength <= 2
                              ? '#F59E0B'
                              : '#10B981'
                            : 'rgba(255, 255, 255, 0.1)',
                        transition: 'background 0.2s',
                      }}
                    />
                  ))}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '3px', textAlign: 'right' }}>
                  {strength <= 1 ? 'Weak' : strength <= 2 ? 'Fair' : strength === 3 ? 'Good' : 'Strong'}
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div style={{ marginBottom: '16px' }}>
            <label
              htmlFor="reg-confirm-password"
              style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '5px' }}
            >
              {isArabic ? 'تأكيد كلمة المرور' : 'Confirm Password'} *
            </label>
            <div style={{ position: 'relative' }}>
              <input
                id="reg-confirm-password"
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (errorMsg) setErrorMsg('');
                }}
                placeholder="Repeat password"
                required
                style={{
                  width: '100%',
                  height: '42px',
                  padding: isArabic ? '0 38px 0 14px' : '0 14px 0 38px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  borderRadius: '8px',
                  color: '#FFFFFF',
                  fontSize: '0.9rem',
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
                <Lock size={16} />
              </div>
            </div>
          </div>

          {/* Terms checkbox */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', cursor: 'pointer', fontSize: '0.8rem', color: '#94A3B8' }}>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                style={{
                  marginTop: '3px',
                  accentColor: 'var(--accent-gold, #C28B14)',
                  cursor: 'pointer',
                }}
              />
              <span>
                {isArabic
                  ? 'أوافق على شروط الخدمة وسياسة الخصوصية الخاصة بمنصة AUTOHAUS'
                  : 'I agree to the AUTOHAUS Terms of Service and Privacy Policy for vehicle transactions.'}
              </span>
            </label>
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
              <span>{isArabic ? 'جارِ إنشاء الحساب...' : 'Creating Account...'}</span>
            ) : (
              <>
                <UserPlus size={17} />
                <span>{isArabic ? 'تأكيد التسجيل' : 'Complete Registration'}</span>
              </>
            )}
          </button>
        </form>

        {/* Login Link */}
        <div
          style={{
            marginTop: '20px',
            textAlign: 'center',
            fontSize: '0.84rem',
            color: '#94A3B8',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '16px',
          }}
        >
          <span>{isArabic ? 'لديك حساب بالفعل؟' : 'Already have an account?'} </span>
          <button
            type="button"
            onClick={() => onNavigate('/login')}
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
            {isArabic ? 'تسجيل الدخول' : 'Sign In'}
          </button>
        </div>
      </div>

      <div style={{ fontSize: '0.78rem', color: '#64748B', textAlign: 'center' }}>
        &copy; {new Date().getFullYear()} CAR IN / AUTOHAUS Luxury Platform. All Rights Reserved.
      </div>
    </div>
  );
};

export default SignupView;
