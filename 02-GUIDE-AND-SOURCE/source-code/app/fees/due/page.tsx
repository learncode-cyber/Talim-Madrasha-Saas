// app/fees/due/page.tsx
"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { StatCard } from "@/components/ui/StatCard";
import { DataRow } from "@/components/ui/DataRow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SearchFilterBar } from "@/components/ui/SearchFilterBar";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { Users, Banknote, Clock3, Megaphone, Download } from "lucide-react";

const DUES = [
  { id: 1, name: "আবু বকর সিদ্দিক", roll: "০০২", cls: "দাওরা হাদিস", months: "জুন", amount: "৫০০", long: false },
  { id: 2, name: "আলী ইবনে আবি তালিব", roll: "০০৫", cls: "হিদায়া", months: "মে, জুন", amount: "৯০০", long: true },
];

export default function FeesDuePage() {
  const [query, setQuery] = useState("");
  const [confirmTarget, setConfirmTarget] = useState<(typeof DUES)[number] | null>(null);

  function collectFee(student: (typeof DUES)[number]) {
    // আসল API কল এখানে হবে (Laravel bridge) — এই demo-তে শুধু state
    console.log("fee collected for", student.id);
  }

  const filtered = DUES.filter((d) => d.name.includes(query) || d.roll.includes(query));

  return (
    <AppShell
      title="বেকয়া তালিকা"
      breadcrumb="হোম → অর্থ → বেকয়া"
      headerActions={
        <Button variant="secondary" size="sm">
          <Download className="h-4 w-4" strokeWidth={2} />
          Export
        </Button>
      }
    >
      <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <StatCard icon={Users} value="৮" label="মোট বেকয়া জন" sub="জনের বেতন বাকি" tone="danger" />
        <StatCard icon={Banknote} value="৫,৩০০ ৳" label="মোট বেকয়া টাকা" sub="এই মাসের" tone="danger" />
        <StatCard icon={Clock3} value="৩" label="৩ মাসের বেশি বাকি" sub="জন দীর্ঘ বেকয়া" tone="warn" />
      </div>

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-amber-100">
            <Megaphone className="h-4.5 w-4.5 text-amber-600" strokeWidth={2} />
          </div>
          <div>
            <div className="text-[13.5px] font-bold text-slate-900">সবাইকে একসাথে reminder পাঠান</div>
            <div className="text-[11.5px] text-slate-500">৮ জন অভিভাবককে বেতন reminder পাঠান</div>
          </div>
        </div>
        <Button variant="primary" size="sm">
          সবাইকে SMS পাঠান
        </Button>
      </div>

      <SearchFilterBar
        placeholder="নাম, রোল বা মোবাইল..."
        value={query}
        onChange={setQuery}
        filterOptions={["সকল শ্রেণি", "দাওরা হাদিস", "মিশকাত", "হিদায়া"]}
        filterValue="সকল শ্রেণি"
      />

      <div className="rounded-2xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <span className="text-[13.5px] font-bold text-slate-900">বেকয়া শিক্ষার্থীর তালিকা</span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11.5px] font-semibold text-slate-600">
            {filtered.length} জন
          </span>
        </div>

        {filtered.map((d, i) => (
          <DataRow
            key={d.id}
            avatarLabel={d.name[0]}
            avatarSeed={i}
            title={d.name}
            meta={<span>রোল: {d.roll} · {d.cls}</span>}
            tag={<Badge tone={d.long ? "warn" : "danger"}>{d.long ? `${d.months} দীর্ঘ বেকয়া` : d.months}</Badge>}
            amount={`${d.amount} ৳`}
            actions={
              <>
                <Button variant="primary" size="sm" onClick={() => setConfirmTarget(d)}>
                  ফি নিন
                </Button>
                <Button variant="secondary" size="sm">
                  SMS
                </Button>
              </>
            }
          />
        ))}
      </div>

      <ConfirmDialog
        open={confirmTarget !== null}
        title="ফি গ্রহণ নিশ্চিত করুন"
        desc={confirmTarget ? `${confirmTarget.name} থেকে ${confirmTarget.amount} ৳ ফি গ্রহণ হিসেবে যুক্ত হবে। এটি পরে সম্পাদনা করা যাবে।` : ""}
        confirmLabel="হ্যাঁ, ফি নিন"
        onConfirm={() => confirmTarget && collectFee(confirmTarget)}
        onClose={() => setConfirmTarget(null)}
      />
    </AppShell>
  );
}
