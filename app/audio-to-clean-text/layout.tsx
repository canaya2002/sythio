import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Clean Text — Convert Any Recording into Polished Text",
  description:
    "Turn any audio recording into clean, readable text. Sythio removes filler words, corrects grammar, and delivers polished prose that reads naturally — not like a raw transcript.",
  path: "/audio-to-clean-text",
  keywords: [
    "audio to clean text",
    "convert audio to text",
    "audio to polished text",
    "clean up audio transcript",
    "recording to readable text",
    "voice recording to text",
    "audio transcription clean",
    "remove filler words audio",
  ],
});

export default function AudioToCleanTextLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Audio to Clean Text", href: "/audio-to-clean-text" },
        ]}
      />
      {children}
    </>
  );
}
