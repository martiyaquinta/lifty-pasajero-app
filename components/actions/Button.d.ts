/**
 * @startingPoint section="Actions" subtitle="Primary CTA pill button — full-width or inline" viewport="700x200"
 */
export interface ButtonProps {
  /** Button label */
  children: React.ReactNode;
  /** Visual style */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'dark';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Makes button fill its container width */
  fullWidth?: boolean;
  /** Disables the button */
  disabled?: boolean;
  /** Shows a spinner and disables the button */
  loading?: boolean;
  /** Switches to red destructive palette */
  destructive?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional inline styles */
  style?: React.CSSProperties;
}
