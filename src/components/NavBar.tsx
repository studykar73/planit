"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "#services" },
  { label: "For Vendors", href: "#vendors" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f5ff]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#6C3CE1]">
            <span className="text-xl font-extrabold text-white">1</span>
            <div className="absolute -top-1 -left-1 h-2.5 w-2.5 rounded-full bg-[#FFB800]" />
          </div>
          <span className="text-[22px] font-bold tracking-tight text-[#1a1a2e]">
            OneClick
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-medium text-[#4a4a68] transition-colors hover:text-[#1a1a2e]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden text-[15px] font-semibold text-[#4a4a68] transition-colors hover:text-[#1a1a2e] sm:block"
          >
            Log In
          </Link>
          <Link
            href="#"
            className="rounded-full bg-[#6C3CE1] px-7 py-3 text-[15px] font-semibold text-white shadow-lg shadow-[#6C3CE1]/25 transition-all hover:bg-[#5a30c4] hover:shadow-xl"
          >
            Get Started
          </Link>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl text-[#4a4a68] transition-colors hover:bg-white/60 lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
