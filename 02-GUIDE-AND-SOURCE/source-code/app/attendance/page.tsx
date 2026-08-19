import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="শিক্ষার্থী হাজিরা"
      breadcrumb="হোম → শিক্ষার্থী → হাজিরা"
      searchPlaceholder="নাম বা রোল দিয়ে খুঁজুন..."
      filterOptions={["সকল শ্রেণি", "দাওরা হাদিস", "মিশকাত", "নাজেরা"]}
      tableTitle="আজকের হাজিরা"
      countSuffix="জন"
      addHref={undefined}
      addLabel={undefined}
      rows={[
    { id: "১", avatarLabel: "আ", title: "আবু বকর সিদ্দিক", meta: "রোল: ০০২ · দাওরা হাদিস", tag: "উপস্থিত", tagTone: "ok", amount: undefined, actionLabel: "পরিবর্তন" },
    { id: "২", avatarLabel: "ই", title: "ইয়াকুব আলী", meta: "রোল: ০০৯ · নাজেরা", tag: "অনুপস্থিত", tagTone: "danger", amount: undefined, actionLabel: "পরিবর্তন" },
      ]}
    />
  );
}
