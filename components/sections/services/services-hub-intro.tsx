import { Clock, ShieldCheck, Users } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";

const highlights = [
  {
    icon: Users,
    title: "Un interlocuteur",
    text: "Moins de prestataires, moins de zones grises : nous coordonnons les briques techniques et digitales.",
  },
  {
    icon: ShieldCheck,
    title: "Des engagements clairs",
    text: "Périmètre, planning et budget posés noir sur blanc avant le démarrage des travaux.",
  },
  {
    icon: Clock,
    title: "Réactivité maîtrisée",
    text: "Réponses rapides et interventions planifiées pour limiter l’impact sur votre activité.",
  },
] as const;

export function ServicesHubIntro() {
  return (
    <SectionShell tone="white" className="!py-20 sm:!py-24 lg:!py-28">
      <Container className="max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
              Pourquoi nous faire confiance
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
              Des solutions concrètes, pas du jargon
            </h2>
            <p className="mt-6 text-base leading-relaxed text-brand-900/80 sm:text-lg">
              Que vous gériez un commerce, une PME ou un projet personnel, nous
              traduisons vos enjeux en livrables utiles : caméras opérationnelles,
              réseau qui tient la charge, site qui rassure, campagnes qui
              ramènent des demandes.
            </p>
            <p className="mt-5 text-base leading-relaxed text-brand-900/75 sm:text-lg">
              Nous dimensionnons chaque mission à votre réalité — sans
              suréquipement inutile — et assurons une passation claire pour votre
              autonomie au quotidien.
            </p>
          </div>
          <ul className="flex flex-col gap-4 lg:col-span-5">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-brand-100 bg-gradient-to-br from-white to-brand-50/60 p-5 shadow-sm ring-1 ring-brand-900/[0.03] sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-brand-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-900/75">
                      {item.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </SectionShell>
  );
}
