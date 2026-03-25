import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "About",
    title: "Why Sythio Exists",
    subtitle: "Every spoken word has potential. Most of it is wasted. Sythio changes that.",
  });
}
