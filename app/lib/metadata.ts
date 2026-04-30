import type { Metadata } from "next";
import { headers } from "next/headers";
import { defaultLocale, isValidLocale, ogLocaleMap, type Locale } from "./i18n-config";

const SITE_URL = "https://sythio.com";
const SITE_NAME = "Sythio";
const TWITTER_HANDLE = "@sythioai";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  /** Override OG type — defaults to "website" */
  ogType?: "website" | "article";
  /** Published date for articles */
  publishedTime?: string;
  /** Modified date for articles */
  modifiedTime?: string;
  /**
   * The locale that should be reflected in the canonical URL.
   * When omitted, the helper assumes the default locale (English).
   * Use `seoMetadata` instead to derive this automatically from request headers.
   */
  locale?: Locale;
};

/** Build the absolute URL of the page in a given locale. */
function urlForLocale(path: string, locale: Locale): string {
  if (locale === defaultLocale) return `${SITE_URL}${path}`;
  /* root path becomes /<locale>, sub-paths become /<locale>/<path> */
  if (path === "" || path === "/") return `${SITE_URL}/${locale}`;
  return `${SITE_URL}/${locale}${path}`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  noIndex,
  ogType = "website",
  publishedTime,
  modifiedTime,
  locale = defaultLocale,
}: BuildMetadataOptions): Metadata {
  /* The canonical reflects the locale actually being served — critical so each
     localized variant declares itself, not the English version. */
  const canonical = urlForLocale(path, locale);

  return {
    title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: {
      canonical,
      languages: {
        "en": urlForLocale(path, "en"),
        "es": urlForLocale(path, "es"),
        "fr": urlForLocale(path, "fr"),
        "pt": urlForLocale(path, "pt"),
        "it": urlForLocale(path, "it"),
        "x-default": urlForLocale(path, "en"),
      },
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: ogType,
      locale: ogLocaleMap[locale],
      alternateLocale: Object.values(ogLocaleMap).filter((l) => l !== ogLocaleMap[locale]),
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      /* OG image omitted here so Next.js uses the dynamic opengraph-image.tsx
         route handler in each directory. Fallback to /og-image.png is handled
         by the root layout metadata. */
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: `${title} | ${SITE_NAME}`,
      description,
      /* Twitter image omitted — Next.js resolves from opengraph-image.tsx */
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {
          robots: {
            index: true,
            follow: true,
            googleBot: {
              index: true,
              follow: true,
              "max-image-preview": "large" as const,
              "max-snippet": -1,
              "max-video-preview": -1,
            },
          },
        }),
  };
}

/**
 * Returns a `generateMetadata` async function that reads the runtime locale from
 * the `x-locale` request header (set by the proxy when handling /es, /fr, …).
 *
 * Each layout should use this so that the canonical URL is locale-correct:
 *
 *   export const generateMetadata = seoMetadata({
 *     title: "...",
 *     description: "...",
 *     path: "/faq",
 *   });
 */
export function seoMetadata(opts: Omit<BuildMetadataOptions, "locale">) {
  return async function generateMetadata(): Promise<Metadata> {
    const headerStore = await headers();
    const headerLocale = headerStore.get("x-locale") || defaultLocale;
    const locale: Locale = isValidLocale(headerLocale) ? headerLocale : defaultLocale;
    return buildMetadata({ ...opts, locale });
  };
}
