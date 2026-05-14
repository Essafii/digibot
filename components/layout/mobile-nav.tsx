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
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-200 bg-white text-brand-800 shadow-sm"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute right-0 top-14 z-[9999] w-[90vw] rounded-2xl border border-brand-100 bg-white p-4 shadow-2xl"
        >
          <Container className="p-0">
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
          </Container>
        </div>
      )}
    </div>
  );
}