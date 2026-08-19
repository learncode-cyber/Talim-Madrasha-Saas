// app/dashboard/page.tsx
import { AppShell } from "@/components/layout/AppShell";
import { StatCard } from "@/components/ui/StatCard";
import { DataRow } from "@/components/ui/DataRow";
import { LazyTrendChart } from "@/components/ui/LazyTrendChart";
import { Users, AlertCircle, CalendarCheck } from "lucide-react";

export default function DashboardPage() {
  return (
    <AppShell title="ড্যাশবোর্ড" breadcrumb="হোম → ড্যাশবোর্ড">
      <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <StatCard icon={Users} value="৩৮৪" label="মোট শিক্ষার্থী" sub="+১২ এই মাসে" />
        <StatCard icon={AlertCircle} value="৮" label="বেকয়া শিক্ষার্থী" sub="৫,৩০০ ৳ বাকি" tone="danger" />
        <StatCard icon={CalendarCheck} value="৯৭%" label="আজকের হাজিরা" sub="৩৭২ জন উপস্থিত" tone="warn" />
      </div>

      <div className="mb-4">
        <LazyTrendChart
          title="সাপ্তাহিক উপস্থিতির হার"
          valueSuffix="%"
          data={[
            { label: "শনি", value: 91 },
            { label: "রবি", value: 94 },
            { label: "সোম", value: 89 },
            { label: "মঙ্গল", value: 96 },
            { label: "বুধ", value: 93 },
            { label: "বৃহঃ", value: 97 },
            { label: "শুক্র", value: 95 },
          ]}
        />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <span className="text-[13.5px] font-bold text-slate-900">সাম্প্রতিক কার্যক্রম</span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11.5px] font-semibold text-slate-600">
            আজ
          </span>
        </div>
        <DataRow
          avatarLabel="আ"
          avatarSeed={0}
          title="আবু বকর সিদ্দিক — ফি জমা দিয়েছেন"
          meta={<span>৫ মিনিট আগে</span>}
          amount="৫০০ ৳"
          actions={null}
        />
        <DataRow
          avatarLabel="ই"
          avatarSeed={1}
          title="ইয়াকুব আলী — নতুন ভর্তি হয়েছে"
          meta={<span>৩২ মিনিট আগে</span>}
          actions={null}
        />
      </div>
    </AppShell>
  );
}
