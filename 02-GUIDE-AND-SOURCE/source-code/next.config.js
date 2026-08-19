/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // static export-এ next/image optimization API চলে না
  trailingSlash: true, // Hostinger shared hosting-এ ফোল্ডার-স্টাইল রুট ভালোভাবে সার্ভ হয়
};

module.exports = nextConfig;
