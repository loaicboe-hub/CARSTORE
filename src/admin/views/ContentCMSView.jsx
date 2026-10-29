import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { useLanguage } from '../../context/LanguageContext';
import {
  FileText,
  Save,
  RotateCcw,
  CheckCircle,
  ExternalLink,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  Globe,
} from 'lucide-react';

export const ContentCMSView = ({ onNavigatePublic }) => {
  const { cmsContent, updateCmsContent, resetCmsContent } = useStore();
  const { isArabic } = useLanguage();

  const [form, setForm] = useState({ ...cmsContent });
  const [activeTab, setActiveTab] = useState(isArabic ? 'ar' : 'en'); // 'en' | 'ar'
  const [savedNotice, setSavedNotice] = useState(false);

  const handleChange = (field, val) => {
    setForm((prev) => ({ ...prev, [field]: val }));
    setSavedNotice(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateCmsContent(form);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 4000);
  };

  const handleReset = () => {
    const confirmPrompt = isArabic
      ? 'هل تريد إعادة ضبط جميع نصوص الموقع ومعلومات الاتصال إلى الحالة الافتراضية؟'
      : 'Reset all website texts and contact information to factory defaults?';

    if (window.confirm(confirmPrompt)) {
      resetCmsContent();
      setForm({ ...cmsContent });
      setSavedNotice(true);
    }
  };

  return (
    <div className="admin-cms-view">
      <form onSubmit={handleSave}>
        {/* Top Header & Save Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>
              {isArabic ? 'إدارة محتوى الموقع (CMS)' : 'Website Content Management (CMS)'}
            </h3>
            <p style={{ margin: '2px 0 0 0', color: 'var(--admin-text-muted)', fontSize: '0.88rem' }}>
              {isArabic
                ? 'التعديلات هنا تنعكس فوراً ومباشرة على الموقع العام وقنوات التواصل.'
                : 'Changes made here update the live public website and contact channels immediately.'}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {savedNotice && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--admin-emerald)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                }}
              >
                <CheckCircle size={16} />
                <span>{isArabic ? 'تم النشر بنجاح على الموقع العام!' : 'Published to Public Site!'}</span>
              </div>
            )}

            <button
              type="button"
              className="admin-btn admin-btn-secondary"
              onClick={handleReset}
            >
              <RotateCcw size={14} />
              <span>{isArabic ? 'استعادة الافتراضي' : 'Reset Defaults'}</span>
            </button>

            <button type="submit" className="admin-btn admin-btn-primary">
              <Save size={16} />
              <span>{isArabic ? 'نشر التعديلات' : 'Publish Changes'}</span>
            </button>
          </div>
        </div>

        {/* Content Language Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '20px',
            background: 'var(--admin-card-bg)',
            padding: '8px',
            borderRadius: '10px',
            border: '1px solid var(--admin-card-border)',
            width: 'fit-content',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '0 8px', color: 'var(--admin-text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>
            <Globe size={15} />
            <span>{isArabic ? 'لغة المحتوى المراد تعديله:' : 'Editing Content Language:'}</span>
          </div>

          <button
            type="button"
            onClick={() => setActiveTab('en')}
            style={{
              padding: '6px 16px',
              borderRadius: '6px',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              background: activeTab === 'en' ? 'var(--admin-accent-gold)' : 'transparent',
              color: activeTab === 'en' ? '#070B11' : 'var(--admin-text-muted)',
              transition: 'all 0.2s',
            }}
          >
            English (EN)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ar')}
            style={{
              padding: '6px 16px',
              borderRadius: '6px',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              background: activeTab === 'ar' ? 'var(--admin-accent-gold)' : 'transparent',
              color: activeTab === 'ar' ? '#070B11' : 'var(--admin-text-muted)',
              transition: 'all 0.2s',
            }}
          >
            العربية (AR)
          </button>
        </div>

        {/* Section 1: Brand & Hero Showcase */}
        <div className="admin-card" style={{ marginBottom: '20px' }}>
          <div className="admin-card-header">
            <h4 className="admin-card-title">
              <Sparkles size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>
                {isArabic ? 'هوية العلامة التجارية والواجهة الرئيسية' : 'Brand Identity & Hero Banner'}{' '}
                <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>({activeTab.toUpperCase()})</span>
              </span>
            </h4>
          </div>

          <div className="admin-card-body">
            <div className="admin-form-grid">
              {activeTab === 'en' ? (
                <>
                  <div className="admin-form-group">
                    <label className="admin-label">Brand Name (Primary EN)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.brandName || ''}
                      onChange={(e) => handleChange('brandName', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Brand Name Suffix (EN)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.brandSuffix || ''}
                      onChange={(e) => handleChange('brandSuffix', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">Legal Company Entity (EN)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.legalName || ''}
                      onChange={(e) => handleChange('legalName', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">Hero Badge (EN)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.heroBadge || ''}
                      onChange={(e) => handleChange('heroBadge', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Hero Headline Part 1 (EN)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.heroTitleP1 || ''}
                      onChange={(e) => handleChange('heroTitleP1', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Hero Headline Part 2 Highlight (EN)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.heroTitleP2 || ''}
                      onChange={(e) => handleChange('heroTitleP2', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">Hero Subtitle & Brand Tagline (EN)</label>
                    <textarea
                      className="admin-textarea"
                      rows={3}
                      value={form.heroSubtitle || ''}
                      onChange={(e) => handleChange('heroSubtitle', e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="admin-form-group">
                    <label className="admin-label">اسم العلامة التجارية (الرئيسي - عربي)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.brandNameAr || ''}
                      onChange={(e) => handleChange('brandNameAr', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">اللاحقة للعلامة التجارية (عربي)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.brandSuffixAr || ''}
                      onChange={(e) => handleChange('brandSuffixAr', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">اسم الكيان القانوني للشركة (عربي)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.legalNameAr || ''}
                      onChange={(e) => handleChange('legalNameAr', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">شارة الواجهة الرئيسية (شارة فحص معتمد - عربي)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.heroBadgeAr || ''}
                      onChange={(e) => handleChange('heroBadgeAr', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">العنوان الرئيسي - الجزء الأول (عربي)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.heroTitleP1Ar || ''}
                      onChange={(e) => handleChange('heroTitleP1Ar', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">العنوان الرئيسي - الجزء المميز (عربي)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.heroTitleP2Ar || ''}
                      onChange={(e) => handleChange('heroTitleP2Ar', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">الوصف التفصيلي للواجهة الرئيسية (عربي)</label>
                    <textarea
                      className="admin-textarea"
                      rows={3}
                      value={form.heroSubtitleAr || ''}
                      onChange={(e) => handleChange('heroSubtitleAr', e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Section 2: Hero Top Banner Live Spec Tags */}
        <div className="admin-card" style={{ marginBottom: '20px' }}>
          <div className="admin-card-header">
            <h4 className="admin-card-title">
              <FileText size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>
                {isArabic ? 'المواصفات الحية لشريط الواجهة' : 'Supercar Hero Banner Spec Highlights'}{' '}
                <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>({activeTab.toUpperCase()})</span>
              </span>
            </h4>
          </div>

          <div className="admin-card-body">
            <div className="admin-form-grid">
              {activeTab === 'en' ? (
                <>
                  <div className="admin-form-group">
                    <label className="admin-label">Live Spec 1 (Engine Output - EN)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.specOutput || ''}
                      onChange={(e) => handleChange('specOutput', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Live Spec 2 (Acceleration - EN)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.specAccel || ''}
                      onChange={(e) => handleChange('specAccel', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">Live Spec 3 (Top Speed / Delivery - EN)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.specSpeed || ''}
                      onChange={(e) => handleChange('specSpeed', e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="admin-form-group">
                    <label className="admin-label">مواصفة شريط 1 (قوة المحرك / الأحصنة - عربي)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.specOutputAr || ''}
                      onChange={(e) => handleChange('specOutputAr', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">مواصفة شريط 2 (حالة الفابريكا أو التسارع - عربي)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.specAccelAr || ''}
                      onChange={(e) => handleChange('specAccelAr', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group full">
                    <label className="admin-label">مواصفة شريط 3 (التسليم الفوري / السرعة - عربي)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.specSpeedAr || ''}
                      onChange={(e) => handleChange('specSpeedAr', e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Section 3: Contact Channels & Location */}
        <div className="admin-card">
          <div className="admin-card-header">
            <h4 className="admin-card-title">
              <Phone size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>{isArabic ? 'قنوات التواصل ومواقع الفروع' : 'Concierge Contact & Showroom Location'}</span>
            </h4>
          </div>

          <div className="admin-card-body">
            <div className="admin-form-grid">
              <div className="admin-form-group">
                <label className="admin-label">{isArabic ? 'رقم الهاتف المعروض' : 'Phone Display Label'}</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.phoneDisplay || ''}
                  onChange={(e) => handleChange('phoneDisplay', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">{isArabic ? 'رقم الاتصال (E.164)' : 'Phone Dialer (E.164 Format)'}</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.phone || ''}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">{isArabic ? 'رقم واتساب الكونسيرج (مع كود الدولة)' : 'WhatsApp Concierge Number'}</label>
                <input
                  type="text"
                  className="admin-input"
                  placeholder="e.g. 201000000000"
                  value={form.whatsappNumber || ''}
                  onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">{isArabic ? 'البريد الإلكتروني الرسمي' : 'Official Concierge Email'}</label>
                <input
                  type="email"
                  className="admin-input"
                  value={form.email || ''}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </div>

              {activeTab === 'en' ? (
                <>
                  <div className="admin-form-group full">
                    <label className="admin-label">Physical Showroom Address (EN)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.address || ''}
                      onChange={(e) => handleChange('address', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">City, Region, Country (EN)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.city || ''}
                      onChange={(e) => handleChange('city', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">Operating Hours (EN)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.hours || ''}
                      onChange={(e) => handleChange('hours', e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="admin-form-group full">
                    <label className="admin-label">عنوان صالة العرض والفروع (عربي)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.addressAr || ''}
                      onChange={(e) => handleChange('addressAr', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">المدينة والمنطقة (عربي)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.cityAr || ''}
                      onChange={(e) => handleChange('cityAr', e.target.value)}
                    />
                  </div>

                  <div className="admin-form-group">
                    <label className="admin-label">ساعات العمل الرسمية (عربي)</label>
                    <input
                      type="text"
                      className="admin-input"
                      value={form.hoursAr || ''}
                      onChange={(e) => handleChange('hoursAr', e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContentCMSView;
