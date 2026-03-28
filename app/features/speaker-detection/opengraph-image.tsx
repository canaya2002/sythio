export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Feature",
    title: "Speaker Detection",
    subtitle: "Know who said what. Multi-speaker identification with automatic attribution.",
  });
}
