"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { ROUTES } from "@/constants/routes";
import { mainNavInline } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

import { NavLink } from "./nav-link";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="flex items-center gap-2 md:hidden">
      <ButtonLink
        href={ROUTES.quote}
        className="rounded-lg px-3 py-2 text-xs font-semibold shadow-md sm:text-sm"
      >
        Devis
      </ButtonLink>
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-200 bg-white text-brand-800 shadow-sm transition hover:border-brand-300 hover:bg-brand-50"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden />
        ) : (
          <Menu className="h-5 w-5" aria-hidden />
        )}
      </button>
      {open ? (
        <>
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 top-[4.25rem] z-40 bg-brand-950/40 backdrop-blur-[2px] sm:top-[4.5rem]"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 top-[4.25rem] z-50 flex flex-col overflow-hidden border-t border-brand-100 bg-white shadow-2xl shadow-brand-900/15 sm:top-[4.5rem]"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            <nav
              className="flex-1 overflow-y-auto overscroll-contain"
              aria-label="Principal mobile"
            >
              <Container className="py-4">
                <ul className="flex flex-col gap-1">
                  {mainNavInline.map((item) => (
                    <li key={item.href}>
                      <NavLink
                        href={item.href}
                        className="block w-full px-3 py-3.5 text-base"
                        onNavigate={() => setOpen(false)}
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-brand-100 pt-6">
                  <ButtonLink
                    href={ROUTES.quote}
                    className="w-full rounded-xl py-3.5 text-sm shadow-lg"
                    onClick={() => setOpen(false)}
                  >
                    Demander un devis
                  </ButtonLink>
                </div>
              </Container>
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
