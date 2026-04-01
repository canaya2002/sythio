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

export default function Home() {
  return (
    <>
      {/* Server-rendered SEO content — visible to crawlers, hidden visually */}
      <HomeSEOContent />
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
