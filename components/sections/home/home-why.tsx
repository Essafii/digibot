"use client";

import type { ComponentType } from "react";
import { Award, Cpu, Handshake, Layers, Puzzle, Zap } from "lucide-react";

import { homeWhyDigibot } from "@/data/home/why-digibot";
import type { HomeWhyIcon } from "@/data/home/why-digibot";
import { translations } from "@/constants/translations";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils/cn";

const whyIcons: Record<
  HomeWhyIcon,
  ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  custom: Puzzle,
  expertise: Layers,
  support: Handshake,
  reactive: Zap,
  image: Award,
  tech: Cpu,
};

export function HomeWhy() {
  const { language } = useLanguage();
  const t = translations[language];
  const whyBlocks = homeWhyDigibot[language];

  return (
    <SectionShell tone="soft" className="dark:bg-slate-900">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow={t.homeWhyEyebrow}
          title={t.homeWhyTitle}
          description={t.homeWhyDescription}
          align="center"
          className="mx-auto max-w-3xl"
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {whyBlocks.map((item) => {
            const Icon = whyIcons[item.icon];

            return (
              <li key={item.id}>
                <article
                  className={cn(
                    "h-full rounded-2xl border border-brand-100/80 bg-white/90 p-6 shadow-sm",
                    "dark:border-slate-800 dark:bg-slate-950/90 dark:shadow-black/20",
                    "backdrop-blur-sm transition duration-300 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5",
                    "dark:hover:border-brand-500/40 dark:hover:shadow-brand-950/20",
                  )}
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700 dark:bg-slate-800 dark:text-brand-400">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-brand-950 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-brand-900/70 dark:text-slate-300">
                    {item.description}
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