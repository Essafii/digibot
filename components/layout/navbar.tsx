import { ROUTES } from "@/constants/routes";
import { mainNavInline } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

import { MobileNav } from "./mobile-nav";
import { NavLink } from "./nav-link";
import { NavbarLogo } from "./navbar-logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/90 bg-white/90 shadow-sm shadow-brand-900/[0.04] backdrop-blur-md supports-[backdrop-filter]:bg-white/85">
      <Container className="flex max-w-7xl min-h-[4.25rem] items-center justify-between gap-6 py-2.5 sm:min-h-[4.5rem] sm:gap-8 md:gap-10 lg:gap-12">
        <div className="flex min-w-0 shrink-0 items-center pr-1 sm:pr-2">
          <NavbarLogo />
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-center px-2 md:flex lg:px-6">
          <nav
            className="flex flex-wrap items-center justify-center gap-0.5 lg:gap-1"
            aria-label="Principal"
          >
            {mainNavInline.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="hidden shrink-0 items-center md:flex">
          <ButtonLink
            href={ROUTES.quote}
            className="rounded-xl px-4 py-2 text-sm font-semibold shadow-md shadow-brand-600/30 transition hover:shadow-lg hover:shadow-brand-600/25 lg:px-5 lg:py-2.5"
          >
            Demander un devis gratuit
          </ButtonLink>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
