import { buildMetadata } from "../lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of Sythio. Covers subscriptions, acceptable use, AI-generated outputs, intellectual property, and more.",
  path: "/terms",
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
