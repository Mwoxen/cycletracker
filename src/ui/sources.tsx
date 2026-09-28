import { openBrowserAsync } from 'expo-web-browser';
import { useTranslation } from 'react-i18next';
import { Pressable, View } from 'react-native';

import type { Source } from '@/content';
import { colors, spacing } from '@/ui/colors';
import { Symbol, Txt } from '@/ui/primitives';

export function Sources({ sources }: { sources: Source[] }) {
  const { t } = useTranslation();
  return (
    <View style={{ gap: spacing.xs, paddingHorizontal: spacing.sm }}>
      <Txt variant="footnote" style={{ fontWeight: '600' }}>
        {t('learn.sources').toUpperCase()}
      </Txt>
      {sources.map((s) => (
        <Pressable
          key={s.label}
          disabled={!s.url}
          onPress={() => s.url && void openBrowserAsync(s.url)}
          style={({ pressed }) => [
            { flexDirection: 'row', alignItems: 'center', gap: 6 },
            pressed && { opacity: 0.6 },
          ]}>
          <Txt variant="footnote" color={s.url ? colors.tint : colors.secondaryLabel}>
            {s.label}
          </Txt>
          {s.url ? <Symbol name="arrow.up.right" size={10} color={colors.tint} /> : null}
        </Pressable>
      ))}
    </View>
  );
}
