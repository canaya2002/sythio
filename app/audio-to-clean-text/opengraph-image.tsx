export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Audio to Text",
    title: "Audio to Clean Text",
    subtitle: "Polished, readable text from raw audio. Filler removed, grammar corrected.",
  });
}
