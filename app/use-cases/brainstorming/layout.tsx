import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Brainstorming Capture — Turn Ideas into Structured Output",
  description:
    "Brainstorm freely, get organized output. Sythio captures brainstorming sessions and transforms them into categorized ideas, action plans, and clear next steps.",
  path: "/use-cases/brainstorming",
  keywords: [
    "brainstorming capture tool",
    "AI brainstorming app",
    "brainstorm to action plan",
    "organize brainstorming ideas",
    "idea capture AI",
  ],
});

export default function BrainstormingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Use Cases", href: "/use-cases" },
          { name: "Brainstorming", href: "/use-cases/brainstorming" },
        ]}
      />
      {children}
    </>
  );
}
