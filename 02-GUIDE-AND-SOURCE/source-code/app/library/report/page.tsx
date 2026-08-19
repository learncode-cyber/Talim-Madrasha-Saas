import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="লাইব্রেরি রিপোর্ট"
      breadcrumb="হোম → লাইব্রেরি → রিপোর্ট"
      searchPlaceholder="বই বা শিক্ষার্থীর নাম দিয়ে খুঁজুন..."
      filterOptions={["সকল", "ফেরতের মেয়াদ পার হয়েছে"]}
      tableTitle="ইস্যু/ফেরতের ইতিহাস"
      countSuffix="টি এন্ট্রি"
      addHref={undefined}
      addLabel={undefined}
      rows={[
    { id: "১", avatarLabel: "ম", title: "মুহাম্মদ ইউসুফ — সহীহ মুসলিম", meta: "ইস্যু: ১০ আগস্ট", tag: "ফেরত বাকি", tagTone: "warn", amount: undefined, actionLabel: "বিস্তারিত" },
      ]}
    />
  );
}
