export interface InputProps {
  /** Field label (rendered above the input) */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Controlled value */
  value?: string;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Leading element (e.g. country flag + prefix) */
  prefix?: React.ReactNode;
  /** Trailing element */
  suffix?: React.ReactNode;
  /** Error message — turns field border red */
  error?: string;
  /** Helper text shown below the field */
  hint?: string;
  /** 'light' for white screens, 'dark' for navy screens */
  surface?: 'light' | 'dark';
  /** Input type */
  type?: string;
  /** Disables the field */
  disabled?: boolean;
}
