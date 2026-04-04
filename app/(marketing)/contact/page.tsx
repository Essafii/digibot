import type { Metadata } from "next";

import { PageHero } from "@/components/sections/page-hero";
import { ContactPageBody } from "@/components/sections/contact-page-body";
import { ButtonLink } from "@/components/ui/button-link";
import { ROUTES } from "@/constants/routes";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez DIGIBOT par e-mail ou formulaire : questions, accompagnement projet, zone d’intervention France.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Échange"
        title="Contact"
        description="Une question, un besoin urgent ou un premier contact ? Nous vous répondons dans les meilleurs délais. Pour un chiffrage, privilégiez la demande de devis."
        actions={
          <ButtonLink href={ROUTES.quote} variant="secondary">
            Demander un devis
          </ButtonLink>
        }
      />
      <ContactPageBody />
    </>
  );
}
