export interface BadgeProps {
  children: React.ReactNode;
  /** Color variant */
  variant?: 'default' | 'brand' | 'success' | 'error' | 'warning' | 'info' | 'dark' | 'navy' | 'solid';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Renders a leading dot in currentColor */
  dot?: boolean;
  style?: React.CSSProperties;
}
