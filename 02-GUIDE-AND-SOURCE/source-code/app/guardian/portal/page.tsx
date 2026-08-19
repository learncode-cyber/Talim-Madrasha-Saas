"use client";

import { GraduationCap, Wallet, ClipboardCheck, BookOpenCheck } from "lucide-react";

export default function GuardianPortalPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="flex items-center gap-2.5 border-b border-slate-200 bg-white px-4 py-3.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600">
          <GraduationCap className="h-4.5 w-4.5 text-white" strokeWidth={2} />
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900">অভিভাবক পোর্টাল</div>
          <div className="text-[11px] text-slate-500">দারুল উলুম হাশেমিয়া</div>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 py-5">
        <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-sm font-bold text-brand-600">
              আ
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">আবু বকর সিদ্দিক</div>
              <div className="text-xs text-slate-500">রোল: ০০২ · দাওরা হাদিস</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
            <ClipboardCheck className="mx-auto mb-2 h-5 w-5 text-brand-600" strokeWidth={2} />
            <div className="text-lg font-bold text-slate-900">৯৭%</div>
            <div className="text-[11px] text-slate-500">উপস্থিতির হার</div>
          </div>
          <div className="rounded-2xl border border-red-200 bg-red-50/40 p-4 text-center">
            <Wallet className="mx-auto mb-2 h-5 w-5 text-red-600" strokeWidth={2} />
            <div className="text-lg font-bold text-slate-900">৫০০ ৳</div>
            <div className="text-[11px] text-red-600">বেকয়া (জুন)</div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center">
            <BookOpenCheck className="mx-auto mb-2 h-5 w-5 text-brand-600" strokeWidth={2} />
            <div className="text-lg font-bold text-slate-900">মুমতাজ</div>
            <div className="text-[11px] text-slate-500">সর্বশেষ ফলাফল</div>
          </div>
        </div>

        <p className="mt-5 text-center text-[11px] text-slate-400">
          বিস্তারিত তথ্যের জন্য মাদ্রাসা অফিসে যোগাযোগ করুন
        </p>
      </main>
    </div>
  );
}
