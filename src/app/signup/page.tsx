import type { Metadata } from "next";
import { AuthPage } from "@/components/auth-page";

export const metadata: Metadata = {
  title: "Sign Up — PlanIt",
  description: "Create your PlanIt account.",
};

export default function SignupPage() {
  return <AuthPage initialMode="signup" />;
}
