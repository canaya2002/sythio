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
    },
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

