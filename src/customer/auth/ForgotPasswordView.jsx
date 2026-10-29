import React, { useState } from 'react';
import { requestPasswordReset, completePasswordReset } from '../../services/authService';
import { useLanguage } from '../../context/LanguageContext';
import {
  Mail,
  Lock,
  ArrowRight,
  ArrowLeft,
  Globe,
  AlertCircle,
  CheckCircle2,
  KeyRound,
  ShieldAlert,
} from 'lucide-react';

export const ForgotPasswordView = ({ onNavigate }) => {
  const { isArabic, toggleLanguage } = useLanguage();

  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [stage, setStage] = useState('request'); // 'request' | 'reset' | 'completed'
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRequest = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!email.trim()) {
      setErrorMsg(isArabic ? 'يرجى إدخال البريد الإلكتروني' : 'Please provide your email address.');
      return;
    }

    setIsLoading(true);
    try {
      const res = await requestPasswordReset(email.trim());
      if (res.resetToken) {
        setToken(res.resetToken);
      }
      setSuccessMsg(
        isArabic
          ? 'تم إنشاء رمز استعادة كلمة المرور بنجاح. يمكنك إدخال كلمة المرور الجديدة أدناه.'
          : 'Password reset code generated. You may now enter your new password below.'
      );
      setStage('reset');
    } catch (err) {
      setErrorMsg(err.message || 'Error initiating password reset.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!newPassword || newPassword.length < 6) {
      setErrorMsg(isArabic ? 'يجب أن تتكون كلمة المرور من 6 أحرف على الأقل' : 'New password must be at least 6 characters.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMsg(isArabic ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match.');
      return;
    }

    setIsLoading(true);
    try {
      await completePasswordReset(token, newPassword);
      setStage('completed');
    } catch (err) {
      setErrorMsg(err.message || 'Error updating password.');
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
          radial-gradient(circle at 80% 80%, rgba(15, 23, 42, 0.5) 0%, transparent 40%)
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
      {/* Top Bar */}
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
          onClick={() => onNavigate('/login')}
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
          <span>{isArabic ? 'العودة لتسجيل الدخول' : 'Back to Login'}</span>
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

      {/* Card */}
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
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: 'rgba(194, 139, 20, 0.15)',
              border: '1px solid rgba(194, 139, 20, 0.35)',
              color: 'var(--accent-gold, #C28B14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px auto',
            }}
          >
            <KeyRound size={22} />
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.5rem',
              fontWeight: 800,
              margin: '0 0 6px 0',
              color: '#FFFFFF',
            }}
          >
            {isArabic ? 'استعادة كلمة المرور' : 'Reset Your Password'}
          </h1>
          <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.85rem' }}>
            {stage === 'request'
              ? isArabic
                ? 'أدخل بريدك الإلكتروني لإرسال تعليمات إعادة تعيين كلمة المرور'
                : 'Enter your registered email address to receive reset instructions'
              : stage === 'reset'
              ? isArabic
                ? 'أدخل كلمة المرور الجديدة لحسابك'
                : 'Enter and confirm your new account password'
              : isArabic
              ? 'تم تغيير كلمة المرور بنجاح'
              : 'Password successfully updated'}
          </p>
        </div>

        {/* Alerts */}
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

        {successMsg && stage === 'reset' && (
          <div
            style={{
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              color: '#34D399',
              padding: '10px 14px',
              borderRadius: '8px',
              fontSize: '0.84rem',
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <CheckCircle2 size={16} style={{ flexShrink: 0 }} />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Stage 1: Request email */}
        {stage === 'request' && (
          <form onSubmit={handleRequest}>
            <div style={{ marginBottom: '20px' }}>
              <label
                htmlFor="forgot-email"
                style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '6px' }}
              >
                {isArabic ? 'البريد الإلكتروني' : 'Email Address'}
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="forgot-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              }}
            >
              {isLoading ? (
                <span>{isArabic ? 'جارِ الإرسال...' : 'Sending...'}</span>
              ) : (
                <span>{isArabic ? 'إرسال رمز الاستعادة' : 'Generate Reset Code'}</span>
              )}
            </button>
          </form>
        )}

        {/* Stage 2: Reset Password Form */}
        {stage === 'reset' && (
          <form onSubmit={handleReset}>
            <div style={{ marginBottom: '14px' }}>
              <label
                htmlFor="new-password"
                style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '5px' }}
              >
                {isArabic ? 'كلمة المرور الجديدة' : 'New Password'}
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="new-password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  required
                  autoFocus
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

            <div style={{ marginBottom: '20px' }}>
              <label
                htmlFor="confirm-new-password"
                style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#CBD5E1', marginBottom: '5px' }}
              >
                {isArabic ? 'تأكيد كلمة المرور الجديدة' : 'Confirm New Password'}
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  id="confirm-new-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repeat new password"
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
              }}
            >
              {isLoading ? (
                <span>{isArabic ? 'جارِ التحديث...' : 'Updating...'}</span>
              ) : (
                <span>{isArabic ? 'حفظ كلمة المرور الجديدة' : 'Save New Password'}</span>
              )}
            </button>
          </form>
        )}

        {/* Stage 3: Completed */}
        {stage === 'completed' && (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
              }}
            >
              <CheckCircle2 size={32} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>
              {isArabic ? 'تم تحديث كلمة المرور بنجاح' : 'Password Reset Complete'}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '24px' }}>
              {isArabic
                ? 'تم تحديث كلمة المرور الخاصة بحسابك. يمكنك الآن تسجيل الدخول باستخدام بياناتك الجديدة.'
                : 'Your password has been successfully updated. You may now sign in using your new credentials.'}
            </p>
            <button
              type="button"
              onClick={() => onNavigate('/login')}
              style={{
                width: '100%',
                height: '44px',
                background: 'linear-gradient(135deg, #ECC880 0%, #D8A54B 100%)',
                border: 'none',
                borderRadius: '8px',
                color: '#070B11',
                fontSize: '0.94rem',
                fontWeight: 800,
                cursor: 'pointer',
              }}
            >
              {isArabic ? 'الانتقال لتسجيل الدخول' : 'Proceed to Sign In'}
            </button>
          </div>
        )}

        {/* Back link */}
        <div
          style={{
            marginTop: '22px',
            textAlign: 'center',
            fontSize: '0.84rem',
            color: '#94A3B8',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '16px',
          }}
        >
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
            {isArabic ? 'العودة لتسجيل الدخول' : 'Return to Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordView;
