import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Summary — Convert Any Recording into a Clear Summary",
  description:
    "Turn any audio recording into a concise, structured summary. Sythio analyzes context, identifies key topics, and creates summaries that capture decisions, ideas, and next steps.",
  path: "/audio-to-summary",
  keywords: [
    "audio to summary",
    "convert audio to summary",
    "summarize audio recording",
    "audio summary generator",
    "recording to summary",
    "voice recording summary",
  ],
});

export default function AudioToSummaryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Audio to Summary", href: "/audio-to-summary" },
        ]}
      />
      {children}
    </>
  );
}
