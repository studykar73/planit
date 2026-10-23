"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  PartyPopper,
  Search,
  ShieldCheck,
  Smile,
  Star,
  Store,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const steps = [
  {
    n: 1,
    icon: Search,
    title: "Browse",
    description: "Explore vendors and services for your event.",
  },
  {
    n: 2,
    icon: Calendar,
    title: "Book",
    description: "Select what you need and confirm in one click.",
  },
  {
    n: 3,
    icon: PartyPopper,
    title: "Celebrate",
    description: "Sit back and enjoy your special day!",
  },
];

const bookingItems = [
  {
    name: "Balloon Decoration",
    price: "From Rs. 3,000",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Chocolate Cake",
    price: "From Rs. 2,500",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Event Decorator",
    price: "From Rs. 8,000",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Gift Hampers",
    price: "From Rs. 1,500",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=200&q=80",
  },
];

const benefits = [
  {
    icon: Smile,
    title: "Less Stress for Hosts",
    description:
      "Save time, compare options, and book everything in one place.",
  },
  {
    icon: Store,
    title: "More Customers for Vendors",
    description: "Get a steady stream of bookings and grow your business.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Reliable",
    description: "Verified vendors, secure payments, and proper support.",
  },
  {
    icon: Star,
    title: "More Value, Less Cost",
    description:
      "Transparent pricing, exclusive deals, and no hidden fees.",
  },
];

export function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Steps section */}
      <section className="mx-auto max-w-7xl px-6 pt-14 pb-20 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center rounded-full bg-brand-soft px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-forest uppercase"
            >
              How It Works
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-[42px]"
            >
              Plan It in 3 Simple Steps
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-[15px] text-muted-foreground"
            >
              From browsing to booking, it&apos;s quick, easy, and
              stress-free.
            </motion.p>

            <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className="relative"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-7 items-center justify-center rounded-full bg-forest text-[11px] font-bold text-cream">
                      {step.n}
                    </span>
                    <step.icon className="size-7 text-forest" strokeWidth={1.75} />
                  </div>

                  <h2 className="mt-5 text-lg font-bold text-forest">
                    {step.title}
                  </h2>
                  <p className="mt-2 max-w-[190px] text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  {i < steps.length - 1 && (
                    <ArrowRight
                      className="absolute top-1.5 -right-3 hidden size-5 text-forest/70 sm:block"
                      strokeWidth={2}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mock booking card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="relative mx-auto w-full max-w-[340px]"
          >
            {/* soft green blob */}
            <div
              className="absolute -top-10 -right-16 -z-10 size-64 rounded-full bg-brand-soft/80 blur-[2px] sm:size-72"
              aria-hidden
            />

            {/* squiggle */}
            <svg
              className="absolute -top-8 right-2 hidden h-14 w-14 text-brand sm:block"
              viewBox="0 0 50 50"
              fill="none"
              aria-hidden
            >
              <path
                d="M10 38 C 22 30, 28 18, 22 8 C 20 5, 16 8, 18 12"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            <div className="rounded-[24px] bg-white p-4 shadow-[0_24px_60px_-18px_rgba(15,61,49,0.2)]">
              <div className="flex items-center justify-between px-1 pb-3">
                <ArrowLeft className="size-4 text-forest" />
                <span className="text-[13px] font-semibold text-forest">
                  Birthday Party
                </span>
                <Search className="size-4 text-forest" />
              </div>

              <ul className="space-y-2.5">
                {bookingItems.map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + i * 0.1, duration: 0.45 }}
                    className="flex items-center gap-3 rounded-2xl bg-cream/80 p-2.5"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="size-12 shrink-0 rounded-xl object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12.5px] font-semibold text-forest">
                        {item.name}
                      </p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground">
                        {item.price}
                      </p>
                    </div>
                    <button className="shrink-0 rounded-lg bg-forest px-3.5 py-1.5 text-[11px] font-medium text-cream transition-colors hover:bg-forest-light">
                      Book
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why PlanIt section */}
      <section className="bg-[#f5f1e8]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-10 lg:py-20">
          <div className="relative">
            <div className="overflow-hidden rounded-[22px] shadow-[0_20px_50px_-16px_rgba(15,61,49,0.25)]">
              <Image
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80"
                alt="Elegant outdoor event table with string lights and floral centerpiece"
                width={900}
                height={700}
                className="aspect-[4/3.6] w-full object-cover"
              />
            </div>

            <div className="absolute -top-6 -right-2 hidden flex-col items-start sm:flex">
              <span className="font-hand text-2xl font-semibold text-forest">
                Better Events
              </span>
              <span className="font-hand text-2xl font-semibold text-forest">
                Happier People
              </span>
              <svg
                className="mt-1 ml-6 h-8 w-10 text-brand"
                viewBox="0 0 40 30"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 4 C 10 18, 18 22, 30 14"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M22 12 L 32 12 L 28 20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center rounded-full bg-brand-soft px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-forest uppercase"
            >
              Why PlanIt
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-5 text-3xl font-bold tracking-tight text-forest sm:text-[36px]"
            >
              A Win-Win for Hosts &amp; Vendors
            </motion.h2>

            <div className="mt-9 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  variants={fadeUp}
                  className="flex gap-4"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest/8 text-forest">
                    <benefit.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold text-forest">
                      {benefit.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="relative overflow-hidden bg-forest">
        {/* spark lines left */}
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

        {/* spark lines right */}
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
