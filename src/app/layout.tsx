import type { Metadata } from "next";
import { Poppins, Caveat } from "next/font/google";
import { CursorCartTrail } from "@/components/cursor-cart-trail";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PlanIt — Your Entire Event, One Place",
  description:
    "From decorations to cakes, gifts to venues — find and book everything you need for your special moments, all in one place.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-foreground">
        {children}
        <CursorCartTrail />
      </body>
    </html>
  );
}
