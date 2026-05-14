"use client";

import { BRAND } from "@/constants/brand";
import { ROUTES } from "@/constants/routes";
import { translations } from "@/constants/translations";
import { useLanguage } from "@/components/language-provider";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

import { HomeHeroVisual } from "./home-hero-visual";

export function HomeHero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative overflow-hidden border-b border-brand-100 bg-gradient-to-b from-brand-50 via-white to-white pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(37,99,235,0.14),transparent)]"
        aria-hidden
      />

      <Container className="relative max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-600">
              {t.heroBadge}
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-brand-950 sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
              {t.heroTitle.replace("DIGIBOT", BRAND.name)}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-brand-900/80 sm:text-xl">
              {t.heroText}
            </p>

            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-start sm:gap-10">
              <div className="flex flex-col items-start gap-2">
                <ButtonLink href={ROUTES.quote}>
                  {t.quote}
                </ButtonLink>

                <p className="max-w-xs text-xs leading-snug text-brand-700/85">
                  {t.heroQuoteNote}
                </p>
              </div>

              <div className="flex flex-col items-start gap-2">
                <ButtonLink href={ROUTES.services} variant="secondary">
                  {t.heroServicesButton}
                </ButtonLink>

                <p className="max-w-xs text-xs leading-snug text-brand-700/85">
                  {t.heroServicesNote}
                </p>
              </div>
            </div>
          </div>

          <HomeHeroVisual />
        </div>
      </Container>
    </section>
  );
}