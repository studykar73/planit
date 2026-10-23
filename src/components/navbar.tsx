"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useUser } from "@/hooks/use-user";
import { logOut } from "@/lib/auth";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Categories", href: "/categories" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Vendors", href: "/for-vendors" },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const user = useUser();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-50 w-full border-b border-transparent">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="shrink-0">
          <Logo className="text-[28px]" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-forest",
                pathname === link.href
                  ? "text-forest after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-brand"
                  : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="icon"
            className="size-9 rounded-full text-forest hover:bg-transparent hover:opacity-70"
            aria-label="Search"
          >
            <Search className="size-[18px]" />
          </Button>
          {user ? (
            <>
              <span className="flex items-center gap-2.5 rounded-full bg-white py-1.5 pr-4 pl-1.5 shadow-sm">
                <span className="flex size-8 items-center justify-center rounded-full bg-forest text-xs font-bold text-cream">
                  {initials(user.name)}
                </span>
                <span className="max-w-28 truncate text-sm font-medium text-forest">
                  {user.name.split(" ")[0]}
                </span>
              </span>
              <Button
                onClick={logOut}
                className="h-10 rounded-full border border-forest/25 bg-transparent px-5 text-sm font-medium text-forest hover:border-forest/40 hover:bg-white"
              >
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" className="h-10 rounded-full px-4 text-sm font-medium text-forest hover:bg-transparent hover:opacity-70">
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild className="h-10 rounded-full bg-forest px-6 text-sm font-medium text-cream hover:bg-forest-light">
                <Link href="/signup">Get Started</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex size-10 items-center justify-center rounded-full text-forest transition-colors hover:bg-forest/5 md:hidden"
        >
          <Menu className="size-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-forest/40 backdrop-blur-[2px] md:hidden"
            />

            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col bg-cream shadow-2xl md:hidden"
            >
              <div className="flex h-20 items-center justify-between px-6">
                <Logo className="text-[26px]" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex size-10 items-center justify-center rounded-full text-forest transition-colors hover:bg-forest/5"
                >
                  <X className="size-5.5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.35 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "block rounded-xl px-4 py-3.5 text-[17px] font-medium transition-colors",
                        pathname === link.href
                          ? "bg-brand-soft text-forest"
                          : "text-foreground hover:bg-forest/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto space-y-3 border-t border-border/70 px-6 py-6">
                {user ? (
                  <>
                    <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
                      <span className="flex size-10 items-center justify-center rounded-full bg-forest text-sm font-bold text-cream">
                        {initials(user.name)}
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-forest">
                          {user.name}
                        </p>
                        <p className="truncate text-xs text-muted-foreground">
                          {user.email}
                        </p>
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        logOut();
                        setOpen(false);
                      }}
                      className="h-11 w-full rounded-full border border-forest/25 bg-transparent text-sm font-medium text-forest hover:border-forest/40 hover:bg-white"
                    >
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      className="h-11 w-full gap-2 rounded-full border-forest/25 bg-transparent text-sm font-medium text-forest hover:border-forest/40 hover:bg-white"
                    >
                      <Search className="size-4" />
                      Search
                    </Button>
                    <Button
                      asChild
                      className="h-11 w-full rounded-full bg-forest text-sm font-medium text-cream hover:bg-forest-light"
                    >
                      <Link href="/signup" onClick={() => setOpen(false)}>
                        Get Started
                      </Link>
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      Have an account?{" "}
                      <Link
                        href="/login"
                        onClick={() => setOpen(false)}
                        className="font-medium text-brand underline-offset-4 hover:underline"
                      >
                        Log In
                      </Link>
                    </p>
                  </>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
