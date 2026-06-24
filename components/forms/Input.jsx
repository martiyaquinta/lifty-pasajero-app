import React from 'react';

/**
 * Input — Lifty text input field.
 * Works on both light (white) and dark (navy) surfaces.
 */
export function Input({
  label,
  placeholder,
  value,
  onChange,
  prefix,
  suffix,
  error,
  hint,
  surface = 'light',
  type = 'text',
  disabled = false,
  style,
  inputStyle,
  ...props
}) {
  const [focused, setFocused] = React.useState(false);

  const isDark = surface === 'dark';

  const wrapStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    width: '100%',
    fontFamily: "'Inter', system-ui, sans-serif",
    ...style,
  };

  const labelStyle = {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: isDark ? '#8899AA' : '#888888',
  };

  const fieldStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    height: '52px',
    padding: '0 16px',
    borderRadius: '12px',
    background: isDark ? '#1A2F45' : '#F4F7FA',
    border: `1.5px solid ${
      error ? '#FF4D4D'
      : focused ? '#00C2B3'
      : isDark ? 'transparent'
      : '#E4E9EE'
    }`,
    boxShadow: focused ? '0 0 0 3px rgba(0,194,179,0.15)' : 'none',
    transition: 'border-color 150ms ease, box-shadow 150ms ease',
    opacity: disabled ? 0.5 : 1,
  };

  const inputEl = {
    flex: 1,
    border: 'none',
    background: 'transparent',
    outline: 'none',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '15px',
    fontWeight: 400,
    color: isDark ? '#FFFFFF' : '#0D1F2D',
    lineHeight: 1,
    ...inputStyle,
  };

  const prefixStyle = {
    fontSize: '15px',
    fontWeight: 500,
    color: isDark ? '#FFFFFF' : '#0D1F2D',
    flexShrink: 0,
    whiteSpace: 'nowrap',
  };

  const hintStyle = {
    fontSize: '12px',
    color: error ? '#FF4D4D' : isDark ? '#556677' : '#888888',
  };

  return React.createElement('div', { style: wrapStyle },
    label && React.createElement('label', { style: labelStyle }, label),
    React.createElement('div', { style: fieldStyle },
      prefix && React.createElement('span', { style: prefixStyle }, prefix),
      React.createElement('input', {
        type,
        placeholder,
        value,
        onChange,
        disabled,
        onFocus: () => setFocused(true),
        onBlur:  () => setFocused(false),
        style: { ...inputEl, '::placeholder': { color: isDark ? '#556677' : '#999999' } },
        ...props,
      }),
      suffix && React.createElement('span', { style: { ...prefixStyle, color: '#888888' } }, suffix)
    ),
    (error || hint) && React.createElement('span', { style: hintStyle }, error || hint)
  );
}
