import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Lecture Notes | Study Notes & Concepts",
  description:
    "Never miss a concept again. Sythio transforms lecture recordings into organized study notes, key points, and summaries. Try free.",
  path: "/use-cases/lectures",
  keywords: [
    "AI lecture notes",
    "lecture summary AI",
    "AI notes for students",
    "lecture to study notes",
    "automated lecture notes",
    "AI study tool",
  ],
});

export default function LecturesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Use Cases", href: "/use-cases" },
          { name: "Lectures", href: "/use-cases/lectures" },
        ]}
      />
      <FAQSchema items={[
        { question: "Can Sythio generate study notes from lecture recordings?", answer: "Yes. Sythio transforms lecture recordings into organized study notes with key concepts, definitions, and structured summaries — perfect for exam preparation and review." },
        { question: "Does Sythio work for long lectures?", answer: "Yes. Sythio handles recordings of any length and produces structured output including study notes, key points, summaries, and clean text regardless of lecture duration." },
        { question: "Can I upload pre-recorded lectures to Sythio?", answer: "Absolutely. You can record lectures directly in Sythio or upload existing audio files. Both options produce the same high-quality structured notes." },
        { question: "Is Sythio free for students?", answer: "Sythio offers a free plan with 5 recordings per month and 3 output formats. Students who need more can upgrade to Premium at $12/month for unlimited recordings and all 9 output formats." },
      ]} />
      {children}
    </>
  );
}
