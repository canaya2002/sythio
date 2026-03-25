import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Speaker Detection — Know Who Said What in Every Recording",
  description:
    "Sythio automatically identifies speakers in your recordings. See who said what, assign tasks to the right person, and create speaker-aware summaries and follow-ups.",
  path: "/features/speaker-detection",
  keywords: [
    "speaker detection AI",
    "who said what audio",
    "multi-speaker transcription",
    "speaker identification",
    "speaker diarization",
    "identify speakers recording",
  ],
});

export default function SpeakerDetectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Speaker Detection", href: "/features/speaker-detection" },
        ]}
      />
      {children}
    </>
  );
}
