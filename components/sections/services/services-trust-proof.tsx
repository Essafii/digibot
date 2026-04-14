import { Quote } from "lucide-react";

import { testimonialsFuture } from "@/data/testimonials/service-testimonials";
import {
  trustProofExamples,
  trustReassurancePhrases,
  trustSectionIntro,
} from "@/data/services/trust-hub";
import { Container } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";
import { cn } from "@/lib/utils/cn";

export function ServicesTrustProof() {
  const hasTestimonials = testimonialsFuture.length > 0;

  return (
    <SectionShell tone="soft" className="!py-20 sm:!py-24 lg:!py-28">
      <Container className="max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-600">
            {trustSectionIntro.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-950 sm:text-4xl">
            {trustSectionIntro.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-900/78 sm:text-lg">
            {trustSectionIntro.description}
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-3 lg:mt-16">
          {trustProofExamples.map((item) => (
            <li key={item.id}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-md ring-1 ring-brand-950/[0.03]",
                  "transition duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg",
                )}
              >
                <p className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-600">
                  {item.category}
                </p>
                <h3 className="mt-3 text-lg font-bold text-brand-950">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-900/75">
                  {item.outcome}
                </p>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          {trustReassurancePhrases.map((line) => (
            <span
              key={line}
              className="inline-flex items-center rounded-full border border-brand-200/90 bg-white/90 px-4 py-2 text-xs font-semibold text-brand-900 shadow-sm sm:text-sm"
            >
              {line}
            </span>
          ))}
        </div>

        {hasTestimonials ? (
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonialsFuture.map((t) => (
              <li
                key={t.id}
                className="rounded-3xl border border-brand-100 bg-white p-7 shadow-sm"
              >
                <Quote
                  className="h-8 w-8 text-brand-200"
                  aria-hidden
                />
                <blockquote className="mt-4 text-sm leading-relaxed text-brand-900/85">
                  « {t.quote} »
                </blockquote>
                <footer className="mt-4 text-sm font-semibold text-brand-950">
                  {t.author}
                  <span className="mt-0.5 block text-xs font-normal text-brand-600">
                    {t.role}
                  </span>
                </footer>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-dashed border-brand-200 bg-brand-50/50 px-6 py-10 text-center">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-400 shadow-sm ring-1 ring-brand-100">
              <Quote className="h-6 w-6" aria-hidden />
            </span>
            <p className="mt-4 text-sm font-semibold text-brand-950">
              Témoignages clients
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-900/70">
              Les avis clients vérifiés pourront s’afficher ici prochainement —
              la mise en page est déjà prévue côté site.
            </p>
          </div>
        )}
      </Container>
    </SectionShell>
  );
}
