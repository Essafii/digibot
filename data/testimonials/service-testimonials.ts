/**
 * Témoignages affichés dans la section dédiée de la page /services.
 *
 * Pour publier un avis :
 * 1. Obtenez l’accord écrit du client (citation + nom / fonction / entreprise).
 * 2. Ajoutez un objet dans le tableau ci-dessous.
 * 3. Gardez des formulations authentiques — pas de promesses chiffrées non vérifiables.
 *
 * Exemple d’entrée :
 * {
 *   id: "avis-2025-01",
 *   quote: "Intervention rapide, câblage nickel et explications claires.",
 *   author: "Prénom N.",
 *   role: "Gérant, commerce de proximité — Casablanca",
 * },
 */

export type ServiceTestimonial = {
  id: string;
  quote: string;
  author: string;
  role: string;
};

/** Laisser [] tant qu’aucun témoignage validé n’est publié. */
export const testimonialsFuture: ServiceTestimonial[] = [];
