import type { Metadata } from "next";
import { AuthPage } from "@/components/auth-page";

export const metadata: Metadata = {
  title: "Log In — PlanIt",
  description: "Log in to your PlanIt account.",
};

export default function LoginPage() {
  return <AuthPage initialMode="login" />;
}
