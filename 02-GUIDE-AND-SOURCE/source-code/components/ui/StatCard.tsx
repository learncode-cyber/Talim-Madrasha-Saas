import { LucideIcon } from "lucide-react";
import { clsx } from "./cn";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  sub?: string;
  tone?: "default" | "danger" | "warn";
}

const toneStyles = {
  default: { card: "border-slate-200", iconBg: "bg-brand-50", iconColor: "text-brand-600", sub: "text-slate-500" },
  danger: { card: "border-red-200 bg-red-50/40", iconBg: "bg-red-100", iconColor: "text-red-600", sub: "text-red-600" },
  warn: { card: "border-amber-200", iconBg: "bg-amber-100", iconColor: "text-amber-600", sub: "text-amber-600" },
};

export function StatCard({ icon: Icon, value, label, sub, tone = "default" }: StatCardProps) {
  const t = toneStyles[tone];
  return (
    <div className={clsx("rounded-2xl border bg-white p-4", t.card)}>
      <div className={clsx("mb-2.5 flex h-9 w-9 items-center justify-center rounded-lg", t.iconBg)}>
        <Icon className={clsx("h-4.5 w-4.5", t.iconColor)} strokeWidth={2} />
      </div>
      <div className="text-2xl font-bold leading-none text-slate-900">{value}</div>
      <div className="mt-1 text-xs text-slate-500">{label}</div>
      {sub && <div className={clsx("mt-1.5 text-xs font-semibold", t.sub)}>{sub}</div>}
    </div>
  );
}
