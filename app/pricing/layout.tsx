import { seoMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Pricing — Free, Premium $15/mo, Enterprise",
  description:
    "Sythio pricing: Free with 5 recordings/month. Premium at $15/month for unlimited recordings and all 9 formats. Enterprise with custom pricing for teams. No credit card required.",
  path: "/pricing",
  keywords: [
    "Sythio pricing",
    "AI voice notes pricing",
    "audio summarizer price",
    "free voice recorder AI",
    "meeting notes app cost",
    "AI transcription pricing",
    "best AI voice notes app price",
    "free AI meeting notes",
    "free AI voice notes",
    "voice notes app free plan",
    "AI meeting notes price",
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
      <FAQSchema
        items={[
          {
            question: "Can I switch plans at any time?",
            answer: "Yes. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle.",
          },
          {
            question: "Is there a free trial for Premium?",
            answer: "The free tier lets you experience Sythio with 5 recordings per month and 3 output formats. No trial needed — upgrade to Premium when you're ready for unlimited recordings and all 9 outputs.",
          },
          {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, debit cards, and digital payment methods.",
          },
          {
            question: "Do unused recordings roll over?",
            answer: "On the free plan, unused recordings do not roll over. Premium and Enterprise plans have unlimited recordings.",
          },
          {
            question: "What happens if I downgrade?",
            answer: "Your existing recordings and outputs remain accessible. You'll lose access to premium features at the end of your billing period.",
          },
        ]}
      />
      {children}
    </>
  );
}
