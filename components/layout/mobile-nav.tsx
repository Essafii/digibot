"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { mainNavInline } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { NavLink } from "./nav-link";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <div className="relative z-[9999] flex items-center gap-2 md:hidden">
      <button
        type="button"
        className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-200 bg-white text-brand-800 shadow-sm"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-[9998] bg-black/20"
            onClick={() => setOpen(false)}
          />

          <div
            id="mobile-menu"
            className="absolute right-0 top-16 z-[9999] w-[92vw] max-w-sm rounded-2xl border border-brand-100 bg-white p-4 shadow-2xl"
          >
            <Container className="p-0">
              <ul className="flex flex-col gap-2">
                {mainNavInline.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      className="block w-full rounded-xl px-4 py-3 text-base"
                      onNavigate={() => setOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        </>
      )}
    </div>
  );
}
