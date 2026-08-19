"use client";

import { Search } from "lucide-react";

interface SearchFilterBarProps {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  filterOptions?: string[];
  filterValue?: string;
  onFilterChange?: (v: string) => void;
}

export function SearchFilterBar({
  placeholder,
  value,
  onChange,
  filterOptions,
  filterValue,
  onFilterChange,
}: SearchFilterBarProps) {
  return (
    <div className="mb-3.5 flex flex-wrap gap-2">
      <div className="flex h-11 min-w-[200px] flex-1 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-500/20">
        <Search className="h-4 w-4 flex-shrink-0 text-slate-400" strokeWidth={2} />
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="h-11 w-full border-none bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>
      {filterOptions && (
        <select
          value={filterValue}
          onChange={(e) => onFilterChange?.(e.target.value)}
          aria-label="ফিল্টার"
          className="h-11 rounded-lg border border-slate-200 bg-white px-3 text-xs font-medium text-slate-600 outline-none focus:border-brand-500"
        >
          {filterOptions.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      )}
    </div>
  );
}
