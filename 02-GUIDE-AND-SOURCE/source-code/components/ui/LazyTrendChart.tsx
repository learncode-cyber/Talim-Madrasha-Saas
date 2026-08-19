"use client";

import dynamic from "next/dynamic";
import type { TrendPoint } from "./TrendChart";

// এই ফাইলটা নিজেই client boundary, তাই ভেতরে dynamic(..., {ssr:false}) নিরাপদে
// ব্যবহার করা যায় — DashboardTemplate (server component) শুধু এই wrapper-কে
// normal child হিসেবে render করে, ফলে recharts শুধু chart আছে এমন পেজেই bundle হয়।
const TrendChart = dynamic(() => import("./TrendChart").then((m) => m.TrendChart), {
  ssr: false,
  loading: () => <div className="h-56 w-full animate-pulse rounded-2xl border border-slate-200 bg-slate-50" />,
});

export function LazyTrendChart(props: { title: string; data: TrendPoint[]; valueSuffix?: string }) {
  return <TrendChart {...props} />;
}
