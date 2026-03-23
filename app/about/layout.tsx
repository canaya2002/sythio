import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Sythio exists. We believe every spoken word has potential. Learn about the AI audio company behind Sythio, our mission to transform voice notes into clarity, action, and structure, and the team building the future of audio intelligence.",
  keywords: [
    "about Sythio",
    "AI audio company",
    "voice notes mission",
    "audio intelligence",
  ],
  openGraph: {
    title: "About | Sythio",
    description:
      "Why Sythio exists. We believe every spoken word has potential. Learn about our mission to transform audio into clarity, action, and structure.",
    url: "https://sythio.com/about",
    siteName: "Sythio",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
