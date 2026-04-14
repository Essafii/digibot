import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import type { ServicePageContent } from "@/data/services/types";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { serviceIcons } from "@/components/sections/services/service-icons";

type ServiceDetailHeroProps = {
  data: ServicePageContent;
};

export function ServiceDetailHero({ data }: ServiceDetailHeroProps) {
  const Icon = serviceIcons[data.icon];

  return (
    <section className="relative overflow-hidden border-b border-brand-100 bg-gradient-to-b from-brand-100/35 via-white to-white pb-16 pt-10 sm:pb-20 sm:pt-12 lg:pb-24 lg:pt-14">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(420px,55vh)] bg-[radial-gradient(ellipse_68%_60%_at_50%_-12%,rgba(37,99,235,0.2),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-brand-400/14 blur-3xl"
        aria-hidden
      />
      <Container className="relative max-w-6xl">
        <Link
          href={ROUTES.services}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition hover:text-brand-900"
        >
          <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
          Tous les services
        </Link>
        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          <div
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-2xl shadow-brand-600/30 ring-4 ring-white sm:h-24 sm:w-24"
            aria-hidden
          >
            <Icon className="h-10 w-10 sm:h-11 sm:w-11" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
              Service DIGIBOT
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-[1.1] tracking-tight text-brand-950 sm:text-4xl lg:text-5xl">
              {data.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-brand-900/82 sm:text-lg">
              {data.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:gap-10">
              <div className="flex flex-col items-start gap-2">
                <ButtonLink
                  href={ROUTES.quote}
                  className="min-h-[3rem] px-8 py-3.5 text-base shadow-lg shadow-brand-600/20"
                >
                  Demander un devis gratuit
                </ButtonLink>
                <p className="max-w-xs text-xs leading-snug text-brand-700/85">
                  Chiffrage clair • pas de surprise sur le périmètre
                </p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <ButtonLink
                  href={ROUTES.contact}
                  variant="secondary"
                  className="min-h-[3rem] border-brand-300/80 px-8 py-3.5 text-base"
                >
                  Nous contacter
                </ButtonLink>
                <p className="max-w-xs text-xs leading-snug text-brand-700/85">
                  Réponse rapide — en général sous 24 à 48 h ouvrées
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
