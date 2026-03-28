export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Use Case",
    title: "Brainstorming Sessions, Captured",
    subtitle: "Let ideas flow freely. Get them back organized, categorized, and actionable.",
  });
}
