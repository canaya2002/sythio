export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    title: "Audio to Action Plan",
    subtitle: "Turn conversations into structured step-by-step plans with priorities.",
  });
}
