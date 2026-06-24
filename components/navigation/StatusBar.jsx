import React from 'react';

/**
 * StatusBar — Android-style status bar (dark and light variants).
 */
export function StatusBar({ variant = 'light', time = '9:41' }) {
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
      fontFamily: "'Inter', system-ui, sans-serif",
    },
  },
    React.createElement('span', { style: { fontSize: '15px', fontWeight: 600, color: fg } }, time),
    React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '5px' } },
      // Signal bars
      React.createElement('svg', { width: 16, height: 12, viewBox: '0 0 16 12' },
        [3,5,7,9].map((h, i) =>
          React.createElement('rect', { key: i, x: i*4, y: 12-h, width: 3, height: h, rx: 1, fill: i < 3 ? fg : `${fg}44` })
        )
      ),
      // Wifi
      React.createElement('svg', { width: 16, height: 12, viewBox: '0 0 16 12', fill: 'none' },
        React.createElement('path', { d: 'M8 10l1-1.5', stroke: fg, strokeWidth: 1.5, strokeLinecap: 'round' }),
        React.createElement('path', { d: 'M5 7.5A4 4 0 0111 7.5', stroke: fg, strokeWidth: 1.5, strokeLinecap: 'round', fill: 'none' }),
        React.createElement('path', { d: 'M2 5A8 8 0 0114 5', stroke: fg, strokeWidth: 1.5, strokeLinecap: 'round', fill: 'none' })
      ),
      // Battery
      React.createElement('svg', { width: 25, height: 12, viewBox: '0 0 25 12' },
        React.createElement('rect', { x: 0.5, y: 0.5, width: 21, height: 11, rx: 3, stroke: fg, strokeOpacity: 0.35, fill: 'none' }),
        React.createElement('rect', { x: 2, y: 2, width: 15, height: 8, rx: 1.5, fill: fg }),
        React.createElement('path', { d: 'M23 4.5v3a1.5 1.5 0 000-3z', fill: fg, fillOpacity: 0.4 })
      )
    )
  );
}
