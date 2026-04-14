import type { Metadata } from "next";

import { ServicesHubBody } from "@/components/sections/services/services-hub-body";
import { ServicesHubHero } from "@/components/sections/services/services-hub-hero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "DIGIBOT au Maroc : vidéosurveillance IP, réseaux & Wi‑Fi, sites web Next.js, Meta Ads — devis détaillé, installation soignée, résultats suivis.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHubHero />
      <ServicesHubBody />
    </>
  );
}
