/**
 * Validates one month in isolation, before it is registered in index.ts:
 *   CONTENT_MONTH=07 npx jest src/content/month.test.ts
 */
import type { MonthContent } from './types';
import { validateMonth, validateParity } from './validate';

const raw = process.env.CONTENT_MONTH;
const n = raw ? Number(raw) : undefined;

const describeIf = n ? describe : describe.skip;

describeIf(`month ${raw}`, () => {
  const nn = String(n).padStart(2, '0');
  const load = (lang: 'da' | 'en'): MonthContent => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require(`./${lang}/month-${nn}`) as Record<string, MonthContent>;
    const value = mod[`month${nn}`];
    if (!value) throw new Error(`${lang}/month-${nn}.ts must export const month${nn}`);
    return value;
  };

  it('is valid in Danish', () => validateMonth(load('da'), n as number, 'da'));
  it('is valid in English', () => validateMonth(load('en'), n as number, 'en'));
  it('has language parity', () => validateParity(load('da'), load('en'), n as number));
});
