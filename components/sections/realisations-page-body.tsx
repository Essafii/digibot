import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { realisationCases } from "@/data/realisations/cases";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { PageCta } from "@/components/sections/page-cta";
import { cn } from "@/lib/utils/cn";

const accentBar: Record<
  (typeof realisationCases)[number]["accent"],
  string
> = {
  blue: "from-brand-500 to-brand-700",
  indigo: "from-brand-600 to-brand-900",
  sky: "from-brand-400 to-brand-600",
};

export function RealisationsPageBody() {
  return (
    <>
      <SectionShell tone="gradient">
        <Container className="max-w-7xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Réalisations représentatives"
            description="Exemples de missions menées pour des structures de tailles variées. Chaque projet est adapté au contexte, au budget et aux contraintes du terrain."
            align="center"
            className="mx-auto max-w-3xl"
            action={
              <ButtonLink href={ROUTES.quote} variant="secondary">
                Demander un devis gratuit
              </ButtonLink>
            }
          />
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-16 xl:grid-cols-3">
            {realisationCases.map((project) => (
              <li key={project.id}>
                <article
                  className={cn(
                    "group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-md",
                    "transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10",
                  )}
                >
                  <div
                    className={cn(
                      "h-1.5 w-full bg-gradient-to-r",
                      accentBar[project.accent],
                    )}
                  />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                      {project.category}
                    </p>
                    <h2 className="mt-2 text-lg font-bold text-brand-950">
                      {project.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-900/70">
                      {project.description}
                    </p>
                    <p className="mt-4 rounded-xl bg-brand-50 px-4 py-3 text-sm font-medium text-brand-900/85">
                      <span className="text-brand-600">Résultat : </span>
                      {project.outcome}
                    </p>
                    <Link
                      href={ROUTES.quote}
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
                    >
                      Demander un devis gratuit
                      <ArrowUpRight
                        className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </SectionShell>
      <PageCta
        title="Votre projet sur cette liste demain ?"
        description="DIGIBOT livre des chantiers propres et documentés au Maroc — demandez un devis pour un périmètre clair."
        primaryLabel="Demander un devis gratuit"
        primaryHint="Sans engagement • planning & budget détaillés"
        secondaryHint="Réponse rapide — en général sous 24 à 48 h ouvrées"
      />
    </>
  );
}
