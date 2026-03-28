export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";
export const size = ogSize;
export const contentType = ogContentType;
export default function Image() {
  return generateOGImage({
    badge: "Security",
    title: "Security & Privacy at Sythio",
    subtitle: "End-to-end encryption. SOC 2. GDPR-ready. Your audio is safe.",
  });
}
