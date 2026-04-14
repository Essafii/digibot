import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Layers, Sparkles, Wrench } from "lucide-react";

import {
  whyDigibotCards,
  whyDigibotSectionIntro,
} from "@/data/services/why-digibot-hub";
import { Container } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils/cn";

const iconById: Record<(typeof whyDigibotCards)[number]["id"], LucideIcon> = {
  single: Layers,
  clarity: BadgeCheck,
  craft: Wrench,
  fit: Sparkles,
};

export function WhyDigibotServices() {
  return (
    <SectionShell tone="white" className="!py-20 sm:!py-24 lg:!py-28">
      <Container className="max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
            {whyDigibotSectionIntro.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            {whyDigibotSectionIntro.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-900/78 sm:text-lg">
            {whyDigibotSectionIntro.description}
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {whyDigibotCards.map((item) => {
            const Icon = iconById[item.id];
            return (
              <li key={item.id}>
                <article
                  className={cn(
                    "flex h-full flex-col rounded-3xl border border-brand-100 bg-gradient-to-b from-white to-brand-50/40 p-7 text-center shadow-sm ring-1 ring-brand-950/[0.03] sm:p-8",
                    "transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/8",
                  )}
                >
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/25">
                    <Icon className="h-7 w-7" aria-hidden />
                  </span>
                  <h3 className="mt-6 text-base font-bold text-brand-950 sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-900/76">
                    {item.text}
                  </p>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </SectionShell>
  );
}
