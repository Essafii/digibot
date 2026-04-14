import { ROUTES } from "@/constants/routes";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

export function ServicesHubHero() {
  return (
    <section className="relative overflow-hidden border-b border-brand-100/80 bg-gradient-to-b from-brand-100/40 via-white to-white pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(560px,72vh)] bg-[radial-gradient(ellipse_72%_58%_at_50%_-8%,rgba(37,99,235,0.22),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 top-16 h-[28rem] w-[28rem] rounded-full bg-brand-400/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-80 w-80 rounded-full bg-brand-600/8 blur-3xl"
        aria-hidden
      />
      <Container className="relative max-w-6xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur-sm">
          Entreprises · Commerces · Particuliers
        </div>
        <h1 className="mt-8 max-w-[22ch] text-4xl font-bold leading-[1.06] tracking-tight text-brand-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
          L’expertise technique au service de vos résultats
        </h1>
        <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-brand-900/85 sm:text-xl">
          DIGIBOT regroupe sécurité, réseau, web et acquisition. Un seul
          interlocuteur, des solutions mesurables et une exécution soignée — du
          diagnostic à la mise en service.
        </p>
        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:flex-wrap sm:items-start sm:gap-10">
          <div className="flex flex-col items-start gap-2">
            <ButtonLink
              href={ROUTES.quote}
              className="min-h-[3rem] px-8 py-3.5 text-base shadow-xl shadow-brand-600/20"
            >
              Demander un devis gratuit
            </ButtonLink>
            <p className="max-w-xs text-xs leading-snug text-brand-700/85">
              Devis clair • sans surprise sur le périmètre
            </p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <ButtonLink
              href={ROUTES.contact}
              variant="secondary"
              className="min-h-[3rem] border-brand-300/80 px-8 py-3.5 text-base"
            >
              Nous contacter
            </ButtonLink>
            <p className="max-w-xs text-xs leading-snug text-brand-700/85">
              Réponse rapide — nous revenons vers vous vite
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
