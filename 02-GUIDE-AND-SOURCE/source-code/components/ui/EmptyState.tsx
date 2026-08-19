import { LucideIcon } from "lucide-react";

export function EmptyState({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <div className="px-5 py-14 text-center">
      <div className="mx-auto mb-3.5 flex h-13 w-13 items-center justify-center rounded-2xl bg-slate-100">
        <Icon className="h-6 w-6 text-slate-400" strokeWidth={1.7} />
      </div>
      <div className="mb-1 text-sm font-bold text-slate-900">{title}</div>
      <div className="mx-auto max-w-xs text-xs text-slate-500">{desc}</div>
    </div>
  );
}
