import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for Sythio. Start free with our AI voice notes app and upgrade when you need more. No hidden fees. Compare plans for individuals and teams — including audio summarizer features, speaker detection, and unlimited exports.",
  keywords: [
    "Sythio pricing",
    "AI voice notes app pricing",
    "audio summarizer plans",
    "free voice recorder AI",
  ],
  openGraph: {
    title: "Pricing | Sythio",
    description:
      "Simple, transparent pricing for Sythio. Start free, upgrade when you need more. No hidden fees. Plans for individuals and teams.",
    url: "https://sythio.com/pricing",
    siteName: "Sythio",
    type: "website",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
