"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  UtensilsCrossed,
  Flower2,
  Camera,
  Volume2,
  Music,
  Gift,
  Users,
  Star,
  MapPin,
  ArrowRight,
  ChevronRight,
  X,
  Clock,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

const SERVICES = [
  {
    id: 1,
    icon: Building2,
    name: "Premium Banquet Hall",
    vendor: "Grand Venues Co.",
    location: "Downtown, Main City",
    price: "$500",
    priceRange: "$300 - $800",
    rating: 4.8,
    reviews: 124,
    level: "Premium",
    type: "Venue",
    status: "Offering",
    statusColor: "green",
    description:
      "Elegant banquet hall with capacity for 200-500 guests. IncludesTables, chairs, stage, parking, and basic AV equipment. Customizable layout for weddings, corporate events, and celebrations.",
    features: [
      "Capacity: 200-500 guests",
      "In-house catering available",
      "Free parking (200 spots)",
      "Stage & dance floor included",
      "Bridal suite available",
    ],
  },
  {
    id: 2,
    icon: UtensilsCrossed,
    name: "Gourmet Catering Service",
    vendor: "Chef's Table Catering",
    location: "Central Park Area",
    price: "$200",
    priceRange: "$150 - $500",
    rating: 4.9,
    reviews: 89,
    level: "Professional",
    type: "Catering",
    status: "Offering",
    statusColor: "green",
    description:
      "Farm-to-table catering with customizable menus. From intimate gatherings to grand buffets, our chefs craft memorable culinary experiences with locally sourced ingredients.",
    features: [
      "Custom menu planning",
      "Dietary accommodations",
      "Full-service staff included",
      "Tasting session before event",
      "Eco-friendly packaging",
    ],
  },
  {
    id: 3,
    icon: Flower2,
    name: "Luxury Event Decor",
    vendor: "Bloom & Bliss Decor",
    location: "Uptown District",
    price: "$350",
    priceRange: "$200 - $1,200",
    rating: 4.7,
    reviews: 67,
    level: "Luxury",
    type: "Decor",
    status: "Offering",
    statusColor: "green",
    description:
      "Bespoke event styling and floral design. We transform venues into breathtaking spaces with curated themes, fresh flowers, lighting, and custom installations.",
    features: [
      "Free initial consultation",
      "Theme customization",
      "Fresh flower arrangements",
      "Lighting design included",
      "Setup & teardown service",
    ],
  },
  {
    id: 4,
    icon: Camera,
    name: "Cinematic Photography",
    vendor: "FramePerfect Studio",
    location: "Creative Quarter",
    price: "$450",
    priceRange: "$300 - $900",
    rating: 4.6,
    reviews: 156,
    level: "Professional",
    type: "Photography",
    status: "Limited",
    statusColor: "yellow",
    description:
      "Documentary-style photography and videography. Candid moments, editorial portraits, and cinematic highlight reels that tell your story beautifully.",
    features: [
      "8-hour coverage",
      "2 photographers included",
      "500+ edited photos",
      "Online gallery access",
      "Same-day sneak peeks",
    ],
  },
  {
    id: 5,
    icon: Volume2,
    name: "Pro Sound & Lighting",
    vendor: "AudioVisual Masters",
    location: "Tech Park",
    price: "$400",
    priceRange: "$250 - $700",
    rating: 4.5,
    reviews: 43,
    level: "Premium",
    type: "AV Setup",
    status: "Offering",
    statusColor: "green",
    description:
      "Professional sound systems and intelligent lighting for events of any scale. Crystal-clear audio and stunning light shows that create the perfect atmosphere.",
    features: [
      "Professional PA system",
      "Intelligent lighting rigs",
      "Wireless microphone setup",
      "DJ equipment available",
      "On-site technician",
    ],
  },
  {
    id: 6,
    icon: Music,
    name: "Live Band & DJ",
    vendor: "Rhythm Events",
    location: "Music District",
    price: "$500",
    priceRange: "$350 - $1,000",
    rating: 4.8,
    reviews: 78,
    level: "Professional",
    type: "Entertainment",
    status: "Popular",
    statusColor: "purple",
    description:
      "High-energy live bands and professional DJs for weddings, parties, and corporate events. Custom playlists, MC services, and full sound setup included.",
    features: [
      "3-6 hour performance",
      "Custom playlist curation",
      "MC / host services",
      "Full sound & lighting",
      "Song request management",
    ],
  },
  {
    id: 7,
    icon: Gift,
    name: "Custom Gift Favors",
    vendor: "GiftCraft Studio",
    location: "Artisan Market",
    price: "$75",
    priceRange: "$50 - $200",
    rating: 4.4,
    reviews: 92,
    level: "Standard",
    type: "Gifts",
    status: "Offering",
    statusColor: "green",
    description:
      "Personalized party favors and guest gifts. From custom packaging to branded items, we create memorable takeaways your guests will treasure.",
    features: [
      "Custom branding options",
      "Bulk order discounts",
      "Eco-friendly materials",
      "Gift wrapping included",
      "Samples before ordering",
    ],
  },
  {
    id: 8,
    icon: Users,
    name: "Full-Service Planning",
    vendor: "PlanIt Concierge",
    location: "City Center",
    price: "$800",
    priceRange: "$500 - $2,000",
    rating: 5.0,
    reviews: 34,
    level: "Elite",
    type: "Planning",
    status: "Premium",
    statusColor: "purple",
    description:
      "End-to-end event planning and coordination. From concept to execution, our expert planners handle every detail so you can focus on enjoying your special day.",
    features: [
      "Dedicated event planner",
      "Vendor selection & booking",
      "Timeline management",
      "Day-of coordination",
      "Budget optimization",
    ],
  },
];

const TABS = ["Overview", "Reviews", "About Vendor"];

export function ServicesSection() {
  const [selected, setSelected] = useState(SERVICES[0]);
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="bg-[#f8f5ff]">
      {/* Header */}
      <div className="border-b border-[#e8e0f7] bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#6C3CE1]">
                  <span className="text-lg font-extrabold text-white">1</span>
                  <div className="absolute -top-1 -left-1 h-2 w-2 rounded-full bg-[#FFB800]" />
                </div>
                <span className="text-lg font-bold text-[#1a1a2e]">
                  PlanIt
                </span>
              </Link>
              <div className="hidden items-center gap-6 md:flex">
                <Link
                  href="/#how-it-works"
                  className="text-[14px] font-medium text-[#6b6b8d] hover:text-[#1a1a2e]"
                >
                  How It Works
                </Link>
                <span className="rounded-full bg-[#6C3CE1] px-4 py-1.5 text-[13px] font-semibold text-white">
                  Services
                </span>
                <Link
                  href="#"
                  className="text-[14px] font-medium text-[#6b6b8d] hover:text-[#1a1a2e]"
                >
                  For Vendors
                </Link>
                <Link
                  href="#"
                  className="text-[14px] font-medium text-[#6b6b8d] hover:text-[#1a1a2e]"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-[14px] font-semibold text-[#6b6b8d] hover:text-[#1a1a2e]"
              >
                Log In
              </Link>
              <Link
                href="#"
                className="rounded-full bg-[#6C3CE1] px-6 py-2.5 text-[14px] font-semibold text-white shadow-md shadow-[#6C3CE1]/20 hover:bg-[#5a30c4]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="border-b border-[#e8e0f7] bg-white">
        <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-6 py-3">
          {["All Services", "Venues", "Catering", "Decor", "Photography", "Entertainment"].map(
            (tab, i) => (
              <button
                key={tab}
                className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${
                  i === 0
                    ? "bg-[#6C3CE1] text-white"
                    : "text-[#6b6b8d] hover:bg-[#f0ebff] hover:text-[#6C3CE1]"
                }`}
              >
                {tab}
              </button>
            )
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto flex max-w-[1400px] gap-0 px-6 py-6">
        {/* Left - Service grid */}
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => {
                setSelected(service);
                setActiveTab("Overview");
              }}
              className={`group flex flex-col rounded-2xl border p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-lg ${
                selected.id === service.id
                  ? "border-[#6C3CE1] bg-white shadow-md shadow-[#6C3CE1]/10"
                  : "border-[#f0ebff] bg-white hover:border-[#c4b5fd]"
              }`}
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0ebff]">
                  <service.icon className="h-5 w-5 text-[#6C3CE1]" />
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                    service.statusColor === "green"
                      ? "bg-green-50 text-green-600"
                      : service.statusColor === "yellow"
                        ? "bg-amber-50 text-amber-600"
                        : "bg-purple-50 text-purple-600"
                  }`}
                >
                  {service.status}
                </span>
              </div>
              <h3 className="mb-1 text-[15px] font-bold text-[#1a1a2e]">
                {service.name}
              </h3>
              <p className="mb-2 text-[13px] text-[#6b6b8d]">
                {service.vendor}
              </p>
              <div className="mb-3 flex items-center gap-1.5 text-[12px] text-[#9090a8]">
                <MapPin className="h-3 w-3" />
                {service.location}
              </div>
              <div className="flex items-center justify-between border-t border-[#f5f0ff] pt-3">
                <span className="text-[14px] font-bold text-[#6C3CE1]">
                  {service.price}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <span className="text-[13px] font-semibold text-[#1a1a2e]">
                    {service.rating}
                  </span>
                  <span className="text-[12px] text-[#9090a8]">
                    ({service.reviews})
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Right - Detail sidebar */}
        <div className="hidden w-[420px] shrink-0 pl-6 lg:block">
          <div className="sticky top-6 rounded-2xl border border-[#f0ebff] bg-white p-6 shadow-sm">
            {/* Header */}
            <div className="mb-5 flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f0ebff]">
                <selected.icon className="h-7 w-7 text-[#6C3CE1]" />
              </div>
              <div className="flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <h2 className="text-[18px] font-bold text-[#1a1a2e]">
                    {selected.name}
                  </h2>
                  <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-600">
                    Active
                  </span>
                </div>
                <p className="text-[13px] text-[#6b6b8d]">
                  {selected.vendor}
                </p>
              </div>
            </div>

            {/* Info chips */}
            <div className="mb-5 flex flex-wrap gap-3">
              <div className="rounded-xl bg-[#faf8ff] px-3 py-2 text-center">
                <p className="text-[11px] text-[#9090a8]">Type</p>
                <p className="text-[13px] font-semibold text-[#1a1a2e]">
                  {selected.type}
                </p>
              </div>
              <div className="rounded-xl bg-[#faf8ff] px-3 py-2 text-center">
                <p className="text-[11px] text-[#9090a8]">Level</p>
                <p className="text-[13px] font-semibold text-[#1a1a2e]">
                  {selected.level}
                </p>
              </div>
              <div className="rounded-xl bg-[#faf8ff] px-3 py-2 text-center">
                <p className="text-[11px] text-[#9090a8]">Price Range</p>
                <p className="text-[13px] font-bold text-[#6C3CE1]">
                  {selected.priceRange}
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-5 flex gap-1 border-b border-[#f0ebff]">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`border-b-2 px-3 py-2 text-[13px] font-medium transition-colors ${
                    activeTab === tab
                      ? "border-[#6C3CE1] text-[#6C3CE1]"
                      : "border-transparent text-[#9090a8] hover:text-[#1a1a2e]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab content */}
            {activeTab === "Overview" && (
              <div>
                <p className="mb-5 text-[14px] leading-relaxed text-[#4a4a68]">
                  {selected.description}
                </p>
                <h4 className="mb-3 text-[13px] font-bold text-[#1a1a2e]">
                  What&apos;s Included
                </h4>
                <ul className="space-y-2.5">
                  {selected.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[13px] text-[#4a4a68]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6C3CE1]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "Reviews" && (
              <div className="space-y-4">
                {[
                  {
                    name: "Sarah M.",
                    rating: 5,
                    date: "2 weeks ago",
                    text: "Absolutely amazing service! They made our wedding day perfect.",
                  },
                  {
                    name: "James K.",
                    rating: 5,
                    date: "1 month ago",
                    text: "Professional, responsive, and exceeded all our expectations.",
                  },
                  {
                    name: "Priya R.",
                    rating: 4,
                    date: "2 months ago",
                    text: "Great experience overall. Would definitely recommend to others.",
                  },
                ].map((review) => (
                  <div
                    key={review.name}
                    className="rounded-xl border border-[#f5f0ff] p-4"
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0ebff] text-[12px] font-bold text-[#6C3CE1]">
                          {review.name[0]}
                        </div>
                        <span className="text-[13px] font-semibold text-[#1a1a2e]">
                          {review.name}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#9090a8]">
                        {review.date}
                      </span>
                    </div>
                    <div className="mb-1.5 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
                        />
                      ))}
                    </div>
                    <p className="text-[13px] text-[#4a4a68]">{review.text}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "About Vendor" && (
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0ebff]">
                    <selected.icon className="h-6 w-6 text-[#6C3CE1]" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-[#1a1a2e]">
                      {selected.vendor}
                    </p>
                    <p className="text-[12px] text-[#6b6b8d]">
                      Member since 2023
                    </p>
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-[#faf8ff] p-3 text-center">
                    <p className="text-[18px] font-bold text-[#6C3CE1]">
                      {selected.rating}
                    </p>
                    <p className="text-[11px] text-[#9090a8]">Rating</p>
                  </div>
                  <div className="rounded-xl bg-[#faf8ff] p-3 text-center">
                    <p className="text-[18px] font-bold text-[#6C3CE1]">
                      {selected.reviews}
                    </p>
                    <p className="text-[11px] text-[#9090a8]">Reviews</p>
                  </div>
                  <div className="rounded-xl bg-[#faf8ff] p-3 text-center">
                    <p className="text-[18px] font-bold text-[#6C3CE1]">
                      50+
                    </p>
                    <p className="text-[11px] text-[#9090a8]">Events</p>
                  </div>
                </div>
                <p className="text-[13px] leading-relaxed text-[#4a4a68]">
                  Trusted vendor with a proven track record of delivering
                  exceptional event services. Verified and vetted by the PlanIt
                  team for quality and reliability.
                </p>
              </div>
            )}

            {/* Action buttons */}
            <div className="mt-6 flex gap-3">
              <Link
                href="#"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#6C3CE1] py-3 text-[14px] font-semibold text-white shadow-md shadow-[#6C3CE1]/20 transition-all hover:bg-[#5a30c4]"
              >
                Book Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 rounded-full border-2 border-[#e0d6f7] px-5 py-3 text-[14px] font-semibold text-[#1a1a2e] transition-all hover:border-[#c4b5fd] hover:bg-[#f8f5ff]"
              >
                <MessageSquare className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
