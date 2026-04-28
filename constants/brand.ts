import logoPng from "../public/brand/logo.png";

export const BRAND = {
  name: "DIGIBOT",
  tagline: "Services digitaux & techniques",
} as const;

/** URL du logo (bundlé par Next depuis `public/brand/logo.png` — évite les 404 en standalone). */
export const BRAND_LOGO_SRC = logoPng.src as string;

/** Texte d’accroche pied de page — ton DIGIBOT, pas générique. */
export const BRAND_FOOTER_PITCH =
  "DIGIBOT installe la vidéosurveillance, fiabilise les réseaux, crée vos sites web et pilote vos campagnes digitales. Une équipe au Maroc pour les professionnels et les particuliers — devis détaillé, chantiers propres, un seul interlocuteur du diagnostic à la mise en service.";
