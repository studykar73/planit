import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-flex items-end font-bold tracking-tight select-none",
        className
      )}
    >
      <span className="text-forest">Plan</span>
      <span className="relative text-brand">
        it
        <svg
          className="absolute -top-3 -right-3.5 h-4 w-4 text-brand"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M12 3v4" />
          <path d="M5.5 6.5l2.5 2.5" />
          <path d="M18.5 6.5l-2.5 2.5" />
        </svg>
      </span>
    </span>
  );
}
