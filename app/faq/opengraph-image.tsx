export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about Sythio.",
  });
}
