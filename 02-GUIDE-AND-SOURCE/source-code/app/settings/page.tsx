// app/settings/page.tsx
"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { clsx } from "@/components/ui/cn";
import { Check } from "lucide-react";

const TABS = ["প্রতিষ্ঠান", "SMS/WhatsApp", "পেমেন্ট", "ব্যবহারকারী"];

export default function SettingsPage() {
  const [tab, setTab] = useState(0);

  return (
    <AppShell title="সেটিংস" breadcrumb="হোম → সিস্টেম → সেটিংস">
      <div className="max-w-xl">
        <div className="mb-4 flex w-fit max-w-full gap-0.5 overflow-x-auto rounded-xl bg-slate-100 p-1">
          {TABS.map((label, i) => (
            <button
              key={label}
              onClick={() => setTab(i)}
              className={clsx(
                "min-h-9 whitespace-nowrap rounded-lg px-4 text-xs font-semibold",
                tab === i ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === 0 && (
          <form className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="mb-4">
              <label className="mb-1.5 block text-xs font-semibold text-slate-600">মাদ্রাসার নাম</label>
              <input defaultValue="দারুল উলুম হাশেমিয়া" className={inputCls} />
            </div>
            <div className="mb-4">
              <label className="mb-1.5 block text-xs font-semibold text-slate-600">ঠিকানা</label>
              <textarea defaultValue="সারানখোলা, বাগেরহাট" rows={3} className={clsx(inputCls, "h-auto py-2.5 resize-y")} />
            </div>
            <div className="border-t border-slate-100 pt-4">
              <Button variant="primary" type="submit">
                <Check className="h-4 w-4" strokeWidth={2.2} />
                সংরক্ষণ করুন
              </Button>
            </div>
          </form>
        )}

        <div className="mt-4 rounded-2xl border border-red-200 bg-white p-5">
          <div className="mb-1 text-sm font-bold text-red-600">বিপজ্জনক এলাকা</div>
          <div className="mb-3.5 text-xs text-slate-500">অ্যাকাউন্ট বন্ধ করলে সব তথ্য মুছে যাবে — এই কাজ ফেরানো যাবে না।</div>
          <Button variant="danger" size="sm">
            অ্যাকাউন্ট বন্ধ করুন
          </Button>
        </div>
      </div>
    </AppShell>
  );
}

const inputCls =
  "h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";
