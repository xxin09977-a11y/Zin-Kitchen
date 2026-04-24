export interface Theme {
  id: string;
  name: string;
  icon: string;
  bg: string;
  card: string;
  cardBorder: string;
  cardShadow: string;
  headerBg: string;
  headerBorder: string;
  text: string;
  subtext: string;
  label: string;
  pill: string;
  pillBorder: string;
  stat: string;
  statBorder: string;
  input: string;
  inputBorder: string;
  track: string;
  accent: string;
}

export const THEMES: Theme[] = [
  { id: 'dark', name: "Dark", icon: "🌙", bg: "linear-gradient(160deg,#0a0a1a 0%,#12082a 60%,#080f1e 100%)", card: "rgba(255,255,255,0.07)", cardBorder: "rgba(255,255,255,0.13)", cardShadow: "0 8px 32px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.1)", headerBg: "rgba(10,10,26,0.96)", headerBorder: "rgba(255,255,255,0.07)", text: "#f0f0ff", subtext: "rgba(200,200,255,0.5)", label: "rgba(180,180,220,0.4)", pill: "rgba(255,255,255,0.07)", pillBorder: "rgba(255,255,255,0.1)", stat: "rgba(255,255,255,0.06)", statBorder: "rgba(255,255,255,0.08)", input: "rgba(255,255,255,0.07)", inputBorder: "rgba(255,255,255,0.15)", track: "rgba(255,255,255,0.08)", accent: "#7c3aed" },
  { id: 'light', name: "Light", icon: "☀️", bg: "#f9fafb", card: "#ffffff", cardBorder: "rgba(0,0,0,0.08)", cardShadow: "0 4px 16px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)", headerBg: "rgba(255,255,255,0.95)", headerBorder: "rgba(0,0,0,0.08)", text: "#111827", subtext: "#6b7280", label: "#9ca3af", pill: "rgba(0,0,0,0.04)", pillBorder: "rgba(0,0,0,0.08)", stat: "#f3f4f6", statBorder: "rgba(0,0,0,0.06)", input: "#ffffff", inputBorder: "rgba(0,0,0,0.15)", track: "rgba(0,0,0,0.06)", accent: "#7c3aed" },
];

export interface AppSettings {
  highContrast: boolean;
  fontSize: 'normal' | 'large' | 'extra-large';
  themeId: string;
  glassmorphism: boolean;
}

export const FONT_SIZES = [
  { id: 'normal', name: 'Normal', scale: '16px' },
  { id: 'large', name: 'Large', scale: '19px' },
  { id: 'extra-large', name: 'Premium', scale: '22px' }
];

export const DISPLAY_UNIT_MAP: Record<string, string> = {
  g: 'grams',
  kg: 'kilograms',
  ml: 'milliliters',
  L: 'liters',
  tsp: 'teaspoons',
  tbsp: 'tablespoons',
  cup: 'cups',
  piece: 'pieces',
  pinch: 'pinches',
  bunch: 'bunches'
};
