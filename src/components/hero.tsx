"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CakeSlice,
  Check,
  Flame,
  Flower2,
  Gift,
  PartyPopper,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const checklist = [
  {
    label: "Decorations",
    icon: Flower2,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
  },
  {
    label: "Cake",
    icon: CakeSlice,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    label: "Gifts",
    icon: Gift,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  {
    label: "Candles",
    icon: Flame,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    label: "Decorator",
    icon: User,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-12 pb-24 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-10 lg:pt-16">
        {/* Left content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-xl"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200/70 bg-white px-4 py-2 text-sm font-medium text-forest shadow-sm">
              <span className="flex size-6 items-center justify-center rounded-full bg-orange-500 text-white">
                <Gift className="size-3.5" />
              </span>
              Your Entire Event, One Place
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl leading-[1.12] font-bold tracking-tight text-forest sm:text-5xl lg:text-[56px]"
          >
            Plan Your Perfect Celebration{" "}
            <span className="font-bold text-brand italic">with Planit</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
          >
            From decorations to cakes, gifts to venues — find and book
            everything you need for your special moments, all in one place. No
            more juggling vendors. Just one click.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <Button className="group h-13 gap-2 rounded-full bg-forest px-8 py-7 text-base font-medium text-cream hover:bg-forest-light">
              Start Planning
              <ArrowRight className="size-4.5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="h-13 rounded-full border-forest/25 bg-transparent px-8 py-7 text-base font-medium text-forest hover:border-forest/40 hover:bg-white"
            >
              Browse Vendors
            </Button>
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-[560px] lg:max-w-none"
        >
          {/* Decorative spark lines */}
          <motion.svg
            className="absolute -top-6 right-2 hidden h-16 w-16 text-brand sm:block"
            viewBox="0 0 60 60"
            fill="none"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            aria-hidden
          >
            <path
              d="M42 8 L50 2"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M46 18 L56 16"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M48 30 L58 32"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </motion.svg>

          {/* Main image */}
          <div className="overflow-hidden rounded-[28px] shadow-[0_30px_70px_-20px_rgba(15,61,49,0.35)]">
            <Image
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80"
              alt="Beautifully decorated birthday celebration setup with cake, balloons and flowers"
              width={1200}
              height={900}
              priority
              className="aspect-[4/3.4] w-full object-cover"
            />
          </div>

          {/* Checklist floating card */}
          <motion.div
            initial={{ opacity: 0, x: -24, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[8%] -left-3 w-[240px] rounded-2xl bg-white p-5 shadow-[0_18px_45px_-12px_rgba(15,61,49,0.22)] sm:-left-8 sm:w-[256px]"
          >
            <motion.ul
              className="space-y-3.5"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.75 } },
              }}
            >
              {checklist.map((item) => (
                <motion.li
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.4, ease: "easeOut" },
                    },
                  }}
                  className="flex items-center justify-between"
                >
                  <span className="flex items-center gap-2.5">
                    <span
                      className={`flex size-8 items-center justify-center rounded-xl ${item.iconBg}`}
                    >
                      <item.icon className={`size-4 ${item.iconColor}`} />
                    </span>
                    <span className="text-[13.5px] font-medium text-foreground">
                      {item.label}
                    </span>
                  </span>
                  <Check className="size-4 text-brand" strokeWidth={3} />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Everything booked card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 -bottom-6 w-[220px] rounded-2xl bg-white p-5 text-center shadow-[0_18px_45px_-12px_rgba(15,61,49,0.22)] sm:-right-6"
          >
            <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-orange-50">
              <PartyPopper className="size-6 text-orange-500" />
            </div>
            <h3 className="mt-3 text-[15px] font-bold text-forest">
              Everything booked!
            </h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              Your event is all set.
              <br />
              Get ready to celebrate!
            </p>
            <Button className="mt-4 h-9 w-full rounded-lg bg-forest text-xs font-medium text-cream hover:bg-forest-light">
              View Bookings
            </Button>
          </motion.div>

          {/* Handwritten note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute -bottom-14 left-2 hidden items-end gap-1 sm:flex"
          >
            <span className="font-hand text-2xl font-semibold text-forest">
              All in
              <br />
              one place
            </span>
            <svg
              className="mb-1 h-12 w-16 text-forest"
              viewBox="0 0 80 60"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 8 C 30 4, 58 18, 68 44"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M58 40 L 70 48 L 72 32"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
