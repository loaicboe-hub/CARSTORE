import React from 'react';
import Badge from './Badge';

/**
 * Reusable Section Header Component
 * Provides unified title typography, optional pill badge, and gold gradient text emphasis.
 */
export const SectionHeader = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  badgeVariant = 'gold',
  className = '',
}) => {
  return (
    <div className={`section-header ${align} ${className}`}>
      {eyebrow && (
        <div className="section-eyebrow">
          <Badge variant={badgeVariant}>{eyebrow}</Badge>
        </div>
      )}

      <h2 className="section-title">
        {title}{' '}
        {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </h2>

      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
