import React from 'react';

/**
 * Badge — status label, count, or category chip.
 */
export function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  style,
}) {
  const variants = {
    default:   { background: '#F4F7FA', color: '#555555' },
    brand:     { background: '#E8F8F6', color: '#00C2B3' },
    success:   { background: '#E8F5E9', color: '#2E7D32' },
    error:     { background: '#FFEEEE', color: '#FF4D4D' },
    warning:   { background: '#FFF3E0', color: '#92610A' },
    info:      { background: '#EDE7F6', color: '#555555' },
    dark:      { background: '#0D1F2D', color: '#FFFFFF' },
    navy:      { background: '#1A2F45', color: '#8899AA' },
    solid:     { background: '#00C2B3', color: '#FFFFFF' },
  };

  const sizes = {
    sm: { fontSize: '10px', padding: '3px 8px',  height: '20px', fontWeight: 600 },
    md: { fontSize: '12px', padding: '4px 10px', height: '24px', fontWeight: 600 },
    lg: { fontSize: '13px', padding: '5px 12px', height: '28px', fontWeight: 600 },
  };

  const v = variants[variant] || variants.default;
  const s = sizes[size] || sizes.md;

  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      borderRadius: '9999px',
      letterSpacing: '0.03em',
      whiteSpace: 'nowrap',
      fontFamily: "'Inter', system-ui, sans-serif",
      lineHeight: 1,
      ...v, ...s, ...style,
    },
  },
    dot && React.createElement('span', {
      style: { width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor', flexShrink: 0 },
    }),
    children
  );
}
