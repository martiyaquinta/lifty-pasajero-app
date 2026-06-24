export interface AvatarProps {
  /** User's name — first letter used as initial, hue derived from name */
  name?: string;
  /** Image URL — overrides the initial */
  src?: string;
  /** Size preset */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Visual variant (reserved for future ring/status styles) */
  variant?: 'default';
  style?: React.CSSProperties;
}
