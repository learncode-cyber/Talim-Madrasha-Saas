// ছোট classnames helper — clsx/tailwind-merge install করতে না চাইলে এটাই যথেষ্ট
// আপনার প্রজেক্টে ইতিমধ্যে `clsx` বা `tailwind-merge` থাকলে সেটাই ব্যবহার করুন,
// এই ফাইলটা বাদ দিয়ে সরাসরি `import { clsx } from "clsx"` করে দিন।
export function clsx(...args: Array<string | false | null | undefined>): string {
  return args.filter(Boolean).join(" ");
}
