"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap, Lock, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { setAuthToken } from "@/lib/auth";

const inputCls =
  "h-11 w-full rounded-lg border border-slate-200 bg-white pr-10 pl-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // এখানে আসল Laravel login API কল হবে (মোবাইল+পাসওয়ার্ড পাঠিয়ে token নেওয়া)।
    // সফল হলে সেই real token নিচে setAuthToken()-এ বসবে। এখন demo-এর জন্য placeholder token।
    setAuthToken("demo-token");
    router.replace("/dashboard/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <div className="mb-6 flex flex-col items-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600">
            <GraduationCap className="h-6 w-6 text-white" strokeWidth={2} />
          </div>
          <div className="text-lg font-bold text-slate-900">তালিম-এ প্রবেশ করুন</div>
          <div className="mt-0.5 text-xs text-slate-500">দারুল উলুম হাশেমিয়া</div>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-3.5">
            <label className="mb-1.5 block text-xs font-semibold text-slate-600">মোবাইল নম্বর</label>
            <div className="relative">
              <input type="tel" required placeholder="০১xxxxxxxxx" className={inputCls} />
              <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={2} />
            </div>
          </div>
          <div className="mb-5">
            <label className="mb-1.5 block text-xs font-semibold text-slate-600">পাসওয়ার্ড</label>
            <div className="relative">
              <input type="password" required placeholder="••••••••" className={inputCls} />
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={2} />
            </div>
          </div>
          <Button type="submit" variant="primary" className="w-full" disabled={loading}>
            {loading ? "প্রবেশ করা হচ্ছে..." : "প্রবেশ করুন"}
          </Button>
        </form>
        <div className="mt-4 text-center text-xs text-slate-400">পাসওয়ার্ড ভুলে গেছেন? প্রশাসকের সাথে যোগাযোগ করুন</div>
      </div>
    </div>
  );
}
