import { LucideIcon } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { StatCard } from "@/components/ui/StatCard";
import { DataRow } from "@/components/ui/DataRow";
import { LazyTrendChart } from "@/components/ui/LazyTrendChart";
import type { TrendPoint } from "@/components/ui/TrendChart";

export interface DashboardStat {
  icon: LucideIcon;
  value: string;
  label: string;
  sub?: string;
  tone?: "default" | "danger" | "warn";
}
export interface DashboardActivity {
  avatarLabel: string;
  title: string;
  meta: string;
  amount?: string;
}

interface DashboardTemplateProps {
  title: string;
  breadcrumb: string;
  stats: DashboardStat[];
  activityTitle?: string;
  activity: DashboardActivity[];
  chart?: { title: string; data: TrendPoint[]; valueSuffix?: string };
}

export function DashboardTemplate({ title, breadcrumb, stats, activityTitle = "সাম্প্রতিক কার্যক্রম", activity, chart }: DashboardTemplateProps) {
  return (
    <AppShell title={title} breadcrumb={breadcrumb}>
      <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {stats.map((s, i) => (
          <StatCard key={i} icon={s.icon} value={s.value} label={s.label} sub={s.sub} tone={s.tone} />
        ))}
      </div>

      {chart && (
        <div className="mb-4">
          <LazyTrendChart title={chart.title} data={chart.data} valueSuffix={chart.valueSuffix} />
        </div>
      )}

      <div className="rounded-2xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <span className="text-[13.5px] font-bold text-slate-900">{activityTitle}</span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11.5px] font-semibold text-slate-600">
            আজ
          </span>
        </div>
        {activity.map((a, i) => (
          <DataRow
            key={i}
            avatarLabel={a.avatarLabel}
            avatarSeed={i}
            title={a.title}
            meta={<span>{a.meta}</span>}
            amount={a.amount}
            actions={null}
          />
        ))}
      </div>
    </AppShell>
  );
}
