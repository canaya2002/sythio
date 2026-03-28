import { buildMetadata } from "../lib/metadata";
import { BreadcrumbSchema, FAQSchema } from "../components/json-ld";
import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
  title: "Enterprise AI Audio Intelligence for Teams",
  description: "Team workspaces, API access, SSO, custom templates, and dedicated support. Deploy Sythio across your organization. Contact sales.",
  path: "/enterprise",
  keywords: ["enterprise voice notes", "team meeting notes AI", "enterprise transcription", "API audio intelligence", "SSO voice notes", "enterprise audio AI"],
});

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Enterprise", href: "/enterprise" }]} />
      <FAQSchema items={[
        { question: "How does Sythio Enterprise pricing work?", answer: "Sythio Enterprise offers custom pricing based on team size, usage volume, and required features. Contact our sales team for a tailored quote." },
        { question: "Does Sythio support SSO and enterprise security?", answer: "Yes. Sythio Enterprise includes SAML SSO, SCIM provisioning, role-based access controls, audit logs, and data residency options." },
        { question: "Can Sythio integrate with our existing tools?", answer: "Yes. Sythio Enterprise includes API access and integrations with Slack, Notion, Google Workspace, Microsoft 365, Salesforce, and custom webhooks." },
        { question: "Is there a minimum team size for Enterprise?", answer: "Sythio Enterprise is designed for teams of 10 or more. For smaller teams, our Premium plan at $12/month per user offers most features." },
      ]} />
      {children}
    </>
  );
}
