"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Cake,
  Check,
  CircleAlert,
  Eye,
  EyeOff,
  Gift,
  Loader2,
  Sparkles,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { useUser } from "@/hooks/use-user";
import { logIn, signUp } from "@/lib/auth";
import { cn } from "@/lib/utils";

type Mode = "login" | "signup";

const perks = [
  { icon: Sparkles, label: "Decorators & decorations" },
  { icon: Cake, label: "Cakes & desserts" },
  { icon: Gift, label: "Gifts & return hampers" },
];

export function AuthPage({ initialMode = "login" }: { initialMode?: Mode }) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user) router.replace("/");
  }, [user, router]);

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const switchMode = (next: Mode) => {
    setMode(next);
    setErrors({});
    setFormError("");
    setShowPassword(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    setFormError("");

    if (mode === "signup" && !form.name.trim())
      nextErrors.name = "Full name is required.";

    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = "Enter a valid email address.";

    if (!form.password) nextErrors.password = "Password is required.";
    else if (form.password.length < 8)
      nextErrors.password = "Password must be at least 8 characters.";

    if (mode === "signup" && form.confirmPassword !== form.password)
      nextErrors.confirmPassword = "Passwords do not match.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      const result =
        mode === "signup"
          ? signUp({
              name: form.name,
              email: form.email,
              password: form.password,
            })
          : logIn({ email: form.email, password: form.password });

      setSubmitting(false);

      if (!result.ok) {
        setFormError(result.error);
        return;
      }

      router.push("/");
    }, 600);
  };

  return (
    <main className="grid min-h-screen bg-cream lg:grid-cols-2">
      {/* Brand panel */}
      <aside className="relative hidden flex-col justify-between overflow-hidden bg-forest p-12 lg:flex">
        <svg
          className="absolute top-12 right-12 h-16 w-16 text-brand"
          viewBox="0 0 50 50"
          fill="none"
          aria-hidden
        >
          <path d="M14 12 L6 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M10 24 L2 24" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M14 36 L6 42" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
        </svg>

        <Link href="/">
          <Logo className="text-[30px] [&>span:first-child]:text-white" />
        </Link>

        <div className="max-w-md">
          <h1 className="text-4xl leading-tight font-bold text-white">
            Your Perfect Celebration
            <br />
            <span className="text-brand italic">Starts with PlanIt</span>
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-white/70">
            Join thousands of hosts planning everything they need — in one
            place.
          </p>

          <ul className="mt-10 space-y-4">
            {perks.map((perk) => (
              <li key={perk.label} className="flex items-center gap-3 text-white/90">
                <span className="flex size-8 items-center justify-center rounded-full bg-brand/20">
                  <perk.icon className="size-4 text-brand" />
                </span>
                <span className="text-[15px]">{perk.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-end gap-2">
          <span className="font-hand text-3xl font-semibold text-white/90">
            All in one place
          </span>
          <svg
            className="mb-2 h-12 w-16 text-brand"
            viewBox="0 0 80 60"
            fill="none"
            aria-hidden
          >
            <path
              d="M4 8 C 30 4, 58 18, 68 44"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M58 40 L 70 48 L 72 32"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </aside>

      {/* Form panel */}
      <section className="flex flex-col px-6 py-8 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between lg:justify-end">
          <Link href="/" className="lg:hidden">
            <Logo className="text-[26px]" />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-forest"
          >
            ← Back to home
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center rounded-full bg-brand-soft px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-forest uppercase">
              {mode === "login" ? "Welcome Back" : "Join PlanIt"}
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-forest sm:text-[36px]">
              {mode === "login" ? "Log in to your account" : "Create your account"}
            </h2>
            <p className="mt-3 text-[15px] text-muted-foreground">
              {mode === "login"
                ? "Pick up right where you left off."
                : "Start planning your perfect celebration today."}
            </p>
          </motion.div>

          {/* Mode switcher */}
          <div className="mt-8 grid grid-cols-2 gap-1 rounded-full border border-border/70 bg-white p-1">
            {(["login", "signup"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => switchMode(item)}
                className={cn(
                  "relative rounded-full py-2.5 text-sm font-medium transition-colors",
                  mode === item ? "text-cream" : "text-muted-foreground hover:text-forest"
                )}
              >
                {mode === item && (
                  <motion.span
                    layoutId="auth-tab"
                    className="absolute inset-0 rounded-full bg-forest"
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                <span className="relative z-10">
                  {item === "login" ? "Log In" : "Sign Up"}
                </span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
            {formError && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive"
              >
                <CircleAlert className="size-4 shrink-0" />
                {formError}
              </motion.p>
            )}
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                {mode === "signup" && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                      id="name"
                      placeholder="e.g. Ayesha Khan"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                      className={
                        errors.name
                          ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
                          : undefined
                      }
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1.5 text-xs font-medium text-destructive">
                        <CircleAlert className="size-3.5" />
                        {errors.name}
                      </p>
                    )}
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    className={
                      errors.email
                        ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
                        : undefined
                    }
                  />
                  {errors.email && (
                    <p className="flex items-center gap-1.5 text-xs font-medium text-destructive">
                      <CircleAlert className="size-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    {mode === "login" && (
                      <button
                        type="button"
                        className="text-xs font-medium text-brand underline-offset-4 hover:underline"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={form.password}
                      onChange={(e) => update("password", e.target.value)}
                      aria-invalid={Boolean(errors.password)}
                      className={
                        errors.password
                          ? "border-destructive pr-11 focus-visible:border-destructive focus-visible:ring-destructive/20"
                          : "pr-11"
                      }
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-forest"
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="flex items-center gap-1.5 text-xs font-medium text-destructive">
                      <CircleAlert className="size-3.5" />
                      {errors.password}
                    </p>
                  )}
                </div>

                {mode === "signup" && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={form.confirmPassword}
                      onChange={(e) => update("confirmPassword", e.target.value)}
                      aria-invalid={Boolean(errors.confirmPassword)}
                      className={
                        errors.confirmPassword
                          ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
                          : undefined
                      }
                    />
                    {errors.confirmPassword && (
                      <p className="flex items-center gap-1.5 text-xs font-medium text-destructive">
                        <CircleAlert className="size-3.5" />
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <Button
              type="submit"
              disabled={submitting}
              className="h-13 w-full gap-2 rounded-full bg-forest text-base font-medium text-cream hover:bg-forest-light"
            >
              {submitting ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  {mode === "login" ? "Logging in…" : "Creating account…"}
                </>
              ) : mode === "login" ? (
                "Log In"
              ) : (
                "Create Account"
              )}
            </Button>

            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              <span className="text-xs text-muted-foreground">or</span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/for-vendors/register")}
              className="h-12 w-full gap-2 rounded-full border-forest/25 bg-transparent text-sm font-medium text-forest hover:border-forest/40 hover:bg-white"
            >
              <Check className="size-4 text-brand" />
              Join as a vendor instead
            </Button>
          </form>

          <p className="mt-7 text-center text-sm text-muted-foreground">
            {mode === "login" ? (
              <>
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchMode("signup")}
                  className="font-semibold text-brand underline-offset-4 hover:underline"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => switchMode("login")}
                  className="font-semibold text-brand underline-offset-4 hover:underline"
                >
                  Log in
                </button>
              </>
            )}
          </p>
        </div>
      </section>
    </main>
  );
}
