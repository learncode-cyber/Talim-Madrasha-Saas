import { Sun, Clock } from "lucide-react";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";

export default function Page() {
  return (
    <DashboardTemplate
      title="নামাজের সময়সূচি"
      breadcrumb="হোম → সময়সূচি → নামাজের সময়"
      activityTitle="আজকের সম্পূর্ণ সময়সূচি"
      stats={[
    { icon: Sun, value: "ফজর ৪:৪২", label: "পরবর্তী নামাজ", sub: "আর ১ ঘণ্টা ১২ মিনিট বাকি", tone: "default" },
    { icon: Clock, value: "যোহর ১২:১৫", label: "আজকের ২য় নামাজ", sub: undefined, tone: "default" },
      ]}
      activity={[
    { avatarLabel: "ফ", title: "ফজর — ৪:৪২ AM", meta: "জামাত: ৫:০০ AM", amount: undefined },
    { avatarLabel: "যো", title: "যোহর — ১২:১৫ PM", meta: "জামাত: ১২:৩০ PM", amount: undefined },
      ]}
    />
  );
}
