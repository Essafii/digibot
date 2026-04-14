import type { ServicePageContent, ServiceSlug } from "../types";

import { publiciteReseauxSociauxPage } from "./publicite-reseaux-sociaux";
import { reseauxCablageInformatiquePage } from "./reseaux-cablage-informatique";
import { securiteVideosurveillancePage } from "./securite-videosurveillance";
import { webLogicielsSurMesurePage } from "./web-logiciels-sur-mesure";

export const SERVICE_PAGE_BY_SLUG: Record<ServiceSlug, ServicePageContent> = {
  "securite-videosurveillance": securiteVideosurveillancePage,
  "reseaux-cablage-informatique": reseauxCablageInformatiquePage,
  "web-logiciels-sur-mesure": webLogicielsSurMesurePage,
  "publicite-reseaux-sociaux": publiciteReseauxSociauxPage,
};

export const ALL_SERVICE_SLUGS = Object.keys(
  SERVICE_PAGE_BY_SLUG,
) as ServiceSlug[];

export function getServicePage(slug: string): ServicePageContent | undefined {
  return SERVICE_PAGE_BY_SLUG[slug as ServiceSlug];
}

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return slug in SERVICE_PAGE_BY_SLUG;
}
