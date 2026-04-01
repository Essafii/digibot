import type { ReactNode } from "react";
import Link from "next/link";

import type { RouteHref } from "@/constants/routes";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "onDark" | "outlineOnDark";

type ButtonLinkProps = {
  href: RouteHref | string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/20",
  secondary:
    "border-2 border-brand-200 bg-white text-brand-900 hover:border-brand-300 hover:bg-brand-50",
  onDark:
    "bg-white text-brand-900 shadow-lg hover:bg-brand-50",
  outlineOnDark:
    "border-2 border-white/35 bg-transparent text-white hover:border-white/60 hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-tight transition-all duration-200",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
