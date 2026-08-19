import { Heart, Wallet, Users } from "lucide-react";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";

export default function Page() {
  return (
    <DashboardTemplate
      title="দান ড্যাশবোর্ড"
      breadcrumb="হোম → অর্থ → দান ড্যাশবোর্ড"
      activityTitle="সাম্প্রতিক দান"
      stats={[
    { icon: Heart, value: "১,৪৫,০০০ ৳", label: "এই মাসের মোট দান", sub: "+১৮% গত মাসের চেয়ে", tone: "default" },
    { icon: Wallet, value: "৩৮", label: "সক্রিয় দাতা", sub: "নিয়মিত মাসিক দাতা", tone: "default" },
    { icon: Users, value: "৭", label: "নতুন দাতা", sub: "এই মাসে যুক্ত হয়েছেন", tone: "warn" },
      ]}
      activity={[
    { avatarLabel: "হা", title: "হাজী আব্দুল করিম", meta: "আজ, বিকাশের মাধ্যমে", amount: "৫,০০০ ৳" },
    { avatarLabel: "রা", title: "রাহাত এন্টারপ্রাইজ", meta: "গতকাল, ব্যাংক ট্রান্সফার", amount: "২০,০০০ ৳" },
      ]}
      chart={{
        title: "গত ৬ মাসের দানের প্রবণতা (৳ হাজারে)",
        data: [
          { label: "মার্চ", value: 98 },
          { label: "এপ্রিল", value: 112 },
          { label: "মে", value: 105 },
          { label: "জুন", value: 130 },
          { label: "জুলাই", value: 123 },
          { label: "আগস্ট", value: 145 },
        ],
      }}
    />
  );
}
