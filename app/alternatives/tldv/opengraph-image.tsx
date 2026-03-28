export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Alternative",
    title: "Best tl;dv Alternative",
    subtitle: "Transform any audio into structured, actionable output.",
  });
}
