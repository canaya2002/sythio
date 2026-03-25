import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Feature",
    title: "Clean Text from Audio",
    subtitle: "Polished, readable text from voice. Filler removed, grammar corrected, structure added.",
  });
}
