import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Action Plans — Structured Plans from Conversations",
  description:
    "Turn conversations into structured, step-by-step action plans. Sythio analyzes discussions and creates organized plans with clear steps, owners, and priorities.",
  path: "/features/action-plans",
  keywords: [
    "audio to action plan",
    "meeting action plan AI",
    "conversation to plan",
    "structured action plan from audio",
    "AI action plan generator",
  ],
});

export default function ActionPlansLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Features", href: "/features" },
          { name: "Action Plans", href: "/features/action-plans" },
        ]}
      />
      <HowToSchema name="How to Generate Action Plans from Audio" description="Transform conversations into structured step-by-step plans with priorities and ownership." steps={[
        { name: "Record or Upload", text: "Capture a strategy session, planning meeting, or any conversation where next steps are discussed." },
        { name: "Sythio Structures", text: "The audio is analyzed for goals, steps, dependencies, and ownership. A structured plan emerges from the conversation." },
        { name: "Get Your Action Plan", text: "Receive a phased, prioritized action plan with owners, deadlines, and dependencies. Ready to execute immediately." },
      ]} />
      {children}
    </>
  );
}
