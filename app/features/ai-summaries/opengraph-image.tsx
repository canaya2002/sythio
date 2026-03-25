import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Feature",
    title: "AI Audio Summaries",
    subtitle: "Clear overviews from any recording. Context-aware, not just shortened transcripts.",
  });
}
