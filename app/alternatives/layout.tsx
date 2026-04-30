import { seoMetadata } from "../lib/metadata";

export const generateMetadata = seoMetadata({
  title: "Best Meeting & Voice Tool Alternatives",
  description: "Looking for a better alternative to Otter, Fireflies, or tl;dv? Sythio delivers 9 structured outputs from any audio, not just transcription.",
  path: "/alternatives",
  keywords: ["Otter alternative", "Fireflies alternative", "tldv alternative", "best voice notes app"],
});

export default function AlternativesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
