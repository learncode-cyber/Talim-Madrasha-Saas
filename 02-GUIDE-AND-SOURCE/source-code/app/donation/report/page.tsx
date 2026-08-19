import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="দান রিপোর্ট"
      breadcrumb="হোম → অর্থ → দান রিপোর্ট"
      searchPlaceholder="দাতার নাম দিয়ে খুঁজুন..."
      filterOptions={["সকল মাস", "এই মাস", "গত মাস"]}
      tableTitle="দানের বিস্তারিত তালিকা"
      countSuffix="টি এন্ট্রি"
      addHref={undefined}
      addLabel={undefined}
      rows={[
    { id: "১", avatarLabel: "হা", title: "হাজী আব্দুল করিম", meta: "বিকাশ · ১৫ আগস্ট", tag: undefined, tagTone: undefined, amount: "৫,০০০ ৳", actionLabel: "রশিদ" },
    { id: "২", avatarLabel: "রা", title: "রাহাত এন্টারপ্রাইজ", meta: "ব্যাংক · ১৪ আগস্ট", tag: undefined, tagTone: undefined, amount: "২০,০০০ ৳", actionLabel: "রশিদ" },
      ]}
    />
  );
}
