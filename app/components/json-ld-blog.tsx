/* ─── Blog-specific JSON-LD Schema (Server Component) ─── */

const SITE_URL = "https://sythio.com";

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  keywords,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  keywords: string[];
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
    keywords: keywords.join(", "),
    inLanguage: "en",
    articleSection: "Audio Intelligence",
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog`,
      name: "Sythio Blog",
      url: `${SITE_URL}/blog`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
