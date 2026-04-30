import { seoMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "AI for Lawyers | Case Notes & Transcripts",
  description:
    "Stop transcribing consultations manually. Sythio turns legal conversations into structured case notes, key points, and clean records.",
  path: "/for/lawyers",
  keywords: [
    "AI for lawyers",
    "legal meeting notes AI",
    "deposition notes AI",
    "AI for legal professionals",
    "case notes from audio",
    "legal documentation tool",
    "AI client consultation notes",
    "law firm productivity AI",
  ],
});

export default function LawyersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "For Lawyers", href: "/for/lawyers" },
        ]}
      />
      <FAQSchema items={[
        { question: "How can lawyers use Sythio for client consultations?", answer: "Record client consultations and Sythio generates structured case notes, key points, and clean text records. This replaces manual transcription and ensures every detail from the conversation is captured accurately." },
        { question: "Is Sythio secure enough for legal audio?", answer: "Yes. Sythio uses end-to-end encryption and follows strict data privacy practices. Audio data can be deleted at any time, giving legal professionals full control over sensitive client recordings." },
        { question: "Can Sythio help with deposition and interview notes?", answer: "Yes. Upload deposition or interview recordings and Sythio will extract key points, produce clean text, and generate structured summaries. Speaker detection attributes statements to specific individuals." },
      ]} />
      {children}
    </>
  );
}
