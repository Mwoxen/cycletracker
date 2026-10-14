/** A short, readable version of whatever the native module threw, for the sharing screen. */
export function errorDetail(error: unknown): string {
  const text = error instanceof Error ? error.message : String(error);
  return text.replace(/\s+/g, ' ').trim().slice(0, 400);
}
