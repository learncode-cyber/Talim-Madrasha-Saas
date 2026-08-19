import { FormTemplate } from "@/components/templates/FormTemplate";

export default function Page() {
  return (
    <FormTemplate
      title="বেতন প্রদান"
      breadcrumb="হোম → শিক্ষক ও কর্মচারী → বেতন"
      submitLabel="বেতন প্রদান নিশ্চিত করুন"
      confirmBeforeSubmit={{
        title: "বেতন প্রদান নিশ্চিত করুন",
        desc: "নির্বাচিত স্টাফকে এই পরিমাণ বেতন প্রদান হিসেবে রেকর্ড হবে। জমা দেওয়ার আগে পরিমাণ আরেকবার যাচাই করুন।",
      }}
      fields={[
    { name: "staff", label: "স্টাফ নির্বাচন করুন", type: "select", required: true, placeholder: undefined, options: ["মুহাম্মদ রাশেদুল হক", "আব্দুল কাদের"], fullWidth: true },
    { name: "month", label: "মাস", type: "select", required: true, placeholder: undefined, options: ["জুলাই", "আগস্ট"], fullWidth: false },
    { name: "amount", label: "বেতনের পরিমাণ (৳)", type: "number", required: true, placeholder: "যেমন: ১৫০০০", options: undefined, fullWidth: false },
    { name: "note", label: "মন্তব্য", type: "textarea", required: false, placeholder: "ঐচ্ছিক", options: undefined, fullWidth: true },
      ]}
    />
  );
}
