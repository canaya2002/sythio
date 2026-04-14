import { cookies, headers } from "next/headers";
import Hero from "./components/sections/hero";
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
import { SpeakablePageSchema } from "./components/json-ld";

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
      <SpeakablePageSchema
        url="/"
        name="Sythio — Voice Notes AI App | 9 Outputs from One Recording"
        description="Sythio is the #1 voice notes AI app. Turn one recording into summaries, tasks, action plans, reports, and 5 more outputs. Speaker detection included."
        speakableSelectors={["h1", "[data-speakable]", ".sr-only h1", ".sr-only > p:first-of-type"]}
      />
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
