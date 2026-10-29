import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
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
} from 'lucide-react';

export const ContentCMSView = ({ onNavigatePublic }) => {
  const { cmsContent, updateCmsContent, resetCmsContent } = useStore();

  const [form, setForm] = useState({ ...cmsContent });
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
    if (window.confirm('Reset all website texts and contact information to factory defaults?')) {
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
              Website Content Management (CMS)
            </h3>
            <p style={{ margin: '2px 0 0 0', color: 'var(--admin-text-muted)', fontSize: '0.88rem' }}>
              Changes made here update the live public website and contact channels immediately.
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
                <span>Published to Public Site!</span>
              </div>
            )}

            <button
              type="button"
              className="admin-btn admin-btn-secondary"
              onClick={handleReset}
            >
              <RotateCcw size={14} />
              <span>Reset Defaults</span>
            </button>

            <button type="submit" className="admin-btn admin-btn-primary">
              <Save size={16} />
              <span>Publish Changes</span>
            </button>
          </div>
        </div>

        {/* Section 1: Brand & Hero Showcase */}
        <div className="admin-card" style={{ marginBottom: '20px' }}>
          <div className="admin-card-header">
            <h4 className="admin-card-title">
              <Sparkles size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>Brand Identity & Hero Banner</span>
            </h4>
          </div>

          <div className="admin-card-body">
            <div className="admin-form-grid">
              <div className="admin-form-group">
                <label className="admin-label">Brand Name (Primary)</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.brandName}
                  onChange={(e) => handleChange('brandName', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Brand Name Suffix</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.brandSuffix}
                  onChange={(e) => handleChange('brandSuffix', e.target.value)}
                />
              </div>

              <div className="admin-form-group full">
                <label className="admin-label">Legal Company Entity</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.legalName}
                  onChange={(e) => handleChange('legalName', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Hero Headline (Part 1)</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.heroTitleP1}
                  onChange={(e) => handleChange('heroTitleP1', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Hero Headline (Part 2 Highlight)</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.heroTitleP2}
                  onChange={(e) => handleChange('heroTitleP2', e.target.value)}
                />
              </div>

              <div className="admin-form-group full">
                <label className="admin-label">Hero Subtitle & Brand Tagline</label>
                <textarea
                  className="admin-textarea"
                  value={form.heroSubtitle}
                  onChange={(e) => handleChange('heroSubtitle', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Hero Top Banner Live Spec Tags */}
        <div className="admin-card" style={{ marginBottom: '20px' }}>
          <div className="admin-card-header">
            <h4 className="admin-card-title">
              <FileText size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>Supercar Hero Banner Spec Highlights</span>
            </h4>
          </div>

          <div className="admin-card-body">
            <div className="admin-form-grid">
              <div className="admin-form-group">
                <label className="admin-label">Live Spec 1 (Engine Output)</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.specOutput}
                  onChange={(e) => handleChange('specOutput', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Live Spec 2 (0-60 MPH)</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.specAccel}
                  onChange={(e) => handleChange('specAccel', e.target.value)}
                />
              </div>

              <div className="admin-form-group full">
                <label className="admin-label">Live Spec 3 (Top Track Speed)</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.specSpeed}
                  onChange={(e) => handleChange('specSpeed', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Contact Channels & Location */}
        <div className="admin-card">
          <div className="admin-card-header">
            <h4 className="admin-card-title">
              <Phone size={18} style={{ color: 'var(--admin-accent-gold)' }} />
              <span>Concierge Contact & Showroom Location</span>
            </h4>
          </div>

          <div className="admin-card-body">
            <div className="admin-form-grid">
              <div className="admin-form-group">
                <label className="admin-label">Phone Display Label</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.phoneDisplay}
                  onChange={(e) => handleChange('phoneDisplay', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Phone Dialer (E.164 Format)</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">WhatsApp Concierge Number (Digits only with country code)</label>
                <input
                  type="text"
                  className="admin-input"
                  placeholder="e.g. 18008356231"
                  value={form.whatsappNumber}
                  onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Official Concierge Email</label>
                <input
                  type="email"
                  className="admin-input"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
              </div>

              <div className="admin-form-group full">
                <label className="admin-label">Physical Showroom Address</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">City, State, Zip</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Operating Hours</label>
                <input
                  type="text"
                  className="admin-input"
                  value={form.hours}
                  onChange={(e) => handleChange('hours', e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContentCMSView;
