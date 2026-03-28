export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Audio to Ideas",
    title: "Audio to Ideas",
    subtitle: "Capture and categorize brainstorming output.",
  });
}
