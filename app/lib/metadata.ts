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
      images: [
        {
          url: `${SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Sythio — AI Voice Notes App",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
    ...(noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}
