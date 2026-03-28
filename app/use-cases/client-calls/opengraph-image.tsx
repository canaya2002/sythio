export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Use Case",
    title: "Client Call Documentation",
    subtitle: "Summarize client conversations with context, agreements, and follow-ups.",
  });
}
