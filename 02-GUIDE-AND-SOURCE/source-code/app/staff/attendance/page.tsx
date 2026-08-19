import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="স্টাফ হাজিরা"
      breadcrumb="হোম → শিক্ষক ও কর্মচারী → হাজিরা"
      searchPlaceholder="নাম দিয়ে খুঁজুন..."
      filterOptions={["সকল বিভাগ", "শিক্ষক", "প্রশাসনিক"]}
      tableTitle="আজকের হাজিরা"
      countSuffix="জন"
      addHref={undefined}
      addLabel={undefined}
      rows={[
    { id: "১", avatarLabel: "আ", title: "আব্দুল কাদের", meta: "শিক্ষক · হিফজ বিভাগ", tag: "উপস্থিত", tagTone: "ok", amount: undefined, actionLabel: "পরিবর্তন" },
      ]}
    />
  );
}
