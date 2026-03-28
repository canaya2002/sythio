export const dynamic = "force-dynamic";
import { generateOGImage, ogSize, ogContentType } from "../lib/og-image";
export const size = ogSize;
export const contentType = ogContentType;
export default function Image() {
  return generateOGImage({
    badge: "Enterprise",
    title: "Sythio Enterprise — AI Audio for Teams",
    subtitle: "Team workspaces, SSO, API access, and dedicated support.",
  });
}
