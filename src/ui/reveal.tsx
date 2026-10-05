import type { PropsWithChildren } from 'react';
import Animated, { Easing, FadeInDown, useReducedMotion } from 'react-native-reanimated';

/** Fades content up 16 pt over 550 ms, staggered 60 ms; respects Reduce Motion. */
export function Reveal({ children, index = 0 }: PropsWithChildren<{ index?: number }>) {
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;
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
