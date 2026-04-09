/* ─── Blog-specific JSON-LD Schema (Server Component) ─── */

const SITE_URL = "https://sythio.com";

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  keywords,
  wordCount,
  articleSection,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  keywords: string[];
  wordCount?: number;
  articleSection?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slug}`,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: "Carlos Anaya Ruiz",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Sythio",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/blog/${slug}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    thumbnailUrl: `${SITE_URL}/blog/${slug}/opengraph-image`,
    keywords: keywords.join(", "),
    inLanguage: "en",
    articleSection: articleSection ?? "Audio Intelligence",
    ...(wordCount ? { wordCount } : {}),
    isAccessibleForFree: true,
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog`,
      name: "Sythio Blog",
      url: `${SITE_URL}/blog`,
    },
    /* speakable for voice search — Google uses this to identify
       sections of the article suitable for TTS / voice assistants */
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".blog-content h2", ".blog-content > p:first-child"],
    },
    potentialAction: {
      "@type": "ReadAction",
      target: `${SITE_URL}/blog/${slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
