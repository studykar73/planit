import { NavBar } from "@/components/NavBar";
import { HowItWorksSection } from "@/components/HowItWorksSection";

export default function HowItWorksPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 overflow-y-auto pt-[72px]">
        <HowItWorksSection />
      </main>
    </>
  );
}
