import Hero from "./components/sections/hero";
import Problem from "./components/sections/problem";
import HowItWorks from "./components/sections/how-it-works";
import MultipleOutcomes from "./components/sections/multiple-outcomes";
import SpeakerDetection from "./components/sections/speaker-detection";
import UseCases from "./components/sections/use-cases";
import ProductExperience from "./components/sections/product-experience";
import FinalCTA from "./components/sections/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <MultipleOutcomes />
      <SpeakerDetection />
      <UseCases />
      <ProductExperience />
      <FinalCTA />
    </>
  );
}
