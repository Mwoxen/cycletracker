import type { PropsWithChildren } from 'react';
import { Pressable, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

/**
 * Pressable that scales down slightly while pressed (cards .98, buttons .97, chips .94 in the
 * design). With Reduce Motion it only dims.
 */
export function Pressed({
  children,
  scale = 0.97,
  style,
  ...rest
}: PropsWithChildren<
  Omit<PressableProps, 'style'> & { scale?: number; style?: StyleProp<ViewStyle> }
>) {
  const reduced = useReducedMotion();
  const pressed = useSharedValue(0);
  const animated = useAnimatedStyle(() => ({
    transform: [{ scale: 1 - (1 - scale) * pressed.value }],
    opacity: 1 - 0.25 * pressed.value,
  }));
  return (
    <AnimatedPressable
      {...rest}
      onPressIn={(e) => {
        pressed.value = withTiming(1, { duration: reduced ? 0 : 90 });
        rest.onPressIn?.(e);
      }}
      onPressOut={(e) => {
        pressed.value = withTiming(0, { duration: reduced ? 0 : 160 });
        rest.onPressOut?.(e);
      }}
      style={[style, animated]}>
      {children}
    </AnimatedPressable>
  );
}
