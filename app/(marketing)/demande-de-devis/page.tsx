import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { QuotePageBody } from "@/components/sections/quote-page-body";
import { ButtonLink } from "@/components/ui/button-link";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "Demande de devis",
  description:
    "Demandez un devis gratuit à DIGIBOT : sécurité, réseau, web, logiciels ou marketing — décrivez votre projet et recevez une proposition claire.",
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Gratuit & sans engagement"
        title="Demande de devis"
        description="Décrivez votre besoin : nous revenons vers vous pour préciser le périmètre et vous transmettre une offre détaillée. Le formulaire prépare un e-mail dans votre messagerie."
        actions={
          <ButtonLink href={ROUTES.contact} variant="secondary">
            Simple question ? Contact
          </ButtonLink>
        }
      />
      <QuotePageBody />
    </>
  );
}
