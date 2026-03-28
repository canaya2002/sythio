import { buildMetadata } from "../lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "AI Audio for Every Professional Role",
  description: "Whether you're a student, founder, consultant, or lawyer — Sythio transforms your audio into structured output tailored to your work.",
  path: "/for",
  keywords: ["audio intelligence", "voice notes for professionals", "AI for meetings", "productivity tool"],
});

export default function ForLayout({ children }: { children: React.ReactNode }) {
  return children;
}
