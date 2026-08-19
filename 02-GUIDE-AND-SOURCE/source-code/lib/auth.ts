// lib/auth.ts
// static export-এ কোনো Node server নেই, তাই middleware/server-side session check
// করা যায় না। এটা standard SPA-auth প্যাটার্ন: token client-এ রাখা হয়, প্রতিটা
// protected page লোড হওয়ার সাথে সাথে token চেক করে, না থাকলে login-এ পাঠিয়ে দেয়।
//
// ⚠️ সতর্কতা (honest caveat): এটা শুধু UX-level গার্ড — কেউ browser dev tools দিয়ে
// JS বন্ধ করলে বা সরাসরি static HTML request করলে এই চেক bypass হয়ে যাবে।
// আসল নিরাপত্তা আসতে হবে Laravel API থেকে — প্রতিটা API কলে session/token
// যাচাই করে ডেটা না দেওয়া (401 ফেরত দেওয়া)। এই ফাইলটা শুধু casual/accidental
// unauthenticated access আটকায়, সেটাই এর একমাত্র উদ্দেশ্য।

const TOKEN_KEY = "talim_auth_token";

export function setAuthToken(token: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(TOKEN_KEY, token);
}

export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function clearAuthToken() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated(): boolean {
  return !!getAuthToken();
}
