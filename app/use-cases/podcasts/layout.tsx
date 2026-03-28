import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../../components/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "AI Podcast Notes | Transcripts & Summaries",
  description: "Turn podcast episodes into transcripts, chapter summaries, and key takeaways. Sythio processes any audio. Try free.",
  path: "/use-cases/podcasts",
  keywords: ["podcast transcription", "podcast to text", "podcast summary AI", "podcast chapters", "podcast notes"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>
    <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Use Cases", href: "/use-cases" }, { name: "Podcasts", href: "/use-cases/podcasts" }]} />
    <FAQSchema items={[
      { question: "Can Sythio transcribe podcast episodes?", answer: "Yes. Upload any podcast audio file and Sythio generates full transcripts, summaries, key points, and chapter breakdowns with speaker detection." },
      { question: "Does Sythio detect podcast guests?", answer: "Yes. Speaker detection identifies host and guest voices, attributing quotes and key points to the correct speaker." },
      { question: "What podcast formats does Sythio support?", answer: "Sythio supports MP3, WAV, M4A, AAC, FLAC, and all common audio formats used by podcast platforms." },
    ]} />
    {children}
  </>;
}
