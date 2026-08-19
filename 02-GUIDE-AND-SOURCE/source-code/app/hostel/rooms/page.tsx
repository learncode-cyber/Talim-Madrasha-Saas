import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="হোস্টেল রুম"
      breadcrumb="হোম → হোস্টেল → রুম ব্যবস্থাপনা"
      searchPlaceholder="রুম নম্বর দিয়ে খুঁজুন..."
      filterOptions={["সকল ব্লক", "এ ব্লক", "বি ব্লক"]}
      tableTitle="রুমের তালিকা"
      countSuffix="টি রুম"
      addHref={undefined}
      addLabel={undefined}
      rows={[
    { id: "১", avatarLabel: "৩০", title: "রুম ৩০৪ — এ ব্লক", meta: "৪/৬ সিট দখলকৃত", tag: "খালি সিট আছে", tagTone: "ok", amount: undefined, actionLabel: "বিস্তারিত" },
    { id: "২", avatarLabel: "৩০", title: "রুম ৩০৫ — এ ব্লক", meta: "৬/৬ সিট দখলকৃত", tag: "পূর্ণ", tagTone: "danger", amount: undefined, actionLabel: "বিস্তারিত" },
      ]}
    />
  );
}
