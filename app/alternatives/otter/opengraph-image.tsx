export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Alternative",
    title: "Best Otter.ai Alternative",
    subtitle: "Go beyond transcription with 9 structured outputs.",
  });
}
