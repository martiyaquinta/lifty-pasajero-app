import React from 'react';

/**
 * StarRating — 1–5 star rating picker or display.
 */
export function StarRating({
  value = 0,
  onChange,
  size = 'md',
  readonly = false,
  style,
}) {
  const [hovered, setHovered] = React.useState(0);

  const sizes = { sm: 20, md: 32, lg: 44 };
  const starSize = sizes[size] || sizes.md;

  return React.createElement('div', {
    style: { display: 'flex', gap: '4px', ...style },
  },
    [1, 2, 3, 4, 5].map(n =>
      React.createElement('button', {
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
          transition: 'color 100ms ease',
        },
      }, '★')
    )
  );
}
