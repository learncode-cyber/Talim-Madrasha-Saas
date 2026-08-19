"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./Button";

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  desc: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onClose: () => void;
}

/**
 * টাকা/destructive action-এর আগে বাধ্যতামূলক নিশ্চিতকরণ।
 * ব্যবহার: "ফি নিন" বাটনে সরাসরি action না চালিয়ে এই dialog খুলুন,
 * onConfirm-এই আসল API কল করুন। ভুল ট্যাপে টাকার এন্ট্রি হওয়া আটকায়।
 */
export function ConfirmDialog({ open, title, desc, confirmLabel = "নিশ্চিত করুন", onConfirm, onClose }: ConfirmDialogProps) {
  const confirmRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) confirmRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900/50 p-5"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-title"
        className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50">
          <CheckCircle2 className="h-5.5 w-5.5 text-brand-600" strokeWidth={2} />
        </div>
        <div id="confirm-title" className="mb-1.5 text-base font-bold text-slate-900">
          {title}
        </div>
        <div className="mb-5 text-sm leading-relaxed text-slate-600">{desc}</div>
        <div className="flex gap-2.5">
          <Button variant="ghost" className="flex-1" onClick={onClose}>
            বাতিল
          </Button>
          <Button
            ref={confirmRef}
            variant="primary"
            className="flex-1"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
