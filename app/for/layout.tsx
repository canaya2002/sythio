import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, ItemListSchema } from "../components/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "AI Audio for Every Professional Role",
  description: "Whether you're a student, founder, consultant, or lawyer — Sythio transforms your audio into structured output tailored to your work.",
  path: "/for",
  keywords: ["audio intelligence", "voice notes for professionals", "AI for meetings", "productivity tool"],
});

export default function ForLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Built For", href: "/for" },
        ]}
      />
      <ItemListSchema
        name="Sythio for Every Professional"
        description="Sythio adapts to your role — AI-powered voice notes for students, founders, project managers, salespeople, consultants, and lawyers."
        items={[
          { name: "For Students", url: "/for/students", position: 1 },
          { name: "For Founders", url: "/for/founders", position: 2 },
          { name: "For Project Managers", url: "/for/project-managers", position: 3 },
          { name: "For Salespeople", url: "/for/salespeople", position: 4 },
          { name: "For Consultants", url: "/for/consultants", position: 5 },
          { name: "For Lawyers", url: "/for/lawyers", position: 6 },
        ]}
      />
      {children}
    </>
  );
}
