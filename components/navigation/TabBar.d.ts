export interface TabBarProps {
  /** Currently active tab id */
  active?: 'inicio' | 'viajes' | 'perfil';
  /** Called with the tab id when user taps a tab */
  onNavigate?: (id: string) => void;
  style?: React.CSSProperties;
}
