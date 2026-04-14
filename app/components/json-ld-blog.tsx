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
  readingTime,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  keywords: string[];
  wordCount?: number;
  articleSection?: string;
  readingTime?: string;
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
      jobTitle: "Founder",
      worksFor: { "@id": `${SITE_URL}/#organization` },
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
    ...(readingTime ? { timeRequired: readingTime } : {}),
    isAccessibleForFree: true,
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog`,
      name: "Sythio Blog",
      url: `${SITE_URL}/blog`,
    },
    about: {
      "@type": "Thing",
      name: "Voice Notes AI",
      description: "AI-powered voice note processing, transcription, and multi-format output generation",
    },
    /* speakable for voice search — Google uses this to identify
       sections of the article suitable for TTS / voice assistants */
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [
        ".blog-content h1",
        ".blog-content h2",
        ".blog-content > p:first-child",
        ".blog-content > p:nth-child(2)",
        ".blog-content [data-speakable]",
      ],
    },
    potentialAction: [
      {
        "@type": "ReadAction",
        target: `${SITE_URL}/blog/${slug}`,
      },
      {
        "@type": "ShareAction",
        target: `${SITE_URL}/blog/${slug}`,
      },
    ],
    copyrightHolder: { "@id": `${SITE_URL}/#organization` },
    copyrightYear: new Date(datePublished).getFullYear(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ─── BlogPosting List Schema ─── */
/* For the /blog index page — helps search engines understand the blog structure */
export function BlogListSchema({
  posts,
}: {
  posts: { title: string; slug: string; date: string; description: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog`,
    name: "Sythio Blog",
    description:
      "Insights on voice notes AI, audio intelligence, speaker detection, and productivity. Learn how to turn voice recordings into summaries, tasks, and more.",
    url: `${SITE_URL}/blog`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      description: post.description,
      author: {
        "@type": "Person",
        name: "Carlos Anaya Ruiz",
      },
      image: `${SITE_URL}/blog/${post.slug}/opengraph-image`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
