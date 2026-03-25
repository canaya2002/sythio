import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "For Project Managers",
    title: "Sythio for Project Managers",
    subtitle: "Meeting notes, task extraction, and action plans from every conversation.",
  });
}
