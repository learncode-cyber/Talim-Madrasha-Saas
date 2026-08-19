"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { ConfirmDialog } from "@/components/ui/ConfirmDialog";
import { clsx } from "@/components/ui/cn";
import { Check } from "lucide-react";

export interface FormFieldConfig {
  name: string;
  label: string;
  type?: "text" | "date" | "number" | "select" | "textarea" | "tel";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  fullWidth?: boolean;
  hint?: string;
}

interface FormTemplateProps {
  title: string;
  breadcrumb: string;
  fields: FormFieldConfig[];
  submitLabel?: string;
  /** টাকা/destructive-এর মতো sensitive form-এ সেট করুন — submit করার আগে বাধ্যতামূলক confirm dialog দেখাবে */
  confirmBeforeSubmit?: { title: string; desc: string };
}

const inputCls =
  "h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

export function FormTemplate({ title, breadcrumb, fields, submitLabel = "সংরক্ষণ করুন", confirmBeforeSubmit }: FormTemplateProps) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (confirmBeforeSubmit) {
      setConfirmOpen(true);
    } else {
      // এখানে আসল save API কল হবে (Laravel bridge)
    }
  }

  function actuallySave() {
    // confirm-এর পর আসল save API কল হবে এখানে
  }

  return (
    <AppShell title={title} breadcrumb={breadcrumb}>
      <form className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-x-4 sm:grid-cols-2">
          {fields.map((f) => (
            <div key={f.name} className={clsx("mb-4", f.fullWidth && "sm:col-span-2")}>
              <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                {f.label} {f.required && <span className="text-red-600">*</span>}
              </label>
              {f.type === "select" ? (
                <select name={f.name} required={f.required} className={inputCls}>
                  <option value="">নির্বাচন করুন</option>
                  {f.options?.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : f.type === "textarea" ? (
                <textarea name={f.name} rows={3} placeholder={f.placeholder} className={clsx(inputCls, "h-auto py-2.5 resize-y")} />
              ) : (
                <input
                  type={f.type ?? "text"}
                  name={f.name}
                  required={f.required}
                  placeholder={f.placeholder}
                  className={inputCls}
                />
              )}
              {f.hint && <p className="mt-1 text-[11px] text-slate-400">{f.hint}</p>}
            </div>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-2.5 border-t border-slate-100 pt-4">
          <Button type="submit" variant="primary">
            <Check className="h-4 w-4" strokeWidth={2.2} />
            {submitLabel}
          </Button>
          <Button type="button" variant="ghost">
            বাতিল
          </Button>
        </div>
      </form>

      {confirmBeforeSubmit && (
        <ConfirmDialog
          open={confirmOpen}
          title={confirmBeforeSubmit.title}
          desc={confirmBeforeSubmit.desc}
          confirmLabel={submitLabel}
          onConfirm={actuallySave}
          onClose={() => setConfirmOpen(false)}
        />
      )}
    </AppShell>
  );
}
