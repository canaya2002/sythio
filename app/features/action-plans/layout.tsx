import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema, HowToSchema, FAQSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "AI Action Plans from Conversations",
  description:
    "Turn conversations into step-by-step action plans. Sythio creates organized plans with clear steps, owners, and priorities.",
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
      <FAQSchema items={[
        { question: "What is an AI-generated action plan?", answer: "An AI-generated action plan is a structured, step-by-step plan created from your audio recording. Sythio identifies goals, tasks, owners, priorities, and dependencies, then organizes them into phases you can execute immediately." },
        { question: "How is an action plan different from a task list?", answer: "A task list is a flat checklist. An action plan adds structure: phases, priorities, dependencies, and ownership. Sythio builds plans that show not just what to do, but in what order and who is responsible." },
        { question: "Can Sythio generate action plans from strategy meetings?", answer: "Yes. Strategy sessions, planning meetings, project kickoffs, and any conversation with next steps are ideal inputs. Sythio turns the discussion into an organized plan with clear phases and owners." },
      ]} />
      {children}
    </>
  );
}
