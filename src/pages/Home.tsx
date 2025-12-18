import HeroSection from "../components/home/HeroSection";
import StopBuyingSection from "../components/home/StopBuyingSection";
import FeaturesSection from "../components/home/FeaturesSection";
import IntegrationsSection from "../components/home/IntegrationsSection";
import WhyAISection from "../components/home/WhyAISection";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full bg-background min-h-screen text-foreground overflow-x-hidden relative">
      <HeroSection />
      <StopBuyingSection />
      <FeaturesSection />
      <IntegrationsSection />
      <WhyAISection />
      <FinalCTA />
    </div>
  );
}
