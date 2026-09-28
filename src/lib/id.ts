/** Small, dependency-free unique id: time-ordered prefix plus random suffix. */
export function newId(): string {
  const time = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 6);
  return `${time}-${rand}`;
}
