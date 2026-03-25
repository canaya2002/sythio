import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Feature",
    title: "Idea Capture from Audio",
    subtitle: "Capture brainstorming sessions. Ideas grouped by theme, ranked by potential.",
  });
}
