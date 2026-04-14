import { Check, Package, Sparkles } from "lucide-react";

import type { ServicePageContent } from "@/data/services/types";
import { PageCta } from "@/components/sections/page-cta";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils/cn";

type ServiceDetailBodyProps = {
  data: ServicePageContent;
};

const solutionAccent = [
  "from-brand-500 to-brand-700",
  "from-brand-600 to-brand-900",
  "from-brand-400 to-brand-600",
  "from-brand-500 to-brand-800",
] as const;

export function ServiceDetailBody({ data }: ServiceDetailBodyProps) {
  return (
    <>
      <SectionShell tone="white" className="!py-20 sm:!py-24 lg:!py-28">
        <Container className="max-w-6xl">
          <SectionHeading
            eyebrow="En bref"
            title="Ce que vous devez savoir"
            description="Trois questions que nos clients se posent avant de nous confier un chantier."
            className="max-w-2xl"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-white to-brand-50/50 p-7 shadow-sm ring-1 ring-brand-950/[0.03] sm:p-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-600">
                Ce que c’est
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-900/82">
                {data.presentation.whatItIs}
              </p>
            </div>
            <div className="rounded-3xl border border-brand-100 bg-gradient-to-br from-white to-brand-50/50 p-7 shadow-sm ring-1 ring-brand-950/[0.03] sm:p-8">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-600">
                À quoi ça sert pour vous
              </h3>
              <p className="mt-4 text-base leading-relaxed text-brand-900/82">
                {data.presentation.whatFor}
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-3xl border border-brand-200/60 bg-brand-950 px-6 py-8 text-white sm:px-10 sm:py-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Sparkles className="h-5 w-5 text-brand-200" aria-hidden />
              </span>
              <h3 className="text-lg font-bold sm:text-xl">
                Cas d’usage fréquents
              </h3>
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {data.presentation.useCases.map((line) => (
                <li
                  key={line}
                  className="flex gap-3 text-sm leading-snug text-brand-100/95 sm:text-[0.95rem]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                    <Check className="h-3 w-3" aria-hidden strokeWidth={3} />
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </SectionShell>

      <SectionShell tone="soft" className="!py-20 sm:!py-24 lg:!py-28">
        <Container className="max-w-7xl">
          <SectionHeading
            eyebrow="Notre offre"
            title="Solutions DIGIBOT"
            description="Des blocs actionnables — le périmètre exact est calibré avec vous avant signature."
            align="center"
            className="mx-auto max-w-2xl"
          />
          <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:mt-20">
            {data.solutions.map((s, i) => (
              <li key={s.title}>
                <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white p-8 shadow-md ring-1 ring-brand-950/[0.03] transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                  <div
                    className={cn(
                      "h-1.5 w-full rounded-full bg-gradient-to-r opacity-90",
                      solutionAccent[i % solutionAccent.length],
                    )}
                    aria-hidden
                  />
                  <h3 className="mt-6 text-lg font-bold text-brand-950 sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-brand-900/78 sm:text-base">
                    {s.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </SectionShell>

      <SectionShell tone="white" className="!py-20 sm:!py-24 lg:!py-28">
        <Container className="max-w-7xl">
          <SectionHeading
            eyebrow="Livrables"
            title="Matériel, logiciels & prestations"
            description="Exemples types — la liste finale dépend de votre site, de vos objectifs et de l’existant."
            align="center"
            className="mx-auto max-w-2xl"
          />
          <ul className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-2">
            {data.offerings.map((block) => (
              <li key={block.category}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-lg ring-1 ring-brand-950/[0.04]">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-brand-900 to-brand-800 px-6 py-4">
                    <Package
                      className="h-5 w-5 shrink-0 text-brand-200"
                      aria-hidden
                    />
                    <h3 className="text-base font-bold text-white sm:text-lg">
                      {block.category}
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-3.5 px-6 py-7 sm:px-8 sm:py-8">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 border-b border-brand-100 pb-3.5 text-sm leading-relaxed text-brand-900/85 last:border-0 last:pb-0 sm:text-[0.95rem]"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </SectionShell>

      <SectionShell tone="gradient" className="!py-20 sm:!py-24 lg:!py-28">
        <Container className="max-w-7xl">
          <SectionHeading
            eyebrow="Bénéfices"
            title="Ce que vous y gagnez"
            description="Des résultats concrets — pas seulement de la technique pour la technique."
            align="center"
            className="mx-auto max-w-2xl"
          />
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {data.benefits.map((b, i) => (
              <li key={b.title}>
                <article
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-3xl border border-brand-100/90 bg-white p-7 shadow-md",
                    "transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/10",
                  )}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white shadow-md">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-brand-950 sm:text-lg">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-900/76">
                    {b.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </SectionShell>

      <SectionShell tone="white" className="!py-20 sm:!py-24 lg:!py-28">
        <Container className="max-w-6xl">
          <SectionHeading
            eyebrow="Méthode"
            title="Comment on travaille ensemble"
            description="Simple, lisible, sans surprise sur les responsabilités."
            align="center"
            className="mx-auto max-w-2xl"
          />
          <ol className="mt-16 space-y-5 lg:mt-20">
            {data.process.map((step) => (
              <li
                key={step.title}
                className="flex gap-5 rounded-3xl border border-brand-100 bg-gradient-to-r from-white to-brand-50/40 p-6 shadow-sm ring-1 ring-brand-950/[0.03] sm:gap-7 sm:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-base font-bold text-white shadow-lg shadow-brand-600/25">
                  {step.step}
                </div>
                <div className="min-w-0 pt-0.5">
                  <h3 className="text-lg font-bold text-brand-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-900/76 sm:text-base">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </SectionShell>

      <PageCta
        title="Prêt à sécuriser votre projet ?"
        description="Un seul message suffit : nous revenons vers vous avec une proposition structurée — délais, livrables et budget lisibles."
        primaryLabel="Demander un devis gratuit"
        primaryHint="Sans engagement • devis détaillé et périmètre explicite"
        secondaryHint="Réponse rapide — en général sous 24 à 48 h ouvrées"
      />
    </>
  );
}
