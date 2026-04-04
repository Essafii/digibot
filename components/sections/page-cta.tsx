import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

export function PageCta() {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(37,99,235,0.4),transparent)]"
        aria-hidden
      />
      <Container className="relative max-w-4xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Un besoin précis ? Parlons-en.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-brand-100/90 sm:text-base">
          Devis gratuit et sans engagement sur la base de votre description.
          Nous vous proposons ensuite une solution claire et chiffrée.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={ROUTES.quote} variant="onDark">
            Demander un devis
          </ButtonLink>
          <ButtonLink href={ROUTES.contact} variant="outlineOnDark">
            Contact rapide
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
