import { openBrowserAsync } from 'expo-web-browser';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

import type { Source } from '@/content';
import { colors, spacing } from '@/ui/colors';
import { Txt } from '@/ui/primitives';

/** One centered footnote line, "Kilde: A · B", where each linked source opens in the browser. */
export function Sources({ sources }: { sources: Source[] }) {
  const { t } = useTranslation();
  return (
    <Txt variant="footnote" style={{ textAlign: 'center', paddingHorizontal: spacing.sm }}>
      {t('reading.source')}:{' '}
      {sources.map((s, i) => (
        <Fragment key={s.label}>
          {i > 0 ? ' · ' : null}
          <Txt
            variant="footnote"
            color={s.url ? colors.tint : colors.secondaryLabel}
            accessibilityRole={s.url ? 'link' : undefined}
            onPress={s.url ? () => void openBrowserAsync(s.url as string) : undefined}>
            {s.label}
          </Txt>
        </Fragment>
      ))}
    </Txt>
  );
}
