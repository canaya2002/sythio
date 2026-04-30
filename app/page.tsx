import { cookies, headers } from "next/headers";
import { seoMetadata } from "./lib/metadata";
import Hero from "./components/sections/hero";

/* Locale-aware canonical for the homepage. Without this, /es, /fr, /pt, /it
   all canonicalize to https://sythio.com (English) — Google then dedupes
   them and refuses to index the localized variants. */
export const generateMetadata = seoMetadata({
  title: "Sythio — Voice Notes AI App | 9 Outputs from One Recording",
  description:
    "Sythio is the #1 voice notes AI app. Turn one recording into summaries, tasks, action plans, reports, and 5 more outputs. Speaker detection included. Free plan — no credit card required.",
  path: "",
});

import Problem from "./components/sections/problem";
import HowItWorks from "./components/sections/how-it-works";
import MultipleOutcomes from "./components/sections/multiple-outcomes";
import SpeakerDetection from "./components/sections/speaker-detection";
import Integrations from "./components/sections/integrations";
import Collaboration from "./components/sections/collaboration";
import ExportFeatures from "./components/sections/export-features";
import Security from "./components/sections/security";
import UseCases from "./components/sections/use-cases";
import ProductExperience from "./components/sections/product-experience";
import FinalCTA from "./components/sections/final-cta";
import { HomeSEOContent } from "./components/seo-content";

export default async function Home() {
  const [headerStore, cookieStore] = await Promise.all([headers(), cookies()]);
  const locale =
    headerStore.get("x-locale") ||
    cookieStore.get("NEXT_LOCALE")?.value ||
    "en";

  return (
    <>
      {/* Server-rendered SEO content — visible to crawlers, hidden visually */}
      <HomeSEOContent locale={locale} />
      <Hero />
      <Problem />
      <HowItWorks />
      <MultipleOutcomes />
      <SpeakerDetection />
      <Integrations />
      <Collaboration />
      <ExportFeatures />
      <Security />
      <UseCases />
      <ProductExperience />
      <FinalCTA />
    </>
  );
}
