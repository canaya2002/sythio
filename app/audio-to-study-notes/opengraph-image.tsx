export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Audio to Notes",
    title: "Audio to Study Notes",
    subtitle: "Organized notes from lectures and learning sessions.",
  });
}
