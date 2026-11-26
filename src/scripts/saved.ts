// Saved guides, persisted per browser. Every change fires `saved:change` on window
// so any component (save buttons, tabs, lists) can stay in sync.
const KEY = 'ch-blog-saved';

export function getSaved(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    const list = raw ? JSON.parse(raw) : [];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

function setSaved(list: string[]) {
  try { localStorage.setItem(KEY, JSON.stringify(list)); } catch { /* private mode: keep in memory only */ }
  window.dispatchEvent(new CustomEvent('saved:change', { detail: list }));
}

export function isSaved(slug: string) {
  return getSaved().includes(slug);
}

/** Toggles a slug and returns its new state (true = saved). */
export function toggleSaved(slug: string): boolean {
  const list = getSaved();
  const has = list.includes(slug);
  setSaved(has ? list.filter((s) => s !== slug) : [...list, slug]);
  return !has;
}

export function onSavedChange(fn: (list: string[]) => void) {
  window.addEventListener('saved:change', (e) => fn((e as CustomEvent<string[]>).detail));
}
