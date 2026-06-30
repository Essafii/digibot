import Link from "next/link";
import { Sun } from "lucide-react";

import { ROUTES } from "@/constants/routes";
import { translations } from "@/constants/translations";
import { Container } from "@/components/ui/container";

const t = translations.fr;

export function HomeSolarSpotlight() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_90%_at_50%_0%,rgba(245,158,11,0.18),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl"
        aria-hidden
      />

      <Container className="relative max-w-5xl">
        <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:gap-14 lg:text-left">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-400 text-white shadow-lg shadow-amber-500/30 lg:h-20 lg:w-20">
            <Sun className="h-8 w-8 lg:h-9 lg:w-9" aria-hidden />
          </div>

          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              {t.homeSolarEyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {t.homeSolarTitle}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-100/90 sm:text-base lg:mx-0">
              {t.homeSolarDescription}
            </p>

            <div className="mx-auto mt-6 inline-flex max-w-fit items-baseline gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-4 py-2 lg:mx-0">
              <span className="text-xl font-bold text-amber-300 sm:text-2xl">
                {t.homeSolarStatValue}
              </span>
              <span className="text-xs font-medium text-brand-100/85 sm:text-sm">
                {t.homeSolarStatLabel}
              </span>
            </div>

            <div className="mt-8 flex flex-col items-center gap-2 lg:items-start">
              <Link
                href={`${ROUTES.solar}#devis`}
                className="inline-flex min-h-[3rem] min-w-[16rem] items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-amber-500/20 transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 sm:w-auto"
              >
                {t.homeSolarButton}
              </Link>

              <p className="max-w-[18rem] text-center text-xs leading-snug text-brand-200/90 lg:text-left">
                {t.homeSolarButtonHint}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
