export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Audio to Messages",
    title: "Audio to Ready-to-Send Messages",
    subtitle: "Draft follow-up emails directly from conversations.",
  });
}
