import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Sythio. Get answers about AI audio summarization, speaker detection transcription, output modes, privacy and data security, supported audio formats, pricing, and how Sythio transforms your voice notes into structured content.",
  keywords: [
    "Sythio FAQ",
    "AI voice notes questions",
    "speaker detection FAQ",
    "audio summarizer help",
  ],
  openGraph: {
    title: "FAQ | Sythio",
    description:
      "Frequently asked questions about Sythio. Learn about audio transformation, speaker detection, output modes, privacy, supported formats, and more.",
    url: "https://sythio.com/faq",
    siteName: "Sythio",
    type: "website",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
