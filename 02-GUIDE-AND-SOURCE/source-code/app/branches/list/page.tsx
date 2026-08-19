import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="শাখা তালিকা"
      breadcrumb="হোম → শাখা ব্যবস্থাপনা → তালিকা"
      searchPlaceholder="শাখার নাম দিয়ে খুঁজুন..."
      filterOptions={["সকল", "সক্রিয়"]}
      tableTitle="সকল শাখা"
      countSuffix="টি শাখা"
      addHref={"#"}
      addLabel={"নতুন শাখা"}
      rows={[
    { id: "১", avatarLabel: "প্র", title: "প্রধান শাখা — দারুল উলুম হাশেমিয়া", meta: "সারানখোলা, বাগেরহাট", tag: "সক্রিয়", tagTone: "ok", amount: undefined, actionLabel: "বিস্তারিত" },
    { id: "২", avatarLabel: "সা", title: "সাটেলাইট শাখা", meta: "মোরেলগঞ্জ, বাগেরহাট", tag: "সক্রিয়", tagTone: "ok", amount: undefined, actionLabel: "বিস্তারিত" },
      ]}
    />
  );
}
