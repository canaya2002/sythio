import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Explore how Sythio transforms audio into summaries, tasks, action plans, reports, and more. Our AI voice notes app features speaker detection, multiple output modes, elegant exports, and intelligent audio processing that turns every recording into structured, actionable content.",
  keywords: [
    "AI voice notes app",
    "audio to structured output",
    "voice recorder with AI summaries",
    "speaker detection app",
    "one audio multiple outcomes",
  ],
  openGraph: {
    title: "Product | Sythio",
    description:
      "Explore how Sythio transforms audio into summaries, tasks, action plans, reports, and more. AI voice notes app with speaker detection and multiple output modes.",
    url: "https://sythio.com/product",
    siteName: "Sythio",
    type: "website",
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
