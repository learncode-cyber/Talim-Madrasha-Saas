import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="বেফাক ফলাফল"
      breadcrumb="হোম → বেফাকুল মাদারিস → ফলাফল"
      searchPlaceholder="নাম বা রোল দিয়ে খুঁজুন..."
      filterOptions={["সকল বছর", "১৪৪৬", "১৪৪৫"]}
      tableTitle="বেফাক পরীক্ষার ফলাফল"
      countSuffix="জন"
      addHref={undefined}
      addLabel={undefined}
      rows={[
    { id: "১", avatarLabel: "আ", title: "আবু বকর সিদ্দিক", meta: "রোল: ১২৩৪৫৬ · দাওরা হাদিস", tag: "মুমতাজ", tagTone: "ok", amount: undefined, actionLabel: "মার্কশিট" },
      ]}
    />
  );
}
