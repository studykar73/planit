import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-slate-900">PlanIt</span>
        </div>
        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} PlanIt. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
