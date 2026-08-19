import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="হিফজ অগ্রগতি"
      breadcrumb="হোম → হিফজ বিভাগ → অগ্রগতি"
      searchPlaceholder="নাম দিয়ে খুঁজুন..."
      filterOptions={["সকল স্তর", "সবক পর্যায়ে", "সবকি পর্যায়ে", "মুরাজাআ পর্যায়ে"]}
      tableTitle="শিক্ষার্থীভিত্তিক অগ্রগতি"
      countSuffix="জন"
      addHref={undefined}
      addLabel={undefined}
      rows={[
    { id: "১", avatarLabel: "ম", title: "মুহাম্মদ ইউসুফ", meta: "১২ পারা সম্পন্ন", tag: "চলমান", tagTone: "warn", amount: undefined, actionLabel: "বিস্তারিত" },
    { id: "২", avatarLabel: "আ", title: "আব্দুল্লাহ", meta: "৮ পারা সম্পন্ন", tag: "পিছিয়ে আছে", tagTone: "danger", amount: undefined, actionLabel: "বিস্তারিত" },
      ]}
    />
  );
}
