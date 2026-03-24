import { buildMetadata } from "../lib/metadata";

export const metadata = buildMetadata({
  title: "Contact — Support & Inquiries",
  description:
    "Get in touch with Sythio. Support, partnerships, press inquiries, and general questions. We typically respond within 24 hours.",
  path: "/contact",
  keywords: ["contact Sythio", "Sythio support", "AI voice notes help"],
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
