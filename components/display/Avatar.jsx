import React from 'react';

/**
 * Avatar — circular user/driver profile image or initial.
 */
export function Avatar({
  name,
  src,
  size = 'md',
  variant = 'default',
  style,
}) {
  const sizes = {
    xs:  { width: 28,  height: 28,  fontSize: 11 },
    sm:  { width: 36,  height: 36,  fontSize: 14 },
    md:  { width: 48,  height: 48,  fontSize: 18 },
    lg:  { width: 64,  height: 64,  fontSize: 24 },
    xl:  { width: 80,  height: 80,  fontSize: 30 },
    '2xl': { width: 96, height: 96, fontSize: 36 },
  };

  const bgColors = ['#00C2B3', '#3A7AC4', '#F5A623', '#4CAF50', '#FF6B6B', '#8899AA'];
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  const bgIndex = name ? name.charCodeAt(0) % bgColors.length : 0;
  const bg = bgColors[bgIndex];

  const s = sizes[size] || sizes.md;

  const baseStyle = {
    width: s.width,
    height: s.height,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontWeight: 700,
    fontSize: s.fontSize,
    color: '#FFFFFF',
    background: src ? 'transparent' : bg,
    overflow: 'hidden',
    flexShrink: 0,
    userSelect: 'none',
    ...style,
  };

  if (src) {
    return React.createElement('div', { style: baseStyle },
      React.createElement('img', { src, alt: name, style: { width: '100%', height: '100%', objectFit: 'cover' } })
    );
  }

  return React.createElement('div', { style: baseStyle }, initial);
}
