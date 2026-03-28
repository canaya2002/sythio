export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Comparison",
    title: "Sythio vs Otter.ai",
    subtitle: "Transcription vs transformation. See the difference.",
  });
}
