import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-1 overflow-y-auto">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
      </main>
    </>
  );
}
