import { Pressable, StyleSheet, View } from 'react-native';

import { colors, fontFor, radius, spacing } from '@/ui/colors';
import { Txt } from '@/ui/primitives';

/**
 * A small card-like tile with a big number and a footnote label, for rows of stats. With
 * `onPress` it opens what is behind the number.
 */
export function Stat({
  value,
  label,
  onPress,
}: {
  value: string;
  label: string;
  onPress?: () => void;
}) {
  const inner = (
    <>
      <Txt style={styles.value} color={colors.label}>
        {value}
      </Txt>
      <Txt variant="footnote" numberOfLines={1}>
        {label}
      </Txt>
    </>
  );
  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={`${value} ${label}`}
        style={({ pressed }) => [styles.tile, pressed && styles.pressed]}>
        {inner}
      </Pressable>
    );
  }
  return (
    <View style={styles.tile} accessible accessibilityLabel={`${value} ${label}`}>
      {inner}
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: radius.card,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    alignItems: 'center',
    gap: spacing.xs,
    borderWidth: 1,
    borderColor: colors.separator,
  },
  pressed: { opacity: 0.6 },
  value: {
    fontSize: 26,
    lineHeight: 32,
    fontFamily: fontFor(300),
    fontVariant: ['tabular-nums'],
  },
});
