import type { Language } from '@/domain/types';

import { month01 as da01 } from './da/month-01';
import { phases as daPhases } from './da/phases';
import { symptomTips as daTips } from './da/symptom-tips';
import { month01 as en01 } from './en/month-01';
import { phases as enPhases } from './en/phases';
import { symptomTips as enTips } from './en/symptom-tips';
import type { LanguageContent } from './types';

export const content: Record<Language, LanguageContent> = {
  da: { phases: daPhases, symptomTips: daTips, months: [da01] },
  en: { phases: enPhases, symptomTips: enTips, months: [en01] },
};

export function getContent(language: Language): LanguageContent {
  return content[language] ?? content.en;
}

export * from './program';
export * from './types';
