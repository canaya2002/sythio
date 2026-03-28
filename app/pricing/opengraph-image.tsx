export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Pricing",
    title: "Simple, Transparent Pricing",
    subtitle: "Start free. Upgrade when you need more. No hidden fees.",
  });
}
