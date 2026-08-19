"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export interface TrendPoint {
  label: string;
  value: number;
}

interface TrendChartProps {
  title: string;
  data: TrendPoint[];
  valueSuffix?: string;
  color?: string;
}

/**
 * সহজ area/trend chart — attendance, revenue, progress ইত্যাদির জন্য।
 * static export-এ ঠিকভাবে চলে (client component, কোনো server dependency নেই)।
 */
export function TrendChart({ title, data, valueSuffix = "", color = "#155233" }: TrendChartProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="mb-3 text-[13.5px] font-bold text-slate-900">{title}</div>
      <div className="h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 5, right: 8, left: -18, bottom: 0 }}>
            <defs>
              <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.25} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis
              dataKey="label"
              tick={{ fontSize: 11, fill: "#64748b" }}
              axisLine={{ stroke: "#e2e8f0" }}
              tickLine={false}
            />
            <YAxis tick={{ fontSize: 11, fill: "#64748b" }} axisLine={false} tickLine={false} width={34} />
            <Tooltip
              formatter={(v) => [`${Array.isArray(v) ? v[0] : v}${valueSuffix}`, ""]}
              contentStyle={{
                borderRadius: 10,
                border: "1px solid #e2e8f0",
                fontSize: 12,
                fontFamily: "inherit",
                direction: "rtl",
              }}
              labelStyle={{ color: "#0f172a", fontWeight: 600 }}
            />
            <Area type="monotone" dataKey="value" stroke={color} strokeWidth={2.2} fill="url(#trendFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
