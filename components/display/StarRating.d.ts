export interface StarRatingProps {
  /** Current rating value (1–5) */
  value?: number;
  /** Called with new value when user picks a star */
  onChange?: (value: number) => void;
  /** Star size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Disables interaction, renders read-only */
  readonly?: boolean;
  style?: React.CSSProperties;
}
