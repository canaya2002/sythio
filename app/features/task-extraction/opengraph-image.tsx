import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Feature",
    title: "Task Extraction from Audio",
    subtitle: "Automatically pull action items with owners and deadlines from conversations.",
  });
}
