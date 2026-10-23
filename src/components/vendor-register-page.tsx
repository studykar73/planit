"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle2,
  CircleAlert,
  Loader2,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label, Textarea } from "@/components/ui/input";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

type FormState = {
  businessName: string;
  ownerName: string;
  mobile: string;
  cnic: string;
  address: string;
};

const initialForm: FormState = {
  businessName: "",
  ownerName: "",
  mobile: "",
  cnic: "",
  address: "",
};

const onlyDigits = (value: string) => value.replace(/\D/g, "");

const formatMobile = (value: string) => {
  const digits = onlyDigits(value).slice(0, 11);
  if (digits.length <= 4) return digits;
  return `${digits.slice(0, 4)}-${digits.slice(4)}`;
};

const formatCnic = (value: string) => {
  const digits = onlyDigits(value).slice(0, 13);
  const parts = [digits.slice(0, 5), digits.slice(5, 12), digits.slice(12)];
  return parts.filter(Boolean).join("-");
};

const validate = (form: FormState) => {
  const errors: Partial<Record<keyof FormState, string>> = {};

  if (!form.businessName.trim())
    errors.businessName = "Business or brand name is required.";
  if (!form.ownerName.trim()) errors.ownerName = "Owner's full name is required.";

  const mobileDigits = onlyDigits(form.mobile);
  if (!mobileDigits)
    errors.mobile = "Mobile number is required.";
  else if (!/^03\d{9}$/.test(mobileDigits))
    errors.mobile = "Enter a valid number like 0300-1234567.";

  const cnicDigits = onlyDigits(form.cnic);
  if (!cnicDigits) errors.cnic = "CNIC number is required.";
  else if (!/^\d{13}$/.test(cnicDigits))
    errors.cnic = "CNIC must be 13 digits, e.g. 12345-1234567-1.";

  if (!form.address.trim()) errors.address = "Business address is required.";
  else if (form.address.trim().length < 10)
    errors.address = "Please enter a full address.";

  return errors;
};

export function VendorRegisterPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const update = (field: keyof FormState, value: string) => {
    const nextValue =
      field === "mobile"
        ? formatMobile(value)
        : field === "cnic"
          ? formatCnic(value)
          : value;
    setForm((prev) => ({ ...prev, [field]: nextValue }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 900);
  };

  if (status === "success") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-cream px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-[0_24px_60px_-18px_rgba(15,61,49,0.2)]"
        >
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-soft">
            <PartyPopper className="size-8 text-brand" />
          </div>
          <h1 className="mt-5 text-2xl font-bold text-forest">
            You&apos;re in, {form.ownerName.split(" ")[0]}!
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">
              {form.businessName}
            </span>{" "}
            has been created. We&apos;ll verify your CNIC and reach you on{" "}
            <span className="font-semibold text-foreground">
              {form.mobile}
            </span>
            .
          </p>

          <div className="mt-6 space-y-2 rounded-2xl bg-cream p-4 text-left">
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="size-4 shrink-0 text-brand" />
              CNIC on file: {form.cnic}
            </p>
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="size-4 shrink-0 text-brand" />
              {form.address}
            </p>
          </div>

          <Button
            className="mt-6 h-12 w-full rounded-full bg-forest text-sm font-medium text-cream hover:bg-forest-light"
            onClick={() => {
              setForm(initialForm);
              setStatus("idle");
            }}
          >
            Back to form
          </Button>
        </motion.div>
      </main>
    );
  }

  const fields: Array<{
    id: keyof FormState;
    label: string;
    placeholder: string;
    type?: string;
    inputMode?: "text" | "tel" | "numeric";
  }> = [
    {
      id: "businessName",
      label: "Business or brand name",
      placeholder: "e.g. Sweet Moments Cakes",
    },
    {
      id: "ownerName",
      label: "Owner's full name",
      placeholder: "e.g. Ayesha Khan",
    },
    {
      id: "mobile",
      label: "Mobile number",
      placeholder: "0300-1234567",
      type: "tel",
      inputMode: "tel",
    },
    {
      id: "cnic",
      label: "CNIC number",
      placeholder: "12345-1234567-1",
      type: "text",
      inputMode: "numeric",
    },
  ];

  return (
    <main className="min-h-screen bg-cream">
      <section className="mx-auto max-w-xl px-6 py-16 lg:px-0 lg:py-24">
        <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }} initial="hidden" animate="show">
          <motion.div variants={fadeUp}>
            <Link
              href="/for-vendors"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-forest"
            >
              <ArrowLeft className="size-4" />
              Back
            </Link>

            <span className="mt-6 inline-flex items-center rounded-full bg-brand-soft px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-forest uppercase">
              Vendor Sign Up
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-forest sm:text-[38px]">
              Create your vendor account
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Fill in your details — it takes less than a minute.
            </p>
          </motion.div>

          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            noValidate
            className="mt-9 space-y-5 rounded-3xl border border-border/60 bg-white p-6 shadow-[0_2px_14px_-6px_rgba(15,61,49,0.08)] sm:p-8"
          >
            {fields.map((field) => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.id}>{field.label}</Label>
                <Input
                  id={field.id}
                  type={field.type}
                  inputMode={field.inputMode}
                  placeholder={field.placeholder}
                  value={form[field.id]}
                  onChange={(e) => update(field.id, e.target.value)}
                  aria-invalid={Boolean(errors[field.id])}
                  className={
                    errors[field.id]
                      ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
                      : undefined
                  }
                />
                {errors[field.id] && (
                  <p className="flex items-center gap-1.5 text-xs font-medium text-destructive">
                    <CircleAlert className="size-3.5" />
                    {errors[field.id]}
                  </p>
                )}
              </div>
            ))}

            <div className="space-y-2">
              <Label htmlFor="address">Business address</Label>
              <Textarea
                id="address"
                placeholder="House no, street, area, city"
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
                aria-invalid={Boolean(errors.address)}
                className={
                  errors.address
                    ? "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20"
                    : undefined
                }
              />
              {errors.address && (
                <p className="flex items-center gap-1.5 text-xs font-medium text-destructive">
                  <CircleAlert className="size-3.5" />
                  {errors.address}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 h-13 w-full gap-2 rounded-full bg-forest text-base font-medium text-cream hover:bg-forest-light"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Creating account…
                </>
              ) : (
                "Create account"
              )}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Already a vendor?{" "}
              <Link
                href="/login"
                className="font-medium text-brand underline-offset-4 hover:underline"
              >
                Log in
              </Link>
            </p>
          </motion.form>
        </motion.div>
      </section>
    </main>
  );
}
