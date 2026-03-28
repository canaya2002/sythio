export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Blog",
    title: "Sythio Blog — AI Voice Notes & Audio Intelligence",
    subtitle: "Tips, guides, and insights on voice AI, transcription, and productivity.",
  });
}
