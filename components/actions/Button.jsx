import React from 'react';

/**
 * Button — Lifty primary action button.
 * Full-width pill CTA, outline and ghost variants for secondary actions.
 */
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  destructive = false,
  onClick,
  style,
  ...props
}) {
  const base = {
    fontFamily: "'Inter', system-ui, sans-serif",
    fontWeight: 700,
    letterSpacing: '0.10em',
    textTransform: 'uppercase',
    border: 'none',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    borderRadius: '9999px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    transition: 'opacity 80ms ease-out, transform 80ms ease-out, box-shadow 150ms ease',
    userSelect: 'none',
    width: fullWidth ? '100%' : undefined,
    opacity: disabled ? 0.45 : 1,
    boxSizing: 'border-box',
    outline: 'none',
    WebkitTapHighlightColor: 'transparent',
  };

  const sizes = {
    sm: { height: '40px', fontSize: '13px', padding: '0 20px' },
    md: { height: '52px', fontSize: '15px', padding: '0 28px' },
    lg: { height: '58px', fontSize: '16px', padding: '0 32px' },
  };

  const variants = {
    primary: {
      background: destructive ? '#FF4D4D' : '#00C2B3',
      color: '#FFFFFF',
      boxShadow: destructive
        ? '0 4px 16px rgba(255,77,77,0.30)'
        : '0 4px 16px rgba(0,194,179,0.30)',
    },
    secondary: {
      background: '#F4F7FA',
      color: '#0D1F2D',
      boxShadow: 'none',
    },
    outline: {
      background: 'transparent',
      color: destructive ? '#FF4D4D' : '#0D1F2D',
      border: `1.5px solid ${destructive ? '#FF4D4D' : '#DDDDDD'}`,
      boxShadow: 'none',
    },
    ghost: {
      background: 'transparent',
      color: destructive ? '#FF4D4D' : '#00C2B3',
      boxShadow: 'none',
    },
    dark: {
      background: '#0D1F2D',
      color: '#FFFFFF',
      boxShadow: '0 4px 12px rgba(13,31,45,0.20)',
    },
  };

  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle = sizes[size] || sizes.md;

  const [pressed, setPressed] = React.useState(false);

  const pressStyle = pressed && !disabled ? {
    opacity: 0.85,
    transform: 'scale(0.98)',
  } : {};

  return React.createElement('button', {
    onClick: disabled || loading ? undefined : onClick,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    onTouchStart: () => setPressed(true),
    onTouchEnd: () => setPressed(false),
    style: { ...base, ...sizeStyle, ...variantStyle, ...pressStyle, ...style },
    disabled: disabled || loading,
    ...props,
  }, loading
    ? React.createElement('span', { style: { display: 'flex', gap: '4px', alignItems: 'center' } },
        React.createElement('span', { style: buttonSpinner }, null),
        children
      )
    : children
  );
}

const buttonSpinner = {
  width: '16px',
  height: '16px',
  border: '2px solid rgba(255,255,255,0.35)',
  borderTopColor: '#fff',
  borderRadius: '50%',
  animation: 'lifty-spin 0.7s linear infinite',
  flexShrink: 0,
};
