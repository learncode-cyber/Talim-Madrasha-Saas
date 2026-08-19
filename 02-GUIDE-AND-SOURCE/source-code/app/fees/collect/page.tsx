import { FormTemplate } from "@/components/templates/FormTemplate";

export default function Page() {
  return (
    <FormTemplate
      title="ফি সংগ্রহ"
      breadcrumb="হোম → অর্থ → ফি সংগ্রহ"
      submitLabel="ফি গ্রহণ করুন"
      confirmBeforeSubmit={{
        title: "ফি গ্রহণ নিশ্চিত করুন",
        desc: "এই তথ্য অনুযায়ী ফি জমা হিসেবে যুক্ত হবে। জমা দেওয়ার আগে তথ্য আরেকবার যাচাই করুন।",
      }}
      fields={[
    { name: "student", label: "শিক্ষার্থী নির্বাচন করুন", type: "select", required: true, placeholder: undefined, options: ["আবু বকর সিদ্দিক (রোল ০০২)", "ইয়াকুব আলী (রোল ০০৯)"], fullWidth: true },
    { name: "month", label: "কোন মাসের ফি", type: "select", required: true, placeholder: undefined, options: ["আগস্ট", "সেপ্টেম্বর"], fullWidth: false },
    { name: "amount", label: "পরিমাণ (৳)", type: "number", required: true, placeholder: "যেমন: ৫০০", options: undefined, fullWidth: false },
    { name: "method", label: "পেমেন্ট মাধ্যম", type: "select", required: true, placeholder: undefined, options: ["নগদ", "বিকাশ", "নগদ ট্রান্সফার"], fullWidth: false },
      ]}
    />
  );
}
