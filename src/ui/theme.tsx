/**
 * The phase theme: the whole UI is toned by today's phase (docs/design/README.md). `accent` is
 * the phase colour, `soft` is accent mixed 20 % into the surface, `tint` is accent at 26 %.
 * Values are precomputed hex per phase and appearance; nothing is mixed on the device.
 */
import { createContext, useContext, useMemo, type PropsWithChildren } from 'react';
import { useColorScheme, type ColorValue } from 'react-native';

import type { Phase } from '@/domain/types';
import { useCycle } from '@/hooks/use-cycle';
import {
  colors,
  palette,
  phaseColor,
  phaseHex,
  phaseSoft,
  phaseSoftHex,
  phaseTint,
  phaseTintHex,
} from '@/ui/colors';

export interface PhaseTheme {
  phase: Phase;
  accent: ColorValue;
  soft: ColorValue;
  tint: ColorValue;
  onAccent: ColorValue;
  /** Plain hex for SVG and gradients, already resolved for the current appearance. */
  accentHex: string;
  softHex: string;
  tintHex: string;
  dark: boolean;
}

export function themeFor(phase: Phase, dark: boolean): PhaseTheme {
  const mode = dark ? 'dark' : 'light';
  return {
    phase,
    accent: phaseColor[phase],
    soft: phaseSoft[phase],
    tint: phaseTint[phase],
    onAccent: colors.onAccent,
    accentHex: phaseHex[phase][mode],
    softHex: phaseSoftHex[phase][mode],
    tintHex: phaseTintHex[phase][mode],
    dark,
  };
}

const ThemeContext = createContext<PhaseTheme>(themeFor('menstrual', false));

/** Provides today's phase theme; without cycle data the menstrual rose is used. */
export function PhaseThemeProvider({ children }: PropsWithChildren) {
  const { snapshot } = useCycle();
  const dark = useColorScheme() === 'dark';
  const phase = snapshot.today?.phase ?? 'menstrual';
  const value = useMemo(() => themeFor(phase, dark), [phase, dark]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function usePhaseTheme(): PhaseTheme {
  return useContext(ThemeContext);
}

/** Resolved surface and text hex for the current appearance, for SVG and gradients. */
export function useSurfaceHex() {
  const dark = useColorScheme() === 'dark';
  return dark ? palette.dark : palette.light;
}
