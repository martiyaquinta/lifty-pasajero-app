export interface CardProps {
  children: React.ReactNode;
  /** Visual surface variant */
  variant?: 'default' | 'subtle' | 'dark' | 'sheet';
  /** Internal padding preset */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  /** Border radius preset */
  radius?: 'sm' | 'md' | 'lg' | 'xl' | 'full' | 'sheet';
  /** Apply drop shadow */
  shadow?: boolean;
  /** Makes the card clickable */
  onClick?: () => void;
  style?: React.CSSProperties;
}
