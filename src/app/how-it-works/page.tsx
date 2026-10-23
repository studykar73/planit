import type { Metadata } from "next";
import { HowItWorksPage } from "@/components/how-it-works-page";

export const metadata: Metadata = {
  title: "How It Works — PlanIt",
  description:
    "Plan your event in 3 simple steps — browse vendors, book services, and celebrate.",
};

export default function HowItWorks() {
  return <HowItWorksPage />;
}
