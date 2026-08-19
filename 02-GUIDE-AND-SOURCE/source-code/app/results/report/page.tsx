import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="ফলাফল রিপোর্ট"
      breadcrumb="হোম → শিক্ষার্থী → ফলাফল রিপোর্ট"
      searchPlaceholder="নাম বা রোল দিয়ে খুঁজুন..."
      filterOptions={["সকল পরীক্ষা", "বার্ষিক পরীক্ষা", "সাময়িক পরীক্ষা"]}
      tableTitle="বার্ষিক পরীক্ষার ফলাফল"
      countSuffix="জন"
      addHref={undefined}
      addLabel={undefined}
      rows={[
    { id: "১", avatarLabel: "আ", title: "আবু বকর সিদ্দিক", meta: "রোল: ০০২ · দাওরা হাদিস", tag: "মুমতাজ", tagTone: "ok", amount: "৯২%", actionLabel: "দেখুন" },
    { id: "২", avatarLabel: "ই", title: "ইয়াকুব আলী", meta: "রোল: ০০৯ · নাজেরা", tag: "জাইয়্যিদ", tagTone: "warn", amount: "৭৪%", actionLabel: "দেখুন" },
      ]}
    />
  );
}
