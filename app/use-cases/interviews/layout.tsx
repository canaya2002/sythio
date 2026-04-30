import { seoMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "AI Interview Notes | Transcripts & Summaries",
  description: "Transcribe and summarize interviews automatically. Sythio detects speakers and extracts key insights. Try free.",
  path: "/use-cases/interviews",
  keywords: ["interview transcription", "interview summary AI", "research interview", "journalist transcription"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Use Cases", href: "/use-cases" }, { name: "Interviews", href: "/use-cases/interviews" }]} />
    <FAQSchema items={[
      { question: "Can Sythio transcribe interviews?", answer: "Yes. Upload any interview recording and Sythio generates full transcripts with speaker detection, summaries, key findings, and clean quotes attributed to each speaker." },
      { question: "Does Sythio identify interviewer and interviewee?", answer: "Yes. Speaker detection automatically distinguishes between different voices, attributing statements, quotes, and insights to the correct participant." },
      { question: "What interview formats does Sythio support?", answer: "Sythio supports MP3, WAV, M4A, AAC, FLAC, and all common audio formats. Works with in-person recordings, phone calls, and video interview audio." },
    ]} />
    {children}
  </>;
}
