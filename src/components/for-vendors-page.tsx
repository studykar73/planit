"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Handshake,
  Store,
  TrendingUp,
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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const perks = [
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Reach hundreds of hosts actively planning events.",
  },
  {
    icon: Store,
    title: "Your Own Storefront",
    description: "Showcase services, pricing and photos in one place.",
  },
  {
    icon: Handshake,
    title: "Zero Hassle Bookings",
    description: "Confirmed requests, secure payments, real support.",
  },
];

export function ForVendorsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-20 text-center lg:px-10 lg:py-28">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center rounded-full bg-brand-soft px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-forest uppercase"
          >
            For Vendors
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-3xl font-bold tracking-tight text-forest sm:text-4xl lg:text-[46px]"
          >
            Do you want to become{" "}
            <span className="text-brand italic">a vendor?</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-muted-foreground"
          >
            Join PlanIt and put your services in front of people planning their
            perfect celebration.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/for-vendors/register"
              className="group inline-flex h-13 items-center gap-2 rounded-full bg-forest px-8 text-base font-medium text-cream transition-colors hover:bg-forest-light"
            >
              Yes, sign me up
              <ArrowRight className="size-4.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/"
              className="inline-flex h-13 items-center gap-2 rounded-full border border-forest/25 px-8 text-base font-medium text-forest transition-colors hover:border-forest/40 hover:bg-white"
            >
              No, I&apos;m here to plan an event
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 grid gap-8 text-left sm:grid-cols-3"
          >
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="rounded-2xl border border-border/60 bg-white p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-soft text-forest">
                  <perk.icon className="size-5" strokeWidth={1.75} />
                </span>
                <h2 className="mt-4 text-[15px] font-bold text-forest">
                  {perk.title}
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {perk.description}
                </p>
                <span className="mt-3 flex items-center gap-1.5 text-xs font-medium text-brand">
                  <CheckCircle2 className="size-3.5" /> Included
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-forest"
            >
              <ArrowLeft className="size-4" />
              Back to home
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
