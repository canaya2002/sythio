/* ─── JSON-LD Structured Data Components (Server Component) ─── */

const SITE_URL = "https://sythio.com";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sythio",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Sythio transforms your audio into summaries, tasks, action plans, and structured outputs. AI-powered voice notes with speaker detection.",
    foundingDate: "2024",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@sythio.com",
      url: `${SITE_URL}/contact`,
    },
    knowsAbout: [
      "AI audio transcription",
      "speaker detection",
      "voice notes",
      "audio summarization",
      "meeting notes automation",
      "audio intelligence",
      "voice to text",
      "audio to structured output",
    ],
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
    name: "Sythio",
    url: SITE_URL,
    description:
      "Turn voice into clarity, action, and structure. AI-powered audio intelligence.",
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
    name: "Sythio",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Web",
    description:
      "AI voice notes app that transforms audio into summaries, tasks, action plans, and structured outputs with speaker detection.",
    url: SITE_URL,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      highPrice: "29",
      offerCount: "3",
      offers: [
        {
          "@type": "Offer",
          name: "Free",
          price: "0",
          priceCurrency: "USD",
          description: "5 recordings per month, 3 output formats, basic speaker detection",
        },
        {
          "@type": "Offer",
          name: "Pro",
          price: "12",
          priceCurrency: "USD",
          billingIncrement: "P1M",
          description: "Unlimited recordings, all 9 output formats, advanced speaker detection",
        },
        {
          "@type": "Offer",
          name: "Premium",
          price: "29",
          priceCurrency: "USD",
          billingIncrement: "P1M",
          description: "Everything in Pro plus team workspace, API access, custom templates",
        },
      ],
    },
    featureList: [
      "AI-powered audio summaries",
      "Task extraction from conversations",
      "Action plan generation",
      "Speaker detection and attribution",
      "9 structured output formats",
      "Multi-language support",
      "Clean text from audio",
      "Executive report generation",
    ],
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
