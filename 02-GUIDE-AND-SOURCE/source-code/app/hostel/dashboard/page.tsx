import { Bed, Users, UtensilsCrossed } from "lucide-react";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";

export default function Page() {
  return (
    <DashboardTemplate
      title="হোস্টেল ড্যাশবোর্ড"
      breadcrumb="হোম → হোস্টেল → ড্যাশবোর্ড"
      activityTitle="সাম্প্রতিক আপডেট"
      stats={[
    { icon: Bed, value: "৯৬/১২০", label: "দখলকৃত সিট", sub: "২৪টি সিট খালি", tone: "default" },
    { icon: Users, value: "৯৬", label: "মোট আবাসিক", sub: "৮টি রুমে বিভক্ত", tone: "default" },
    { icon: UtensilsCrossed, value: "৯২", label: "আজ মেসে খাচ্ছেন", sub: "৪ জন ছুটিতে", tone: "warn" },
      ]}
      activity={[
    { avatarLabel: "ক", title: "কক্ষ ৩০৪ — নতুন আবাসিক যুক্ত", meta: "আজ সকালে", amount: undefined },
    { avatarLabel: "ম", title: "মেস বিল আপডেট হয়েছে", meta: "গতকাল", amount: undefined },
      ]}
    />
  );
}
