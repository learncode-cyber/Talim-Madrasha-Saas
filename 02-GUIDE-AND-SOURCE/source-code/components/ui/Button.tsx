import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx } from "./cn";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white border-brand-600 hover:bg-brand-500",
  secondary:
    "bg-white text-slate-700 border-slate-200 hover:bg-slate-50",
  ghost: "bg-transparent text-slate-600 border-transparent hover:bg-slate-100",
  danger: "bg-red-600 text-white border-red-600 hover:bg-red-700",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-xs rounded-lg",
  md: "h-11 px-4 text-sm rounded-lg", // h-11 = 44px, ন্যূনতম টাচ টার্গেট
};

// Link/<a>-এর জন্য reuse করতে (Radix Slot ছাড়াই) — যেমন:
// <Link href="/x" className={buttonVariants({ variant: "primary" })}>...</Link>
export function buttonVariants({ variant = "secondary", size = "md", className = "" }: {
  variant?: Variant; size?: Size; className?: string;
} = {}) {
  return clsx(
    "inline-flex items-center justify-center gap-1.5 border font-semibold whitespace-nowrap",
    "transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-1",
    variants[variant],
    sizes[size],
    className
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "secondary", size = "md", className, children, ...props }, ref) => (
    <button ref={ref} className={buttonVariants({ variant, size, className })} {...props}>
      {children}
    </button>
  )
);
Button.displayName = "Button";
