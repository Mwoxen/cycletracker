import { Platform, PlatformColor, type ColorValue } from 'react-native';

import type { Phase } from '@/domain/types';

/** iOS system colors (adapt to light/dark automatically) with plain fallbacks elsewhere. */
function sys(ios: string, fallback: string): ColorValue {
  return Platform.OS === 'ios' ? PlatformColor(ios) : fallback;
}

export const colors = {
  background: sys('systemGroupedBackground', '#f2f2f7'),
  card: sys('secondarySystemGroupedBackground', '#ffffff'),
  cardSecondary: sys('tertiarySystemGroupedBackground', '#f2f2f7'),
  label: sys('label', '#000000'),
  secondaryLabel: sys('secondaryLabel', '#6d6d72'),
  tertiaryLabel: sys('tertiaryLabel', '#a0a0a5'),
  separator: sys('separator', '#c6c6c8'),
  fill: sys('tertiarySystemFill', '#e5e5ea'),
  tint: sys('systemBlue', '#007aff'),
  red: sys('systemRed', '#ff3b30'),
  green: sys('systemGreen', '#34c759'),
  orange: sys('systemOrange', '#ff9500'),
  purple: sys('systemPurple', '#af52de'),
  indigo: sys('systemIndigo', '#5856d6'),
  pink: sys('systemPink', '#ff2d55'),
  teal: sys('systemTeal', '#30b0c7'),
  white: '#ffffff',
} as const;

export const phaseColor: Record<Phase, ColorValue> = {
  menstrual: colors.red,
  follicular: colors.green,
  ovulation: colors.orange,
  luteal: colors.indigo,
};

/** Soft tints used for calendar cells; plain hex so they can carry alpha. */
export const phaseTint: Record<Phase, string> = {
  menstrual: 'rgba(255,59,48,0.18)',
  follicular: 'rgba(52,199,89,0.16)',
  ovulation: 'rgba(255,149,0,0.22)',
  luteal: 'rgba(88,86,214,0.16)',
};

export const phaseSymbol: Record<Phase, string> = {
  menstrual: 'drop.fill',
  follicular: 'leaf.fill',
  ovulation: 'sun.max.fill',
  luteal: 'moon.fill',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radius = {
  card: 12,
  chip: 999,
} as const;
