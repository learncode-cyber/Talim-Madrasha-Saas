import { FormTemplate } from "@/components/templates/FormTemplate";

export default function Page() {
  return (
    <FormTemplate
      title="বই ইস্যু/ফেরত"
      breadcrumb="হোম → লাইব্রেরি → ইস্যু/ফেরত"
      submitLabel="ইস্যু নিশ্চিত করুন"
      fields={[
    { name: "book", label: "বই নির্বাচন করুন", type: "select", required: true, placeholder: undefined, options: ["সহীহ বুখারী শরীফ", "তাফসীরে ইবনে কাসীর"], fullWidth: true },
    { name: "student", label: "শিক্ষার্থীর নাম", type: "text", required: true, placeholder: "যেমন: আবু বকর সিদ্দিক", options: undefined, fullWidth: false },
    { name: "returnDate", label: "ফেরতের তারিখ", type: "date", required: true, placeholder: undefined, options: undefined, fullWidth: false },
      ]}
    />
  );
}
