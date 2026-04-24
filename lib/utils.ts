export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export const locales = ['es', 'en', 'pt'] as const;
export type Locale = (typeof locales)[number];

export function getLocalizedHref(path: string, locale: string): string {
  return locale === 'es' ? path : `/${locale}${path}`;
}
