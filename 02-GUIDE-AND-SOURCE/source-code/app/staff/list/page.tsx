import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="স্টাফ তালিকা"
      breadcrumb="হোম → শিক্ষক ও কর্মচারী → তালিকা"
      searchPlaceholder="নাম বা পদবি দিয়ে খুঁজুন..."
      filterOptions={["সকল বিভাগ", "শিক্ষক", "প্রশাসনিক", "সহায়ক কর্মী"]}
      tableTitle="সকল স্টাফ"
      countSuffix="জন"
      addHref={"#"}
      addLabel={"নতুন স্টাফ"}
      rows={[
    { id: "১", avatarLabel: "ম", title: "মুহাম্মদ রাশেদুল হক", meta: "মুহতামিম · প্রশাসনিক", tag: "সক্রিয়", tagTone: "ok", amount: undefined, actionLabel: "প্রোফাইল" },
    { id: "২", avatarLabel: "আ", title: "আব্দুল কাদের", meta: "শিক্ষক · হিফজ বিভাগ", tag: "সক্রিয়", tagTone: "ok", amount: undefined, actionLabel: "প্রোফাইল" },
      ]}
    />
  );
}
