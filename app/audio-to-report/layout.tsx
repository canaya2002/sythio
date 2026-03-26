import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Report — Convert Any Recording into an Executive Report",
  description:
    "Turn any audio recording into a polished executive report. Sythio analyzes your conversation, identifies key findings, and delivers a structured report with context, recommendations, and outcomes.",
  path: "/audio-to-report",
  keywords: [
    "audio to report",
    "convert audio to report",
    "audio to executive report",
    "recording to report",
    "meeting report generator",
    "audio report generator",
    "voice recording to report",
  ],
});

export default function AudioToReportLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Audio to Report", href: "/audio-to-report" },
        ]}
      />
      {children}
    </>
  );
}
