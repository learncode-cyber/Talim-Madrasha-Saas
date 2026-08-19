# তালিম SaaS — ডিপ্লয়মেন্ট গাইড

## ✅ Verify করা হয়েছে (শেষবার)
`npm run build` ক্লিন চালিয়ে যাচাই করেছি — **০ error**, ৩৮টা রুটই static HTML export
হয়েছে। Sidebar-এর প্রতিটা লিংক (nav-config.tsx) বাস্তবে তৈরি হওয়া রুটের সাথে মিলিয়ে
চেক করেছি — কোনো broken link নেই।

## ফোল্ডার গঠন
```
01-MAIN-SOFTWARE/        ← Hostinger-এ আপলোড করবেন, hu-hubohu এই অবস্থায়
02-GUIDE-AND-SOURCE/     ← গাইড + future development-এর সোর্স কোড
```

## ১-ক্লিক ডিপ্লয় (Hostinger)
1. `01-MAIN-SOFTWARE`-এর ভেতরের সব ফাইল নিন (ফোল্ডার নিজে না)
2. hPanel → File Manager → `public_html/app` এ পুরনো ফাইল সরিয়ে এগুলো আপলোড করুন
3. কোনো `npm install`/Node server লাগবে না — pure static HTML/CSS/JS

## ⚠️ ফন্ট (LiAdorNodi) — এখনো ফাইল দেওয়া হয়নি
CSS কোড বসিয়ে দিয়েছি (`app/globals.css`), পুরো সাইটের ডিফল্ট ফন্ট করে দিয়েছি।
কিন্তু আসল `LiAdorNodi.woff2` ফাইলটা এখনো পাইনি। যতক্ষণ না দেন, fallback (Hind Siliguri)
দিয়েই দেখাবে। পরে দিলে: `source-code/public/fonts/LiAdorNodi.woff2` এ রেখে `npm run build`।

## সততার সাথে সীমাবদ্ধতা
- সব ডেটা এখনো hardcoded demo, আসল Laravel API connect করা হয়নি
- Login শুধু client-side UX গার্ড
- Chart placeholder, bKash/SMS বাটন আছে কিন্তু API call নেই

## Development
```bash
cd source-code && npm install && npm run dev
```
