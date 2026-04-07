import type { Metadata } from "next";

const SITE_URL = "https://sythio.com";
const SITE_NAME = "Sythio";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  noIndex,
}: BuildMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    alternates: {
      canonical: url,
      languages: {
        "en": `${SITE_URL}${path}`,
        "es": `${SITE_URL}/es${path}`,
        "fr": `${SITE_URL}/fr${path}`,
        "pt": `${SITE_URL}/pt${path}`,
        "it": `${SITE_URL}/it${path}`,
        "x-default": `${SITE_URL}${path}`,
      },
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      alternateLocale: ["es_ES", "fr_FR", "pt_BR", "it_IT"],
      /* OG image omitted here so Next.js uses the dynamic opengraph-image.tsx
         route handler in each directory. Fallback to /og-image.png is handled
         by the root layout metadata. */
    },
    twitter: {
      card: "summary_large_image",
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
