import type { Language } from '@/domain/types';

import { month01 as da01 } from './da/month-01';
import { month02 as da02 } from './da/month-02';
import { month03 as da03 } from './da/month-03';
import { month05 as da05 } from './da/month-05';
import { month06 as da06 } from './da/month-06';
import { month07 as da07 } from './da/month-07';
import { month08 as da08 } from './da/month-08';
import { month10 as da10 } from './da/month-10';
import { month11 as da11 } from './da/month-11';
import { month12 as da12 } from './da/month-12';
import { phases as daPhases } from './da/phases';
import { symptomTips as daTips } from './da/symptom-tips';
import { month01 as en01 } from './en/month-01';
import { month02 as en02 } from './en/month-02';
import { month03 as en03 } from './en/month-03';
import { month05 as en05 } from './en/month-05';
import { month06 as en06 } from './en/month-06';
import { month07 as en07 } from './en/month-07';
import { month08 as en08 } from './en/month-08';
import { month10 as en10 } from './en/month-10';
import { month11 as en11 } from './en/month-11';
import { month12 as en12 } from './en/month-12';
import { phases as enPhases } from './en/phases';
import { symptomTips as enTips } from './en/symptom-tips';
import type { LanguageContent } from './types';

export const content: Record<Language, LanguageContent> = {
  da: { phases: daPhases, symptomTips: daTips, months: [da01, da02, da03, da05, da06, da07, da08, da10, da11, da12] },
  en: { phases: enPhases, symptomTips: enTips, months: [en01, en02, en03, en05, en06, en07, en08, en10, en11, en12] },
};

export function getContent(language: Language): LanguageContent {
  return content[language] ?? content.en;
}

export * from './program';
export * from './types';
