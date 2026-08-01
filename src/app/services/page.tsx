import { NavBar } from "@/components/NavBar";
import { ServicesSection } from "@/components/ServicesSection";

export default function ServicesPage() {
  return (
    <>
      <NavBar />
      <main className="flex-1 overflow-y-auto pt-[72px]">
        <ServicesSection />
      </main>
    </>
  );
}
