import { generateOGImage, ogSize, ogContentType } from "./lib/og-image";

export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return generateOGImage({
    title: "Turn Voice into Clarity, Action, and Structure",
    subtitle: "AI voice notes app with speaker detection. One audio, multiple outcomes.",
  });
}
