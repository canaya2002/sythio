import { buildMetadata } from "../lib/metadata";

export const metadata = buildMetadata({
  title: "Pricing — Free Plan Available | Start Today",
  description:
    "Sythio pricing starts at $0. Free plan with 5 recordings. Pro $12/mo for unlimited. Premium $29/mo for teams. AI voice notes with speaker detection and 9 output formats.",
  path: "/pricing",
  keywords: [
    "Sythio pricing",
    "AI voice notes app pricing",
    "audio summarizer plans",
    "free voice recorder AI",
  ],
});

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
