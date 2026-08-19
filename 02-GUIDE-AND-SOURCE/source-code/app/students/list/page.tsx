// app/students/list/page.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { SearchFilterBar } from "@/components/ui/SearchFilterBar";
import { DataRow } from "@/components/ui/DataRow";
import { Badge } from "@/components/ui/Badge";
import { Button, buttonVariants } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Plus, UserSearch } from "lucide-react";

// আসল প্রজেক্টে এটা API/DB থেকে আসবে (Laravel bridge হয়ে)
const STUDENTS = [
  { id: 1, name: "আবু বকর সিদ্দিক", roll: "০০২", cls: "দাওরা হাদিস", guardian: "০১৭xxxxxxxx", status: "নিয়মিত" as const },
  { id: 2, name: "ইয়াকুব আলী", roll: "০০৯", cls: "নাজেরা", guardian: "০১৮xxxxxxxx", status: "বেকয়া" as const },
];

export default function StudentsListPage() {
  const [query, setQuery] = useState("");
  const [cls, setCls] = useState("সকল শ্রেণি");

  const filtered = useMemo(
    () =>
      STUDENTS.filter(
        (s) =>
          (cls === "সকল শ্রেণি" || s.cls === cls) &&
          (s.name.includes(query) || s.roll.includes(query))
      ),
    [query, cls]
  );

  return (
    <AppShell
      title="শিক্ষার্থী তালিকা"
      breadcrumb="হোম → শিক্ষার্থী → তালিকা"
      headerActions={
        <Link href="/students/admission" className={buttonVariants({ variant: "primary" })}>
          <Plus className="h-4 w-4" strokeWidth={2.2} />
          নতুন ভর্তি
        </Link>
      }
    >
      <SearchFilterBar
        placeholder="নাম, রোল বা মোবাইল দিয়ে খুঁজুন..."
        value={query}
        onChange={setQuery}
        filterOptions={["সকল শ্রেণি", "দাওরা হাদিস", "মিশকাত", "হিদায়া", "নাজেরা", "হিফজ"]}
        filterValue={cls}
        onFilterChange={setCls}
      />

      <div className="rounded-2xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <span className="text-[13.5px] font-bold text-slate-900">সকল শিক্ষার্থী</span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11.5px] font-semibold text-slate-600">
            {filtered.length} জন
          </span>
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            icon={UserSearch}
            title="কোনো শিক্ষার্থী পাওয়া যায়নি"
            desc="অন্য নাম, রোল নম্বর দিয়ে খুঁজে দেখুন অথবা ফিল্টার পরিবর্তন করুন।"
          />
        ) : (
          filtered.map((s, i) => (
            <DataRow
              key={s.id}
              avatarLabel={s.name[0]}
              avatarSeed={i}
              title={s.name}
              meta={
                <>
                  <span>রোল: {s.roll} · {s.cls}</span>
                </>
              }
              tag={<Badge tone={s.status === "বেকয়া" ? "danger" : "ok"}>{s.status}</Badge>}
              actions={
                <Link href={`/students/${s.id}`}>
                  <Button variant="secondary" size="sm">
                    প্রোফাইল
                  </Button>
                </Link>
              }
            />
          ))
        )}
      </div>

      {filtered.length > 0 && (
        <div className="mt-3 flex items-center justify-between px-1">
          <span className="text-xs text-slate-500">১–{filtered.length} দেখানো হচ্ছে, মোট ৩৮৪ জনের মধ্যে</span>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" disabled>
              আগের
            </Button>
            <Button variant="primary" size="sm">
              পরের
            </Button>
          </div>
        </div>
      )}
    </AppShell>
  );
}
