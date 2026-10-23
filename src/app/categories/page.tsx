import type { Metadata } from "next";
import { CategoriesPage } from "@/components/categories-page";

export const metadata: Metadata = {
  title: "Categories — PlanIt",
  description:
    "Browse trusted vendors across every category — decorations, cakes, venues, catering, photography and more.",
};

export default function Categories() {
  return <CategoriesPage />;
}
