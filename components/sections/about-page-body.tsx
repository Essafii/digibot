import { Compass, HeartHandshake, Sparkles, Target } from "lucide-react";

import { BRAND } from "@/constants/brand";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { PageCta } from "@/components/sections/page-cta";
import { cn } from "@/lib/utils/cn";

const values = [
  {
    icon: Target,
    title: "Clarté avant tout",
    text: "Nous traduisons le technique en décisions compréhensibles : périmètre, options, délais et budget.",
  },
  {
    icon: HeartHandshake,
    title: "Proximité & réactivité",
    text: "Une relation directe, des réponses rapides et des interventions planifiées pour limiter l’impact sur votre activité.",
  },
  {
    icon: Sparkles,
    title: "Qualité durable",
    text: "Matériel et mises en œuvre choisis pour tenir dans le temps, avec une documentation utile après la livraison.",
  },
  {
    icon: Compass,
    title: "Vision globale",
    text: "Sécurité, réseau, web et marketing ne sont pas isolés : nous alignons les briques pour un ensemble cohérent.",
  },
] as const;

const stats = [
  { value: "4", label: "piliers d’expertise" },
  { value: "100%", label: "sur devis personnalisé" },
  { value: "MA", label: "interventions Maroc" },
] as const;

export function AboutPageBody() {
  return (
    <>
      <SectionShell tone="white">
        <Container className="max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Notre histoire"
                title={`${BRAND.name}, partenaire technique de confiance`}
                description="DIGIBOT accompagne les entreprises, commerces et particuliers au Maroc : sécurité, réseaux, web et marketing digital — avec la même exigence sur la qualité d’exécution et la clarté du devis."
              />
              <p className="mt-6 text-base leading-relaxed text-brand-900/75">
                Chaque mission suit un fil conducteur : écoute du besoin sur site ou
                à distance, proposition argumentée, installation ou développement
                soignés, puis passation pour votre autonomie. Nous privilégions le
                matériel et les solutions éprouvés plutôt que l’effet gadget.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={ROUTES.quote}>Demander un devis gratuit</ButtonLink>
                <ButtonLink href={ROUTES.services} variant="secondary">
                  Découvrir nos services
                </ButtonLink>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 text-center shadow-sm lg:text-left"
                >
                  <p className="text-3xl font-bold tracking-tight text-brand-700 sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-brand-900/70">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </SectionShell>

      <SectionShell tone="soft">
        <Container className="max-w-7xl">
          <SectionHeading
            eyebrow="Engagements"
            title="Ce qui guide notre travail au quotidien"
            description="Des principes simples, appliqués sur chaque chantier et chaque livrable numérique."
            align="center"
            className="mx-auto max-w-3xl"
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <li key={v.title}>
                  <article
                    className={cn(
                      "h-full rounded-2xl border border-brand-100 bg-white p-6 shadow-sm",
                      "transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-900/8 sm:p-8",
                    )}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/25">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h2 className="mt-5 text-lg font-bold text-brand-950">
                      {v.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-brand-900/75">
                      {v.text}
                    </p>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </SectionShell>

      <PageCta
        title="Travailler avec DIGIBOT"
        description="Expliquez votre contexte au Maroc : nous revenons vers vous avec un devis structuré et des délais réalistes."
        primaryLabel="Demander un devis gratuit"
        primaryHint="Sans engagement • matériel & main d’œuvre détaillés"
        secondaryHint="Réponse rapide — en général sous 24 à 48 h ouvrées"
      />
    </>
  );
}
