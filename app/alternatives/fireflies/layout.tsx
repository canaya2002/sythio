import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Best Fireflies.ai Alternatives (2026)",
  description:
    "Compare the best Fireflies.ai alternatives in 2026: Sythio, Otter.ai, tl;dv, Notta, and AudioPen. Find the right fit for your workflow.",
  path: "/alternatives/fireflies",
  keywords: [
    "Fireflies.ai alternatives",
    "best Fireflies.ai alternative",
    "Fireflies.ai alternative 2026",
    "apps like Fireflies.ai",
  ],
});

export default function FirefliesAlternativesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Alternatives", href: "/alternatives/fireflies" },
          { name: "Fireflies.ai Alternatives", href: "/alternatives/fireflies" },
        ]}
      />
      <FAQSchema items={[
        { question: "What is the best alternative to Fireflies.ai in 2026?", answer: "Sythio is a leading Fireflies.ai alternative. Unlike Fireflies, which requires a meeting bot, Sythio works with any audio source and produces 9 structured outputs from a single recording." },
        { question: "Which Fireflies alternatives do not require a meeting bot?", answer: "Sythio does not join meetings as a bot. You record audio directly in the app or upload files. This makes it more versatile than Fireflies — it works with voice notes, phone calls, lectures, and in-person conversations." },
        { question: "Are there cheaper alternatives to Fireflies.ai?", answer: "Yes. Sythio offers a free plan with 5 recordings per month and Premium at $15/month with unlimited recordings and all 9 output formats. Fireflies' paid plans start higher with fewer output options." },
      ]} />
      {children}
    </>
  );
}
