import type { ComponentType } from "react";
import { Camera, Check, Code2, Megaphone, Network } from "lucide-react";

import { servicesDetail } from "@/data/services/detail";
import type { HomeServiceIcon } from "@/data/home/services-highlight";
import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { PageCta } from "@/components/sections/page-cta";
import { cn } from "@/lib/utils/cn";

const serviceIcons: Record<
  HomeServiceIcon,
  ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  security: Camera,
  network: Network,
  web: Code2,
  marketing: Megaphone,
};

export function ServicesPageBody() {
  return (
    <>
      <SectionShell tone="white">
        <Container className="max-w-7xl">
          <SectionHeading
            eyebrow="Offre"
            title="Des prestations techniques, une seule interlocution"
            description="DIGIBOT regroupe des expertises complémentaires pour vous éviter la multiplication des prestataires — du cahier des charges à la mise en service."
            align="center"
            className="mx-auto max-w-3xl"
          />
          <ul className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-2">
            {servicesDetail.map((item) => {
              const Icon = serviceIcons[item.icon];
              return (
                <li key={item.id}>
                  <article
                    className={cn(
                      "flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-8 shadow-md",
                      "transition duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-900/10",
                    )}
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
                        <Icon className="h-7 w-7" aria-hidden />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-brand-950">
                          {item.title}
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-brand-900/75">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-6 flex flex-col gap-3 border-t border-brand-100 pt-6">
                      {item.bullets.map((line) => (
                        <li
                          key={line}
                          className="flex gap-3 text-sm text-brand-900/80"
                        >
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                            aria-hidden
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <ButtonLink href={ROUTES.quote} className="w-full sm:w-auto">
                        Demander un devis
                      </ButtonLink>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </Container>
      </SectionShell>
      <SectionShell tone="soft">
        <Container className="max-w-4xl text-center">
          <SectionHeading
            eyebrow="Méthode"
            title="Diagnostic, proposition, déploiement"
            description="Chaque mission commence par comprendre votre contexte. Nous documentons la solution retenue et assurons une passation claire pour votre autonomie."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <ButtonLink href={ROUTES.contact} variant="secondary">
              Poser une question
            </ButtonLink>
            <ButtonLink href={ROUTES.projects}>Voir nos réalisations</ButtonLink>
          </div>
        </Container>
      </SectionShell>
      <PageCta />
    </>
  );
}
