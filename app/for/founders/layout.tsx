import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Sythio for Founders — Capture Every Decision, Idea, and Next Step",
  description:
    "Founders move fast. Sythio turns meetings, brainstorms, and voice notes into structured summaries, action plans, tasks, and follow-up messages — so nothing falls through the cracks.",
  path: "/for/founders",
  keywords: [
    "AI for founders",
    "startup meeting notes",
    "founder productivity tool",
    "AI voice notes for founders",
    "capture decisions from meetings",
    "founder audio intelligence",
  ],
});

export default function FoundersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "For Founders", href: "/for/founders" },
        ]}
      />
      {children}
    </>
  );
}
