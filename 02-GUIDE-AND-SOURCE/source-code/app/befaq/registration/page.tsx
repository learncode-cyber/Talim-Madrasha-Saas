import { FormTemplate } from "@/components/templates/FormTemplate";

export default function Page() {
  return (
    <FormTemplate
      title="বেফাক রেজিস্ট্রেশন"
      breadcrumb="হোম → বেফাকুল মাদারিস → রেজিস্ট্রেশন"
      submitLabel="রেজিস্ট্রেশন সম্পন্ন করুন"
      fields={[
    { name: "student", label: "শিক্ষার্থী নির্বাচন করুন", type: "select", required: true, placeholder: undefined, options: ["আবু বকর সিদ্দিক", "ইয়াকুব আলী"], fullWidth: true },
    { name: "exam", label: "পরীক্ষার স্তর", type: "select", required: true, placeholder: undefined, options: ["দাওরা হাদিস", "মিশকাত", "হিদায়া"], fullWidth: false },
    { name: "fee", label: "রেজিস্ট্রেশন ফি (৳)", type: "number", required: true, placeholder: "যেমন: ১২০০", options: undefined, fullWidth: false },
      ]}
    />
  );
}
