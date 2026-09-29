import type { PropsWithChildren } from 'react';
import Animated, { FadeInDown, useReducedMotion } from 'react-native-reanimated';

/** Fades content in with a small upward drift; respects the Reduce Motion setting. */
export function Reveal({ children, index = 0 }: PropsWithChildren<{ index?: number }>) {
  const reduced = useReducedMotion();
  if (reduced) return <>{children}</>;
  return (
    <Animated.View entering={FadeInDown.duration(260).delay(Math.min(index, 8) * 45)}>
      {children}
    </Animated.View>
  );
}
