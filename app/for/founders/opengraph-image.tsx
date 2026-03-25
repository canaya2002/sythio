import { generateOGImage, ogSize, ogContentType } from "../../lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    badge: "For Founders",
    title: "Sythio for Founders",
    subtitle: "Turn every conversation into action. Reports, tasks, and follow-ups on autopilot.",
  });
}
