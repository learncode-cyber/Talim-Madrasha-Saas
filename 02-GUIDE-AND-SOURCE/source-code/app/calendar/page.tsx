import { CalendarDays, Sun, Clock } from "lucide-react";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";

export default function Page() {
  return (
    <DashboardTemplate
      title="ইসলামিক ক্যালেন্ডার"
      breadcrumb="হোম → সময়সূচি → ক্যালেন্ডার"
      activityTitle="আসন্ন ছুটি ও ইভেন্ট"
      stats={[
    { icon: CalendarDays, value: "১৫ জমাদিউল আউয়াল", label: "আজকের হিজরি তারিখ", sub: "১৪৪৭ হিজরি", tone: "default" },
    { icon: Sun, value: "আজ", label: "কোনো বিশেষ দিন নেই", sub: "পরবর্তী: ২৭ রজব শবে মিরাজ", tone: "default" },
      ]}
      activity={[
    { avatarLabel: "শ", title: "শবে মিরাজ", meta: "২৭ রজব, ১৪৪৭", amount: undefined },
    { avatarLabel: "ব", title: "বার্ষিক পরীক্ষা শুরু", meta: "১০ শাবান থেকে", amount: undefined },
      ]}
    />
  );
}
