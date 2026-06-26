"use client";

import { mainNavInline } from "@/data/navigation";
import { Container } from "@/components/ui/container";

import { MobileNav } from "./mobile-nav";
import { NavLink } from "./nav-link";
import { NavbarLogo } from "./navbar-logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/90 bg-white/90 shadow-sm shadow-brand-900/[0.04] backdrop-blur-md supports-[backdrop-filter]:bg-white/85">
      <Container className="flex max-w-7xl min-h-[7rem] items-center justify-between gap-8 py-4 sm:min-h-[8rem] sm:gap-10 sm:py-5 md:min-h-[8.5rem] md:gap-12 lg:min-h-[9rem] lg:gap-14">
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

        <MobileNav />
      </Container>
    </header>
  );
}
