import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Audio to Key Points — Extract Key Points from Any Recording",
  description:
    "Turn any audio recording into a concise list of key points. Sythio identifies the most important ideas, decisions, and takeaways — so you get the essence without the noise.",
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
      {children}
    </>
  );
}
