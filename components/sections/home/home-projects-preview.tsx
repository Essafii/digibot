import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { homeProjectsPreview } from "@/data/home/projects-preview";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils/cn";

const accentBar: Record<
  (typeof homeProjectsPreview)[number]["accent"],
  string
> = {
  blue: "from-brand-500 to-brand-700",
  indigo: "from-brand-600 to-brand-900",
  sky: "from-brand-400 to-brand-600",
};

export function HomeProjectsPreview() {
  return (
    <SectionShell tone="gradient">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="Réalisations"
          title="Des projets concrets, des résultats mesurables"
          description="Un aperçu du type d’interventions que nous menons au quotidien pour nos clients."
          align="center"
          className="mx-auto max-w-3xl"
          action={
            <ButtonLink href={ROUTES.projects} variant="secondary">
              Voir toutes les réalisations
            </ButtonLink>
          }
        />
        <ul className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-3">
          {homeProjectsPreview.map((project) => (
            <li key={project.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10">
                <div
                  className={cn(
                    "h-1.5 w-full bg-gradient-to-r",
                    accentBar[project.accent],
                  )}
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-brand-950">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-900/70">
                    {project.description}
                  </p>
                  <Link
                    href={ROUTES.projects}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    En savoir plus
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
  );
}
