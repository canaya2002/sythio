import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Feature",
    title: "Key Points Extraction from Audio",
    subtitle: "Essential takeaways from any recording. Decisions, commitments, and insights.",
  });
}
