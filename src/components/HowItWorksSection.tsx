"use client";

import { ClipboardList, Handshake, CalendarCheck, PartyPopper } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Tell Us Your Vision",
    description:
      "Share your event type, date, budget, and style. We'll match you with the right vendors instantly.",
  },
  {
    icon: Handshake,
    number: "02",
    title: "Handpick Your Vendors",
    description:
      "Browse curated venues, caterers, decorators, photographers, and more — all vetted and ready to book.",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Book & Coordinate — All in One Place",
    description:
      "Confirm bookings, manage payments, and message vendors without juggling a dozen apps or spreadsheets.",
  },
  {
    icon: PartyPopper,
    number: "04",
    title: "Show Up and Celebrate",
    description:
      "We handle the coordination behind the scenes so you can actually enjoy your event.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[#f8f5ff] py-24">
      <div className="mx-auto max-w-[1200px] px-10">
        {/* Section header */}
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-[36px] font-extrabold tracking-tight text-[#1a1a2e] sm:text-[42px]">
            How It Works
          </h2>
          <p className="text-[17px] text-[#6b6b8d]">
            From idea to event day — in just a few clicks.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-[#f0ebff] bg-[#faf8ff] p-6 transition-all hover:border-[#d8c8f7] hover:shadow-lg hover:shadow-[#6C3CE1]/5"
            >
              {/* Step number */}
              <span className="mb-4 inline-block text-[13px] font-bold text-[#c4b5fd]">
                STEP {step.number}
              </span>

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#6C3CE1] transition-transform group-hover:scale-110">
                <step.icon className="h-6 w-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-[16px] font-bold text-[#1a1a2e]">
                {step.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-[#6b6b8d]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
