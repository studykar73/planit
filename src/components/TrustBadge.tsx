import { type LucideIcon } from "lucide-react";

interface TrustBadgeProps {
  icon: LucideIcon;
  value: string;
  label: string;
}

export function TrustBadge({ icon: Icon, value, label }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
        <Icon className="h-5 w-5 text-indigo-600" />
      </div>
      <div>
        <p className="text-lg font-bold text-slate-900">{value}</p>
        <p className="text-xs font-medium text-slate-500">{label}</p>
      </div>
    </div>
  );
}
