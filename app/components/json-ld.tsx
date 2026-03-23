/* ─── JSON-LD Structured Data Components (Server Component) ─── */

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sythio",
    url: "https://sythio.com",
    logo: "https://sythio.com/logo.png",
    description:
      "Sythio transforms your audio into summaries, tasks, action plans, and structured outputs. AI-powered voice notes with speaker detection.",
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 10,
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@sythio.com",
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
    url: "https://sythio.com",
    description:
      "Turn voice into clarity, action, and structure. AI-powered audio processing.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://sythio.com/search?q={search_term_string}",
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
    operatingSystem: "Web, iOS, Android",
    description:
      "AI voice notes app that transforms audio into summaries, tasks, action plans, and structured outputs with speaker detection.",
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

export function HowToSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Turn Audio into Structured Output with Sythio",
    description:
      "Transform any audio recording into summaries, tasks, action plans, and more using Sythio's AI-powered voice notes app.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Record or Upload",
        text: "Record audio directly in Sythio or upload an existing audio file. Supports meetings, voice memos, lectures, and more.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "AI Processes Your Audio",
        text: "Sythio's AI transcribes your audio, detects individual speakers, and analyzes the content for key information.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Choose Your Output",
        text: "Select from multiple output modes: summary, tasks, action plan, clean text, executive report, checklist, and more.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Export and Share",
        text: "Export your structured output in your preferred format. Share with your team or integrate into your workflow.",
      },
    ],
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
    name: "Sythio",
    description:
      "AI-powered voice notes app that transforms audio into summaries, tasks, action plans, and structured outputs with speaker detection. One audio, multiple outcomes.",
    brand: {
      "@type": "Brand",
      name: "Sythio",
    },
    category: "Productivity Software",
    url: "https://sythio.com/product",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0",
      highPrice: "29",
      offerCount: "3",
      availability: "https://schema.org/InStock",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Speaker Detection",
        value: "Yes",
      },
      {
        "@type": "PropertyValue",
        name: "Output Modes",
        value: "Summary, Tasks, Action Plan, Clean Text, Executive Report, Checklist",
      },
      {
        "@type": "PropertyValue",
        name: "Supported Platforms",
        value: "Web, iOS, Android",
      },
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
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
