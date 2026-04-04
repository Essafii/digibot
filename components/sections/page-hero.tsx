import type { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils/cn";

type PageHeroProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  actions?: ReactNode;
  className?: string;
};

export function PageHero({
  title,
  description,
  eyebrow,
  actions,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-brand-100 bg-gradient-to-b from-brand-50 via-white to-white py-14 sm:py-16 lg:py-20",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_65%_70%_at_50%_-20%,rgba(37,99,235,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-brand-400/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative max-w-6xl">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
            {eyebrow}
          </p>
        ) : null}
        <h1
          className={cn(
            "text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl lg:text-[2.5rem]",
            eyebrow ? "mt-4" : "",
          )}
        >
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-900/75 sm:text-lg">
            {description}
          </p>
        ) : null}
        {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
      </Container>
    </section>
  );
}
