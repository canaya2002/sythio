import { seoMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";

export const generateMetadata = seoMetadata({
  title: "Audio to Key Points | Extract from Audio",
  description:
    "Extract key points from any recording with AI. Sythio identifies the most important ideas, decisions, and takeaways. Try free.",
  path: "/audio-to-key-points",
  keywords: [
    "audio to key points",
    "extract key points from audio",
    "audio key takeaways",
    "recording to key points",
    "meeting key points",
    "audio highlights extractor",
    "voice recording key points",
  ],
});

export default function AudioToKeyPointsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Audio to Key Points", href: "/audio-to-key-points" },
        ]}
      />
      <FAQSchema items={[
        { question: "What are key points in Sythio?", answer: "Key points are the most important ideas, decisions, and takeaways from your recording. Sythio identifies what matters most — not just what was said the most — and presents a ranked, concise list." },
        { question: "How does Sythio decide which points are key?", answer: "Sythio analyzes context, emphasis, and content significance. Decisions, commitments, data points, and pivotal moments are prioritized over casual remarks or filler conversation." },
        { question: "Can I extract key points from a long recording?", answer: "Yes. Sythio handles recordings of any length. Even a two-hour meeting is distilled into a clear list of key points in seconds, so you can review what matters without re-listening." },
      ]} />
      {children}
    </>
  );
}
