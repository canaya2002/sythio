import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, ProductSchema, FAQSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Voice Notes | One Recording, 9 Outputs",
  description:
    "Record once, get 9 structured outputs: summaries, tasks, action plans, reports, and more. AI speaker detection included. Try Sythio free.",
  path: "/product",
  keywords: [
    "AI voice notes app",
    "audio to structured output",
    "voice recorder with AI summaries",
    "speaker detection app",
    "one audio multiple outcomes",
    "audio intelligence platform",
    "voice to structure",
    "AI meeting notes tool",
    "best AI voice notes app",
    "speech to text with AI",
    "audio intelligence app",
    "9 output formats audio",
  ],
});

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Product", href: "/product" },
        ]}
      />
      <ProductSchema />
      <FAQSchema items={[
        { question: "What outputs does Sythio generate from a single recording?", answer: "Sythio produces 9 structured outputs: summaries, tasks, action plans, executive reports, key points, clean text, ideas, study notes, and follow-up messages. Choose one or all depending on what you need." },
        { question: "Does Sythio include speaker detection?", answer: "Yes. Sythio automatically identifies different speakers in your recording and attributes statements, tasks, and decisions to specific people. This works across all output formats." },
        { question: "What audio formats does Sythio support?", answer: "Sythio accepts all common audio formats including MP3, WAV, M4A, and more. You can also record directly in the app on web, iOS, or Android. There is no limit on recording length." },
      ]} />
      {children}
    </>
  );
}
