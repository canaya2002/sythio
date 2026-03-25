export const locales = ["en", "es", "fr", "pt", "it"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

/** Extract locale prefix from a pathname. Returns defaultLocale if none found. */
export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  if (segment && isValidLocale(segment)) return segment;
  return defaultLocale;
}

/** Strip locale prefix from a pathname. */
export function stripLocalePrefix(pathname: string): string {
  const segment = pathname.split("/")[1];
  if (segment && isValidLocale(segment) && segment !== defaultLocale) {
    return pathname.replace(`/${segment}`, "") || "/";
  }
  return pathname;
}

/** Prefix a pathname with a locale (skip for default locale). */
export function localePath(pathname: string, locale: Locale): string {
  if (locale === defaultLocale) return pathname;
  return `/${locale}${pathname === "/" ? "" : pathname}`;
}

/** All non-default locales for generating alternates. */
export const alternateLocales = locales.filter((l) => l !== defaultLocale);

/** Locale to OpenGraph locale string */
export const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  pt: "pt_BR",
  it: "it_IT",
};
