import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Contact",
    title: "Get in Touch",
    subtitle: "Questions, partnerships, or just saying hello. We'd love to hear from you.",
  });
}
