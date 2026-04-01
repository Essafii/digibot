import type { ReactNode } from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { BRAND } from "@/constants/brand";
import { COMPANY_CONTACT } from "@/constants/contact";
import { ROUTES } from "@/constants/routes";
import { footerServiceLinks } from "@/data/footer";
import { mainNav } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

import { FooterLogo } from "./footer-logo";

function FooterColumnTitle({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-300">
      {children}
    </p>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-brand-800/80 bg-gradient-to-b from-brand-950 via-brand-950 to-[#0c1428] text-brand-100">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_85%_0%,rgba(59,130,246,0.12),transparent)]"
        aria-hidden
      />
      <Container className="relative max-w-7xl py-14 sm:py-16 lg:py-20">
        <div className="grid gap-12 sm:gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Marque + logo */}
          <div className="lg:col-span-4">
            <FooterLogo />
            <p className="mt-5 text-sm font-medium leading-relaxed text-brand-200/95">
              {BRAND.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-300/90">
              Solutions sur mesure en sécurité, réseaux, développement et
              marketing digital pour entreprises, commerces et particuliers.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <FooterColumnTitle>Navigation</FooterColumnTitle>
            <nav
              className="mt-5 flex flex-col gap-3"
              aria-label="Liens du pied de page"
            >
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex w-fit items-center text-sm font-medium text-brand-100/90 transition hover:text-white"
                >
                  <span className="border-b border-transparent pb-px transition group-hover:border-brand-400 group-hover:text-white">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <FooterColumnTitle>Services</FooterColumnTitle>
            <ul className="mt-5 flex flex-col gap-3">
              {footerServiceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex w-fit text-sm font-medium text-brand-100/90 transition hover:text-white"
                  >
                    <span className="border-b border-transparent pb-px transition group-hover:border-brand-400 group-hover:text-white">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <FooterColumnTitle>Contact</FooterColumnTitle>
            <ul className="mt-5 flex flex-col gap-4">
              <li>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="group flex gap-3 text-sm text-brand-100/90 transition hover:text-white"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-900/80 text-brand-300 ring-1 ring-white/10 transition group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-400/40">
                    <Mail className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="min-w-0 pt-1.5">
                    <span className="block text-xs font-medium uppercase tracking-wider text-brand-400">
                      Email
                    </span>
                    <span className="font-medium text-brand-50">
                      {COMPANY_CONTACT.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                {COMPANY_CONTACT.phoneTel ? (
                  <a
                    href={`tel:${COMPANY_CONTACT.phoneTel}`}
                    className="group flex gap-3 text-sm text-brand-100/90 transition hover:text-white"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-900/80 text-brand-300 ring-1 ring-white/10 transition group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-400/40">
                      <Phone className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0 pt-1.5">
                      <span className="block text-xs font-medium uppercase tracking-wider text-brand-400">
                        Téléphone
                      </span>
                      <span className="font-medium text-brand-50">
                        {COMPANY_CONTACT.phoneDisplay}
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className="flex gap-3 text-sm text-brand-100/90">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-900/80 text-brand-300 ring-1 ring-white/10">
                      <Phone className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="min-w-0 pt-1.5">
                      <span className="block text-xs font-medium uppercase tracking-wider text-brand-400">
                        Téléphone
                      </span>
                      <span className="font-medium text-brand-50">
                        {COMPANY_CONTACT.phoneDisplay}
                      </span>
                    </span>
                  </div>
                )}
              </li>
              <li className="flex gap-3 text-sm text-brand-100/90">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-900/80 text-brand-300 ring-1 ring-white/10">
                  <MapPin className="h-4 w-4" aria-hidden />
                </span>
                <span className="min-w-0 pt-1.5">
                  <span className="block text-xs font-medium uppercase tracking-wider text-brand-400">
                    Zone
                  </span>
                  <span className="font-medium text-brand-50">
                    {COMPANY_CONTACT.cityLine}
                  </span>
                </span>
              </li>
            </ul>
            <div className="mt-8 flex flex-col gap-3">
              <ButtonLink
                href={ROUTES.quote}
                variant="onDark"
                className="w-full justify-center rounded-xl py-3 text-sm shadow-lg shadow-black/25"
              >
                Demander un devis
              </ButtonLink>
              <ButtonLink
                href={ROUTES.contact}
                variant="outlineOnDark"
                className="w-full justify-center rounded-xl py-3 text-sm"
              >
                Nous contacter
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative border-t border-white/[0.08] bg-black/20">
        <Container className="flex max-w-7xl flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-center text-xs text-brand-400/90 sm:text-left">
            © {year} {BRAND.name}. Tous droits réservés.
          </p>
          <p className="text-center text-xs text-brand-500/80 sm:text-right">
            {BRAND.tagline}
          </p>
        </Container>
      </div>
    </footer>
  );
}
