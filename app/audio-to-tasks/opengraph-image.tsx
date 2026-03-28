export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    title: "Audio to Tasks",
    subtitle: "Extract action items with owners and deadlines from any conversation.",
  });
}
