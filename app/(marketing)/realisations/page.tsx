import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { RealisationsPageBody } from "@/components/sections/realisations-page-body";
import { ButtonLink } from "@/components/ui/button-link";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Exemples de projets DIGIBOT : sécurité, réseau, web, marketing — études de cas et résultats obtenus pour nos clients.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Confiance"
        title="Réalisations"
        description="Un échantillon de missions menées pour des clients exigeants. Chaque contexte est unique : nos propositions sont toujours adaptées à votre situation."
        actions={
          <>
            <ButtonLink href={ROUTES.quote}>Votre projet</ButtonLink>
            <ButtonLink href={ROUTES.services} variant="secondary">
              Nos services
            </ButtonLink>
          </>
        }
      />
      <RealisationsPageBody />
    </>
  );
}
