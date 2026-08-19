import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="নোটিফিকেশন"
      breadcrumb="হোম → সিস্টেম → নোটিফিকেশন"
      searchPlaceholder="খুঁজুন..."
      filterOptions={undefined}
      tableTitle="সাম্প্রতিক নোটিফিকেশন"
      countSuffix="টি"
      addHref={undefined}
      addLabel={undefined}
      rows={[
    { id: "১", avatarLabel: "ফ", title: "ফি reminder পাঠানো হয়েছে", meta: "৮ জন অভিভাবককে · ২ ঘণ্টা আগে", tag: undefined, tagTone: undefined, amount: undefined, actionLabel: "দেখুন" },
    { id: "২", avatarLabel: "ন", title: "নতুন ভর্তি সম্পন্ন হয়েছে", meta: "ইয়াকুব আলী · গতকাল", tag: undefined, tagTone: undefined, amount: undefined, actionLabel: "দেখুন" },
      ]}
    />
  );
}
