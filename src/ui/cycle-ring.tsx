import { useColorScheme, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import type { Phase } from '@/domain/types';
import type { DayStatus } from '@/engine/cycle';
import { phaseForCycleDay } from '@/engine/cycle';
import { phaseHex } from '@/ui/colors';

const ORDER: Phase[] = ['menstrual', 'follicular', 'ovulation', 'luteal'];

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

/**
 * A ring showing the four phases in proportion to the current cycle, with a marker on today.
 */
export function CycleRing({
  today,
  periodLength,
  lutealLength,
  size = 92,
}: {
  today: DayStatus;
  periodLength: number;
  lutealLength: number;
  size?: number;
}) {
  const scheme = useColorScheme();
  const stroke = 9;
  const markerR = stroke / 2 + 3;
  // Leave room for the marker, which is larger than the stroke, so it is never clipped.
  const r = size / 2 - markerR;
  const c = size / 2;
  const total = Math.max(today.cycleLength, today.cycleDay);

  // Count days per phase across the cycle, so arcs are proportional.
  const counts: Record<Phase, number> = { menstrual: 0, follicular: 0, ovulation: 0, luteal: 0 };
  for (let d = 1; d <= total; d++)
    counts[phaseForCycleDay(d, total, periodLength, lutealLength)] += 1;

  const gap = 4;
  const arcs = ORDER.reduce<{ angle: number; items: { phase: Phase; d: string }[] }>(
    (acc, phase) => {
      const span = (counts[phase] / total) * 360;
      const start = acc.angle + gap / 2;
      const end = acc.angle + span - gap / 2;
      acc.items.push({ phase, d: end > start ? arc(c, c, r, start, end) : '' });
      return { angle: acc.angle + span, items: acc.items };
    },
    { angle: 0, items: [] },
  ).items;
  const marker = polar(c, c, r, ((today.cycleDay - 0.5) / total) * 360);
  const isDark = scheme === 'dark';

  return (
    <View accessible accessibilityLabel={`${today.phase}, ${today.cycleDay}/${total}`}>
      <Svg width={size} height={size}>
        {arcs.map((a) =>
          a.d ? (
            <Path
              key={a.phase}
              d={a.d}
              stroke={isDark ? phaseHex[a.phase].dark : phaseHex[a.phase].light}
              strokeWidth={stroke}
              strokeLinecap="round"
              fill="none"
              opacity={a.phase === today.phase ? 1 : 0.45}
            />
          ) : null,
        )}
        <Circle cx={marker.x} cy={marker.y} r={markerR} fill={isDark ? '#F4EDE8' : '#2A211D'} />
        <Circle
          cx={marker.x}
          cy={marker.y}
          r={stroke / 2 - 1}
          fill={isDark ? phaseHex[today.phase].dark : phaseHex[today.phase].light}
        />
      </Svg>
    </View>
  );
}
