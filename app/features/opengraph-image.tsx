import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Features",
    title: "A Complete Audio Intelligence Platform",
    subtitle: "Every feature designed to turn voice into something useful.",
  });
}
