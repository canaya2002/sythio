export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Alternative",
    title: "Best Fireflies.ai Alternative",
    subtitle: "Any audio source, 9 output formats, speaker detection.",
  });
}
