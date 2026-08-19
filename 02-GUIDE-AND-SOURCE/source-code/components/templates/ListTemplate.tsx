"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { SearchFilterBar } from "@/components/ui/SearchFilterBar";
import { DataRow } from "@/components/ui/DataRow";
import { Badge } from "@/components/ui/Badge";
import { Button, buttonVariants } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { Search, Plus, LucideIcon } from "lucide-react";

export interface ListRow {
  id: number | string;
  avatarLabel: string;
  title: string;
  meta: string;
  tag?: string;
  tagTone?: "danger" | "warn" | "ok" | "neutral";
  amount?: string;
  actionLabel?: string;
}

interface ListTemplateProps {
  title: string;
  breadcrumb: string;
  searchPlaceholder: string;
  filterOptions?: string[];
  tableTitle: string;
  rows: ListRow[];
  countSuffix?: string;
  addHref?: string;
  addLabel?: string;
  emptyIcon?: LucideIcon;
  emptyTitle?: string;
  emptyDesc?: string;
}

export function ListTemplate({
  title,
  breadcrumb,
  searchPlaceholder,
  filterOptions,
  tableTitle,
  rows,
  countSuffix = "জন",
  addHref,
  addLabel,
  emptyIcon: EmptyIcon = Search,
  emptyTitle = "কিছু পাওয়া যায়নি",
  emptyDesc = "অন্য কিছু দিয়ে খুঁজে দেখুন অথবা ফিল্টার পরিবর্তন করুন।",
}: ListTemplateProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(filterOptions?.[0] ?? "");

  const filtered = useMemo(
    () =>
      rows.filter(
        (r) =>
          (!filterOptions || filter === filterOptions[0] || r.meta.includes(filter)) &&
          (r.title.includes(query) || r.meta.includes(query))
      ),
    [rows, query, filter, filterOptions]
  );

  return (
    <AppShell
      title={title}
      breadcrumb={breadcrumb}
      headerActions={
        addHref ? (
          <Link href={addHref} className={buttonVariants({ variant: "primary" })}>
            <Plus className="h-4 w-4" strokeWidth={2.2} />
            {addLabel ?? "নতুন"}
          </Link>
        ) : undefined
      }
    >
      <SearchFilterBar
        placeholder={searchPlaceholder}
        value={query}
        onChange={setQuery}
        filterOptions={filterOptions}
        filterValue={filter}
        onFilterChange={setFilter}
      />

      <div className="rounded-2xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
          <span className="text-[13.5px] font-bold text-slate-900">{tableTitle}</span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11.5px] font-semibold text-slate-600">
            {filtered.length} {countSuffix}
          </span>
        </div>

        {filtered.length === 0 ? (
          <EmptyState icon={EmptyIcon} title={emptyTitle} desc={emptyDesc} />
        ) : (
          filtered.map((r, i) => (
            <DataRow
              key={r.id}
              avatarLabel={r.avatarLabel}
              avatarSeed={i}
              title={r.title}
              meta={<span>{r.meta}</span>}
              tag={r.tag ? <Badge tone={r.tagTone ?? "neutral"}>{r.tag}</Badge> : undefined}
              amount={r.amount}
              actions={
                <Button variant="secondary" size="sm">
                  {r.actionLabel ?? "বিস্তারিত"}
                </Button>
              }
            />
          ))
        )}
      </div>
    </AppShell>
  );
}
