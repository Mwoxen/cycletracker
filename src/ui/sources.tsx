import { openBrowserAsync } from 'expo-web-browser';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import type { Source } from '@/content';
import { colors, spacing } from '@/ui/colors';
import { Txt } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

/** "KILDER" and one line per source; linked sources open in the browser. */
export function Sources({ sources }: { sources: Source[] }) {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  return (
    <View style={styles.wrap}>
      <Txt variant="label">{t('reading.sources').toUpperCase()}</Txt>
      {sources.map((s) =>
        s.url ? (
          <Pressable
            key={s.label}
            accessibilityRole="link"
            onPress={() => void openBrowserAsync(s.url as string)}
            style={({ pressed }) => pressed && styles.pressed}>
            <Txt variant="footnote" color={theme.accent} style={styles.line}>
              {s.label}
            </Txt>
          </Pressable>
        ) : (
          <Txt key={s.label} variant="footnote" color={colors.secondaryLabel} style={styles.line}>
            {s.label}
          </Txt>
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: spacing.sm, gap: 6 },
  line: { fontSize: 14, lineHeight: 20 },
  pressed: { opacity: 0.6 },
});
