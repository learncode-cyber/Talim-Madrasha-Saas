"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, Bell, GraduationCap } from "lucide-react";
import { clsx } from "../ui/cn";
import { NAV_SECTIONS } from "./nav-config";
import { isAuthenticated, clearAuthToken } from "@/lib/auth";

interface AppShellProps {
  title: string;
  breadcrumb: string;
  headerActions?: React.ReactNode;
  children: React.ReactNode;
}

export function AppShell({ title, breadcrumb, headerActions, children }: AppShellProps) {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // UX-level গার্ড — বিস্তারিত caveat lib/auth.ts-এ লেখা আছে
    if (!isAuthenticated()) {
      router.replace("/auth/login/");
    } else {
      setChecked(true);
    }
  }, [router]);

  if (!checked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* মোবাইল ড্রয়ার backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-slate-900/45 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        aria-label="প্রধান নেভিগেশন"
        className={clsx(
          "fixed inset-y-0 right-0 z-40 flex w-62 flex-col bg-brand-700 transition-transform duration-200 lg:translate-x-0",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="border-b border-white/10 px-4 pb-3.5 pt-4.5">
          <div className="mb-2 flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500">
              <GraduationCap className="h-4.5 w-4.5 text-white" strokeWidth={2} />
            </div>
            <span className="text-lg font-bold text-white">তালিম</span>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-2">
            <div className="truncate text-xs font-semibold text-white">দারুল উলুম হাশেমিয়া</div>
            <div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              ৩০ দিন বাকি
            </div>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-2.5">
          {NAV_SECTIONS.map((section) => (
            <div key={section.title}>
              <div className="px-2.5 pb-1.5 pt-3.5 text-[10px] font-bold uppercase tracking-wide text-white/35">
                {section.title}
              </div>
              {section.items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "mb-0.5 flex min-h-11 items-center gap-2.5 rounded-lg px-2.5 text-[13.5px] font-medium transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
                      active ? "bg-brand-500 text-white" : "text-white/68 hover:bg-white/8 hover:text-white"
                    )}
                  >
                    <item.icon className="h-4.5 w-4.5 flex-shrink-0" strokeWidth={1.8} />
                    <span className="truncate">{item.label}</span>
                    {item.badge && (
                      <span className="mr-auto rounded-full bg-red-600 px-1.5 py-0.5 text-[10px] font-bold text-white">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="border-t border-white/10 p-2">
          <button
            onClick={() => {
              clearAuthToken();
              router.replace("/auth/login/");
            }}
            className="flex min-h-11 w-full items-center gap-2.5 rounded-lg px-2.5 text-right hover:bg-white/8"
          >
            <div className="flex h-8.5 w-8.5 flex-shrink-0 items-center justify-center rounded-full bg-brand-500 text-xs font-bold text-white">
              ম
            </div>
            <div>
              <div className="text-xs font-semibold text-white">মুহাম্মদ রাশেদুল হক</div>
              <div className="text-[10.5px] text-white/45">মুহতামিম · লগ-আউট</div>
            </div>
          </button>
        </div>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col lg:mr-62">
        <header className="sticky top-0 z-20 flex min-h-15 items-center justify-between gap-3 border-b border-slate-200 bg-white px-4">
          <div className="flex min-w-0 items-center gap-2.5">
            <button
              aria-label="মেনু খুলুন"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 lg:hidden"
            >
              <Menu className="h-4.5 w-4.5 text-slate-600" strokeWidth={2} />
            </button>
            <div className="min-w-0">
              <div className="truncate text-[15px] font-bold text-slate-900">{title}</div>
              <div className="text-[11.5px] text-slate-400">{breadcrumb}</div>
            </div>
          </div>
          <div className="flex flex-shrink-0 items-center gap-2">
            {headerActions}
            <button
              aria-label="নোটিফিকেশন দেখুন"
              className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 hover:bg-slate-50"
            >
              <Bell className="h-4.5 w-4.5 text-slate-600" strokeWidth={1.8} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-red-600" />
            </button>
          </div>
        </header>

        <main className="flex-1 px-4 py-4.5 sm:px-5">{children}</main>
      </div>
    </div>
  );
}
