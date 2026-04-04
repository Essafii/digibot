import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { COMPANY_CONTACT } from "@/constants/contact";
import { ROUTES } from "@/constants/routes";
import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { SectionShell } from "@/components/ui/section-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { PageCta } from "@/components/sections/page-cta";

export function ContactPageBody() {
  const phoneHref = COMPANY_CONTACT.phoneTel
    ? `tel:${COMPANY_CONTACT.phoneTel}`
    : null;

  return (
    <>
      <SectionShell tone="white">
        <Container className="max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-brand-950 sm:text-2xl">
                Coordonnées
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-900/75 sm:text-base">
                Préférez un échange rapide ? Utilisez le formulaire ou écrivez
                directement à l’adresse ci-dessous. Pour un besoin détaillé avec
                chiffrage, la{" "}
                <Link
                  href={ROUTES.quote}
                  className="font-semibold text-brand-700 underline-offset-2 hover:underline"
                >
                  demande de devis
                </Link>{" "}
                est idéale.
              </p>

              <ul className="mt-8 space-y-4">
                <li>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email}`}
                    className="group flex gap-4 rounded-2xl border border-brand-100 bg-brand-25/60 p-4 transition hover:border-brand-200 hover:bg-brand-50"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/20">
                      <Mail className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                        E-mail
                      </p>
                      <p className="mt-1 text-sm font-semibold text-brand-950 group-hover:text-brand-800">
                        {COMPANY_CONTACT.email}
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  {phoneHref ? (
                    <a
                      href={phoneHref}
                      className="group flex gap-4 rounded-2xl border border-brand-100 bg-brand-25/60 p-4 transition hover:border-brand-200 hover:bg-brand-50"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-md shadow-brand-600/20">
                        <Phone className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                          Téléphone
                        </p>
                        <p className="mt-1 text-sm font-semibold text-brand-950">
                          {COMPANY_CONTACT.phoneDisplay}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex gap-4 rounded-2xl border border-brand-100 bg-brand-25/60 p-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-200/80 text-brand-800">
                        <Phone className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                          Téléphone
                        </p>
                        <p className="mt-1 text-sm font-semibold text-brand-950">
                          {COMPANY_CONTACT.phoneDisplay}
                        </p>
                        <p className="mt-1 text-xs text-brand-900/60">
                          Le lien d’appel direct sera affiché dès que le numéro
                          sera communiqué sur le site.
                        </p>
                      </div>
                    </div>
                  )}
                </li>
                <li className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-4 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-800">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                      Zone d’intervention
                    </p>
                    <p className="mt-1 text-sm font-medium text-brand-900/85">
                      {COMPANY_CONTACT.cityLine}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <ButtonLink href={ROUTES.quote} variant="secondary">
                  Plutôt un devis détaillé ?
                </ButtonLink>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </Container>
      </SectionShell>
      <PageCta />
    </>
  );
}
