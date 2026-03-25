import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Feature",
    title: "Auto-Draft Messages from Audio",
    subtitle: "Follow-up emails and recaps drafted directly from your conversations.",
  });
}
