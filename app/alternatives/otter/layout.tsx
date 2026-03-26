import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Best Otter.ai Alternatives in 2026",
  description:
    "Looking for an Otter.ai alternative? Compare the top 5 alternatives to Otter.ai in 2026, including Sythio, Fireflies, tl;dv, Notta, and AudioPen. Find the best fit for your workflow.",
  path: "/alternatives/otter",
  keywords: [
    "Otter.ai alternatives",
    "best Otter.ai alternative",
    "Otter.ai alternative 2026",
    "apps like Otter.ai",
  ],
});

export default function OtterAlternativesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Alternatives", href: "/alternatives/otter" },
          { name: "Otter.ai Alternatives", href: "/alternatives/otter" },
        ]}
      />
      {children}
    </>
  );
}
