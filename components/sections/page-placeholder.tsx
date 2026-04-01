import { Container } from "@/components/ui/container";

export function PagePlaceholder() {
  return (
    <section className="py-12">
      <Container>
        <p className="rounded-lg border border-dashed border-slate-200 bg-slate-50/80 px-4 py-6 text-sm text-slate-600">
          Contenu de la page à compléter.
        </p>
      </Container>
    </section>
  );
}
