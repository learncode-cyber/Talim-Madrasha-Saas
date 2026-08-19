import { TrendingUp, Users, GraduationCap } from "lucide-react";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";

export default function Page() {
  return (
    <DashboardTemplate
      title="অ্যানালিটিক্স"
      breadcrumb="হোম → অ্যানালিটিক্স"
      activityTitle="শাখাভিত্তিক সারসংক্ষেপ"
      stats={[
    { icon: TrendingUp, value: "৯৩%", label: "সামগ্রিক উপস্থিতি", sub: "গত মাসের চেয়ে ভালো", tone: "default" },
    { icon: Users, value: "৩৮৪", label: "মোট শিক্ষার্থী", sub: "৫টি শাখা মিলিয়ে", tone: "default" },
    { icon: GraduationCap, value: "৪২", label: "এই বছর দাওরা পাস", sub: "বেফাক ফলাফল অনুযায়ী", tone: "warn" },
      ]}
      activity={[
    { avatarLabel: "দা", title: "দারুল উলুম হাশেমিয়া (প্রধান)", meta: "৩৮৪ শিক্ষার্থী · ৯৭% হাজিরা", amount: undefined },
    { avatarLabel: "সা", title: "সাটেলাইট শাখা — সারানখোলা", meta: "১১২ শিক্ষার্থী · ৯১% হাজিরা", amount: undefined },
      ]}
      chart={{
        title: "সাপ্তাহিক উপস্থিতির হার",
        valueSuffix: "%",
        data: [
          { label: "শনি", value: 91 },
          { label: "রবি", value: 94 },
          { label: "সোম", value: 89 },
          { label: "মঙ্গল", value: 96 },
          { label: "বুধ", value: 93 },
          { label: "বৃহঃ", value: 97 },
          { label: "শুক্র", value: 95 },
        ],
      }}
    />
  );
}
