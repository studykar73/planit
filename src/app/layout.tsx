import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlanIt — Everything you need for your event, at the ease of 1 Click",
  description:
    "One platform. Trusted vendors. Seamless coordination. Plan weddings, corporate events, and more with one click.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full overflow-y-auto">{children}</body>
    </html>
  );
}
