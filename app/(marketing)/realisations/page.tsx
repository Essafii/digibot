import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { RealisationsPageBody } from "@/components/sections/realisations-page-body";
import { ButtonLink } from "@/components/ui/button-link";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Projets DIGIBOT au Maroc : vidéosurveillance, réseaux, sites web, Meta Ads — extraits de missions et résultats obtenus pour nos clients.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Confiance"
        title="Réalisations"
        description="Extraits de chantiers et de livrables numériques — chaque dossier est unique ; nos devis reprennent votre contexte réel (site, budget, délais)."
        actions={
          <>
            <ButtonLink href={ROUTES.quote}>Demander un devis gratuit</ButtonLink>
            <ButtonLink href={ROUTES.contact} variant="secondary">
              Nous contacter
            </ButtonLink>
          </>
        }
      />
      <RealisationsPageBody />
    </>
  );
}
