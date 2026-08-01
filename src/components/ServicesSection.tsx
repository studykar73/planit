"use client";

import Link from "next/link";
import {
  Building2,
  UtensilsCrossed,
  Flower2,
  Camera,
  Volume2,
  Music,
  Gift,
  Users,
  ArrowRight,
  ShieldCheck,
  BadgeDollarSign,
  Lock,
  Star,
  Sparkles,
  Phone,
} from "lucide-react";

const SERVICES = [
  {
    icon: Building2,
    name: "Venues",
    description: "Find the perfect space for any occasion",
    price: "$300",
  },
  {
    icon: UtensilsCrossed,
    name: "Catering",
    description: "Delicious menus from trusted local chefs",
    price: "$200",
  },
  {
    icon: Flower2,
    name: "Decor",
    description: "Transform your space with expert stylists",
    price: "$250",
  },
  {
    icon: Camera,
    name: "Photography & Videography",
    description: "Capture every moment beautifully",
    price: "$400",
  },
  {
    icon: Volume2,
    name: "Sound & Lighting",
    description: "Set the mood with professional AV",
    price: "$350",
  },
  {
    icon: Music,
    name: "Entertainment",
    description: "DJs, live music, and performers",
    price: "$300",
  },
  {
    icon: Gift,
    name: "Gifts & More",
    description: "Favors and gifts guests will remember",
    price: "$50",
  },
  {
    icon: Users,
    name: "Event Planners",
    description: "Full-service coordination on demand",
    price: "$500",
  },
];

const DIFFERENTIATORS = [
  { icon: ShieldCheck, label: "Verified Vendors Only" },
  { icon: BadgeDollarSign, label: "Transparent Pricing" },
  { icon: Lock, label: "Secure Payments" },
  { icon: Star, label: "Real Reviews from Real Clients" },
];

export function ServicesSection() {
  return (
    <section className="bg-[#f8f5ff]">
      {/* Header */}
      <div className="mx-auto max-w-[1200px] px-10 pt-16 pb-12 text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d8c8f7] bg-[#f0ebff] px-5 py-2">
          <Sparkles className="h-4 w-4 text-[#6C3CE1]" />
          <span className="text-[13px] font-semibold text-[#6C3CE1]">
            Our Marketplace
          </span>
        </div>
        <h1 className="mb-4 text-[36px] font-extrabold tracking-tight text-[#1a1a2e] sm:text-[44px]">
          Everything Your Event Needs
        </h1>
        <p className="mx-auto max-w-[520px] text-[17px] text-[#6b6b8d]">
          From venues to vendors — book it all in one place.
        </p>
      </div>

      {/* Service cards grid */}
      <div className="mx-auto max-w-[1200px] px-10 pb-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.name}
              className="group relative flex flex-col rounded-2xl border border-[#f0ebff] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#c4b5fd] hover:shadow-xl hover:shadow-[#6C3CE1]/10"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0ebff] transition-colors group-hover:bg-[#6C3CE1]">
                <service.icon className="h-6 w-6 text-[#6C3CE1] transition-colors group-hover:text-white" />
              </div>

              {/* Name */}
              <h3 className="mb-1.5 text-[16px] font-bold text-[#1a1a2e]">
                {service.name}
              </h3>

              {/* Description */}
              <p className="mb-4 flex-1 text-[13px] leading-relaxed text-[#6b6b8d]">
                {service.description}
              </p>

              {/* Price + Link */}
              <div className="flex items-center justify-between border-t border-[#f5f0ff] pt-4">
                <span className="text-[13px] font-semibold text-[#6C3CE1]">
                  From {service.price}
                </span>
                <Link
                  href="#"
                  className="flex items-center gap-1 text-[13px] font-semibold text-[#4a4a68] transition-colors group-hover:text-[#6C3CE1]"
                >
                  View Vendors
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Differentiators strip */}
      <div className="border-y border-[#e8e0f7] bg-white">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8 px-10 py-8 sm:justify-between">
          {DIFFERENTIATORS.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6C3CE1]">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <span className="text-[14px] font-semibold text-[#1a1a2e]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA banner */}
      <div className="mx-auto max-w-[1200px] px-10 py-16">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#6C3CE1] to-[#8B5CF6] p-12 text-center">
          <h2 className="mb-3 text-[28px] font-extrabold text-white sm:text-[32px]">
            Can&apos;t find what you need?
          </h2>
          <p className="mb-8 text-[16px] text-white/80">
            Our coordinators are ready to help you find the perfect vendor.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#"
              className="flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#6C3CE1] shadow-lg transition-all hover:bg-[#f8f5ff] hover:shadow-xl"
            >
              Browse All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 text-[15px] font-semibold text-white transition-all hover:border-white/70 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Talk to a Coordinator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
