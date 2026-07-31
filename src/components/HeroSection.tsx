"use client";

import { Sparkles, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import { FloatingCards } from "./FloatingCards";
import { EventImage } from "./EventImage";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8f5ff]">
      {/* Subtle radial gradient bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#ede5ff]/60 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-10 py-16 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
        {/* Left content */}
        <div className="flex flex-1 flex-col">
          {/* Tagline pill */}
          <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#d8c8f7] bg-[#f0ebff] px-5 py-2">
            <Sparkles className="h-4 w-4 text-[#6C3CE1]" />
            <span className="text-[13px] font-semibold text-[#6C3CE1]">
              Your Event. Our Everything.
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-4 max-w-[520px] text-[38px] font-extrabold leading-[1.1] tracking-tight text-[#1a1a2e] sm:text-[44px] md:text-[50px]">
            Everything you need for your event, at the ease of{" "}
            <span className="text-[#6C3CE1]">1 Click</span>.
          </h1>

          {/* Subtext */}
          <p className="mb-7 max-w-[440px] text-[16px] leading-relaxed text-[#6b6b8d]">
            One platform. Trusted vendors. Seamless coordination. You plan the
            moments, we handle the rest.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="#"
              className="group flex items-center justify-center gap-2.5 rounded-full bg-[#6C3CE1] px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-[#6C3CE1]/25 transition-all hover:bg-[#5a30c4] hover:shadow-xl"
            >
              Plan My Event
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#"
              className="group flex items-center justify-center gap-2.5 rounded-full border-2 border-[#e0d6f7] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1a1a2e] transition-all hover:border-[#c4b5fd] hover:bg-[#f8f5ff]"
            >
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#6C3CE1]">
                <Play className="h-2.5 w-2.5 fill-[#6C3CE1] text-[#6C3CE1]" />
              </div>
              See How It Works
            </Link>
          </div>
        </div>

        {/* Right - Event image with floating cards */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative h-[380px] w-[380px] lg:h-[450px] lg:w-[450px]">
            <FloatingCards />
            <EventImage />
          </div>
        </div>
      </div>
    </section>
  );
}
