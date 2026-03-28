export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";
export const size = ogSize;
export const contentType = ogContentType;
export default function Image() {
  return generateOGImage({
    badge: "Audio to Transcript",
    title: "AI Speech to Text — Fast & Accurate",
    subtitle: "Convert audio to text with speaker detection. Then get 9 more outputs.",
  });
}
