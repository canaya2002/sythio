export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "For Lawyers",
    title: "Sythio for Lawyers",
    subtitle: "Document depositions, meetings, and calls with precision.",
  });
}
