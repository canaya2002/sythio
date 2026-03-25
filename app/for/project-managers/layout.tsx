import { buildMetadata } from "../../lib/metadata";
import { BreadcrumbSchema } from "../../components/json-ld";

export const metadata = buildMetadata({
  title: "Sythio for Project Managers — Meeting Notes, Action Items & Follow-ups",
  description:
    "Project managers live in meetings. Sythio turns every conversation into structured notes, task lists, action plans, and stakeholder updates — automatically.",
  path: "/for/project-managers",
  keywords: [
    "AI for project managers",
    "meeting notes for PMs",
    "project manager productivity",
    "AI action items from meetings",
    "PM meeting tool",
    "automated meeting follow-ups",
  ],
});

export default function ProjectManagersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "For Project Managers", href: "/for/project-managers" },
        ]}
      />
      {children}
    </>
  );
}
