import * as React from "react"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-11 w-full min-w-0 rounded-lg border border-input bg-white px-4 py-2.5 text-sm text-foreground shadow-xs transition-colors outline-none placeholder:text-muted-foreground/70 focus-visible:border-brand/60 focus-visible:ring-3 focus-visible:ring-brand/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-24 w-full rounded-lg border border-input bg-white px-4 py-3 text-sm text-foreground shadow-xs transition-colors outline-none placeholder:text-muted-foreground/70 focus-visible:border-brand/60 focus-visible:ring-3 focus-visible:ring-brand/20 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "text-sm font-medium text-foreground select-none",
        className
      )}
      {...props}
    />
  )
}

export { Input, Textarea, Label }
