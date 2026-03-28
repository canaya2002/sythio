export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Comparison",
    title: "Sythio vs Fireflies.ai",
    subtitle: "Meeting bot vs audio intelligence platform.",
  });
}
