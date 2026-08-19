import { FormTemplate } from "@/components/templates/FormTemplate";

export default function Page() {
  return (
    <FormTemplate
      title="দৈনিক সবক এন্ট্রি"
      breadcrumb="হোম → হিফজ বিভাগ → দৈনিক সবক"
      submitLabel="সবক সংরক্ষণ করুন"
      fields={[
    { name: "student", label: "শিক্ষার্থী নির্বাচন করুন", type: "select", required: true, placeholder: undefined, options: ["মুহাম্মদ ইউসুফ", "আব্দুল্লাহ"], fullWidth: true },
    { name: "para", label: "পারা/সূরা", type: "text", required: true, placeholder: "যেমন: ১২ নং পারা", options: undefined, fullWidth: false },
    { name: "quality", label: "মান", type: "select", required: true, placeholder: undefined, options: ["মুমতাজ", "জাইয়্যিদ", "মাকবুল"], fullWidth: false },
      ]}
    />
  );
}
