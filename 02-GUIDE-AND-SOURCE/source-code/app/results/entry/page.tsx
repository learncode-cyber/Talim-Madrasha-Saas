import { FormTemplate } from "@/components/templates/FormTemplate";

export default function Page() {
  return (
    <FormTemplate
      title="ফলাফল এন্ট্রি"
      breadcrumb="হোম → শিক্ষার্থী → ফলাফল এন্ট্রি"
      submitLabel="ফলাফল সংরক্ষণ করুন"
      fields={[
    { name: "exam", label: "পরীক্ষার নাম", type: "select", required: true, placeholder: undefined, options: ["বার্ষিক পরীক্ষা", "সাময়িক পরীক্ষা"], fullWidth: true },
    { name: "roll", label: "রোল নম্বর", type: "text", required: true, placeholder: "যেমন: ০০২", options: undefined, fullWidth: false },
    { name: "subject", label: "বিষয়", type: "select", required: true, placeholder: undefined, options: ["হাদিস", "ফিকহ", "তাফসীর", "আরবি"], fullWidth: false },
    { name: "marks", label: "প্রাপ্ত নম্বর", type: "number", required: true, placeholder: "১০০ এর মধ্যে", options: undefined, fullWidth: false },
      ]}
    />
  );
}
