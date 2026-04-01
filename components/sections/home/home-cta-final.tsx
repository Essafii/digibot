import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

export function HomeCtaFinal() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(37,99,235,0.45),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-brand-400/15 blur-3xl"
        aria-hidden
      />
      <Container className="relative max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Vous avez un projet ? Parlons-en dès aujourd’hui.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-100/90 sm:text-lg">
          DIGIBOT vous accompagne de l’idée à la mise en place de solutions
          modernes, fiables et professionnelles.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={ROUTES.quote} variant="onDark">
            Demander un devis
          </ButtonLink>
          <ButtonLink href={ROUTES.contact} variant="outlineOnDark">
            Nous contacter
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
