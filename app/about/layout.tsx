import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "About Sythio — Audio Deserves Better Than Transcription",
  description:
    "Sythio was built on a simple belief: audio deserves transformation, not just transcription. Learn about our mission to turn every spoken word into clarity, structure, and action.",
  path: "/about",
  keywords: [
    "about Sythio",
    "AI audio company",
    "voice notes startup",
    "audio intelligence company",
    "AI audio intelligence company",
    "voice to structure mission",
    "audio transformation platform",
  ],
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      {children}
    </>
  );
}
