import { StyleSheet, View } from 'react-native';

import { colors, fonts, radius, spacing } from '@/ui/colors';
import { Txt } from '@/ui/primitives';

/** A small card-like tile with a big number and a footnote label, for rows of stats. */
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <View style={styles.tile} accessible accessibilityLabel={`${value} ${label}`}>
      <Txt style={styles.value} color={colors.label}>
        {value}
      </Txt>
      <Txt variant="footnote" numberOfLines={1}>
        {label}
      </Txt>
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
    shadowColor: '#5A3A30',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
    fontFamily: fonts?.rounded,
    fontVariant: ['tabular-nums'],
  },
});
