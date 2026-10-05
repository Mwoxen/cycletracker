import { useState, type PropsWithChildren } from 'react';
import Animated, { Easing, FadeInDown, useReducedMotion } from 'react-native-reanimated';

import { isHandover } from '@/ui/ring-anchor';

/**
 * Fades content up 16 pt over 550 ms, staggered 60 ms; respects Reduce Motion. With
 * `skipOnHandover` it appears at once during the splash handover, so what the splash fades into
 * is already in place.
 */
export function Reveal({
  children,
  index = 0,
  skipOnHandover,
}: PropsWithChildren<{ index?: number; skipOnHandover?: boolean }>) {
  const reduced = useReducedMotion();
  const [instant] = useState(() => !!skipOnHandover && isHandover());
  if (reduced || instant) return <>{children}</>;
  return (
    <Animated.View
      entering={FadeInDown.duration(550)
        .delay(Math.min(index, 8) * 60)
        .easing(Easing.bezier(0.2, 0.8, 0.2, 1))
        .withInitialValues({ opacity: 0, transform: [{ translateY: 16 }] })}>
      {children}
    </Animated.View>
  );
}
