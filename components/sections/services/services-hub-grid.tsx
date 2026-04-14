import { servicesCatalog } from "@/data/services/catalog";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

import { ServiceSummaryCard } from "./service-summary-card";

export function ServicesHubGrid() {
  return (
    <SectionShell tone="soft" className="!py-20 sm:!py-24 lg:!py-28">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="Nos expertises"
          title="Quatre leviers pour sécuriser, connecter et développer"
          description="Chaque fiche détaille le périmètre, des exemples de matériel et notre méthode — pour vous projeter avant le premier échange."
          align="center"
          className="mx-auto max-w-2xl"
        />
        <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:gap-12">
          {servicesCatalog.map((entry) => (
            <ServiceSummaryCard key={entry.slug} entry={entry} />
          ))}
        </ul>
      </Container>
    </SectionShell>
  );
}
