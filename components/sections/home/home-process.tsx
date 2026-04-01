import { homeProcessSteps } from "@/data/home/process-steps";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils/cn";

export function HomeProcess() {
  return (
    <SectionShell tone="white">
      <Container className="max-w-7xl">
        <SectionHeading
          eyebrow="Méthode"
          title="Notre méthode"
          description="Un processus structuré pour des livrables fiables et une relation de confiance sur la durée."
          align="center"
          className="mx-auto max-w-3xl"
        />
        <ol className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-5 lg:gap-4">
          {homeProcessSteps.map((step, index) => (
            <li key={step.step} className="relative">
              {index < homeProcessSteps.length - 1 ? (
                <div
                  className="absolute left-[1.125rem] top-10 hidden h-px w-[calc(100%+1rem)] bg-gradient-to-r from-brand-300 to-brand-200 lg:block"
                  aria-hidden
                />
              ) : null}
              <article
                className={cn(
                  "relative h-full rounded-2xl border border-brand-100 bg-white p-5 shadow-sm",
                  "transition hover:border-brand-200 hover:shadow-md",
                )}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white shadow-md shadow-brand-600/25">
                  {step.step}
                </div>
                <h3 className="mt-4 text-base font-bold text-brand-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
                  {step.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </SectionShell>
  );
}
