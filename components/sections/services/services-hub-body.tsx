import { PageCta } from "@/components/sections/page-cta";

import { ServicesHubGrid } from "./services-hub-grid";
import { ServicesHubIntro } from "./services-hub-intro";
import { ServicesTrustProof } from "./services-trust-proof";
import { WhyDigibotServices } from "./why-digibot-services";

export function ServicesHubBody() {
  return (
    <>
      <ServicesHubIntro />
      <ServicesHubGrid />
      <ServicesTrustProof />
      <WhyDigibotServices />
      <PageCta
        title="Un expert DIGIBOT sur votre dossier"
        description="Expliquez votre contexte : nous revenons vers vous avec une proposition lisible — rien à deviner sur le périmètre ni sur le budget."
        primaryLabel="Demander un devis gratuit"
        primaryHint="Sans engagement • chiffrage et planning clairs"
        secondaryHint="Réponse rapide — en général sous 24 à 48 h ouvrées"
      />
    </>
  );
}
