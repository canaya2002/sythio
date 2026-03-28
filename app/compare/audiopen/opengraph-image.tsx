export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Comparison",
    title: "Sythio vs AudioPen",
    subtitle: "Voice-to-text vs multi-output transformation.",
  });
}
