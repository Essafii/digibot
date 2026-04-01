import type { ComponentType } from "react";
import {
  Award,
  Cpu,
  Handshake,
  Layers,
  Puzzle,
  Zap,
} from "lucide-react";

import { homeWhyDigibot } from "@/data/home/why-digibot";
import type { HomeWhyIcon } from "@/data/home/why-digibot";
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
  return (
    <SectionShell tone="soft">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="Valeur ajoutée"
          title="Pourquoi choisir DIGIBOT ?"
          description="Un partenaire technique et digital pour des projets sérieux, livrés avec exigence et suivi dans le temps."
          align="center"
          className="mx-auto max-w-3xl"
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {homeWhyDigibot.map((item) => {
            const Icon = whyIcons[item.icon];
            return (
              <li key={item.id}>
                <article
                  className={cn(
                    "h-full rounded-2xl border border-brand-100/80 bg-white/90 p-6 shadow-sm",
                    "backdrop-blur-sm transition duration-300 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5",
                  )}
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
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
