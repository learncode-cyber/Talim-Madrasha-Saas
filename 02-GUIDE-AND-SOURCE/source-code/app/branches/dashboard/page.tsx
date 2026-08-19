import { Network, Users, Building2 } from "lucide-react";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";

export default function Page() {
  return (
    <DashboardTemplate
      title="শাখা ড্যাশবোর্ড"
      breadcrumb="হোম → শাখা ব্যবস্থাপনা → ড্যাশবোর্ড"
      activityTitle="শাখাসমূহ"
      stats={[
    { icon: Network, value: "৩", label: "মোট শাখা", sub: "১টি প্রধান, ২টি সাটেলাইট", tone: "default" },
    { icon: Users, value: "৫২৮", label: "সব শাখা মিলিয়ে শিক্ষার্থী", sub: "+৩২ এই বছর", tone: "default" },
    { icon: Building2, value: "১", label: "নতুন শাখা প্রস্তুতিতে", sub: "উদ্বোধন আগামী মাসে", tone: "warn" },
      ]}
      activity={[
    { avatarLabel: "প্র", title: "প্রধান শাখা — দারুল উলুম হাশেমিয়া", meta: "৩৮৪ শিক্ষার্থী", amount: undefined },
    { avatarLabel: "সা", title: "সাটেলাইট শাখা — সারানখোলা", meta: "১১২ শিক্ষার্থী", amount: undefined },
      ]}
    />
  );
}
