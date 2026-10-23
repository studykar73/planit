import type { Metadata } from "next";
import { ForVendorsPage } from "@/components/for-vendors-page";

export const metadata: Metadata = {
  title: "For Vendors — PlanIt",
  description:
    "Join PlanIt as a vendor and reach hundreds of hosts planning their perfect celebration.",
};

export default function ForVendors() {
  return <ForVendorsPage />;
}
