import { BookOpenCheck, Users, TrendingUp } from "lucide-react";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";

export default function Page() {
  return (
    <DashboardTemplate
      title="হিফজ ড্যাশবোর্ড"
      breadcrumb="হোম → হিফজ বিভাগ → ড্যাশবোর্ড"
      activityTitle="আজকের সবক"
      stats={[
    { icon: BookOpenCheck, value: "৬৮", label: "মোট হিফজ শিক্ষার্থী", sub: "৩টি বিভাগে বিভক্ত", tone: "default" },
    { icon: Users, value: "১২", label: "আজ সবক দিয়েছে", sub: "মোট ৬৮ জনের মধ্যে", tone: "warn" },
    { icon: TrendingUp, value: "৯", label: "এই মাসে হিফজ সম্পন্ন", sub: "সনদ প্রস্তুত হচ্ছে", tone: "default" },
      ]}
      activity={[
    { avatarLabel: "ম", title: "মুহাম্মদ ইউসুফ — ১২ নং পারা সবক দিয়েছে", meta: "সকাল ৯টা", amount: undefined },
    { avatarLabel: "আ", title: "আব্দুল্লাহ — সবক দেয়নি", meta: "এখনো বাকি", amount: undefined },
      ]}
      chart={{
        title: "গত ৬ মাসে হিফজ সম্পন্নের সংখ্যা",
        valueSuffix: " জন",
        data: [
          { label: "মার্চ", value: 4 },
          { label: "এপ্রিল", value: 6 },
          { label: "মে", value: 5 },
          { label: "জুন", value: 8 },
          { label: "জুলাই", value: 7 },
          { label: "আগস্ট", value: 9 },
        ],
      }}
    />
  );
}
