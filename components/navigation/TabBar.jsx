import React from 'react';

/**
 * TabBar — Bottom navigation bar with Inicio / Mis Viajes / Perfil.
 */
export function TabBar({
  active = 'inicio',
  onNavigate,
  style,
}) {
  const tabs = [
    { id: 'inicio',    label: 'Inicio',    icon: HomeIcon },
    { id: 'viajes',   label: 'Mis Viajes', icon: ClockIcon },
    { id: 'perfil',   label: 'Perfil',     icon: PersonIcon },
  ];

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
      ...style,
    },
  },
    tabs.map(tab =>
      React.createElement('button', {
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
          minWidth: '60px',
        },
      },
        React.createElement(tab.icon, { active: active === tab.id }),
        React.createElement('span', {
          style: {
            fontSize: '11px',
            fontWeight: active === tab.id ? 600 : 400,
            lineHeight: 1,
          },
        }, tab.label)
      )
    )
  );
}

function HomeIcon({ active }) {
  return React.createElement('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('path', { d: 'M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z' }),
    React.createElement('path', { d: 'M9 21V12h6v9' })
  );
}

function ClockIcon({ active }) {
  return React.createElement('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('circle', { cx: 12, cy: 12, r: 9 }),
    React.createElement('path', { d: 'M12 7v5l3 3' })
  );
}

function PersonIcon({ active }) {
  return React.createElement('svg', { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' },
    React.createElement('circle', { cx: 12, cy: 8, r: 4 }),
    React.createElement('path', { d: 'M4 20c0-4 3.6-7 8-7s8 3 8 7' })
  );
}
