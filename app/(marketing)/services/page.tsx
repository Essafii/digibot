import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { ServicesPageBody } from "@/components/sections/services-page-body";
import { ButtonLink } from "@/components/ui/button-link";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Sécurité & caméras, réseaux & informatique, sites web & logiciels, marketing digital — prestations DIGIBOT détaillées.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="DIGIBOT"
        title="Services"
        description="Une offre complète pour sécuriser vos locaux, fiabiliser vos réseaux et développer votre présence en ligne — avec une approche unique et des livrables professionnels."
        actions={
          <>
            <ButtonLink href={ROUTES.quote}>Demander un devis</ButtonLink>
            <ButtonLink href={ROUTES.contact} variant="secondary">
              Nous contacter
            </ButtonLink>
          </>
        }
      />
      <ServicesPageBody />
    </>
  );
}
