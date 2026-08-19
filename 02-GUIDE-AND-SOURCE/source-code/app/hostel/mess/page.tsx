import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="মেস ব্যবস্থাপনা"
      breadcrumb="হোম → হোস্টেল → মেস/খাবার"
      searchPlaceholder="নাম দিয়ে খুঁজুন..."
      filterOptions={["আজ", "এই সপ্তাহ"]}
      tableTitle="আজকের মেস হাজিরা"
      countSuffix="জন"
      addHref={undefined}
      addLabel={undefined}
      rows={[
    { id: "১", avatarLabel: "ম", title: "মুহাম্মদ ইউসুফ", meta: "কক্ষ ৩০৪", tag: "৩ বেলা", tagTone: "ok", amount: "১২০ ৳", actionLabel: "বিস্তারিত" },
      ]}
    />
  );
}
