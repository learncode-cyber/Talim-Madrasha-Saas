import { BookMarked, ClipboardList, FileBarChart } from "lucide-react";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";

export default function Page() {
  return (
    <DashboardTemplate
      title="বেফাক ড্যাশবোর্ড"
      breadcrumb="হোম → বেফাকুল মাদারিস → ড্যাশবোর্ড"
      activityTitle="সাম্প্রতিক কার্যক্রম"
      stats={[
    { icon: BookMarked, value: "৫২", label: "রেজিস্ট্রেশনকৃত শিক্ষার্থী", sub: "দাওরা হাদিস পরীক্ষার জন্য", tone: "default" },
    { icon: ClipboardList, value: "৪৮", label: "ফরম পূরণ সম্পন্ন", sub: "৪ জন বাকি", tone: "warn" },
    { icon: FileBarChart, value: "৯২%", label: "গত বছরের পাসের হার", sub: "মেধাতালিকায় ৩ জন", tone: "default" },
      ]}
      activity={[
    { avatarLabel: "ফ", title: "ফরম পূরণ ডেডলাইন", meta: "আর ৫ দিন বাকি", amount: undefined },
      ]}
    />
  );
}
