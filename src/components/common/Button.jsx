import React from 'react';

/**
 * Reusable Button Component
 * Supports both button and anchor rendering with gold gradient and glass variants.
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  as: Component = 'button',
  icon = null,
  iconRight = null,
  className = '',
  ...props
}) => {
  const baseClasses = `btn btn-${variant} btn-${size} ${className}`;

  return (
    <Component className={baseClasses} {...props}>
      {icon && <span className="btn-icon-left">{icon}</span>}
      {children}
      {iconRight && <span className="btn-icon-right">{iconRight}</span>}
    </Component>
  );
};

export default Button;
