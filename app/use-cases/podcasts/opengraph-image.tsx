export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";
export const size = ogSize;
export const contentType = ogContentType;
export default function Image() {
  return generateOGImage({
    badge: "Use Case",
    title: "AI Podcast Notes & Transcription",
    subtitle: "Transcripts, chapters, summaries, and show notes from any episode.",
  });
}
