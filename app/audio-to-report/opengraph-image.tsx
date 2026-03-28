export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Audio to Report",
    title: "Audio to Executive Report",
    subtitle: "Formal, presentation-ready documents from conversations.",
  });
}
