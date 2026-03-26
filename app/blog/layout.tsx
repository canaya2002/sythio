import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema } from "../components/json-ld";

export const metadata = buildMetadata({
  title: "Blog — Audio Intelligence, Productivity & AI Voice Notes",
  description:
    "Insights on audio intelligence, AI voice notes, meeting productivity, and the future of how we work with spoken content. Guides, comparisons, and deep dives.",
  path: "/blog",
  keywords: [
    "AI voice notes blog",
    "audio intelligence articles",
    "meeting productivity tips",
    "AI transcription guide",
    "voice notes productivity",
    "audio AI insights",
  ],
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ]}
      />
      {children}
    </>
  );
}
