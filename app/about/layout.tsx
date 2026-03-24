import { buildMetadata } from "../lib/metadata";

export const metadata = buildMetadata({
  title: "About — Our Mission to Transform Audio",
  description:
    "Sythio exists because audio deserves better than transcription. Learn why we built an AI platform that turns voice recordings into clarity, structure, and actionable outcomes.",
  path: "/about",
  keywords: [
    "about Sythio",
    "AI audio company",
    "voice notes mission",
    "audio intelligence",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
