import { useTranslation } from 'react-i18next';

import { Card, Screen, SectionTitle, Txt } from '@/ui/primitives';

/** Privacy and the disclaimer, in full. */
export default function AboutScreen() {
  const { t } = useTranslation();
  return (
    <Screen title={t('settings.about')}>
      <SectionTitle>{t('settings.privacy')}</SectionTitle>
      <Card>
        <Txt variant="read">{t('settings.privacyBody')}</Txt>
      </Card>
      <SectionTitle>{t('settings.disclaimer')}</SectionTitle>
      <Card>
        <Txt variant="read">{t('settings.disclaimerBody')}</Txt>
      </Card>
    </Screen>
  );
}
