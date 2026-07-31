"use client";

import {
  Building2,
  Flower2,
  UtensilsCrossed,
  Camera,
  Volume2,
  Gift,
} from "lucide-react";

const SERVICES = [
  { icon: Building2, label: "Venues", position: "top-[5%] left-[58%]" },
  { icon: Flower2, label: "Decor", position: "top-[2%] right-[6%]" },
  { icon: UtensilsCrossed, label: "Catering", position: "top-[35%] left-[42%]" },
  { icon: Camera, label: "Photography", position: "bottom-[22%] left-[35%]" },
  { icon: Volume2, label: "Sound &\nLighting", position: "top-[22%] right-[0%]" },
  { icon: Gift, label: "Gifts & More", position: "bottom-[15%] right-[2%]" },
];

export function FloatingCards() {
  return (
    <>
      {SERVICES.map((service) => (
        <div
          key={service.label}
          className={`absolute ${service.position} z-10 flex flex-col items-center gap-1 rounded-2xl border border-[#e8e0f7] bg-white/95 px-3.5 py-2.5 shadow-md shadow-[#6C3CE1]/5 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f0ebff]">
            <service.icon className="h-4 w-4 text-[#6C3CE1]" />
          </div>
          <span className="whitespace-pre-line text-center text-[10px] font-semibold leading-tight text-[#4a4a68]">
            {service.label}
          </span>
        </div>
      ))}
    </>
  );
}
