import type { Metadata } from "next";
import { VendorRegisterPage } from "@/components/vendor-register-page";

export const metadata: Metadata = {
  title: "Vendor Sign Up — PlanIt",
  description: "Create your PlanIt vendor account in under a minute.",
};

export default function VendorRegister() {
  return <VendorRegisterPage />;
}
