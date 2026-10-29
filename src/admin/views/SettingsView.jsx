import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import {
  Settings,
  Shield,
  Download,
  Upload,
  RefreshCw,
  Database,
  Lock,
  Globe,
  Bell,
  CheckCircle,
} from 'lucide-react';

export const SettingsView = () => {
  const {
    settings,
    updateSettings,
    resetAllDataToDefault,
    vehicles,
    sellRequests,
    rentalFleet,
    exchangeRequests,
    inquiries,
    cmsContent,
  } = useStore();

  const [pin, setPin] = useState(settings.portalPin || '123456');
  const [adminUser, setAdminUser] = useState(settings.adminUsername || 'admin');
  const [adminPass, setAdminPass] = useState(settings.adminPassword || 'admin123');
  const [showAdminPass, setShowAdminPass] = useState(false);
  const [currency, setCurrency] = useState(cmsContent.currency || 'EGP');
  const [savedMsg, setSavedMsg] = useState('');

  const handleSaveSecurity = (e) => {
    e.preventDefault();
    updateSettings({
      portalPin: pin,
      adminUsername: adminUser.trim() || 'admin',
      adminPassword: adminPass.trim() || 'admin123',
    });
    setSavedMsg('Security credentials & access PIN updated successfully.');
    setTimeout(() => setSavedMsg(''), 3000);
  };

  const handleExportBackup = () => {
    const backupData = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      vehicles,
      sellRequests,
      rentalFleet,
      exchangeRequests,
      inquiries,
      cmsContent,
      settings,
    };

    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(backupData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `autohaus_backup_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleResetData = () => {
    if (
      window.confirm(
        'WARNING: This will reset all inventory, sell requests, and CMS customizations back to original factory demo state. Proceed?'
      )
    ) {
      resetAllDataToDefault();
      setSavedMsg('All dealership data reset to factory demo state.');
      setTimeout(() => setSavedMsg(''), 3000);
    }
  };

  return (
    <div className="admin-settings-view">
      {savedMsg && (
        <div
          style={{
            background: 'var(--admin-emerald-light)',
            color: 'var(--admin-emerald)',
            padding: '12px 18px',
            borderRadius: '8px',
            marginBottom: '20px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <CheckCircle size={16} />
          <span>{savedMsg}</span>
        </div>
      )}

      {/* Security & Access Credentials Panel */}
      <div className="admin-card" style={{ marginBottom: '20px' }}>
        <div className="admin-card-header">
          <h4 className="admin-card-title">
            <Lock size={18} style={{ color: 'var(--admin-accent-gold)' }} />
            <span>Executive Portal Security & Admin Credentials</span>
          </h4>
        </div>

        <div className="admin-card-body">
          <form onSubmit={handleSaveSecurity} style={{ maxWidth: '520px' }}>
            {/* Admin Username */}
            <div className="admin-form-group" style={{ marginBottom: '16px' }}>
              <label className="admin-label">Admin Login Username</label>
              <input
                type="text"
                className="admin-input"
                value={adminUser}
                onChange={(e) => setAdminUser(e.target.value)}
                required
                style={{ maxWidth: '320px' }}
                placeholder="e.g. admin"
              />
              <p style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)', margin: '4px 0 0 0' }}>
                Used to log into the Executive Dashboard at <code>/admin</code>.
              </p>
            </div>

            {/* Admin Password */}
            <div className="admin-form-group" style={{ marginBottom: '16px' }}>
              <label className="admin-label">Admin Login Password</label>
              <div style={{ position: 'relative', maxWidth: '320px' }}>
                <input
                  type={showAdminPass ? 'text' : 'password'}
                  className="admin-input"
                  value={adminPass}
                  onChange={(e) => setAdminPass(e.target.value)}
                  required
                  style={{ paddingRight: '40px', width: '100%', boxSizing: 'border-box' }}
                  placeholder="e.g. admin123"
                />
                <button
                  type="button"
                  onClick={() => setShowAdminPass(!showAdminPass)}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--admin-text-muted)',
                    cursor: 'pointer',
                    fontSize: '0.75rem',
                    padding: '4px',
                  }}
                >
                  {showAdminPass ? 'Hide' : 'Show'}
                </button>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)', margin: '4px 0 0 0' }}>
                Keep your administrative credentials confidential.
              </p>
            </div>

            {/* Authorization PIN */}
            <div className="admin-form-group" style={{ marginBottom: '20px' }}>
              <label className="admin-label">Dealer Management Authorization PIN</label>
              <input
                type="password"
                className="admin-input"
                maxLength={8}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                style={{ letterSpacing: '0.2em', fontSize: '1.2rem', maxWidth: '240px' }}
              />
              <p style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)', margin: '4px 0 0 0' }}>
                Used by executive personnel to verify operations in the dealership management modal.
              </p>
            </div>

            <button type="submit" className="admin-btn admin-btn-primary">
              Save Security Credentials
            </button>
          </form>
        </div>
      </div>

      {/* Data Management & Backup */}
      <div className="admin-card" style={{ marginBottom: '20px' }}>
        <div className="admin-card-header">
          <h4 className="admin-card-title">
            <Database size={18} style={{ color: 'var(--admin-accent-gold)' }} />
            <span>Data Persistence & Export</span>
          </h4>
        </div>

        <div className="admin-card-body">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '580px' }}>
            <div>
              <div style={{ fontWeight: 600, marginBottom: '4px' }}>Export Complete Dealership JSON Backup</div>
              <p style={{ fontSize: '0.82rem', color: 'var(--admin-text-muted)', margin: '0 0 10px 0' }}>
                Download a complete JSON snapshot containing all live vehicles, sell requests, inquiries, and CMS settings.
              </p>
              <button
                type="button"
                className="admin-btn admin-btn-secondary"
                onClick={handleExportBackup}
              >
                <Download size={14} />
                <span>Export JSON Backup</span>
              </button>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid var(--admin-card-border)' }} />

            <div>
              <div style={{ fontWeight: 600, marginBottom: '4px', color: 'var(--admin-rose)' }}>
                Reset Store to Original Demo Data
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--admin-text-muted)', margin: '0 0 10px 0' }}>
                Clears localStorage modifications and resets all catalog cars, requests, and CMS texts to the fresh showroom defaults.
              </p>
              <button
                type="button"
                className="admin-btn admin-btn-danger"
                onClick={handleResetData}
              >
                <RefreshCw size={14} />
                <span>Reset All Data</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Database & Architecture Telematics */}
      <div className="admin-card">
        <div className="admin-card-header">
          <h4 className="admin-card-title">
            <Shield size={18} style={{ color: 'var(--admin-accent-gold)' }} />
            <span>Architecture & Telematics Status</span>
          </h4>
        </div>

        <div className="admin-card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            <div style={{ padding: '14px', background: 'var(--admin-content-bg)', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>Storage Layer</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginTop: '2px' }}>
                Hybrid Store
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--admin-emerald)', marginTop: '2px' }}>
                ✓ LocalStorage Active + PostgreSQL Ready
              </div>
            </div>

            <div style={{ padding: '14px', background: 'var(--admin-content-bg)', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>Backend Port</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginTop: '2px' }}>
                Port 5001
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--admin-text-muted)', marginTop: '2px' }}>
                /api/health & proxy mapped
              </div>
            </div>

            <div style={{ padding: '14px', background: 'var(--admin-content-bg)', borderRadius: '8px' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--admin-text-muted)' }}>Public Sync</div>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginTop: '2px' }}>
                Real-Time Reactive
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--admin-emerald)', marginTop: '2px' }}>
                ✓ Instant Public Reflection
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
