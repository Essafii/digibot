import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { AboutPageBody } from "@/components/sections/about-page-body";
import { ButtonLink } from "@/components/ui/button-link";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "DIGIBOT au Maroc : notre façon de travailler, nos engagements et l’accompagnement entreprises, commerces et particuliers sur le technique et le digital.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="L’équipe"
        title="À propos"
        description="Un partenariat simple : écouter, chiffrer clairement, installer proprement. Voici ce qui guide DIGIBOT au quotidien."
        actions={
          <>
            <ButtonLink href={ROUTES.quote}>Demander un devis gratuit</ButtonLink>
            <ButtonLink href={ROUTES.projects} variant="secondary">
              Voir nos réalisations
            </ButtonLink>
          </>
        }
      />
      <AboutPageBody />
    </>
  );
}
