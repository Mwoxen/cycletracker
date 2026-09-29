import { DynamicColorIOS, Platform, type ColorValue } from 'react-native';

import type { Phase } from '@/domain/types';

/**
 * Warm, calm palette. Colors adapt to light/dark automatically on iOS through
 * DynamicColorIOS; elsewhere the light value is used.
 */
function dyn(light: string, dark: string): ColorValue {
  return Platform.OS === 'ios' ? DynamicColorIOS({ light, dark }) : light;
}

export const palette = {
  light: {
    background: '#FBF7F2',
    card: '#FFFFFF',
    cardSecondary: '#F5EDE6',
    label: '#2A211D',
    secondaryLabel: '#7A6A63',
    tertiaryLabel: '#A99A93',
    separator: '#E8DDD5',
    fill: '#EFE5DD',
    tint: '#C4655A',
    readingLede: '#5A4C46',
  },
  dark: {
    background: '#161311',
    card: '#221D1A',
    cardSecondary: '#2C2521',
    label: '#F4EDE8',
    secondaryLabel: '#B7A79F',
    tertiaryLabel: '#7E716B',
    separator: '#3A302B',
    fill: '#352C27',
    tint: '#E08A7E',
    readingLede: '#CFC1BA',
  },
} as const;

export const colors = {
  background: dyn(palette.light.background, palette.dark.background),
  card: dyn(palette.light.card, palette.dark.card),
  cardSecondary: dyn(palette.light.cardSecondary, palette.dark.cardSecondary),
  label: dyn(palette.light.label, palette.dark.label),
  secondaryLabel: dyn(palette.light.secondaryLabel, palette.dark.secondaryLabel),
  tertiaryLabel: dyn(palette.light.tertiaryLabel, palette.dark.tertiaryLabel),
  separator: dyn(palette.light.separator, palette.dark.separator),
  fill: dyn(palette.light.fill, palette.dark.fill),
  tint: dyn(palette.light.tint, palette.dark.tint),
  /** Warm grey for the opening paragraph of a long read. */
  readingLede: dyn(palette.light.readingLede, palette.dark.readingLede),
  red: dyn('#D96C6C', '#E58787'),
  green: dyn('#6F9A6A', '#8DB887'),
  orange: dyn('#D9994A', '#E7B06A'),
  purple: dyn('#8C7AA6', '#A896C2'),
  indigo: dyn('#8C7AA6', '#A896C2'),
  pink: dyn('#C4655A', '#E08A7E'),
  teal: dyn('#6E9E9A', '#8CBCB8'),
  white: '#FFFFFF',
} as const;

/** Plain hex phase colors, usable in SVG, gradients and the widget. */
export const phaseHex: Record<Phase, { light: string; dark: string }> = {
  menstrual: { light: '#D96C6C', dark: '#E58787' },
  follicular: { light: '#7FA37A', dark: '#97BD92' },
  ovulation: { light: '#E0A458', dark: '#EAB878' },
  luteal: { light: '#8C7AA6', dark: '#A896C2' },
};

export const phaseColor: Record<Phase, ColorValue> = {
  menstrual: dyn(phaseHex.menstrual.light, phaseHex.menstrual.dark),
  follicular: dyn(phaseHex.follicular.light, phaseHex.follicular.dark),
  ovulation: dyn(phaseHex.ovulation.light, phaseHex.ovulation.dark),
  luteal: dyn(phaseHex.luteal.light, phaseHex.luteal.dark),
};

/** Soft tints used for calendar cells and card backgrounds. */
export const phaseTint: Record<Phase, ColorValue> = {
  menstrual: dyn('rgba(217,108,108,0.20)', 'rgba(229,135,135,0.26)'),
  follicular: dyn('rgba(127,163,122,0.20)', 'rgba(151,189,146,0.26)'),
  ovulation: dyn('rgba(224,164,88,0.24)', 'rgba(234,184,120,0.28)'),
  luteal: dyn('rgba(140,122,166,0.20)', 'rgba(168,150,194,0.26)'),
};

/** CSS gradient strings for the phase card, light and dark. */
export const phaseGradient: Record<Phase, { light: string; dark: string }> = {
  menstrual: {
    light: 'linear-gradient(160deg, #FBE3E1, #F3C4C0)',
    dark: 'linear-gradient(160deg, #3A2426, #4A2C2E)',
  },
  follicular: {
    light: 'linear-gradient(160deg, #E6F0E1, #CFE0C8)',
    dark: 'linear-gradient(160deg, #24312A, #2C3D33)',
  },
  ovulation: {
    light: 'linear-gradient(160deg, #FCEBD6, #F6D6A9)',
    dark: 'linear-gradient(160deg, #3D2F1F, #4C3A24)',
  },
  luteal: {
    light: 'linear-gradient(160deg, #ECE6F3, #D9CFE6)',
    dark: 'linear-gradient(160deg, #2E2838, #3A3247)',
  },
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
  card: 16,
  chip: 999,
} as const;

export const fonts = Platform.select({
  ios: { rounded: 'ui-rounded' as const, serif: 'ui-serif' as const, sans: undefined },
  default: { rounded: undefined, serif: undefined, sans: undefined },
});
