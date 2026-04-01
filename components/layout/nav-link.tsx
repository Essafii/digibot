"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { RouteHref } from "@/constants/routes";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils/cn";

type NavLinkProps = {
  href: RouteHref;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
};

function isActivePath(pathname: string, href: RouteHref): boolean {
  if (href === ROUTES.home) {
    return pathname === "/" || pathname === "";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLink({ href, children, className, onNavigate }: NavLinkProps) {
  const pathname = usePathname();
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "relative inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium leading-none tracking-tight transition-colors duration-200",
        active
          ? "bg-brand-50 font-semibold text-brand-900 shadow-sm ring-1 ring-brand-200/90"
          : "text-brand-900/65 hover:bg-brand-25 hover:text-brand-800",
        className,
      )}
    >
      {children}
    </Link>
  );
}
