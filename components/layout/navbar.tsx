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
      <Container className="flex max-w-7xl min-h-[14rem] items-center justify-between gap-8 py-8 sm:min-h-[15rem] sm:gap-10 sm:py-9 md:min-h-[16rem] md:gap-12 lg:min-h-[18rem] lg:gap-14">
        <div className="flex min-w-0 shrink-0 items-center pr-2">
          <NavbarLogo />
        </div>

        <div className="hidden min-w-0 flex-1 items-center justify-center px-4 md:flex lg:px-8">
          <nav
            className="flex flex-wrap items-center justify-center gap-1 lg:gap-2"
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
            className="rounded-xl px-7 py-4 text-lg font-semibold shadow-md shadow-brand-600/30 transition hover:shadow-lg hover:shadow-brand-600/25"
          >
            Demander un devis gratuit
          </ButtonLink>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}