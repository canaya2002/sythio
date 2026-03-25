import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Pricing — Free Plan, Pro $12/mo, Premium $29/mo",
  description:
    "Sythio pricing: Free with 5 recordings/month, Pro at $12/month for unlimited recordings and all 9 output formats, Premium at $29/month for teams with API access. Start free, no credit card required.",
  path: "/pricing",
  keywords: [
    "Sythio pricing",
    "AI voice notes pricing",
    "audio summarizer price",
    "free voice recorder AI",
    "meeting notes app cost",
    "AI transcription pricing",
  ],
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />
      {children}
    </>
  );
}
