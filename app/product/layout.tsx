import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Voice Notes App — One Recording, Nine Outputs",
  description:
    "Sythio transforms audio into summaries, tasks, action plans, reports, study notes, and more. Record once, get structured output with multi-speaker detection. Not transcription — transformation.",
  path: "/product",
  keywords: [
    "AI voice notes app",
    "audio to structured output",
    "voice recorder with AI summaries",
    "speaker detection app",
    "one audio multiple outcomes",
    "audio intelligence platform",
    "voice to structure",
    "AI meeting notes tool",
  ],
});

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Product", href: "/product" },
        ]}
      />
      {children}
    </>
  );
}
