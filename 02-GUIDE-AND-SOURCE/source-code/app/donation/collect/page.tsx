import { FormTemplate } from "@/components/templates/FormTemplate";

export default function Page() {
  return (
    <FormTemplate
      title="দান সংগ্রহ"
      breadcrumb="হোম → অর্থ → দান সংগ্রহ"
      submitLabel="দান সংরক্ষণ করুন"
      confirmBeforeSubmit={{
        title: "দান সংরক্ষণ নিশ্চিত করুন",
        desc: "এই দাতার তথ্য ও পরিমাণ রেকর্ড হিসেবে যুক্ত হবে। জমা দেওয়ার আগে তথ্য আরেকবার যাচাই করুন।",
      }}
      fields={[
    { name: "donor", label: "দাতার নাম", type: "text", required: true, placeholder: "যেমন: হাজী আব্দুল করিম", options: undefined, fullWidth: true },
    { name: "mobile", label: "মোবাইল নম্বর", type: "tel", required: false, placeholder: "০১xxxxxxxxx", options: undefined, fullWidth: false },
    { name: "amount", label: "দানের পরিমাণ (৳)", type: "number", required: true, placeholder: "যেমন: ৫০০০", options: undefined, fullWidth: false },
    { name: "purpose", label: "খাত", type: "select", required: true, placeholder: undefined, options: ["সাধারণ তহবিল", "হোস্টেল উন্নয়ন", "লিল্লাহ বোর্ডিং"], fullWidth: false },
      ]}
    />
  );
}
