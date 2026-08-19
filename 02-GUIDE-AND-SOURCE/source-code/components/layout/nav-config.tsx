import {
  LayoutGrid, Users, UserPlus, AlertCircle, Settings, BarChart3,
  Briefcase, ClipboardCheck, Wallet, HandCoins, Heart, TrendingUp,
  BookOpenCheck, CalendarDays, BookMarked, Building2, GitCompare,
  Network, FileEdit, FileBarChart, ClipboardList, Sun,
  Bed, UtensilsCrossed, Library, BookUp, LibraryBig, Bell,
  LucideIcon,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
}
export interface NavSection {
  title: string;
  items: NavItem[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    title: "প্রধান",
    items: [
      { label: "ড্যাশবোর্ড", href: "/dashboard", icon: LayoutGrid },
      { label: "অ্যানালিটিক্স", href: "/analytics", icon: BarChart3 },
    ],
  },
  {
    title: "শিক্ষার্থী",
    items: [
      { label: "তালিকা", href: "/students/list", icon: Users },
      { label: "নতুন ভর্তি", href: "/students/admission", icon: UserPlus },
      { label: "হাজিরা", href: "/attendance", icon: ClipboardCheck },
      { label: "ফলাফল এন্ট্রি", href: "/results/entry", icon: FileEdit },
      { label: "ফলাফল রিপোর্ট", href: "/results/report", icon: FileBarChart },
    ],
  },
  {
    title: "শিক্ষক ও কর্মচারী",
    items: [
      { label: "স্টাফ তালিকা", href: "/staff/list", icon: Briefcase },
      { label: "স্টাফ হাজিরা", href: "/staff/attendance", icon: ClipboardCheck },
      { label: "বেতন", href: "/staff/salary", icon: Wallet },
    ],
  },
  {
    title: "অর্থ",
    items: [
      { label: "বেকয়া", href: "/fees/due", icon: AlertCircle, badge: 8 },
      { label: "ফি সংগ্রহ", href: "/fees/collect", icon: HandCoins },
      { label: "দান সংগ্রহ", href: "/donation/collect", icon: Heart },
      { label: "দান ড্যাশবোর্ড", href: "/donation/dashboard", icon: TrendingUp },
      { label: "দান রিপোর্ট", href: "/donation/report", icon: FileBarChart },
    ],
  },
  {
    title: "হিফজ বিভাগ",
    items: [
      { label: "হিফজ ড্যাশবোর্ড", href: "/hifz/dashboard", icon: BookOpenCheck },
      { label: "দৈনিক সবক", href: "/hifz/daily", icon: CalendarDays },
      { label: "অগ্রগতি", href: "/hifz/progress", icon: TrendingUp },
    ],
  },
  {
    title: "হোস্টেল",
    items: [
      { label: "হোস্টেল ড্যাশবোর্ড", href: "/hostel/dashboard", icon: Bed },
      { label: "রুম ব্যবস্থাপনা", href: "/hostel/rooms", icon: Building2 },
      { label: "মেস/খাবার", href: "/hostel/mess", icon: UtensilsCrossed },
    ],
  },
  {
    title: "লাইব্রেরি",
    items: [
      { label: "বই তালিকা", href: "/library/books", icon: Library },
      { label: "ইস্যু/ফেরত", href: "/library/issue", icon: BookUp },
      { label: "রিপোর্ট", href: "/library/report", icon: LibraryBig },
    ],
  },
  {
    title: "বেফাকুল মাদারিস",
    items: [
      { label: "বেফাক ড্যাশবোর্ড", href: "/befaq/dashboard", icon: BookMarked },
      { label: "রেজিস্ট্রেশন", href: "/befaq/registration", icon: ClipboardList },
      { label: "ফলাফল", href: "/befaq/results", icon: FileBarChart },
    ],
  },
  {
    title: "শাখা ব্যবস্থাপনা",
    items: [
      { label: "শাখা ড্যাশবোর্ড", href: "/branches/dashboard", icon: Network },
      { label: "শাখা তালিকা", href: "/branches/list", icon: Building2 },
      { label: "তুলনা", href: "/branches/compare", icon: GitCompare },
    ],
  },
  {
    title: "সময়সূচি",
    items: [
      { label: "ক্যালেন্ডার", href: "/calendar", icon: CalendarDays },
      { label: "নামাজের সময়", href: "/prayer-times", icon: Sun },
    ],
  },
  {
    title: "সিস্টেম",
    items: [
      { label: "নোটিফিকেশন", href: "/notifications", icon: Bell },
      { label: "সেটিংস", href: "/settings", icon: Settings },
    ],
  },
];
