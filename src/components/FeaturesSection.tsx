import { Zap, Shield, Tag, Headphones } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "One Click Solution",
    description: "All your event needs in one place.",
  },
  {
    icon: Shield,
    title: "Trusted & Verified Vendors",
    description: "Quality you can trust, service you can rely on.",
  },
  {
    icon: Tag,
    title: "Best Prices",
    description: "Competitive pricing, maximum value.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We're here, anytime you need us.",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-[#f8f5ff] pb-16">
      <div className="mx-auto max-w-[1200px] px-10">
        <div className="grid grid-cols-1 rounded-3xl border border-[#e8e0f7] bg-white shadow-xl shadow-[#6C3CE1]/5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex items-start gap-4 p-6 ${
                index < FEATURES.length - 1
                  ? "border-b border-[#f0ebff] sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6C3CE1]">
                <feature.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="mb-1 text-[14px] font-bold text-[#1a1a2e]">
                  {feature.title}
                </h3>
                <p className="text-[12px] leading-relaxed text-[#6b6b8d]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
