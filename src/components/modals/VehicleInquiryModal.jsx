import React, { useState, useEffect } from 'react';
import { brandConfig } from '../../config/brandConfig';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { submitInquiry } from '../../services/api';
import { X, CheckCircle, MessageSquare, Phone, Mail, ShieldCheck, Loader2 } from 'lucide-react';

export const VehicleInquiryModal = ({ isOpen, onClose, selectedVehicle = null, defaultType = 'purchase' }) => {
  const { t, isArabic } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    inquiryType: defaultType,
    contactMethod: 'whatsapp',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultType) {
      setFormData((prev) => ({ ...prev, inquiryType: defaultType }));
    }
  }, [defaultType]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await submitInquiry({
        full_name: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        channel: formData.contactMethod || 'whatsapp',
        vehicle_id: selectedVehicle ? selectedVehicle.id : null,
        inquiry_type: formData.inquiryType,
        message: formData.message,
      });
    } catch (err) {
      console.warn('Inquiry API note:', err.message);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  // Build dynamic WhatsApp link with inquiry details
  const buildWhatsAppLink = () => {
    const carName = selectedVehicle
      ? (isArabic && selectedVehicle.titleAr ? selectedVehicle.titleAr : selectedVehicle.title)
      : (isArabic ? 'استفسار عام عن الصالة' : 'Showroom Inquiry');
    const carPrice = selectedVehicle ? ` (${selectedVehicle.priceFormatted})` : '';

    const text = isArabic
      ? encodeURIComponent(
          `مرحباً كونسيرج ${t.brand.name}، أود الاستفسار عن: ${carName}${carPrice}. اسمي: ${formData.fullName || 'أحد العملاء'} (وسيلة الاتصال: ${formData.phone || formData.email}).`
        )
      : encodeURIComponent(
          `Hello ${brandConfig.name} Concierge, I am inquiring about: ${carName}${carPrice}. My name is ${formData.fullName || 'a client'} (Contact: ${formData.phone || formData.email}).`
        );
    return `https://wa.me/${brandConfig.contact.whatsappNumber}?text=${text}`;
  };

  const vehicleTitle = selectedVehicle
    ? (isArabic && selectedVehicle.titleAr ? selectedVehicle.titleAr : selectedVehicle.title)
    : '';
  const vehicleSubtitle = selectedVehicle
    ? (isArabic && selectedVehicle.subtitleAr ? selectedVehicle.subtitleAr : selectedVehicle.subtitle)
    : '';

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-dialog">
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label={isArabic ? 'إغلاق النافذة' : 'Close dialog'}
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ marginBottom: 'var(--space-lg)' }}>
              <Badge variant="gold" icon={<ShieldCheck size={14} />}>
                {t.modal.badge}
              </Badge>
              <h3 id="modal-title" style={{ marginTop: '10px', fontSize: '1.5rem' }}>
                {selectedVehicle ? `${t.modal.inquirePrefix} ${vehicleTitle}` : t.modal.generalTitle}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                {selectedVehicle
                  ? `${vehicleSubtitle} | ${selectedVehicle.priceFormatted}`
                  : t.modal.generalSubtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="inquiryType">
                  {t.modal.typeLabel}
                </label>
                <select
                  id="inquiryType"
                  className="form-control"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                >
                  <option value="purchase">{t.modal.types.purchase}</option>
                  <option value="tradein">{t.modal.types.tradein}</option>
                  <option value="rental">{t.modal.types.rental}</option>
                  <option value="testdrive">{t.modal.types.testdrive}</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">
                    {t.modal.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    placeholder={t.modal.fullNamePlaceholder}
                    className="form-control"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    {t.modal.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    dir="ltr"
                    placeholder={t.modal.phonePlaceholder}
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  {t.modal.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  dir="ltr"
                  placeholder={t.modal.emailPlaceholder}
                  className="form-control"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">{t.modal.channelLabel}</label>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {[
                    { id: 'whatsapp', label: t.modal.channels.whatsapp, icon: <MessageSquare size={14} /> },
                    { id: 'phone', label: t.modal.channels.phone, icon: <Phone size={14} /> },
                    { id: 'email', label: t.modal.channels.email, icon: <Mail size={14} /> },
                  ].map((method) => (
                    <label
                      key={method.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        fontSize: '0.85rem',
                        color: formData.contactMethod === method.id ? 'var(--accent-gold)' : 'var(--text-secondary)',
                        padding: '6px 12px',
                        borderRadius: 'var(--radius-sm)',
                        background:
                          formData.contactMethod === method.id
                            ? 'var(--accent-gold-subtle)'
                            : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${
                          formData.contactMethod === method.id
                            ? 'var(--accent-gold)'
                            : 'var(--border-subtle)'
                        }`,
                      }}
                    >
                      <input
                        type="radio"
                        name="contactMethod"
                        value={method.id}
                        checked={formData.contactMethod === method.id}
                        onChange={() => setFormData({ ...formData, contactMethod: method.id })}
                        style={{ display: 'none' }}
                      />
                      {method.icon}
                      {method.label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  {t.modal.messageLabel}
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder={t.modal.messagePlaceholder}
                  className="form-control"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: 'var(--space-lg)' }}>
                <Button type="submit" variant="primary" size="md" style={{ flex: 1 }}>
                  {t.modal.submitBtn}
                </Button>
                <Button
                  as="a"
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="md"
                  icon={<MessageSquare size={16} />}
                >
                  {t.modal.whatsappBtn}
                </Button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--space-xl) var(--space-sm)' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(16, 185, 129, 0.15)',
                color: 'var(--accent-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto var(--space-md) auto',
              }}
            >
              <CheckCircle size={36} />
            </div>

            <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>{t.modal.successTitle}</h3>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', margin: '0 auto var(--space-lg) auto' }}>
              {t.modal.successGreeting},{' '}
              <strong style={{ color: 'var(--text-primary)' }}>{formData.fullName}</strong>. {t.modal.successMessage}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <Button
                as="a"
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="md"
                icon={<MessageSquare size={16} />}
              >
                {t.modal.continueWhatsapp}
              </Button>
              <Button variant="secondary" size="md" onClick={handleResetAndClose}>
                {t.modal.doneBtn}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleInquiryModal;
