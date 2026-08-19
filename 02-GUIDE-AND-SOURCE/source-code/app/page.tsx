import Link from "next/link";
import { GraduationCap } from "lucide-react";

// static export-এ server-side redirect() কাজ করে না, তাই client-safe meta-refresh
// + একটা visible link ব্যবহার করা হলো (accessibility ও no-JS ফলব্যাক দুটোই কাজ করে)
export default function Home() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/dashboard/" />
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-brand-700 text-white">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-500">
          <GraduationCap className="h-7 w-7" strokeWidth={2} />
        </div>
        <div className="text-xl font-bold">তালিম লোড হচ্ছে...</div>
        <Link href="/dashboard/" className="text-sm underline text-white/80">
          স্বয়ংক্রিয়ভাবে না গেলে এখানে ক্লিক করুন
        </Link>
      </div>
    </>
  );
}
