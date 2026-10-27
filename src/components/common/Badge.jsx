import React from 'react';

/**
 * Reusable Badge Component
 * @param {string} children - Badge text or element
 * @param {'gold' | 'cyan' | 'emerald' | 'amber' | 'muted'} variant - Color scheme
 * @param {React.ReactNode} icon - Optional leading icon
 * @param {string} className - Additional CSS classes
 */
export const Badge = ({
  children,
  variant = 'gold',
  icon = null,
  className = '',
  ...props
}) => {
  return (
    <span className={`badge badge-${variant} ${className}`} {...props}>
      {icon && <span className="badge-icon">{icon}</span>}
      {children}
    </span>
  );
};

export default Badge;
