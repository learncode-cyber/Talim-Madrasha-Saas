import { ListTemplate } from "@/components/templates/ListTemplate";

export default function Page() {
  return (
    <ListTemplate
      title="শাখা তুলনা"
      breadcrumb="হোম → শাখা ব্যবস্থাপনা → তুলনা"
      searchPlaceholder="শাখার নাম দিয়ে খুঁজুন..."
      filterOptions={undefined}
      tableTitle="শাখাভিত্তিক তুলনা"
      countSuffix="টি শাখা"
      addHref={undefined}
      addLabel={undefined}
      rows={[
    { id: "১", avatarLabel: "প্র", title: "প্রধান শাখা", meta: "৩৮৪ শিক্ষার্থী · ৯৭% হাজিরা", tag: undefined, tagTone: undefined, amount: undefined, actionLabel: "বিস্তারিত" },
    { id: "২", avatarLabel: "সা", title: "সাটেলাইট শাখা", meta: "১১২ শিক্ষার্থী · ৯১% হাজিরা", tag: undefined, tagTone: undefined, amount: undefined, actionLabel: "বিস্তারিত" },
      ]}
    />
  );
}
