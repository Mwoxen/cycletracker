import { da as dateFnsDa, enGB as dateFnsEn } from 'date-fns/locale';
import { getLocales } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import type { Language } from '@/domain/types';

import da from './da';
import en from './en';

export const LANGUAGES: Language[] = ['da', 'en'];

export function deviceLanguage(): Language {
  const code = getLocales()[0]?.languageCode ?? 'en';
  return code === 'da' ? 'da' : 'en';
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources: { da: { translation: da }, en: { translation: en } },
    lng: deviceLanguage(),
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    returnNull: false,
  });
}

export function setLanguage(lang: Language) {
  if (i18n.language !== lang) void i18n.changeLanguage(lang);
}

export function currentLanguage(): Language {
  return i18n.language === 'da' ? 'da' : 'en';
}

export function dateFnsLocale(lang: Language = currentLanguage()) {
  return lang === 'da' ? dateFnsDa : dateFnsEn;
}

export default i18n;
