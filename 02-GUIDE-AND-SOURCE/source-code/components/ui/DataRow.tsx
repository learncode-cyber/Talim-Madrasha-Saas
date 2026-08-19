import { clsx } from "./cn";

const avatarColors = ["bg-emerald-600", "bg-blue-600", "bg-purple-600", "bg-rose-600", "bg-teal-600"];

interface DataRowProps {
  avatarLabel: string;
  avatarSeed: number; // color select কনসিস্টেন্ট রাখতে
  title: string;
  meta: React.ReactNode;
  amount?: string;
  tag?: React.ReactNode;
  actions: React.ReactNode;
}

/** একটা responsive markup — sm+ এ সারি, তার নিচে card হয়ে যায়। আলাদা mobile/desktop markup লেখা লাগে না। */
export function DataRow({ avatarLabel, avatarSeed, title, meta, amount, tag, actions }: DataRowProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-slate-100 p-3.5 last:border-b-0 sm:flex-row sm:items-center sm:gap-3">
      <div className="flex items-center gap-3 sm:flex-1 sm:min-w-0">
        <div
          className={clsx(
            "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg text-[13.5px] font-bold text-white",
            avatarColors[avatarSeed % avatarColors.length]
          )}
        >
          {avatarLabel}
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[13.5px] font-semibold text-slate-900">{title}</div>
          <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[11.5px] text-slate-500">{meta}</div>
        </div>
        {tag && <div className="flex-shrink-0 sm:hidden">{tag}</div>}
      </div>

      <div className="flex items-center justify-between gap-2 sm:justify-end sm:gap-3">
        {tag && <div className="hidden flex-shrink-0 sm:block">{tag}</div>}
        {amount && <div className="min-w-16 flex-shrink-0 text-sm font-bold text-slate-900">{amount}</div>}
        <div className="flex flex-shrink-0 gap-1.5">{actions}</div>
      </div>
    </div>
  );
}
