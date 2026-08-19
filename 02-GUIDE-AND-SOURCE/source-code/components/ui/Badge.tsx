import { clsx } from "./cn";

type Tone = "danger" | "warn" | "ok" | "neutral";

const tones: Record<Tone, string> = {
  danger: "text-red-600 bg-red-50 border-red-200",
  warn: "text-amber-700 bg-amber-50 border-amber-200",
  ok: "text-brand-600 bg-brand-50 border-brand-100",
  neutral: "text-slate-600 bg-slate-100 border-slate-200",
};

export function Badge({ tone = "neutral", children }: { tone?: Tone; children: React.ReactNode }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-bold whitespace-nowrap",
        tones[tone]
      )}
    >
      {children}
    </span>
  );
}
