import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { ContactPageBody } from "@/components/sections/contact-page-body";
import { ButtonLink } from "@/components/ui/button-link";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DIGIBOT : e-mail, téléphone, WhatsApp ou formulaire. Interventions au Maroc — réponse rapide, devis détaillé sur demande.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Échange"
        title="Contact"
        description="Une question technique, un complément sur un devis ou un premier contact : écrivez-nous. Pour un chiffrage complet, passez par la demande de devis — même interlocuteur."
        actions={
          <ButtonLink href={ROUTES.quote} variant="secondary">
            Demander un devis gratuit
          </ButtonLink>
        }
      />
      <ContactPageBody />
    </>
  );
}
