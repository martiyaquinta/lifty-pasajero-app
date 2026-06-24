import React from 'react';

/**
 * Card — Lifty surface container. Use for trip items, driver info, bottom panels.
 */
export function Card({
  children,
  variant = 'default',
  padding = 'md',
  radius = 'lg',
  shadow = true,
  style,
  onClick,
  ...props
}) {
  const variants = {
    default: { background: '#FFFFFF' },
    subtle:  { background: '#F4F7FA' },
    dark:    { background: '#0D2B45' },
    sheet:   { background: '#FFFFFF', borderRadius: '24px 24px 0 0' },
  };

  const paddings = {
    none: '0',
    sm:   '12px 14px',
    md:   '20px',
    lg:   '24px',
  };

  const radii = {
    sm: '8px', md: '12px', lg: '16px', xl: '20px', full: '9999px', sheet: '24px 24px 0 0',
  };

  const v = variants[variant] || variants.default;

  return React.createElement('div', {
    onClick,
    style: {
      fontFamily: "'Inter', system-ui, sans-serif",
      borderRadius: radii[radius] || radius,
      padding: paddings[padding] || padding,
      boxShadow: shadow ? '0 4px 12px rgba(13,31,45,0.10),0 1px 4px rgba(13,31,45,0.06)' : 'none',
      cursor: onClick ? 'pointer' : undefined,
      ...v,
      ...style,
    },
    ...props,
  }, children);
}
