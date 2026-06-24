/* @ds-bundle: {"format":3,"namespace":"LiftyDesignSystem_00f0c3","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"StarRating","sourcePath":"components/display/StarRating.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"StatusBar","sourcePath":"components/navigation/StatusBar.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"4a9354be5648","components/display/Avatar.jsx":"b7d95400a04b","components/display/Card.jsx":"45e0ebf74cd8","components/display/StarRating.jsx":"7225e319ec3d","components/feedback/Badge.jsx":"b9318aa44cd2","components/forms/Input.jsx":"23a114fc2fbc","components/navigation/StatusBar.jsx":"ace7cedc3736","components/navigation/TabBar.jsx":"1f5493df9fa2","ui_kits/pasajero/ErrorScreens.jsx":"6f110e674426","ui_kits/pasajero/ExtraScreens.jsx":"a05e3f8141d4","ui_kits/pasajero/HomeScreens.jsx":"1ae910c0eaa5","ui_kits/pasajero/OnboardingScreens.jsx":"f5e83b6d6cff","ui_kits/pasajero/OtherScreens.jsx":"de5be62d8a9f","ui_kits/pasajero/TripScreens.jsx":"2d2a9a5c6564"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.LiftyDesignSystem_00f0c3 = window.LiftyDesignSystem_00f0c3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
/**
 * Button — Lifty primary action button.
 * Full-width pill CTA, outline and ghost variants for secondary actions.
 */
function Button({
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
    WebkitTapHighlightColor: 'transparent'
  };
  const sizes = {
    sm: {
      height: '40px',
      fontSize: '13px',
      padding: '0 20px'
    },
    md: {
      height: '52px',
      fontSize: '15px',
      padding: '0 28px'
    },
    lg: {
      height: '58px',
      fontSize: '16px',
      padding: '0 32px'
    }
  };
  const variants = {
    primary: {
      background: destructive ? '#FF4D4D' : '#00C2B3',
      color: '#FFFFFF',
      boxShadow: destructive ? '0 4px 16px rgba(255,77,77,0.30)' : '0 4px 16px rgba(0,194,179,0.30)'
    },
    secondary: {
      background: '#F4F7FA',
      color: '#0D1F2D',
      boxShadow: 'none'
    },
    outline: {
      background: 'transparent',
      color: destructive ? '#FF4D4D' : '#0D1F2D',
      border: `1.5px solid ${destructive ? '#FF4D4D' : '#DDDDDD'}`,
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: destructive ? '#FF4D4D' : '#00C2B3',
      boxShadow: 'none'
    },
    dark: {
      background: '#0D1F2D',
      color: '#FFFFFF',
      boxShadow: '0 4px 12px rgba(13,31,45,0.20)'
    }
  };
  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle = sizes[size] || sizes.md;
  const [pressed, setPressed] = React.useState(false);
  const pressStyle = pressed && !disabled ? {
    opacity: 0.85,
    transform: 'scale(0.98)'
  } : {};
  return React.createElement('button', {
    onClick: disabled || loading ? undefined : onClick,
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onMouseLeave: () => setPressed(false),
    onTouchStart: () => setPressed(true),
    onTouchEnd: () => setPressed(false),
    style: {
      ...base,
      ...sizeStyle,
      ...variantStyle,
      ...pressStyle,
      ...style
    },
    disabled: disabled || loading,
    ...props
  }, loading ? React.createElement('span', {
    style: {
      display: 'flex',
      gap: '4px',
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: buttonSpinner
  }, null), children) : children);
}
const buttonSpinner = {
  width: '16px',
  height: '16px',
  border: '2px solid rgba(255,255,255,0.35)',
  borderTopColor: '#fff',
  borderRadius: '50%',
  animation: 'lifty-spin 0.7s linear infinite',
  flexShrink: 0
};
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
/**
 * Avatar — circular user/driver profile image or initial.
 */
function Avatar({
  name,
  src,
  size = 'md',
  variant = 'default',
  style
}) {
  const sizes = {
    xs: {
      width: 28,
      height: 28,
      fontSize: 11
    },
    sm: {
      width: 36,
      height: 36,
      fontSize: 14
    },
    md: {
      width: 48,
      height: 48,
      fontSize: 18
    },
    lg: {
      width: 64,
      height: 64,
      fontSize: 24
    },
    xl: {
      width: 80,
      height: 80,
      fontSize: 30
    },
    '2xl': {
      width: 96,
      height: 96,
      fontSize: 36
    }
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
    ...style
  };
  if (src) {
    return React.createElement('div', {
      style: baseStyle
    }, React.createElement('img', {
      src,
      alt: name,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }));
  }
  return React.createElement('div', {
    style: baseStyle
  }, initial);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
/**
 * Card — Lifty surface container. Use for trip items, driver info, bottom panels.
 */
function Card({
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
    default: {
      background: '#FFFFFF'
    },
    subtle: {
      background: '#F4F7FA'
    },
    dark: {
      background: '#0D2B45'
    },
    sheet: {
      background: '#FFFFFF',
      borderRadius: '24px 24px 0 0'
    }
  };
  const paddings = {
    none: '0',
    sm: '12px 14px',
    md: '20px',
    lg: '24px'
  };
  const radii = {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    full: '9999px',
    sheet: '24px 24px 0 0'
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
      ...style
    },
    ...props
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/StarRating.jsx
try { (() => {
/**
 * StarRating — 1–5 star rating picker or display.
 */
function StarRating({
  value = 0,
  onChange,
  size = 'md',
  readonly = false,
  style
}) {
  const [hovered, setHovered] = React.useState(0);
  const sizes = {
    sm: 20,
    md: 32,
    lg: 44
  };
  const starSize = sizes[size] || sizes.md;
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: '4px',
      ...style
    }
  }, [1, 2, 3, 4, 5].map(n => React.createElement('button', {
    key: n,
    onClick: readonly ? undefined : () => onChange && onChange(n),
    onMouseEnter: readonly ? undefined : () => setHovered(n),
    onMouseLeave: readonly ? undefined : () => setHovered(0),
    style: {
      width: starSize,
      height: starSize,
      border: 'none',
      background: 'transparent',
      padding: 0,
      cursor: readonly ? 'default' : 'pointer',
      fontSize: starSize * 0.85,
      lineHeight: 1,
      color: n <= (hovered || value) ? '#F5A623' : '#E4E9EE',
      transition: 'color 100ms ease'
    }
  }, '★')));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/**
 * Badge — status label, count, or category chip.
 */
function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  style
}) {
  const variants = {
    default: {
      background: '#F4F7FA',
      color: '#555555'
    },
    brand: {
      background: '#E8F8F6',
      color: '#00C2B3'
    },
    success: {
      background: '#E8F5E9',
      color: '#2E7D32'
    },
    error: {
      background: '#FFEEEE',
      color: '#FF4D4D'
    },
    warning: {
      background: '#FFF3E0',
      color: '#92610A'
    },
    info: {
      background: '#EDE7F6',
      color: '#555555'
    },
    dark: {
      background: '#0D1F2D',
      color: '#FFFFFF'
    },
    navy: {
      background: '#1A2F45',
      color: '#8899AA'
    },
    solid: {
      background: '#00C2B3',
      color: '#FFFFFF'
    }
  };
  const sizes = {
    sm: {
      fontSize: '10px',
      padding: '3px 8px',
      height: '20px',
      fontWeight: 600
    },
    md: {
      fontSize: '12px',
      padding: '4px 10px',
      height: '24px',
      fontWeight: 600
    },
    lg: {
      fontSize: '13px',
      padding: '5px 12px',
      height: '28px',
      fontWeight: 600
    }
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
      ...v,
      ...s,
      ...style
    }
  }, dot && React.createElement('span', {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'currentColor',
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
/**
 * Input — Lifty text input field.
 * Works on both light (white) and dark (navy) surfaces.
 */
function Input({
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
    ...style
  };
  const labelStyle = {
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    color: isDark ? '#8899AA' : '#888888'
  };
  const fieldStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    height: '52px',
    padding: '0 16px',
    borderRadius: '12px',
    background: isDark ? '#1A2F45' : '#F4F7FA',
    border: `1.5px solid ${error ? '#FF4D4D' : focused ? '#00C2B3' : isDark ? 'transparent' : '#E4E9EE'}`,
    boxShadow: focused ? '0 0 0 3px rgba(0,194,179,0.15)' : 'none',
    transition: 'border-color 150ms ease, box-shadow 150ms ease',
    opacity: disabled ? 0.5 : 1
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
    ...inputStyle
  };
  const prefixStyle = {
    fontSize: '15px',
    fontWeight: 500,
    color: isDark ? '#FFFFFF' : '#0D1F2D',
    flexShrink: 0,
    whiteSpace: 'nowrap'
  };
  const hintStyle = {
    fontSize: '12px',
    color: error ? '#FF4D4D' : isDark ? '#556677' : '#888888'
  };
  return React.createElement('div', {
    style: wrapStyle
  }, label && React.createElement('label', {
    style: labelStyle
  }, label), React.createElement('div', {
    style: fieldStyle
  }, prefix && React.createElement('span', {
    style: prefixStyle
  }, prefix), React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...inputEl,
      '::placeholder': {
        color: isDark ? '#556677' : '#999999'
      }
    },
    ...props
  }), suffix && React.createElement('span', {
    style: {
      ...prefixStyle,
      color: '#888888'
    }
  }, suffix)), (error || hint) && React.createElement('span', {
    style: hintStyle
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/StatusBar.jsx
try { (() => {
/**
 * StatusBar — Android-style status bar (dark and light variants).
 */
function StatusBar({
  variant = 'light',
  time = '9:41'
}) {
  const isDark = variant === 'dark';
  const fg = isDark ? '#FFFFFF' : '#0D1F2D';
  const bg = isDark ? '#0D1F2D' : '#FFFFFF';
  return React.createElement('div', {
    style: {
      height: '44px',
      background: bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      flexShrink: 0,
      fontFamily: "'Inter', system-ui, sans-serif"
    }
  }, React.createElement('span', {
    style: {
      fontSize: '15px',
      fontWeight: 600,
      color: fg
    }
  }, time), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    }
  },
  // Signal bars
  React.createElement('svg', {
    width: 16,
    height: 12,
    viewBox: '0 0 16 12'
  }, [3, 5, 7, 9].map((h, i) => React.createElement('rect', {
    key: i,
    x: i * 4,
    y: 12 - h,
    width: 3,
    height: h,
    rx: 1,
    fill: i < 3 ? fg : `${fg}44`
  }))),
  // Wifi
  React.createElement('svg', {
    width: 16,
    height: 12,
    viewBox: '0 0 16 12',
    fill: 'none'
  }, React.createElement('path', {
    d: 'M8 10l1-1.5',
    stroke: fg,
    strokeWidth: 1.5,
    strokeLinecap: 'round'
  }), React.createElement('path', {
    d: 'M5 7.5A4 4 0 0111 7.5',
    stroke: fg,
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    fill: 'none'
  }), React.createElement('path', {
    d: 'M2 5A8 8 0 0114 5',
    stroke: fg,
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    fill: 'none'
  })),
  // Battery
  React.createElement('svg', {
    width: 25,
    height: 12,
    viewBox: '0 0 25 12'
  }, React.createElement('rect', {
    x: 0.5,
    y: 0.5,
    width: 21,
    height: 11,
    rx: 3,
    stroke: fg,
    strokeOpacity: 0.35,
    fill: 'none'
  }), React.createElement('rect', {
    x: 2,
    y: 2,
    width: 15,
    height: 8,
    rx: 1.5,
    fill: fg
  }), React.createElement('path', {
    d: 'M23 4.5v3a1.5 1.5 0 000-3z',
    fill: fg,
    fillOpacity: 0.4
  }))));
}
Object.assign(__ds_scope, { StatusBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/StatusBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
/**
 * TabBar — Bottom navigation bar with Inicio / Mis Viajes / Perfil.
 */
function TabBar({
  active = 'inicio',
  onNavigate,
  style
}) {
  const tabs = [{
    id: 'inicio',
    label: 'Inicio',
    icon: HomeIcon
  }, {
    id: 'viajes',
    label: 'Mis Viajes',
    icon: ClockIcon
  }, {
    id: 'perfil',
    label: 'Perfil',
    icon: PersonIcon
  }];
  return React.createElement('nav', {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      background: '#FFFFFF',
      borderTop: '1px solid rgba(13,31,45,0.06)',
      paddingTop: '8px',
      paddingBottom: '16px',
      paddingLeft: '8px',
      paddingRight: '8px',
      height: '64px',
      boxSizing: 'border-box',
      fontFamily: "'Inter', system-ui, sans-serif",
      boxShadow: '0 -1px 0 rgba(13,31,45,0.06)',
      ...style
    }
  }, tabs.map(tab => React.createElement('button', {
    key: tab.id,
    onClick: () => onNavigate && onNavigate(tab.id),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '3px',
      padding: '4px 12px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: active === tab.id ? '#00C2B3' : '#BBBBBB',
      transition: 'color 150ms ease',
      WebkitTapHighlightColor: 'transparent',
      minWidth: '60px'
    }
  }, React.createElement(tab.icon, {
    active: active === tab.id
  }), React.createElement('span', {
    style: {
      fontSize: '11px',
      fontWeight: active === tab.id ? 600 : 400,
      lineHeight: 1
    }
  }, tab.label))));
}
function HomeIcon({
  active
}) {
  return React.createElement('svg', {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('path', {
    d: 'M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z'
  }), React.createElement('path', {
    d: 'M9 21V12h6v9'
  }));
}
function ClockIcon({
  active
}) {
  return React.createElement('svg', {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('circle', {
    cx: 12,
    cy: 12,
    r: 9
  }), React.createElement('path', {
    d: 'M12 7v5l3 3'
  }));
}
function PersonIcon({
  active
}) {
  return React.createElement('svg', {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }, React.createElement('circle', {
    cx: 12,
    cy: 8,
    r: 4
  }), React.createElement('path', {
    d: 'M4 20c0-4 3.6-7 8-7s8 3 8 7'
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pasajero/ErrorScreens.jsx
try { (() => {
// ErrorScreens.jsx — No drivers, Driver cancelled, GPS off, Out of coverage, Pending payment

function ErrorLayout({
  icon,
  title,
  desc,
  btnLabel,
  btnAction,
  btnVariant = 'primary',
  secondLabel,
  secondAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 32px',
      textAlign: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 68
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#0D1F2D',
      lineHeight: 1.25
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: '#666',
      lineHeight: 1.7,
      maxWidth: 300
    }
  }, desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: btnVariant,
    onClick: btnAction
  }, btnLabel), secondLabel && /*#__PURE__*/React.createElement("button", {
    onClick: secondAction,
    style: {
      background: 'none',
      border: 'none',
      color: '#888',
      fontSize: 14,
      cursor: 'pointer',
      padding: '12px',
      width: '100%',
      marginTop: 4
    }
  }, secondLabel))));
}
function NoDriversScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement(ErrorLayout, {
    icon: "\uD83D\uDE97",
    title: "No hay conductores disponibles",
    desc: "En este momento no hay conductores cerca tuyo. Suele pasar en horarios de mucha demanda. Esper\xE1 unos minutos e intent\xE1 de nuevo.",
    btnLabel: "REINTENTAR",
    btnAction: () => nav('searching'),
    secondLabel: "Volver al inicio",
    secondAction: () => nav('home')
  });
}
function DriverCancelledScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 32px',
      textAlign: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 68
    }
  }, "\uD83D\uDE14"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#0D1F2D',
      lineHeight: 1.25
    }
  }, "Tu conductor cancel\xF3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: '#666',
      lineHeight: 1.7,
      maxWidth: 300
    }
  }, "Carlos M. tuvo que cancelar el viaje. No se aplic\xF3 ning\xFAn cargo."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#E8F8F6',
      borderRadius: 12,
      padding: '12px 16px',
      width: '100%',
      fontSize: 13,
      color: '#0D1F2D',
      lineHeight: 1.5
    }
  }, "\uD83D\uDCA1 Podemos buscarte otro conductor de inmediato."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('searching')
  }, "BUSCAR OTRO CONDUCTOR"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('home'),
    style: {
      background: 'none',
      border: 'none',
      color: '#888',
      fontSize: 14,
      cursor: 'pointer',
      padding: '10px'
    }
  }, "Volver al inicio"))));
}
function GPSOffScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 32px',
      textAlign: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90,
      height: 90,
      borderRadius: '50%',
      background: '#FFF3E0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "44",
    height: "44",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#F5A623",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "3",
    x2: "21",
    y2: "21"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#0D1F2D',
      lineHeight: 1.25
    }
  }, "GPS desactivado"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: '#666',
      lineHeight: 1.7
    }
  }, "Necesitamos acceder a tu ubicaci\xF3n para encontrar conductores cerca tuyo.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Activ\xE1 el GPS en la configuraci\xF3n de tu tel\xE9fono."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('home')
  }, "ACTIVAR UBICACI\xD3N"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('home'),
    style: {
      background: 'none',
      border: 'none',
      color: '#888',
      fontSize: 14,
      cursor: 'pointer',
      padding: '10px'
    }
  }, "Ingresar direcci\xF3n manualmente"))));
}
function OutOfCoverageScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#0D1F2D'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 32px',
      textAlign: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 68
    }
  }, "\uD83D\uDCCD"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#fff',
      lineHeight: 1.25
    }
  }, "Fuera del \xE1rea de cobertura"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: '#8899AA',
      lineHeight: 1.7
    }
  }, "Lifty todav\xEDa no opera en esta zona.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Por ahora cubrimos Villa Dolores y alrededores. Pronto expandiremos a m\xE1s ciudades."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1A2F45',
      borderRadius: 12,
      padding: '14px 16px',
      width: '100%',
      fontSize: 13,
      color: '#8899AA',
      lineHeight: 1.5
    }
  }, "\uD83D\uDCCD Zona activa: Villa Dolores, C\xF3rdoba"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('home')
  }, "VOLVER AL INICIO"))));
}
function PendingPaymentScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 32px',
      textAlign: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 90,
      height: 90,
      borderRadius: '50%',
      background: '#FFF3E0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "44",
    height: "44",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#F5A623",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1",
    y: "4",
    width: "22",
    height: "16",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "10",
    x2: "23",
    y2: "10"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#0D1F2D',
      lineHeight: 1.25
    }
  }, "Pago pendiente"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: '#666',
      lineHeight: 1.7
    }
  }, "Ten\xE9s un pago pendiente de tu \xFAltimo viaje. Para pedir un nuevo viaje, primero resolv\xE9 el pago."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F4F7FA',
      borderRadius: 14,
      padding: '16px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 14,
      color: '#0D1F2D',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Viaje VJ-2041"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "$2.500")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888'
    }
  }, "Hoy 9:41 \xB7 Efectivo sin confirmar")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('home')
  }, "RESOLVER PAGO"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('support'),
    style: {
      background: 'none',
      border: 'none',
      color: '#00C2B3',
      fontSize: 14,
      cursor: 'pointer',
      padding: '10px'
    }
  }, "Necesito ayuda con el pago"))));
}
Object.assign(window, {
  NoDriversScreen,
  DriverCancelledScreen,
  GPSOffScreen,
  OutOfCoverageScreen,
  PendingPaymentScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pasajero/ErrorScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pasajero/ExtraScreens.jsx
try { (() => {
// ExtraScreens.jsx — Support, Chat, Trips History, Trip Detail, Receipt, Lost Item, Trip For Other, Bad Rating

// ── Trips History (populated) ──────────────────────────────────────────────
function TripsHistoryScreen({
  nav
}) {
  const [filter, setFilter] = React.useState('todos');
  const [tab, setTab] = React.useState('viajes');
  const handleTab = id => {
    setTab(id);
    if (id === 'inicio') nav('home');
    if (id === 'perfil') nav('profile');
  };
  const trips = [{
    id: 'VJ-2041',
    date: 'Hoy, 9:41',
    from: 'Av. San Martín 450',
    to: 'Terminal de Ómnibus',
    driver: 'Carlos M.',
    price: '$2.500',
    status: 'completado'
  }, {
    id: 'VJ-2038',
    date: 'Ayer, 18:22',
    from: 'Hospital Regional',
    to: 'Av. San Martín 450',
    driver: 'Diego P.',
    price: '$1.800',
    status: 'completado'
  }, {
    id: 'VJ-2031',
    date: 'Lun 23, 14:05',
    from: 'Plaza Mitre',
    to: 'Costanera Norte',
    driver: 'Roberto G.',
    price: '$1.500',
    status: 'cancelado'
  }, {
    id: 'VJ-2028',
    date: 'Sáb 21, 10:30',
    from: 'Av. San Martín 450',
    to: 'Shopping Centro',
    driver: 'Ana R.',
    price: '$2.200',
    status: 'completado'
  }, {
    id: 'VJ-2020',
    date: 'Vie 20, 20:15',
    from: 'Costanera Norte',
    to: 'Av. San Martín 450',
    driver: 'Carlos M.',
    price: '$1.900',
    status: 'completado'
  }];
  const filtered = filter === 'todos' ? trips : trips.filter(t => t.status === filter);
  const statusColor = {
    completado: '#2E7D32',
    cancelado: '#FF4D4D'
  };
  const statusBg = {
    completado: '#E8F5E9',
    cancelado: '#FFEEEE'
  };
  const statusLabel = {
    completado: 'Completado',
    cancelado: 'Cancelado'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#F4F7FA'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '16px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: '#0D1F2D',
      marginBottom: 14
    }
  }, "Mis Viajes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 0
    }
  }, ['todos', 'completado', 'cancelado'].map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    onClick: () => setFilter(f),
    style: {
      height: 34,
      padding: '0 16px',
      borderRadius: 9999,
      border: 'none',
      background: filter === f ? '#0D1F2D' : '#F4F7FA',
      color: filter === f ? '#fff' : '#555',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      textTransform: 'capitalize'
    }
  }, f === 'todos' ? 'Todos' : f === 'completado' ? 'Completados' : 'Cancelados')))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 0'
    }
  }, filtered.map(trip => /*#__PURE__*/React.createElement("div", {
    key: trip.id,
    onClick: () => nav('tripdetail'),
    style: {
      background: '#fff',
      margin: '6px 16px',
      borderRadius: 14,
      padding: '14px 16px',
      cursor: 'pointer',
      boxShadow: '0 2px 8px rgba(13,31,45,.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888'
    }
  }, trip.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: statusColor[trip.status],
      background: statusBg[trip.status],
      borderRadius: 9999,
      padding: '2px 8px'
    }
  }, statusLabel[trip.status])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#00C2B3',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#0D1F2D',
      fontWeight: 500
    }
  }, trip.from)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#F5A623',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#0D1F2D',
      fontWeight: 500
    }
  }, trip.to))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: '#888'
    }
  }, "\uD83D\uDE97 ", trip.driver), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: '#0D1F2D'
    }
  }, trip.price)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  })), /*#__PURE__*/React.createElement(window.BottomTabBar, {
    active: tab,
    onNavigate: handleTab
  }));
}

// ── Trip Detail ────────────────────────────────────────────────────────────
function TripDetailScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('trips'),
    style: {
      background: 'none',
      border: 'none',
      color: '#0D1F2D',
      fontSize: 22,
      cursor: 'pointer',
      padding: '4px 8px 4px 0'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Detalle del viaje")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      background: 'linear-gradient(135deg,#1B3D6F,#2D6A9F)',
      position: 'relative',
      flexShrink: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '45%',
      left: 0,
      right: 0,
      height: 3,
      background: '#3A7AC4',
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '30%',
      left: '15%',
      right: '20%',
      height: 2,
      background: '#00C2B3',
      opacity: .9,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '27%',
      left: '14%',
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: '#00C2B3'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '24%',
      right: '19%',
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#F5A623'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 8,
      right: 12,
      background: 'rgba(13,31,45,.8)',
      borderRadius: 8,
      padding: '4px 10px',
      fontSize: 11,
      color: '#fff'
    }
  }, "VJ-2041 \xB7 Hoy 9:41")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 16
    }
  }, [{
    color: '#00C2B3',
    label: 'Av. San Martín 450',
    sub: 'Origen'
  }, {
    color: '#F5A623',
    label: 'Terminal de Ómnibus',
    sub: 'Destino'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: r.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#0D1F2D'
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#888'
    }
  }, r.sub))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: '#EEEEEE',
      margin: '0 0 16px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: '#F4F7FA',
      borderRadius: 14,
      padding: '14px',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: '#00C2B3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      color: '#fff',
      fontSize: 18
    }
  }, "C"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Carlos M."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888'
    }
  }, "Chevrolet Prisma \xB7 ABC 123 \xB7 \u2B50 4.8")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#00C2B3',
      fontWeight: 600,
      background: '#E8F8F6',
      borderRadius: 8,
      padding: '4px 8px'
    }
  }, "Tu calificaci\xF3n: \u2B50 5")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F4F7FA',
      borderRadius: 14,
      padding: '16px',
      marginBottom: 16
    }
  }, [['Bajada de bandera', '$2.000'], ['Distancia (16 cdas)', '$500']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: '#888',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", null, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: '#E4E9EE',
      margin: '8px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 16,
      fontWeight: 700,
      color: '#0D1F2D'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, "$2.500")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888',
      marginTop: 6
    }
  }, "\uD83D\uDCB5 Efectivo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    full: false,
    style: {
      flex: 1,
      fontSize: 13
    },
    onClick: () => nav('vehicle')
  }, "Pedir viaje similar"), /*#__PURE__*/React.createElement(Btn, {
    variant: "outline",
    full: false,
    style: {
      flex: 1,
      fontSize: 13
    },
    onClick: () => nav('receipt')
  }, "Ver recibo")), /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    full: true,
    onClick: () => nav('support')
  }, "Necesito ayuda con este viaje"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  })));
}

// ── Receipt ────────────────────────────────────────────────────────────────
function ReceiptScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#F4F7FA'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('tripdetail'),
    style: {
      background: 'none',
      border: 'none',
      color: '#0D1F2D',
      fontSize: 22,
      cursor: 'pointer',
      padding: '4px 8px 4px 0'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Comprobante de viaje")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 16,
      padding: '20px',
      boxShadow: '0 2px 12px rgba(13,31,45,.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 20,
      paddingBottom: 16,
      borderBottom: '1px dashed #E4E9EE'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "32",
    height: "40",
    viewBox: "0 0 64 80",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32 20 A 12 12 0 1 0 20 32 L 20 58 Q 20 68 30 68 L 54 68",
    stroke: "#00C2B3",
    strokeWidth: "12",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#0D1F2D',
      marginTop: 6
    }
  }, "Lifty"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888',
      marginTop: 2
    }
  }, "Comprobante de viaje")), [['N° de viaje', 'VJ-2041'], ['Fecha y hora', 'Martes 24/06 · 9:41 hs'], ['Conductor', 'Carlos M.'], ['Vehículo', 'Chevrolet Prisma · ABC 123'], ['Origen', 'Av. San Martín 450'], ['Destino', 'Terminal de Ómnibus'], ['Duración', '12 min · 3.2 km'], ['Método de pago', '💵 Efectivo']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '9px 0',
      borderBottom: '1px solid #F4F7FA'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#888'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: '#0D1F2D',
      textAlign: 'right',
      maxWidth: '55%'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      paddingTop: 12,
      borderTop: '1px dashed #E4E9EE',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: '#0D1F2D'
    }
  }, "Total"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: '#00C2B3'
    }
  }, "$2.500"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      margin: '16px 0'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "secondary",
    full: false,
    style: {
      flex: 1
    }
  }, "Compartir"), /*#__PURE__*/React.createElement(Btn, {
    variant: "outline",
    full: false,
    style: {
      flex: 1
    },
    onClick: () => nav('support')
  }, "Soporte"))));
}

// ── Support / Centro de Ayuda ──────────────────────────────────────────────
function SupportScreen({
  nav
}) {
  const [tab, setTab] = React.useState('inicio');
  const cats = [{
    icon: '🚗',
    label: 'Problema con un viaje',
    dest: 'support'
  }, {
    icon: '🎒',
    label: 'Objeto olvidado',
    dest: 'lostitem'
  }, {
    icon: '💳',
    label: 'Problema de pago',
    dest: 'chat'
  }, {
    icon: '🔒',
    label: 'Seguridad',
    dest: 'chat'
  }, {
    icon: '👤',
    label: 'Cuenta y perfil',
    dest: 'chat'
  }, {
    icon: '❓',
    label: 'Otro problema',
    dest: 'chat'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#F4F7FA'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '16px 20px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: '#0D1F2D',
      marginBottom: 12
    }
  }, "Soporte"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: '#F4F7FA',
      borderRadius: 12,
      padding: '0 14px',
      height: 46
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#888",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4-4"
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar ayuda...",
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontSize: 14,
      fontFamily: 'Inter,sans-serif',
      color: '#0D1F2D'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#E8F8F6',
      borderRadius: 14,
      padding: '14px 16px',
      marginBottom: 14,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    },
    onClick: () => nav('chat')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: '#00C2B3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Chat con soporte Lifty"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#00C2B3'
    }
  }, "Respuesta r\xE1pida \xB7 Atenci\xF3n local")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#00C2B3',
      fontSize: 18
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#888',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: 10
    }
  }, "Categor\xEDas"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 14,
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(13,31,45,.06)'
    }
  }, cats.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => nav(c.dest),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 16px',
      borderBottom: i < cats.length - 1 ? '1px solid #F4F7FA' : 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      width: 28
    }
  }, c.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 500,
      color: '#0D1F2D'
    }
  }, c.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#BBBBBB',
      fontSize: 18
    }
  }, "\u203A")))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  })));
}

// ── Chat ───────────────────────────────────────────────────────────────────
function ChatScreen({
  nav
}) {
  const [msg, setMsg] = React.useState('');
  const [msgs, setMsgs] = React.useState([{
    from: 'agent',
    text: '¡Hola! Soy el equipo de soporte de Lifty 👋 ¿En qué puedo ayudarte hoy?',
    time: '9:42'
  }]);
  const send = () => {
    if (!msg.trim()) return;
    const newMsgs = [...msgs, {
      from: 'user',
      text: msg,
      time: '9:43'
    }];
    setMsgs(newMsgs);
    setMsg('');
    setTimeout(() => setMsgs(m => [...m, {
      from: 'agent',
      text: 'Gracias por tu mensaje. Un agente local de Villa Dolores te responderá en breve.',
      time: '9:43'
    }]), 1200);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#F4F7FA'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      gap: 12,
      background: '#fff',
      borderBottom: '1px solid #F4F7FA'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('support'),
    style: {
      background: 'none',
      border: 'none',
      color: '#0D1F2D',
      fontSize: 22,
      cursor: 'pointer',
      padding: '4px 8px 4px 0'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: '#00C2B3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Soporte Lifty"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#00C2B3'
    }
  }, "\u25CF En l\xEDnea \xB7 Atenci\xF3n local"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: m.from === 'user' ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78%',
      background: m.from === 'user' ? '#00C2B3' : '#fff',
      color: m.from === 'user' ? '#fff' : '#0D1F2D',
      borderRadius: m.from === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
      padding: '10px 14px',
      fontSize: 14,
      lineHeight: 1.5,
      boxShadow: '0 1px 4px rgba(13,31,45,.08)'
    }
  }, m.text, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: m.from === 'user' ? 'rgba(255,255,255,.7)' : '#888',
      marginTop: 4,
      textAlign: 'right'
    }
  }, m.time))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '12px 16px',
      display: 'flex',
      gap: 10,
      borderTop: '1px solid #F4F7FA'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: msg,
    onChange: e => setMsg(e.target.value),
    onKeyDown: e => e.key === 'Enter' && send(),
    placeholder: "Escrib\xED tu mensaje...",
    style: {
      flex: 1,
      height: 44,
      borderRadius: 12,
      border: '1.5px solid #E4E9EE',
      padding: '0 14px',
      fontSize: 14,
      fontFamily: 'Inter,sans-serif',
      outline: 'none',
      color: '#0D1F2D'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: '#00C2B3',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "2",
    x2: "11",
    y2: "13"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "22 2 15 22 11 13 2 9 22 2"
  })))));
}

// ── Lost Item Report ───────────────────────────────────────────────────────
function LostItemScreen({
  nav
}) {
  const [step, setStep] = React.useState(1);
  const [item, setItem] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => step === 1 ? nav('support') : setStep(1),
    style: {
      background: 'none',
      border: 'none',
      color: '#0D1F2D',
      fontSize: 22,
      cursor: 'pointer',
      padding: '4px 8px 4px 0'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Objeto olvidado")), step === 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '16px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#555',
      marginBottom: 16
    }
  }, "\xBFEn qu\xE9 viaje olvidaste el objeto?"), [{
    id: 'VJ-2041',
    date: 'Hoy 9:41',
    route: 'San Martín → Terminal'
  }, {
    id: 'VJ-2038',
    date: 'Ayer 18:22',
    route: 'Hospital → San Martín'
  }].map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    onClick: () => setStep(2),
    style: {
      background: '#F4F7FA',
      borderRadius: 14,
      padding: '14px 16px',
      marginBottom: 10,
      cursor: 'pointer',
      border: '1.5px solid transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#0D1F2D',
      marginBottom: 4
    }
  }, t.route), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888'
    }
  }, t.date, " \xB7 ", t.id)))) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFF8E8',
      borderRadius: 12,
      padding: '12px 14px',
      fontSize: 13,
      color: '#92610A',
      lineHeight: 1.5
    }
  }, "\u2139\uFE0F Vamos a contactar al conductor del viaje seleccionado para ayudarte a recuperar el objeto."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#0D1F2D',
      marginBottom: 6
    }
  }, "Describ\xED el objeto"), /*#__PURE__*/React.createElement("textarea", {
    value: item,
    onChange: e => setItem(e.target.value),
    placeholder: "Ej.: Mochila negra, marca Nike, con una billetera adentro...",
    style: {
      width: '100%',
      height: 96,
      borderRadius: 12,
      border: '1.5px solid #E4E9EE',
      padding: '12px 14px',
      fontSize: 14,
      fontFamily: 'Inter,sans-serif',
      outline: 'none',
      resize: 'none',
      color: '#0D1F2D',
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#0D1F2D',
      marginBottom: 6
    }
  }, "Tu n\xFAmero de contacto"), /*#__PURE__*/React.createElement("input", {
    defaultValue: "+54 3544 123456",
    style: {
      width: '100%',
      height: 52,
      borderRadius: 12,
      border: '1.5px solid #E4E9EE',
      padding: '0 14px',
      fontSize: 14,
      fontFamily: 'Inter,sans-serif',
      outline: 'none',
      color: '#0D1F2D',
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('support')
  }, "ENVIAR REPORTE")));
}

// ── Trip For Someone Else ──────────────────────────────────────────────────
function TripForOtherScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('home'),
    style: {
      background: 'none',
      border: 'none',
      color: '#0D1F2D',
      fontSize: 22,
      cursor: 'pointer',
      padding: '4px 8px 4px 0'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Pedir para otra persona")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '16px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#E8F8F6',
      borderRadius: 12,
      padding: '12px 14px',
      fontSize: 13,
      color: '#0D1F2D',
      lineHeight: 1.5,
      marginBottom: 20,
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2139\uFE0F"), /*#__PURE__*/React.createElement("span", null, "Esa persona recibir\xE1 los datos del conductor por SMS al n\xFAmero que indiques.")), [{
    label: 'Nombre de la persona',
    ph: 'Ej.: Ana García'
  }, {
    label: 'Teléfono de la persona',
    ph: '3544 000000'
  }].map(f => /*#__PURE__*/React.createElement("div", {
    key: f.label,
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#888',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      marginBottom: 6
    }
  }, f.label), /*#__PURE__*/React.createElement("input", {
    placeholder: f.ph,
    style: {
      width: '100%',
      height: 52,
      borderRadius: 12,
      border: '1.5px solid #E4E9EE',
      padding: '0 14px',
      fontSize: 15,
      fontFamily: 'Inter,sans-serif',
      outline: 'none',
      color: '#0D1F2D',
      boxSizing: 'border-box'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: '#EEEEEE',
      margin: '8px 0 16px'
    }
  }), [{
    icon: '🟢',
    label: 'Punto de partida',
    val: 'Av. San Martín 450'
  }, {
    icon: '🟠',
    label: 'Destino',
    val: 'Terminal de Ómnibus'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: '#F4F7FA',
      borderRadius: 12,
      padding: '12px 14px',
      marginBottom: 10,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, r.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#888'
    }
  }, r.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#0D1F2D'
    }
  }, r.val)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#00C2B3'
    }
  }, "\u203A"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#888',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      marginBottom: 6
    }
  }, "Referencia para el conductor"), /*#__PURE__*/React.createElement("input", {
    placeholder: "Ej.: frente al kiosco verde",
    style: {
      width: '100%',
      height: 52,
      borderRadius: 12,
      border: '1.5px solid #E4E9EE',
      padding: '0 14px',
      fontSize: 14,
      fontFamily: 'Inter,sans-serif',
      outline: 'none',
      color: '#0D1F2D',
      boxSizing: 'border-box'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 24px',
      borderTop: '1px solid #EEEEEE'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('confirm')
  }, "CONFIRMAR Y PEDIR")));
}

// ── Bad Rating / Report ────────────────────────────────────────────────────
function BadRatingScreen({
  nav
}) {
  const [selected, setSelected] = React.useState([]);
  const options = ['Llegó tarde', 'Manejo inseguro', 'Mala actitud', 'Ruta incorrecta', 'Auto sucio', 'Me cobró de más'];
  const toggle = o => setSelected(s => s.includes(o) ? s.filter(x => x !== o) : [...s, o]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '24px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: '#0D1F2D',
      marginBottom: 6
    }
  }, "Contanos qu\xE9 pas\xF3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#888',
      marginBottom: 20
    }
  }, "Tu reporte es confidencial y nos ayuda a mejorar."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 24
    }
  }, options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => toggle(o),
    style: {
      height: 38,
      padding: '0 16px',
      borderRadius: 9999,
      border: `1.5px solid ${selected.includes(o) ? '#FF4D4D' : '#DDDDDD'}`,
      background: selected.includes(o) ? '#FFEEEE' : '#fff',
      color: selected.includes(o) ? '#FF4D4D' : '#555',
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, o))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#0D1F2D',
      marginBottom: 8
    }
  }, "Cont\xE1 m\xE1s detalles (opcional)"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "\xBFQu\xE9 ocurri\xF3 durante el viaje?",
    style: {
      width: '100%',
      height: 90,
      borderRadius: 12,
      border: '1.5px solid #E4E9EE',
      padding: '12px 14px',
      fontSize: 14,
      fontFamily: 'Inter,sans-serif',
      outline: 'none',
      resize: 'none',
      color: '#0D1F2D',
      boxSizing: 'border-box',
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFEEEE',
      borderRadius: 12,
      padding: '12px 14px',
      fontSize: 13,
      color: '#FF4D4D',
      lineHeight: 1.5,
      marginBottom: 20
    }
  }, "Si viviste una situaci\xF3n de riesgo o emergencia, contact\xE1 a soporte directo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 24px',
      display: 'flex',
      gap: 10,
      borderTop: '1px solid #EEEEEE'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "outline",
    full: false,
    style: {
      flex: 1
    },
    onClick: () => nav('home')
  }, "Omitir"), /*#__PURE__*/React.createElement(Btn, {
    destructive: true,
    full: false,
    style: {
      flex: 1
    },
    onClick: () => nav('home')
  }, "ENVIAR REPORTE")));
}
Object.assign(window, {
  TripsHistoryScreen,
  TripDetailScreen,
  ReceiptScreen,
  SupportScreen,
  ChatScreen,
  LostItemScreen,
  TripForOtherScreen,
  BadRatingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pasajero/ExtraScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pasajero/HomeScreens.jsx
try { (() => {
// HomeScreens.jsx — Home, Search, Vehicle, Confirm

function HomeScreen({
  nav
}) {
  const [tab, setTab] = React.useState('inicio');
  const handleTab = id => {
    setTab(id);
    if (id === 'viajes') nav('trips');
    if (id === 'perfil') nav('profile');
  };
  const TabBar = window.BottomTabBar;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: true
  }), /*#__PURE__*/React.createElement(MapBG, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 16,
      right: 16,
      height: 52,
      background: '#fff',
      borderRadius: 14,
      display: 'flex',
      alignItems: 'center',
      padding: '0 14px',
      gap: 10,
      boxShadow: '0 4px 20px rgba(13,31,45,.18)',
      cursor: 'pointer'
    },
    onClick: () => nav('search')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#999",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4-4"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: '#999'
    }
  }, "\xBFA d\xF3nde vas?"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '24px 24px 0 0',
      padding: '0 20px 0',
      boxShadow: '0 -4px 24px rgba(13,31,45,.10)',
      marginTop: -20
    }
  }, /*#__PURE__*/React.createElement(Handle, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: '#0D1F2D',
      marginBottom: 2
    }
  }, "\xA1Hola, Martina! \uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888',
      marginBottom: 14,
      fontWeight: 500
    }
  }, "Destinos frecuentes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 14
    }
  }, [{
    icon: '🏠',
    label: 'Casa',
    addr: 'Av. San Martín 450'
  }, {
    icon: '💼',
    label: 'Trabajo',
    addr: 'Shopping Centro, Local 8'
  }, {
    icon: '🏛️',
    label: 'Centro',
    addr: 'Plaza Mitre'
  }].map(d => /*#__PURE__*/React.createElement("div", {
    key: d.label,
    onClick: () => nav('vehicle'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: '#F4F7FA',
      borderRadius: 12,
      padding: '12px 14px',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, d.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, d.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888'
    }
  }, d.addr)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#00C2B3',
      fontSize: 16
    }
  }, "\u203A")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#00C2B3'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#555'
    }
  }, "3 conductores disponibles \xB7 2 min aprox")), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('search')
  }, "PEDIR VIAJE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: '#F4F7FA',
      borderRadius: 12,
      padding: '11px 14px',
      cursor: 'pointer',
      marginTop: 8
    },
    onClick: () => nav('tripforother')
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83D\uDC65"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: '#0D1F2D',
      flex: 1
    }
  }, "Pedir para otra persona"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#00C2B3',
      fontSize: 14
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }))), /*#__PURE__*/React.createElement(window.BottomTabBar, {
    active: tab,
    onNavigate: handleTab
  }));
}
function SearchScreen({
  nav
}) {
  const [query, setQuery] = React.useState('Terminal');
  const results = [{
    name: 'Terminal de Ómnibus',
    addr: 'Av. Circunvalación 1200 · 1.2 km'
  }, {
    name: 'Terminal de Ómnibus - Plataforma 3',
    addr: 'Av. Circunvalación 1200 · 1.2 km'
  }, {
    name: 'Parada Terminal Sur',
    addr: 'Av. Circunvalación 1150 · 1.4 km'
  }];
  const recents = [{
    name: 'Hospital Regional',
    addr: 'Av. Sarmiento 840'
  }, {
    name: 'Costanera',
    addr: 'Costanera Norte s/n'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px 0',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('home'),
    style: {
      background: 'none',
      border: 'none',
      color: '#0D1F2D',
      fontSize: 22,
      cursor: 'pointer',
      padding: '6px 4px'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      background: '#F4F7FA',
      borderRadius: 12,
      padding: '0 14px',
      height: 48,
      border: '1.5px solid #00C2B3',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#888",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4-4"
  })), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: e => setQuery(e.target.value),
    autoFocus: true,
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontSize: 15,
      fontFamily: 'Inter,sans-serif',
      color: '#0D1F2D'
    }
  }), query && /*#__PURE__*/React.createElement("button", {
    onClick: () => setQuery(''),
    style: {
      background: 'none',
      border: 'none',
      color: '#888',
      cursor: 'pointer',
      fontSize: 16,
      padding: 0
    }
  }, "\u2715"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '8px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px 6px',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: '#E8F8F6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#00C2B3'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#888'
    }
  }, "Tu ubicaci\xF3n actual"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#0D1F2D'
    }
  }, "Av. San Mart\xEDn 450"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: '#EEEEEE',
      margin: '8px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 20px',
      fontSize: 11,
      fontWeight: 600,
      color: '#888',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, query ? 'Resultados' : 'Recientes'), (query ? results : recents).map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => nav('vehicle'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 20px',
      cursor: 'pointer',
      borderBottom: '1px solid #F4F7FA'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: '#F4F7FA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#888",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.5"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#0D1F2D',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888',
      marginTop: 1
    }
  }, r.addr)), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#00C2B3',
      fontSize: 16,
      flexShrink: 0
    }
  }, "\u203A"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '13px 20px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: '#F4F7FA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#00C2B3",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 1v4M12 19v4M1 12h4M19 12h4"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#00C2B3'
    }
  }, "Elegir en el mapa"))));
}
function VehicleScreen({
  nav
}) {
  const [selected, setSelected] = React.useState('standard');
  const options = [{
    id: 'standard',
    icon: '🚗',
    label: 'Lifty Standard',
    sub: '4 pasajeros · 3 min',
    price: '$2.000',
    badge: null
  }, {
    id: 'moto',
    icon: '🏍️',
    label: 'Lifty Moto',
    sub: '1 pasajero · 5 min',
    price: '$1.500',
    badge: 'Más barato'
  }, {
    id: 'envios',
    icon: '📦',
    label: 'Lifty Envíos',
    sub: 'Paquetes · 10 min',
    price: '$1.200',
    badge: 'Próximamente',
    disabled: true
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement(MapBG, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      background: 'rgba(13,31,45,.85)',
      borderRadius: 12,
      padding: '8px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      backdropFilter: 'blur(8px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\uD83D\uDD50"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#fff',
      fontWeight: 500
    }
  }, "Llegada est. \xB7 8 min"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '24px 24px 0 0',
      marginTop: -20,
      padding: '0 20px',
      boxShadow: '0 -4px 24px rgba(13,31,45,.10)'
    }
  }, /*#__PURE__*/React.createElement(Handle, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 0 8px',
      fontSize: 12,
      fontWeight: 600,
      color: '#888',
      letterSpacing: '0.06em',
      textTransform: 'uppercase'
    }
  }, "Opciones de viaje"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      background: '#FFF3E0',
      borderRadius: 10,
      padding: '10px 12px',
      marginBottom: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\uD83D\uDCC8"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#92610A'
    }
  }, "Alta demanda en este momento"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#B07A20',
      marginTop: 2
    }
  }, "Los precios pueden variar seg\xFAn la cantidad de solicitudes."))), options.map(opt => /*#__PURE__*/React.createElement("div", {
    key: opt.id,
    onClick: () => !opt.disabled && setSelected(opt.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 14px',
      borderRadius: 14,
      marginBottom: 8,
      cursor: opt.disabled ? 'default' : 'pointer',
      border: `2px solid ${selected === opt.id ? '#00C2B3' : '#EEEEEE'}`,
      background: selected === opt.id ? '#E8F8F6' : '#fff',
      opacity: opt.disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: '#F4F7FA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22
    }
  }, opt.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, opt.label), opt.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      background: opt.disabled ? '#E4E9EE' : '#00C2B3',
      color: opt.disabled ? '#888' : '#fff',
      borderRadius: 6,
      padding: '2px 7px'
    }
  }, opt.badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888',
      marginTop: 2
    }
  }, opt.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: '#0D1F2D'
    }
  }, opt.price))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 14px',
      background: '#F4F7FA',
      borderRadius: 12,
      marginBottom: 14,
      cursor: 'pointer'
    },
    onClick: () => nav('payment')
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, "\uD83D\uDCB3"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: '#0D1F2D'
    }
  }, "Efectivo"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888'
    }
  }, "Toc\xE1 para cambiar")), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#00C2B3'
    }
  }, "\u2192")), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('confirm')
  }, "Solicitar Lifty Standard"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  })));
}
function ConfirmScreen({
  nav
}) {
  const [note, setNote] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('vehicle'),
    style: {
      background: 'none',
      border: 'none',
      color: '#0D1F2D',
      fontSize: 22,
      cursor: 'pointer',
      padding: '4px 8px 4px 0'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Confirmar y pagar")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 140,
      background: 'linear-gradient(135deg,#1B3D6F,#2D6A9F)',
      position: 'relative',
      flexShrink: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '45%',
      left: 0,
      right: 0,
      height: 4,
      background: '#3A7AC4',
      opacity: .5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '30%',
      left: '15%',
      right: '20%',
      height: 3,
      background: '#00C2B3',
      opacity: .9,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '26%',
      left: '14%',
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#00C2B3'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '23%',
      right: '19%',
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: '#F5A623',
      boxShadow: '0 2px 8px rgba(245,166,35,.5)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px 20px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 16
    }
  }, [{
    color: '#00C2B3',
    label: 'Av. San Martín 450'
  }, {
    color: '#F5A623',
    label: 'Terminal de Ómnibus'
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: r.color,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: '#0D1F2D'
    }
  }, r.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: '#EEEEEE',
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F4F7FA',
      borderRadius: 14,
      padding: '16px 18px',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: '#00C2B3',
      lineHeight: 1
    }
  }, "$2.000"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#888',
      marginTop: 4
    }
  }, "Lifty Standard \xB7 3 min"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#AAAAAA',
      marginTop: 4
    }
  }, "Se te asignar\xE1 el conductor m\xE1s cercano")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#888'
    }
  }, "Pago con:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: '#F4F7FA',
      borderRadius: 20,
      padding: '6px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "\uD83D\uDCB5"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Efectivo")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#00C2B3',
      cursor: 'pointer'
    },
    onClick: () => nav('payment')
  }, "Cambiar \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#888',
      marginBottom: 8
    }
  }, "Nota al conductor (opcional)"), /*#__PURE__*/React.createElement("input", {
    value: note,
    onChange: e => setNote(e.target.value),
    placeholder: "Ej.: puerta negra, frente a la plaza",
    style: {
      width: '100%',
      height: 48,
      borderRadius: 12,
      border: '1.5px solid #E4E9EE',
      padding: '0 14px',
      fontSize: 14,
      fontFamily: 'Inter,sans-serif',
      outline: 'none',
      color: '#0D1F2D',
      boxSizing: 'border-box'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888',
      marginBottom: 20,
      lineHeight: 1.5
    }
  }, "\u2139\uFE0F El precio final puede variar seg\xFAn espera o cambios en el recorrido.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 24px',
      boxShadow: '0 -1px 0 #EEEEEE'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('searching')
  }, "CONFIRMAR VIAJE \xB7 $2.000")));
}
Object.assign(window, {
  HomeScreen,
  SearchScreen,
  VehicleScreen,
  ConfirmScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pasajero/HomeScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pasajero/OnboardingScreens.jsx
try { (() => {
// OnboardingScreens.jsx — Login, Verify, Register, Permissions

// Isotipo SVG component (official Lifty mark)
function LiftyIsotipo({
  size = 44,
  color = '#00C2B3'
}) {
  const w = size * 0.8;
  const h = size;
  return /*#__PURE__*/React.createElement("svg", {
    width: w,
    height: h,
    viewBox: "0 0 64 80",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32 20 A 12 12 0 1 0 20 32 L 20 58 Q 20 68 30 68 L 54 68",
    stroke: color,
    strokeWidth: "12",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }));
}
function LoginScreen({
  nav
}) {
  const [phone, setPhone] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#0D1F2D'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 28px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(LiftyIsotipo, {
    size: 56,
    color: "#00C2B3"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 46,
      fontWeight: 700,
      color: '#fff',
      letterSpacing: '-0.5px',
      lineHeight: 1
    }
  }, "Lifty")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: '#00C2B3',
      fontWeight: 600
    }
  }, "Movilidad que ", /*#__PURE__*/React.createElement("span", {
    style: {
      textDecoration: 'none'
    }
  }, "te eleva.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#556677',
      lineHeight: 1.65,
      marginTop: 4
    }
  }, "Ped\xED tu viaje en minutos.", /*#__PURE__*/React.createElement("br", null), "Conductores de confianza de tu ciudad.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#8899AA',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Tu n\xFAmero de tel\xE9fono"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: '#1A2F45',
      borderRadius: 14,
      padding: '0 16px',
      height: 56,
      marginBottom: 10,
      border: '1.5px solid #2D5F8F'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83C\uDDE6\uD83C\uDDF7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: '#fff',
      flexShrink: 0
    }
  }, "+54"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 20,
      background: '#2D5F8F'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: phone,
    onChange: e => setPhone(e.target.value),
    placeholder: "3544 123456",
    inputMode: "numeric",
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontSize: 16,
      color: '#fff',
      fontFamily: 'Inter,sans-serif'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#556677',
      marginBottom: 24,
      lineHeight: 1.6
    }
  }, "Te enviaremos un c\xF3digo por WhatsApp para verificar tu n\xFAmero."), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('verify')
  }, "CONTINUAR"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 14,
      fontSize: 12,
      color: '#556677'
    }
  }, "Al continuar acept\xE1s los ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#00C2B3',
      cursor: 'pointer'
    }
  }, "T\xE9rminos y condiciones"))));
}
function VerifyScreen({
  nav
}) {
  const [code, setCode] = React.useState(['', '', '', '', '', '']);
  const [error, setError] = React.useState(false);
  const refs = [0, 1, 2, 3, 4, 5].map(() => React.createRef());
  const handleInput = (i, val) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...code];
    next[i] = val;
    setCode(next);
    setError(false);
    if (val && i < 5) refs[i + 1].current?.focus();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#0D1F2D'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 20px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('login'),
    style: {
      background: 'none',
      border: 'none',
      color: '#fff',
      fontSize: 22,
      cursor: 'pointer',
      padding: '4px 8px 4px 0'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#fff'
    }
  }, "Verific\xE1 tu n\xFAmero")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '32px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#8899AA',
      lineHeight: 1.6,
      marginBottom: 36,
      textAlign: 'center'
    }
  }, "Te enviamos un c\xF3digo de 6 d\xEDgitos", /*#__PURE__*/React.createElement("br", null), "al ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "+54 3544 123456"), " v\xEDa WhatsApp"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'center',
      marginBottom: 16
    }
  }, code.map((d, i) => /*#__PURE__*/React.createElement("input", {
    key: i,
    ref: refs[i],
    value: d,
    onChange: e => handleInput(i, e.target.value),
    maxLength: 1,
    style: {
      width: 46,
      height: 58,
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 700,
      background: '#1A2F45',
      border: `2px solid ${error ? '#FF4D4D' : d ? '#00C2B3' : '#2D5F8F'}`,
      borderRadius: 12,
      color: '#fff',
      fontFamily: 'Inter,sans-serif',
      outline: 'none'
    }
  }))), error && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: '#FF4D4D',
      fontSize: 13,
      marginBottom: 12
    }
  }, "C\xF3digo incorrecto. Intent\xE1 de nuevo."), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 13,
      color: '#556677',
      marginBottom: 8
    }
  }, "Reenviar c\xF3digo en ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#8899AA'
    }
  }, "0:28")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 13,
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#00C2B3',
      cursor: 'pointer'
    },
    onClick: () => nav('login')
  }, "\xBFOtro n\xFAmero?")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textAlign: 'center',
      color: '#556677',
      marginBottom: 20
    }
  }, "Ingres\xE1 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#8899AA'
    }
  }, "123456"), " para continuar")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 32px'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      if (code.join('') === '123456') nav('register');else setError(true);
    }
  }, "VERIFICAR")));
}
function RegisterScreen({
  nav
}) {
  const [name, setName] = React.useState('');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 20px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('verify'),
    style: {
      background: 'none',
      border: 'none',
      color: '#0D1F2D',
      fontSize: 22,
      cursor: 'pointer',
      padding: '4px 8px 4px 0'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Registro")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '40px 28px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: '#0D1F2D',
      lineHeight: 1.2
    }
  }, "\xBFC\xF3mo te llam\xE1s?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#888',
      marginBottom: 24
    }
  }, "As\xED te van a ver los conductores"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Nombre",
    style: {
      height: 56,
      borderRadius: 14,
      border: '1.5px solid #E4E9EE',
      padding: '0 16px',
      fontSize: 16,
      fontFamily: 'Inter,sans-serif',
      outline: 'none',
      color: '#0D1F2D'
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Apellido (opcional)",
    style: {
      height: 56,
      borderRadius: 14,
      border: '1.5px solid #E4E9EE',
      padding: '0 16px',
      fontSize: 16,
      fontFamily: 'Inter,sans-serif',
      outline: 'none',
      color: '#0D1F2D'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('permissions')
  }, "CONTINUAR")));
}
function PermissionsScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 32px',
      gap: 20,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 100,
      height: 100,
      borderRadius: '50%',
      background: '#E8F8F6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "48",
    height: "48",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#00C2B3",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.5"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: '#0D1F2D',
      lineHeight: 1.2
    }
  }, "Permit\xED tu ubicaci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: '#555',
      lineHeight: 1.7
    }
  }, "Necesitamos saber d\xF3nde est\xE1s para enviarte un conductor.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), "Tu ubicaci\xF3n solo se usa durante el viaje y no se comparte.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('home')
  }, "PERMITIR UBICACI\xD3N"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('home'),
    style: {
      background: 'none',
      border: 'none',
      color: '#888',
      fontSize: 14,
      cursor: 'pointer',
      padding: '10px'
    }
  }, "Quiz\xE1s despu\xE9s")));
}
Object.assign(window, {
  LoginScreen,
  VerifyScreen,
  RegisterScreen,
  PermissionsScreen,
  LiftyIsotipo
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pasajero/OnboardingScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pasajero/OtherScreens.jsx
try { (() => {
// OtherScreens.jsx — Profile, Trips, Payment, Addresses, NoConnection

function TripsScreen({
  nav
}) {
  // Redirect to the populated history screen
  React.useEffect(() => {
    nav('trips');
  }, []);
  return null;
}
function ProfileScreen({
  nav
}) {
  const [tab, setTab] = React.useState('perfil');
  const handleTab = id => {
    setTab(id);
    if (id === 'inicio') nav('home');
    if (id === 'viajes') nav('trips');
  };
  const items = [{
    icon: '💳',
    label: 'Métodos de pago',
    sub: 'Efectivo · Mercado Pago',
    dest: 'payment'
  }, {
    icon: '⭐',
    label: 'Calificaciones',
    sub: 'Tus conductores calificados',
    dest: null
  }, {
    icon: '📍',
    label: 'Lugares guardados',
    sub: 'Casa, trabajo y favoritos',
    dest: 'addresses'
  }, {
    icon: '🔔',
    label: 'Configuración',
    sub: 'Notificaciones y preferencias',
    dest: null
  }, {
    icon: '🔒',
    label: 'Privacidad y seguridad',
    sub: 'Datos y acceso a la cuenta',
    dest: null
  }, {
    icon: '❓',
    label: 'Ayuda',
    sub: 'Centro de soporte Lifty',
    dest: 'support'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#F4F7FA'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#0D1F2D',
      padding: '24px 20px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: '#00C2B3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 28,
      fontWeight: 700,
      color: '#fff',
      flexShrink: 0
    }
  }, "M"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      color: '#fff'
    }
  }, "Martina"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#8899AA'
    }
  }, "+54 3544 123456")))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      marginTop: -16,
      borderRadius: '16px 16px 0 0',
      background: '#F4F7FA',
      padding: '8px 0'
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => item.dest && nav(item.dest),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      background: '#fff',
      padding: '16px 20px',
      borderBottom: '1px solid #F4F7FA',
      cursor: item.dest ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      background: '#F4F7FA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      flexShrink: 0
    }
  }, item.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: '#0D1F2D'
    }
  }, item.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888',
      marginTop: 2
    }
  }, item.sub)), item.dest && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#BBBBBB',
      fontSize: 18
    }
  }, "\u203A"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('login'),
    style: {
      background: 'none',
      border: 'none',
      color: '#FF4D4D',
      fontSize: 14,
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "Cerrar sesi\xF3n"))), /*#__PURE__*/React.createElement(window.BottomTabBar, {
    active: tab,
    onNavigate: handleTab
  }));
}
function PaymentScreen({
  nav
}) {
  const [selected, setSelected] = React.useState('cash');
  const methods = [{
    id: 'cash',
    icon: '💵',
    label: 'Efectivo',
    sub: 'Pagás al finalizar el viaje'
  }, {
    id: 'mp',
    icon: '💳',
    label: 'Mercado Pago',
    sub: 'Cuenta de Mercado Pago'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('vehicle'),
    style: {
      background: 'none',
      border: 'none',
      color: '#0D1F2D',
      fontSize: 22,
      cursor: 'pointer',
      padding: '4px 8px 4px 0'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "M\xE9todo de pago")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '8px 20px'
    }
  }, methods.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.id,
    onClick: () => setSelected(m.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px',
      borderRadius: 14,
      marginBottom: 10,
      border: `2px solid ${selected === m.id ? '#00C2B3' : '#EEEEEE'}`,
      background: selected === m.id ? '#E8F8F6' : '#fff',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: '#F4F7FA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22,
      flexShrink: 0
    }
  }, m.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, m.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888',
      marginTop: 2
    }
  }, m.sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      border: `2px solid ${selected === m.id ? '#00C2B3' : '#DDD'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, selected === m.id && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: '#00C2B3'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 32px'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('vehicle')
  }, "GUARDAR")));
}
function AddressesScreen({
  nav
}) {
  const [casa, setCasa] = React.useState('Av. San Martín 450');
  const [trabajo, setTrabajo] = React.useState('Shopping Centro, Local 8');
  const places = [{
    icon: '🏠',
    label: 'Tu casa',
    val: casa,
    set: setCasa,
    ph: 'Ingresá tu dirección'
  }, {
    icon: '💼',
    label: 'Tu trabajo',
    val: trabajo,
    set: setTrabajo,
    ph: 'Ingresá tu lugar de trabajo'
  }, {
    icon: '🏛️',
    label: 'Un lugar frecuente',
    val: '',
    set: () => {},
    ph: 'Agregar dirección'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 16px',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('profile'),
    style: {
      background: 'none',
      border: 'none',
      color: '#0D1F2D',
      fontSize: 22,
      cursor: 'pointer',
      padding: '4px 8px 4px 0'
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Configur\xE1 tus direcciones")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '20px 28px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 8
    }
  }, "\uD83D\uDCCD"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#888'
    }
  }, "Para viajes m\xE1s r\xE1pidos")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '0 20px'
    }
  }, places.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: '#F4F7FA',
      borderRadius: 14,
      padding: '14px 16px',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22,
      flexShrink: 0
    }
  }, p.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#888',
      marginBottom: 4
    }
  }, p.label), /*#__PURE__*/React.createElement("input", {
    value: p.val,
    onChange: e => p.set(e.target.value),
    placeholder: p.ph,
    style: {
      width: '100%',
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontSize: 14,
      fontWeight: p.val ? 500 : 400,
      color: p.val ? '#0D1F2D' : '#AAAAAA',
      fontFamily: 'Inter,sans-serif'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#00C2B3',
      fontSize: 16
    }
  }, "\u203A")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px 8px'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('profile')
  }, "GUARDAR DIRECCIONES"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('profile'),
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      color: '#888',
      fontSize: 14,
      cursor: 'pointer',
      padding: '12px'
    }
  }, "Omitir")));
}
function NoConnectionScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#0D1F2D',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 72
    }
  }, "\uD83D\uDCF5"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: '#fff',
      lineHeight: 1.2
    }
  }, "Sin conexi\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#8899AA',
      lineHeight: 1.7
    }
  }, "Parece que no ten\xE9s internet.", /*#__PURE__*/React.createElement("br", null), "Revis\xE1 tu conexi\xF3n e intent\xE1 de nuevo."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('home')
  }, "REINTENTAR"))));
}
Object.assign(window, {
  TripsScreen,
  ProfileScreen,
  PaymentScreen,
  AddressesScreen,
  NoConnectionScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pasajero/OtherScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/pasajero/TripScreens.jsx
try { (() => {
// TripScreens.jsx — Searching, Assigned, InProgress, Reminder, Finished, Cancel, Cancelled

function SearchingScreen({
  nav
}) {
  const [seconds, setSeconds] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement(MapBG, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '43%',
      left: '38%',
      fontSize: 28,
      animation: 'car-move 2s ease-in-out infinite'
    }
  }, "\uD83D\uDE97")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '24px 24px 0 0',
      marginTop: -20,
      padding: '24px 20px',
      boxShadow: '0 -4px 24px rgba(13,31,45,.10)'
    }
  }, /*#__PURE__*/React.createElement(Handle, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\uD83D\uDE97"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Lifty Standard"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#888'
    }
  }, "2-4 min \xB7 Tiempo estimado de espera"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: '#F4F7FA',
      borderRadius: 12,
      padding: '14px',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      border: '3px solid #00C2B3',
      borderTopColor: 'transparent',
      animation: 'lifty-spin 0.7s linear infinite',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: '#555'
    }
  }, "Conectando con el conductor m\xE1s cercano...")), seconds > 8 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFF8E8',
      borderRadius: 12,
      padding: '12px 14px',
      marginBottom: 14,
      fontSize: 13,
      color: '#92610A',
      lineHeight: 1.5,
      animation: 'fade-in 400ms ease'
    }
  }, "\uD83D\uDCA1 Todav\xEDa estamos buscando. Pod\xE9s esperar un poco m\xE1s o cancelar sin costo."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#888',
      lineHeight: 1.5,
      marginBottom: 16
    }
  }, "Estamos buscando conductores disponibles cerca tuyo."), /*#__PURE__*/React.createElement(Btn, {
    variant: "outline",
    destructive: true,
    onClick: () => nav('cancel')
  }, "Cancelar viaje"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }))));
}
function AssignedScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement(MapBG, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 16,
      right: 16,
      background: 'rgba(13,31,45,.85)',
      borderRadius: 12,
      padding: '8px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#00C2B3',
      animation: 'pulse-ring 1.5s infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: '#fff'
    }
  }, "Carlos M. en camino"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '24px 24px 0 0',
      marginTop: -20,
      padding: '0 20px',
      boxShadow: '0 -4px 24px rgba(13,31,45,.10)'
    }
  }, /*#__PURE__*/React.createElement(Handle, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 42,
      fontWeight: 800,
      color: '#00C2B3',
      lineHeight: 1
    }
  }, "3 min"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#888',
      marginTop: 2
    }
  }, "Tu conductor llega en")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px',
      background: '#F4F7FA',
      borderRadius: 16,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: '#00C2B3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 22,
      fontWeight: 700,
      color: '#fff',
      flexShrink: 0
    }
  }, "C"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: '#0D1F2D'
    }
  }, "Carlos M."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#888'
    }
  }, "Chevrolet Prisma \xB7 ABC 123 \xB7 \u2B50 4.8"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
      fontSize: 13,
      color: '#555'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#00C2B3',
      fontWeight: 600
    }
  }, "Av. San Mart\xEDn 450"), /*#__PURE__*/React.createElement("span", null, "\u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#F5A623',
      fontWeight: 600
    }
  }, "Terminal de \xD3mnibus")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      background: '#FFF8E8',
      borderRadius: 10,
      padding: '10px 12px',
      marginBottom: 14,
      fontSize: 12,
      color: '#92610A',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u23F1\uFE0F"), /*#__PURE__*/React.createElement("span", null, "El conductor te espera hasta 5 min. Pasado ese tiempo se puede aplicar un cargo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 12
    }
  }, [{
    icon: '📞',
    label: 'Llamar'
  }, {
    icon: '💬',
    label: 'Mensaje'
  }, {
    icon: '🔗',
    label: 'Compartir'
  }].map(a => /*#__PURE__*/React.createElement("div", {
    key: a.label,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      background: '#F4F7FA',
      borderRadius: 12,
      padding: '12px 0',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, a.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: '#0D1F2D'
    }
  }, a.label)))), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('inprogress')
  }, "EL AUTO LLEG\xD3 \u2014 ESTOY LISTO"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('cancel'),
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      color: '#888',
      fontSize: 13,
      cursor: 'pointer',
      padding: '12px'
    }
  }, "Cancelar viaje"))));
}
function InProgressScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: '#00C2B3',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: '60%',
      background: 'rgba(255,255,255,.3)',
      borderRadius: '0 4px 4px 0'
    }
  })), /*#__PURE__*/React.createElement(MapBG, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'rgba(13,31,45,.9)',
      borderRadius: 9999,
      padding: '6px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: '#00C2B3'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#fff',
      fontWeight: 500
    }
  }, "Viaje en curso"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '24px 24px 0 0',
      marginTop: -20,
      padding: '0 20px',
      boxShadow: '0 -4px 24px rgba(13,31,45,.10)'
    }
  }, /*#__PURE__*/React.createElement(Handle, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: '#00C2B3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      color: '#fff',
      fontSize: 18,
      flexShrink: 0
    }
  }, "C"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Carlos M. \xB7 Chevrolet Prisma"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888'
    }
  }, "\u2B50 4.9 \xB7 ABC 123")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: '#0D1F2D',
      lineHeight: 1
    }
  }, "5 min"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#888'
    }
  }, "3.2 km"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 14
    }
  }, [{
    icon: '📞',
    label: 'Llamar'
  }, {
    icon: '💬',
    label: 'Mensaje'
  }, {
    icon: '🔴',
    label: 'SOS',
    sos: true
  }].map(a => /*#__PURE__*/React.createElement("div", {
    key: a.label,
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      background: a.sos ? '#FFEEEE' : '#F4F7FA',
      borderRadius: 12,
      padding: '12px 0',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, a.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      color: a.sos ? '#FF4D4D' : '#0D1F2D'
    }
  }, a.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: '#F4F7FA',
      borderRadius: 12,
      padding: '12px 14px',
      cursor: 'pointer'
    },
    onClick: () => nav('reminder')
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\uD83D\uDD17"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: '#0D1F2D',
      flex: 1
    }
  }, "Compartir viaje en vivo"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#00C2B3'
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 12
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('reminder')
  }, "VER DESTINO \xB7 Terminal de \xD3mnibus"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }))));
}
function ReminderScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement(MapBG, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#F5A623',
      borderRadius: 9999,
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "\uD83D\uDCCD"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#fff',
      fontWeight: 600
    }
  }, "Llegando a tu destino"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '24px 24px 0 0',
      marginTop: -20,
      padding: '0 20px',
      boxShadow: '0 -4px 24px rgba(13,31,45,.10)'
    }
  }, /*#__PURE__*/React.createElement(Handle, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: '#00C2B3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      color: '#fff',
      fontSize: 16
    }
  }, "C"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Carlos M."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888'
    }
  }, "\uD83D\uDD50 1 min \xB7 llegando"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#FFF8E8',
      borderRadius: 14,
      padding: '14px 16px',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, "\uD83C\uDF92"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: '#92610A'
    }
  }, "\xBFNo olvidaste nada?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#B07A20'
    }
  }, "Revis\xE1 antes de bajar"))), ['Bolso o mochila', 'Celular y auriculares', 'Documentos y billetera', 'Llaves'].map(item => /*#__PURE__*/React.createElement("div", {
    key: item,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 4,
      border: '1.5px solid #F5A623',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#92610A'
    }
  }, item)))), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('finished')
  }, "YA LLEGAMOS \u2014 CONTINUAR"), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      background: '#FFEEEE',
      border: 'none',
      color: '#FF4D4D',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.08em',
      borderRadius: 9999,
      height: 48,
      cursor: 'pointer',
      marginTop: 10,
      textTransform: 'uppercase'
    }
  }, "\uD83C\uDD98 REPORTAR EMERGENCIA"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }))));
}
function FinishedScreen({
  nav
}) {
  const [stars, setStars] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SBar, {
    dark: false
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '28px 28px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 56,
      animation: 'bounce-in 600ms ease'
    }
  }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      color: '#0D1F2D',
      marginTop: 8,
      lineHeight: 1.2
    }
  }, "\xA1Llegaste!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: '#888',
      marginTop: 4
    }
  }, "Terminal de \xD3mnibus")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '20px 20px 0',
      background: '#F4F7FA',
      borderRadius: 16,
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: '#00C2B3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 700,
      color: '#fff',
      fontSize: 18
    }
  }, "C"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: '#0D1F2D'
    }
  }, "Carlos M."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#888'
    }
  }, "Chevrolet Prisma")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: '#0D1F2D'
    }
  }, "$2.500")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: '#E4E9EE',
      marginBottom: 12
    }
  }), [['Bajada de bandera', '$2.000'], ['Distancia (16 cdas)', '$500']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: '#888',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", null, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 15,
      fontWeight: 700,
      color: '#0D1F2D',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", null, "$2.500"))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '16px 20px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#0D1F2D',
      marginBottom: 4
    }
  }, "Calific\xE1 tu viaje con Carlos"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#888',
      marginBottom: 14
    }
  }, "Toc\xE1 para calificar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginBottom: 16
    }
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement("button", {
    key: n,
    onClick: () => setStars(n),
    style: {
      width: 44,
      height: 44,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontSize: 36,
      color: n <= stars ? '#F5A623' : '#E4E9EE',
      padding: 0,
      transition: 'color 100ms'
    }
  }, "\u2605"))), stars > 0 && stars <= 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#FF4D4D',
      marginBottom: 12,
      animation: 'fade-in 300ms ease'
    }
  }, "\xBFQuer\xE9s reportar alg\xFAn problema?")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px 32px'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => stars > 0 && stars <= 2 ? nav('badrating') : nav('receipt')
  }, stars > 0 ? 'CONFIRMAR CALIFICACIÓN' : 'CONTINUAR')));
}
function CancelScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'rgba(13,31,45,.6)',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '24px 24px 0 0',
      padding: '0 20px'
    }
  }, /*#__PURE__*/React.createElement(Handle, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40
    }
  }, "\uD83E\uDD14"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: '#0D1F2D',
      marginTop: 8,
      marginBottom: 6
    }
  }, "\xBFSeguro que quer\xE9s cancelar?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      background: '#F4F7FA',
      borderRadius: 12,
      padding: '12px 14px',
      marginBottom: 12,
      marginTop: 16,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#555',
      marginBottom: 4
    }
  }, "\uD83D\uDE97 Lifty Standard \xB7 $2.000"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#555'
    }
  }, "\uD83D\uDCCD Terminal de \xD3mnibus"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u2705"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#2E7D32',
      fontWeight: 500
    }
  }, "Cancelaci\xF3n sin costo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "outline",
    full: false,
    style: {
      flex: 1
    },
    onClick: () => nav('searching')
  }, "Seguir con el viaje"), /*#__PURE__*/React.createElement(Btn, {
    destructive: true,
    full: false,
    style: {
      flex: 1
    },
    onClick: () => nav('cancelled')
  }, "Cancelar viaje")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }))));
}
function CancelledScreen({
  nav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      background: '#F4F7FA',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 40,
      marginBottom: 20
    }
  }, "\uD83D\uDC4B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: '#0D1F2D',
      marginBottom: 8,
      textAlign: 'center'
    }
  }, "Viaje cancelado"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: '#888',
      textAlign: 'center',
      lineHeight: 1.6,
      marginBottom: 12
    }
  }, "No te preocupes, no se aplic\xF3 ning\xFAn cargo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      background: '#F4F7FA',
      borderRadius: 12,
      padding: '12px 16px',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\uD83D\uDCA1"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#555'
    }
  }, "\xBFNecesit\xE1s pedir otro viaje?")), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => nav('home')
  }, "PEDIR OTRO VIAJE"), /*#__PURE__*/React.createElement("button", {
    onClick: () => nav('home'),
    style: {
      background: 'none',
      border: 'none',
      color: '#888',
      fontSize: 14,
      cursor: 'pointer',
      padding: '12px',
      marginTop: 4
    }
  }, "Volver al inicio"));
}
Object.assign(window, {
  SearchingScreen,
  AssignedScreen,
  InProgressScreen,
  ReminderScreen,
  FinishedScreen,
  CancelScreen,
  CancelledScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/pasajero/TripScreens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.StatusBar = __ds_scope.StatusBar;

__ds_ns.TabBar = __ds_scope.TabBar;

})();
