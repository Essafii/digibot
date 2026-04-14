import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ServiceCatalogEntry } from "@/data/services/types";
import { servicePath } from "@/constants/services";
import { serviceIcons } from "@/components/sections/services/service-icons";
import { cn } from "@/lib/utils/cn";

type ServiceSummaryCardProps = {
  entry: ServiceCatalogEntry;
  className?: string;
};

export function ServiceSummaryCard({ entry, className }: ServiceSummaryCardProps) {
  const href = servicePath(entry.slug);
  const Icon = serviceIcons[entry.icon];

  return (
    <li className={className}>
      <article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100/90 bg-white p-8 shadow-md ring-1 ring-brand-950/[0.04] sm:p-9",
          "transition duration-300 ease-out",
          "hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-900/12 hover:ring-brand-200/60",
        )}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-brand-800 opacity-90 transition duration-300 group-hover:opacity-100"
          aria-hidden
        />
        <div className="flex items-start justify-between gap-4">
          <div
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/30",
              "ring-2 ring-white/25 transition duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-brand-600/35",
            )}
          >
            <Icon className="h-8 w-8" aria-hidden />
          </div>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-100">
            DIGIBOT
          </span>
        </div>
        <h2 className="mt-8 text-xl font-bold tracking-tight text-brand-950 sm:text-2xl">
          {entry.title}
        </h2>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-900/78 sm:text-[0.95rem]">
          {entry.shortDescription}
        </p>
        <Link
          href={href}
          className={cn(
            "mt-10 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-brand-600/30",
            "transition duration-200 hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/25",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500",
          )}
        >
          {entry.ctaLabel}
          <ArrowUpRight
            className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </Link>
      </article>
    </li>
  );
}
