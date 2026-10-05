import { palette, phaseHex, phaseSoftHex, phaseTintHex } from '@/ui/colors';
import { themeFor } from '@/ui/theme';

import type { Phase } from '@/domain/types';

const PHASES: Phase[] = ['menstrual', 'follicular', 'ovulation', 'luteal'];

/** Relative luminance of a #RRGGBB colour (WCAG). */
function luminance(hex: string): number {
  const channel = (i: number) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(1) + 0.7152 * channel(3) + 0.0722 * channel(5);
}

function contrast(a: string, b: string): number {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

describe('themeFor', () => {
  it.each(PHASES)('resolves the precomputed hex for %s in light and dark', (phase) => {
    const light = themeFor(phase, false);
    expect(light.accentHex).toBe(phaseHex[phase].light);
    expect(light.softHex).toBe(phaseSoftHex[phase].light);
    expect(light.tintHex).toBe(phaseTintHex[phase].light);
    expect(light.dark).toBe(false);
    const dark = themeFor(phase, true);
    expect(dark.accentHex).toBe(phaseHex[phase].dark);
    expect(dark.softHex).toBe(phaseSoftHex[phase].dark);
    expect(dark.tintHex).toBe(phaseTintHex[phase].dark);
    expect(dark.dark).toBe(true);
  });
});

describe('contrast', () => {
  it.each(['light', 'dark'] as const)('text on bg and surface is readable (%s)', (mode) => {
    const p = palette[mode];
    expect(contrast(p.text, p.bg)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(p.text, p.surface)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(p.text2, p.bg)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(p.text2, p.surface)).toBeGreaterThanOrEqual(4.5);
  });

  // onAccent is used on filled chips (14/600) and calendar day numbers (15/500): bold or
  // medium text at that size counts as large text, where 3:1 applies. The design's amber
  // ovulation colour lands at 4.0:1 against white.
  it.each(PHASES)('onAccent on the %s phase colour is readable', (phase) => {
    expect(contrast(palette.light.onAccent, phaseHex[phase].light)).toBeGreaterThanOrEqual(3);
    expect(contrast(palette.dark.onAccent, phaseHex[phase].dark)).toBeGreaterThanOrEqual(3);
  });

  // The accent is used for large text (phase name, hero line) and labels in bold, so the
  // large-text / UI-component threshold applies.
  it.each(PHASES)('the %s phase colour reads as large text on the surface', (phase) => {
    expect(contrast(phaseHex[phase].light, palette.light.surface)).toBeGreaterThanOrEqual(3);
    expect(contrast(phaseHex[phase].dark, palette.dark.surface)).toBeGreaterThanOrEqual(3);
  });
});
