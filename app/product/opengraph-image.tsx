import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Product",
    title: "Everything Your Audio Becomes",
    subtitle: "Record once, get summaries, tasks, action plans, reports, and more.",
  });
}
