import { DynamicColorIOS, Platform, type ColorValue } from 'react-native';

import type { Phase } from '@/domain/types';

/**
 * Design tokens for "1c Intim" (docs/design/README.md). Colours adapt to light/dark through
 * DynamicColorIOS; elsewhere the light value is used. The whole UI is toned by today's phase:
 * `accent`, `soft` and `tint` come from `usePhaseTheme()` in `src/ui/theme.tsx`, not from here.
 */
function dyn(light: string, dark: string): ColorValue {
  return Platform.OS === 'ios' ? DynamicColorIOS({ light, dark }) : light;
}

export const palette = {
  light: {
    bg: '#EEE8EB',
    surface: '#F8F4F6',
    surface2: '#E5DDE1',
    text: '#1D161B',
    text2: '#665A61',
    text3: '#9A8E94',
    hair: 'rgba(29,22,27,0.12)',
    onAccent: '#FFFFFF',
  },
  dark: {
    bg: '#0D0A0E',
    surface: '#161218',
    surface2: '#211B24',
    text: '#F2EAEE',
    text2: '#A3969E',
    text3: '#6F636A',
    hair: 'rgba(255,255,255,0.09)',
    onAccent: '#140F13',
  },
} as const;

/** Plain hex phase colours, usable in SVG, the widget and precomputed mixes. */
export const phaseHex: Record<Phase, { light: string; dark: string }> = {
  menstrual: { light: '#B04D59', dark: '#EC8A92' },
  follicular: { light: '#218373', dark: '#6BC4B3' },
  ovulation: { light: '#AA732B', dark: '#E7B369' },
  luteal: { light: '#725CA9', dark: '#AA95E8' },
};

/** `accent` mixed 20 % into `surface`: action boxes, badges, the "done" state. */
export const phaseSoftHex: Record<Phase, { light: string; dark: string }> = {
  menstrual: { light: '#EAD3D7', dark: '#412A30' },
  follicular: { light: '#CDDDDC', dark: '#273637' },
  ovulation: { light: '#E8DACD', dark: '#403228' },
  luteal: { light: '#DDD6E7', dark: '#342C42' },
};

/** Phase colour at 26 % opacity: the fertile window in the calendar. */
export const phaseTintHex: Record<Phase, { light: string; dark: string }> = {
  menstrual: { light: 'rgba(176,77,89,0.26)', dark: 'rgba(236,138,146,0.26)' },
  follicular: { light: 'rgba(33,131,115,0.26)', dark: 'rgba(107,196,179,0.26)' },
  ovulation: { light: 'rgba(170,115,43,0.26)', dark: 'rgba(231,179,105,0.26)' },
  luteal: { light: 'rgba(114,92,169,0.26)', dark: 'rgba(170,149,232,0.26)' },
};

export const phaseColor: Record<Phase, ColorValue> = {
  menstrual: dyn(phaseHex.menstrual.light, phaseHex.menstrual.dark),
  follicular: dyn(phaseHex.follicular.light, phaseHex.follicular.dark),
  ovulation: dyn(phaseHex.ovulation.light, phaseHex.ovulation.dark),
  luteal: dyn(phaseHex.luteal.light, phaseHex.luteal.dark),
};

export const phaseSoft: Record<Phase, ColorValue> = {
  menstrual: dyn(phaseSoftHex.menstrual.light, phaseSoftHex.menstrual.dark),
  follicular: dyn(phaseSoftHex.follicular.light, phaseSoftHex.follicular.dark),
  ovulation: dyn(phaseSoftHex.ovulation.light, phaseSoftHex.ovulation.dark),
  luteal: dyn(phaseSoftHex.luteal.light, phaseSoftHex.luteal.dark),
};

export const phaseTint: Record<Phase, ColorValue> = {
  menstrual: dyn(phaseTintHex.menstrual.light, phaseTintHex.menstrual.dark),
  follicular: dyn(phaseTintHex.follicular.light, phaseTintHex.follicular.dark),
  ovulation: dyn(phaseTintHex.ovulation.light, phaseTintHex.ovulation.dark),
  luteal: dyn(phaseTintHex.luteal.light, phaseTintHex.luteal.dark),
};

export const colors = {
  background: dyn(palette.light.bg, palette.dark.bg),
  card: dyn(palette.light.surface, palette.dark.surface),
  cardSecondary: dyn(palette.light.surface2, palette.dark.surface2),
  label: dyn(palette.light.text, palette.dark.text),
  secondaryLabel: dyn(palette.light.text2, palette.dark.text2),
  tertiaryLabel: dyn(palette.light.text3, palette.dark.text3),
  separator: dyn(palette.light.hair, palette.dark.hair),
  fill: dyn(palette.light.surface2, palette.dark.surface2),
  onAccent: dyn(palette.light.onAccent, palette.dark.onAccent),
  /**
   * Static fallback accent (the menstrual rose) for style sheets that cannot read the phase
   * theme. Components use `usePhaseTheme().accent` so the UI follows today's phase.
   */
  tint: dyn(phaseHex.menstrual.light, phaseHex.menstrual.dark),
  red: dyn(phaseHex.menstrual.light, phaseHex.menstrual.dark),
  green: dyn(phaseHex.follicular.light, phaseHex.follicular.dark),
  orange: dyn(phaseHex.ovulation.light, phaseHex.ovulation.dark),
  purple: dyn(phaseHex.luteal.light, phaseHex.luteal.dark),
  white: '#FFFFFF',
} as const;

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
  /** Between sections (docs/design/README.md). */
  section: 30,
  /** Section label to its card. */
  label: 10,
  /** Card padding. */
  card: 18,
} as const;

export const radius = {
  card: 18,
  chip: 999,
  cell: 12,
  field: 14,
  sheet: 28,
} as const;

/** Manrope, loaded in the root layout from @expo-google-fonts/manrope. */
export const fonts = {
  light: 'Manrope_300Light',
  regular: 'Manrope_400Regular',
  medium: 'Manrope_500Medium',
  semibold: 'Manrope_600SemiBold',
  bold: 'Manrope_700Bold',
  extrabold: 'Manrope_800ExtraBold',
} as const;

/** Font family for a weight, so one place maps weights to the bundled Manrope files. */
export function fontFor(weight: 300 | 400 | 500 | 600 | 700 | 800): string {
  return {
    300: fonts.light,
    400: fonts.regular,
    500: fonts.medium,
    600: fonts.semibold,
    700: fonts.bold,
    800: fonts.extrabold,
  }[weight];
}
