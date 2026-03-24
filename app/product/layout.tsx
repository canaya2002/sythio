import { buildMetadata } from "../lib/metadata";

export const metadata = buildMetadata({
  title: "Product — AI Voice Notes & Audio Intelligence",
  description:
    "See how Sythio transforms audio recordings into summaries, tasks, action plans, and reports. AI voice notes app with multi-speaker detection and 9 output formats.",
  path: "/product",
  keywords: [
    "AI voice notes app",
    "audio to structured output",
    "voice recorder with AI summaries",
    "speaker detection app",
    "one audio multiple outcomes",
  ],
});

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
