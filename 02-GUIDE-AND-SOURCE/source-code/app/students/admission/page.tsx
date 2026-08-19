// app/students/admission/page.tsx
"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { clsx } from "@/components/ui/cn";
import { Check } from "lucide-react";

const STEPS = ["মৌলিক তথ্য", "অভিভাবক", "একাডেমিক"];

export default function AdmissionPage() {
  const [step, setStep] = useState(0);
  const [mobileError, setMobileError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mobile = (e.currentTarget as HTMLFormElement).mobile.value;
    const valid = /^01[3-9]\d{8}$/.test(mobile);
    setMobileError(!valid);
    if (valid) {
      // এখানে আসল save API কল হবে (Laravel bridge)
    }
  }

  return (
    <AppShell title="নতুন ভর্তি" breadcrumb="হোম → শিক্ষার্থী → নতুন ভর্তি">
      <div className="max-w-2xl">
        <div className="mb-4 flex w-fit max-w-full gap-0.5 overflow-x-auto rounded-xl bg-slate-100 p-1">
          {STEPS.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setStep(i)}
              className={clsx(
                "min-h-9 whitespace-nowrap rounded-lg px-4 text-xs font-semibold",
                step === i ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"
              )}
            >
              {i + 1}. {label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5">
          <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
            <Field label="শিক্ষার্থীর পূর্ণ নাম" required className="sm:col-span-2">
              <input name="name" required className={inputCls} placeholder="যেমন: আবু বকর সিদ্দিক" />
            </Field>

            <Field label="রোল নম্বর">
              <input disabled className={inputCls} placeholder="স্বয়ংক্রিয়ভাবে দেওয়া হবে" />
              <p className="mt-1 text-[11px] text-slate-400">ভর্তি নিশ্চিত হলে দেওয়া হবে</p>
            </Field>

            <Field label="শ্রেণি" required>
              <select name="cls" required className={inputCls}>
                <option value="">নির্বাচন করুন</option>
                <option>নাজেরা</option>
                <option>হিফজ</option>
                <option>হিদায়া</option>
                <option>মিশকাত</option>
                <option>দাওরা হাদিস</option>
              </select>
            </Field>

            <Field label="জন্ম তারিখ">
              <input type="date" name="dob" className={inputCls} />
            </Field>

            <Field label="মোবাইল নম্বর" required error={mobileError ? "১১ ডিজিটের সঠিক মোবাইল নম্বর দিন" : undefined}>
              <input
                name="mobile"
                required
                className={clsx(inputCls, mobileError && "border-red-500 focus:ring-red-500/20")}
                placeholder="০১xxxxxxxxx"
                aria-invalid={mobileError}
              />
            </Field>

            <Field label="ঠিকানা" className="sm:col-span-2">
              <textarea name="address" rows={3} className={clsx(inputCls, "h-auto py-2.5 resize-y")} placeholder="গ্রাম/মহল্লা, উপজেলা, জেলা" />
            </Field>
          </div>

          <div className="mt-2 flex flex-wrap gap-2.5 border-t border-slate-100 pt-4">
            <Button type="submit" variant="primary">
              <Check className="h-4 w-4" strokeWidth={2.2} />
              ভর্তি সংরক্ষণ করুন
            </Button>
            <Button type="button" variant="secondary" onClick={() => setStep((s) => Math.min(s + 1, STEPS.length - 1))}>
              পরবর্তী ধাপ
            </Button>
            <Button type="button" variant="ghost">
              বাতিল
            </Button>
          </div>
        </form>
      </div>
    </AppShell>
  );
}

const inputCls =
  "h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 disabled:bg-slate-50 disabled:text-slate-400";

function Field({
  label,
  required,
  error,
  className,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("mb-4", className)}>
      <label className="mb-1.5 block text-xs font-semibold text-slate-600">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-[11px] font-semibold text-red-600">{error}</p>}
    </div>
  );
}
