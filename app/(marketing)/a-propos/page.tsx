import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { AboutPageBody } from "@/components/sections/about-page-body";
import { ButtonLink } from "@/components/ui/button-link";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "DIGIBOT : qui sommes-nous, nos engagements et notre façon d’accompagner entreprises et particuliers sur le technique et le digital.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="L’équipe"
        title="À propos"
        description="Nous croyons à un partenariat technique simple : écouter, proposer clairement, livrer proprement. Découvrez ce qui nous anime au quotidien."
        actions={
          <>
            <ButtonLink href={ROUTES.quote}>Travailler avec nous</ButtonLink>
            <ButtonLink href={ROUTES.projects} variant="secondary">
              Nos réalisations
            </ButtonLink>
          </>
        }
      />
      <AboutPageBody />
    </>
  );
}
