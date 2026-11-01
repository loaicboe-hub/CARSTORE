import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const WhatsAppIcon = ({ size = 24, className = '', style = {} }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle', flexShrink: 0, ...style }}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const WhatsAppFloatingButton = () => {
  const { isArabic } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const rawNumber = '201004491026';
  const displayPhone = '+20 100 449 1026';
  const message = isArabic
    ? 'مرحباً CAR IN، أود الاستفسار عن السيارات المتاحة بالمعرض وتفاصيل الحجز والمعاينة.'
    : 'Hello CAR IN, I would like to inquire about available vehicles, viewing, and reservation.';

  const waLink = `https://wa.me/${rawNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside
      className="wa-floating-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={isArabic ? 'زر محادثة واتساب الفورية' : 'WhatsApp Instant Chat'}
    >
      {/* Tooltip Card (Desktop Hover / Visual Indicator) */}
      <div className={`wa-floating-tooltip ${isHovered ? 'visible' : ''}`}>
        <div className="wa-tooltip-header">
          <div className="wa-tooltip-badge">
            <span className="wa-online-dot" />
            <span>{isArabic ? 'متواجدون الآن' : 'Online Now'}</span>
          </div>
          <span className="wa-tooltip-brand">CAR IN</span>
        </div>
        <div className="wa-tooltip-body">
          <div className="wa-tooltip-title">
            {isArabic ? 'تواصل فوري عبر واتساب' : 'Direct WhatsApp Chat'}
          </div>
          <div className="wa-tooltip-phone" dir="ltr">
            {displayPhone}
          </div>
        </div>
      </div>

      {/* Main Circular Button with Pulse Effect */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-floating-btn"
        title={isArabic ? `محادثة واتساب: ${displayPhone}` : `WhatsApp: ${displayPhone}`}
        aria-label={`Chat on WhatsApp with CAR IN at ${displayPhone}`}
      >
        <span className="wa-pulse-ring" aria-hidden="true" />
        <WhatsAppIcon size={32} className="wa-icon-svg" />
        <span className="wa-btn-label">
          {isArabic ? 'واتساب' : 'WhatsApp'}
        </span>
      </a>
    </aside>
  );
};

export default WhatsAppFloatingButton;
