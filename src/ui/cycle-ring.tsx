import { useEffect, useMemo, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Path } from 'react-native-svg';

import type { DayStatus } from '@/engine/cycle';
import { phaseForCycleDay } from '@/engine/cycle';
import { setRingAnchor } from '@/ui/ring-anchor';
import { fontFor, phaseHex } from '@/ui/colors';
import { usePhaseTheme, useSurfaceHex } from '@/ui/theme';
import { Txt } from '@/ui/primitives';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const STROKE = 6;
const GAP_DEG = 1.1;
/** Future days: the design's 22 % read as grey on a device, so a little more in each mode. */
const FUTURE_OPACITY = { light: 0.4, dark: 0.45 };
const ENTER = Easing.bezier(0.2, 0.8, 0.2, 1);

function polar(cx: number, cy: number, r: number, angle: number) {
  const a = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function arc(cx: number, cy: number, r: number, start: number, end: number) {
  const s = polar(cx, cy, r, start);
  const e = polar(cx, cy, r, end);
  const large = end - start > 180 ? 1 : 0;
  return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
}

/** Centre angle of a cycle day on the ring (day 1 starts at twelve o'clock, clockwise). */
function dayAngle(day: number, total: number) {
  return ((day - 0.5) / total) * 360;
}

function Segment({
  d,
  color,
  opacity,
  delay,
  reduced,
  testID,
}: {
  d: string;
  color: string;
  opacity: number;
  delay: number;
  reduced: boolean;
  testID: string;
}) {
  const progress = useSharedValue(reduced ? 1 : 0);
  useEffect(() => {
    progress.value = reduced
      ? 1
      : withDelay(delay, withTiming(1, { duration: 550, easing: ENTER }));
  }, [progress, delay, reduced]);
  const props = useAnimatedProps(() => ({ opacity: opacity * progress.value }));
  return (
    <AnimatedPath
      testID={testID}
      d={d}
      stroke={color}
      strokeWidth={STROKE}
      strokeLinecap="butt"
      fill="none"
      animatedProps={props}
      // Static copy for tests and for renderers without animated props.
      opacity={opacity}
    />
  );
}

/**
 * The cycle ring from docs/design/README.md: one segment per cycle day, coloured by phase, the
 * future at low opacity, the fertile window as a dashed inner arc, ovulation as a dot, logged
 * days as dots outside, today as a knob. A phase-coloured glow breathes behind it.
 */
export function CycleRing({
  today,
  periodLength,
  lutealLength,
  size = 280,
  fertile,
  ovulationDay,
  loggedDays = [],
  label,
  phaseName,
  reportAnchor,
}: {
  today: DayStatus;
  periodLength: number;
  lutealLength: number;
  size?: number;
  /** Fertile window as cycle days, inclusive. */
  fertile?: { from: number; to: number };
  ovulationDay?: number;
  /** Cycle days with a log entry in this cycle. */
  loggedDays?: number[];
  /** Small uppercase line in the centre, e.g. "Cyklusdag 12". */
  label?: string;
  /** The phase name under it, in the accent. */
  phaseName?: string;
  /** Report where the ring sits on screen, so the splash can fade into it (the Home ring only). */
  reportAnchor?: boolean;
}) {
  const box = useRef<View>(null);
  const theme = usePhaseTheme();
  const surface = useSurfaceHex();
  const reduced = useReducedMotion();
  const mode = theme.dark ? 'dark' : 'light';
  const c = size / 2;
  // Radius leaves room for the knob (8) outside the stroke; markings sit one stroke's width
  // clear of the ring on either side.
  const r = c - 2 - 10;
  const innerR = r - 8;
  const outerR = r + 9;
  const total = Math.max(today.cycleLength, today.cycleDay);
  const span = 360 / total;

  const segments = useMemo(() => {
    const items: { day: number; d: string; color: string; future: boolean }[] = [];
    for (let day = 1; day <= total; day++) {
      const start = (day - 1) * span + GAP_DEG / 2;
      const end = day * span - GAP_DEG / 2;
      const phase = phaseForCycleDay(day, total, periodLength, lutealLength);
      items.push({
        day,
        d: arc(c, c, r, start, end),
        color: phaseHex[phase][mode],
        future: day > today.cycleDay,
      });
    }
    return items;
  }, [total, span, periodLength, lutealLength, c, r, mode, today.cycleDay]);

  const knob = polar(c, c, r, dayAngle(today.cycleDay, total));
  const ovu = ovulationDay ? polar(c, c, innerR, dayAngle(ovulationDay, total)) : undefined;
  const fertileArc =
    fertile && fertile.to >= fertile.from
      ? arc(c, c, innerR, (fertile.from - 1) * span, fertile.to * span)
      : undefined;

  // Glow that breathes behind the ring; static with Reduce Motion.
  const breath = useSharedValue(0);
  useEffect(() => {
    breath.value = reduced
      ? 0.5
      : withRepeat(
          withSequence(
            withTiming(1, { duration: 5000, easing: Easing.inOut(Easing.ease) }),
            withTiming(0, { duration: 5000, easing: Easing.inOut(Easing.ease) }),
          ),
          -1,
        );
  }, [breath, reduced]);
  const glowStyle = useAnimatedStyle(() => ({
    opacity: 0.4 + 0.4 * breath.value,
    transform: [{ scale: 0.9 + 0.18 * breath.value }],
  }));

  // The knob pops in after the segments.
  const pop = useSharedValue(reduced ? 1 : 0);
  useEffect(() => {
    pop.value = reduced
      ? 1
      : withDelay(
          total * 20 + 200,
          withSequence(
            withTiming(1.3, { duration: 300, easing: ENTER }),
            withTiming(1, { duration: 300, easing: ENTER }),
          ),
        );
  }, [pop, reduced, total]);
  const knobProps = useAnimatedProps(() => ({ r: 8 * pop.value }));

  const inset = size * 0.14;
  return (
    <View
      ref={box}
      onLayout={() => {
        if (!reportAnchor) return;
        box.current?.measureInWindow((x, y, w) => setRingAnchor({ x, y, size: w }));
      }}
      style={{ width: size, height: size }}
      accessible
      accessibilityLabel={[label, phaseName].filter(Boolean).join(', ')}
      testID="cycle-ring">
      <Animated.View
        pointerEvents="none"
        style={[
          styles.glow,
          {
            top: inset,
            left: inset,
            width: size - inset * 2,
            height: size - inset * 2,
            borderRadius: size,
            experimental_backgroundImage: `radial-gradient(circle, ${theme.accentHex}99 0%, ${theme.accentHex}00 68%)`,
          },
          glowStyle,
        ]}
      />
      <Svg width={size} height={size}>
        {segments.map((s, i) => (
          <Segment
            key={s.day}
            testID={`ring-segment-${s.day}`}
            d={s.d}
            color={s.color}
            opacity={s.future ? FUTURE_OPACITY[mode] : 1}
            delay={i * 20}
            reduced={reduced}
          />
        ))}
        {fertileArc ? (
          <Path
            testID="ring-fertile"
            d={fertileArc}
            stroke={phaseHex.ovulation[mode]}
            strokeWidth={2}
            strokeDasharray="2 4"
            strokeLinecap="round"
            fill="none"
          />
        ) : null}
        {ovu ? (
          <Circle
            testID="ring-ovulation"
            cx={ovu.x}
            cy={ovu.y}
            r={4}
            fill={phaseHex.ovulation[mode]}
          />
        ) : null}
        {loggedDays
          .filter((d) => d >= 1 && d <= total)
          .map((d) => {
            const p = polar(c, c, outerR, dayAngle(d, total));
            return (
              <Circle
                key={d}
                testID={`ring-logged-${d}`}
                cx={p.x}
                cy={p.y}
                r={2.4}
                fill={surface.text}
              />
            );
          })}
        <AnimatedCircle
          testID="ring-today"
          cx={knob.x}
          cy={knob.y}
          r={8}
          fill={surface.bg}
          stroke={theme.accentHex}
          strokeWidth={2}
          animatedProps={knobProps}
        />
      </Svg>
      {label || phaseName ? (
        <View style={styles.centre} pointerEvents="none">
          {label ? (
            <Txt variant="label" style={styles.centreLabel}>
              {label.toUpperCase()}
            </Txt>
          ) : null}
          {phaseName ? (
            <Txt color={theme.accent} style={styles.phaseName} numberOfLines={1}>
              {phaseName}
            </Txt>
          ) : null}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  glow: { position: 'absolute' },
  centre: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    gap: 4,
  },
  centreLabel: { letterSpacing: 2.2, textAlign: 'center' },
  phaseName: { fontFamily: fontFor(300), fontSize: 27, lineHeight: 32, textAlign: 'center' },
});
