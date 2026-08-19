import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="বই তালিকা"
      breadcrumb="হোম → লাইব্রেরি → বই তালিকা"
      searchPlaceholder="বইয়ের নাম বা লেখক দিয়ে খুঁজুন..."
      filterOptions={["সকল বিভাগ", "তাফসীর", "হাদিস", "ফিকহ"]}
      tableTitle="লাইব্রেরির বই"
      countSuffix="টি বই"
      addHref={"#"}
      addLabel={"নতুন বই"}
      rows={[
    { id: "১", avatarLabel: "সহ", title: "সহীহ বুখারী শরীফ", meta: "হাদিস · ৮ কপি", tag: "উপলব্ধ", tagTone: "ok", amount: undefined, actionLabel: "বিস্তারিত" },
    { id: "২", avatarLabel: "তা", title: "তাফসীরে ইবনে কাসীর", meta: "তাফসীর · ২ কপি", tag: "সব ইস্যুকৃত", tagTone: "warn", amount: undefined, actionLabel: "বিস্তারিত" },
      ]}
    />
  );
}
