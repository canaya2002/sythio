export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "Compare",
    title: "Sythio vs. Other Tools",
    subtitle: "See how Sythio compares to Otter, Fireflies, tl;dv, and more.",
  });
}
