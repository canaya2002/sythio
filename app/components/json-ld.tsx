/* ─── JSON-LD Structured Data Components (Server Component) ─── */

const SITE_URL = "https://sythio.com";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "SoftwareApplication"],
    "@id": `${SITE_URL}/#organization`,
    name: "Sythio",
    alternateName: "Sythio AI",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/og-image.png`,
    sameAs: [
      "https://www.instagram.com/sythio.ai/",
      "https://www.linkedin.com/company/sythioai",
      "https://www.facebook.com/sythio",
      "https://www.tiktok.com/@sythio.ai",
      "https://github.com/sythio",
    ],
    /* Description matches GMB profile for entity consistency */
    description:
      "Sythio is a premium voice notes AI tool that transforms a single audio recording into multiple useful outputs. Instead of stopping at transcription, Sythio helps you turn voice notes, meetings, and recordings into summaries, tasks, reports, and ready-to-use text.",
    foundingDate: "2025-04-01",
    founder: {
      "@type": "Person",
      name: "Carlos Anaya Ruiz",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@sythio.com",
      url: `${SITE_URL}/contact`,
      availableLanguage: ["English", "Spanish", "French", "Portuguese", "Italian", "German"],
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Mexico",
      },
      {
        "@type": "Place",
        name: "Worldwide",
      },
    ],
    /* 24/7 availability matching GMB hours */
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday", "Tuesday", "Wednesday", "Thursday",
        "Friday", "Saturday", "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    knowsAbout: [
      "voice notes AI",
      "AI audio transcription",
      "speaker detection",
      "voice notes",
      "audio summarization",
      "meeting notes automation",
      "audio intelligence",
      "voice to text",
      "audio to structured output",
      "task extraction from audio",
      "action plan generation",
      "executive report generation",
      "study notes from lectures",
    ],
    knowsLanguage: ["en", "es", "fr", "pt", "it", "de"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Sythio",
    url: SITE_URL,
    description:
      "Sythio — the #1 voice notes AI app. Turn voice into clarity, action, and structure with AI-powered audio intelligence.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: ["en", "es", "fr", "pt", "it"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/faq?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SoftwareAppSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#app`,
    name: "Sythio",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      "Sythio is the best voice notes AI app — transforms audio into summaries, tasks, action plans, and 6 more structured outputs with speaker detection.",
    url: SITE_URL,
    author: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      highPrice: "12",
      offerCount: "3",
      offers: [
        {
          "@type": "Offer",
          name: "Free",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/pricing`,
          priceValidUntil: "2027-12-31",
          description: "5 recordings per month, 3 output formats, basic speaker detection",
        },
        {
          "@type": "Offer",
          name: "Premium",
          price: "12",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/pricing`,
          priceValidUntil: "2027-12-31",
          billingIncrement: "P1M",
          description: "Unlimited recordings, all 9 output formats, advanced speaker detection, searchable library",
        },
        {
          "@type": "Offer",
          name: "Enterprise",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/enterprise`,
          description: "Custom pricing. Team workspace, API access, custom templates, dedicated support.",
        },
      ],
    },
    featureList: [
      "AI-powered audio summaries",
      "Key points extraction",
      "Task extraction from conversations",
      "Action plan generation",
      "Speaker detection and attribution",
      "Clean text from audio",
      "Executive report generation",
      "Auto-draft follow-up messages",
      "Study notes from lectures",
      "Idea capture and organization",
      "Multi-language support",
      "9 structured output formats",
      "Searchable audio library",
      "Export in PDF, text, and more",
    ],
    /* aggregateRating removed — only add when backed by verifiable third-party
       reviews (e.g. App Store, Trustpilot, G2) to avoid Google manual penalty */
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQSchema({
  items, 
}: {
  items: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProductSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product`,
    name: "Sythio",
    description: "Sythio — the best voice notes AI app. Transforms recordings into summaries, tasks, action plans, reports, and 5 more structured outputs with speaker detection.",
    url: `${SITE_URL}/product`,
    brand: { "@id": `${SITE_URL}/#organization` },
    image: `${SITE_URL}/og-image.png`,
    category: "Software > Productivity",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      highPrice: "12",
      offerCount: "3",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function HowToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

