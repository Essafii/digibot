import { ROUTES, type RouteHref } from "@/constants/routes";
import { translations } from "@/constants/translations";

export type NavItem = {
  label: string;
  href: RouteHref;
};

const t = translations.fr;

export const mainNav: NavItem[] = [
  { label: t.home, href: ROUTES.home },
  { label: t.about, href: ROUTES.about },
  { label: t.services, href: ROUTES.services },
  { label: t.projects, href: ROUTES.projects },
  { label: t.solar, href: ROUTES.solar },
  { label: t.quote, href: ROUTES.quote },
  { label: t.contact, href: ROUTES.contact },
];

export const mainNavInline: NavItem[] = mainNav.filter(
  (item) => item.href !== ROUTES.quote,
);
