import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

const defaultTitle = "Un projet en tête ? Passons à l’action.";
const defaultDescription =
  "Expliquez votre contexte : nous revenons vers vous avec une offre structurée — matériel, délais et budget, sans zone d’ombre.";

type PageCtaProps = {
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  /** Sous-texte sous le bouton principal (conversion). */
  primaryHint?: string;
  /** Sous-texte sous le bouton secondaire. */
  secondaryHint?: string;
};

export function PageCta({
  title = defaultTitle,
  description = defaultDescription,
  primaryLabel = "Demander un devis gratuit",
  secondaryLabel = "Nous contacter",
  primaryHint = "Sans engagement • devis détaillé",
  secondaryHint = "Réponse rapide — en général sous 24 à 48 h ouvrées",
}: PageCtaProps = {}) {
  return (
    <section className="relative overflow-hidden bg-brand-950 py-20 sm:py-24 lg:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_90%_at_50%_100%,rgba(37,99,235,0.45),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-brand-400/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-brand-600/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300/95">
          Prochaine étape
        </p>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-brand-100/90 sm:text-base">
          {description}
        </p>
        <div className="mx-auto mt-10 flex max-w-lg flex-col gap-8 sm:max-w-none sm:flex-row sm:justify-center sm:gap-12">
          <div className="flex flex-col items-center gap-2">
            <ButtonLink
              href={ROUTES.quote}
              variant="onDark"
              className="min-h-[3rem] w-full min-w-[16rem] px-8 py-3.5 text-base shadow-xl shadow-black/20 sm:w-auto"
            >
              {primaryLabel}
            </ButtonLink>
            {primaryHint ? (
              <p className="max-w-[18rem] text-center text-xs leading-snug text-brand-200/90">
                {primaryHint}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-center gap-2">
            <ButtonLink
              href={ROUTES.contact}
              variant="outlineOnDark"
              className="min-h-[3rem] w-full min-w-[16rem] px-8 py-3.5 text-base sm:w-auto"
            >
              {secondaryLabel}
            </ButtonLink>
            {secondaryHint ? (
              <p className="max-w-[18rem] text-center text-xs leading-snug text-brand-200/90">
                {secondaryHint}
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
