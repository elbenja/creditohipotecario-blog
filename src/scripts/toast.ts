// Fire-and-forget toast. The <Toaster> in BaseLayout listens for `toast:show`.
export type ToastOptions = {
  message: string;
  icon?: 'bookmark-fill' | 'check';
  action?: { label: string; href: string };
};

export function showToast(opts: ToastOptions) {
  window.dispatchEvent(new CustomEvent('toast:show', { detail: opts }));
}
