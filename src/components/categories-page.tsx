"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Cake,
  Camera,
  Flame,
  Gift,
  MapPin,
  Music,
  PartyPopper,
  Sparkles,
  Tent,
  User,
  UtensilsCrossed,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const categories = [
  {
    name: "Decorations",
    icon: Sparkles,
    description: "Floral setups, backdrops & themed decor.",
    services: 120,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    popular: true,
  },
  {
    name: "Cakes & Desserts",
    icon: Cake,
    description: "Custom cakes, cupcakes & sweet tables.",
    services: 86,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
    popular: true,
  },
  {
    name: "Venues",
    icon: MapPin,
    description: "Banquet halls, lawns & party spaces.",
    services: 64,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    name: "Catering",
    icon: UtensilsCrossed,
    description: "Caterers, menus & live food stations.",
    services: 73,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    name: "Photography",
    icon: Camera,
    description: "Photo, video & candid moments.",
    services: 91,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    popular: true,
  },
  {
    name: "Gifts & Hampers",
    icon: Gift,
    description: "Curated hampers & return gifts.",
    services: 48,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    name: "Balloons & Props",
    icon: PartyPopper,
    description: "Balloon arches, props & neon signs.",
    services: 57,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500",
  },
  {
    name: "Music & DJ",
    icon: Music,
    description: "DJs, live bands & sound systems.",
    services: 39,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500",
  },
  {
    name: "Candles & Lighting",
    icon: Flame,
    description: "Birthday candles & warm lighting.",
    services: 31,
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    name: "Event Decorators",
    icon: User,
    description: "Professional decorators & planners.",
    services: 68,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    name: "Tents & Rentals",
    icon: Tent,
    description: "Canopies, seating & party rentals.",
    services: 26,
    iconBg: "bg-lime-100",
    iconColor: "text-lime-600",
  },
  {
    name: "Return Gifts",
    icon: Sparkles,
    description: "Thoughtful favors for every guest.",
    services: 34,
    iconBg: "bg-fuchsia-100",
    iconColor: "text-fuchsia-500",
  },
];

const stats = [
  { value: "500+", label: "Verified Vendors" },
  { value: "12", label: "Categories" },
  { value: "10k+", label: "Events Planned" },
  { value: "4.8", label: "Average Rating" },
];

export function CategoriesPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pt-14 pb-10 lg:px-10">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full bg-brand-soft px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-forest uppercase"
          >
            Categories
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-[42px]"
          >
            Everything You Need,{" "}
            <span className="text-brand italic">One Search Away</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground"
          >
            Browse trusted vendors across every category — from decorations to
            venues — and book in a single click.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-8 border-t border-border/70 pt-8 sm:gap-14"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-forest sm:text-[28px]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Category grid */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={fadeUp}>
              <Link
                href="/"
                className="group relative flex h-full flex-col rounded-2xl border border-border/60 bg-white p-6 shadow-[0_2px_10px_-4px_rgba(15,61,49,0.06)] transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_40px_-14px_rgba(15,61,49,0.18)]"
              >
                {category.popular && (
                  <span className="absolute top-4 right-4 rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-semibold tracking-wide text-brand uppercase">
                    Popular
                  </span>
                )}

                <span
                  className={`flex size-12 items-center justify-center rounded-2xl ${category.iconBg}`}
                >
                  <category.icon
                    className={`size-5.5 ${category.iconColor}`}
                    strokeWidth={1.75}
                  />
                </span>

                <h2 className="mt-4 text-[17px] font-bold text-forest">
                  {category.name}
                </h2>
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
                  {category.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground">
                    {category.services}+ services
                  </span>
                  <span className="flex size-8 items-center justify-center rounded-full bg-cream text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA section */}
      <section className="relative overflow-hidden bg-forest">
        <svg
          className="absolute top-10 left-8 hidden h-14 w-14 text-brand sm:block"
          viewBox="0 0 50 50"
          fill="none"
          aria-hidden
        >
          <path d="M14 12 L6 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M10 24 L2 24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M14 36 L6 42" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        </svg>

        <svg
          className="absolute right-8 bottom-10 hidden h-14 w-14 text-brand sm:block"
          viewBox="0 0 50 50"
          fill="none"
          aria-hidden
        >
          <path d="M14 12 L6 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M10 24 L2 24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M14 36 L6 42" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        </svg>

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-16 lg:flex-row lg:items-center lg:px-10 lg:py-20">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-[38px] lg:text-[42px]">
              Your Next Celebration
              <br />
              <span className="font-bold text-brand italic">Starts Here</span>
            </h2>
            <p className="mt-4 text-[15px] text-white/70">
              Plan it all. Book it all. Celebrate it all.
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:items-end">
            <Link
              href="/signup"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-white px-8 text-[15px] font-semibold text-forest transition-colors hover:bg-cream"
            >
              Get Started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-[13px] text-white/70">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
