/**
 * Coordonnées DIGIBOT — source unique pour footer, contact, WhatsApp flottant.
 * Mettre à jour ici pour tout le site.
 */
export const COMPANY_CONTACT = {
  /** Nom commercial affiché aux côtés des coordonnées si besoin */
  companyName: "DIGIBOT",
  email: "digibot.contact@gmail.com",
  phoneDisplay: "+212 6 51 14 49 55",
  /** Lien tel: — format E.164 (+indicatif sans espaces) */
  phoneTel: "+212651144955",
  /**
   * WhatsApp (bouton flottant) — chiffres uniques, indicatif pays sans + ni espaces.
   * Ex. Maroc : 212… Laisser "" pour masquer le bouton.
   */
  whatsappDial: "212651144955",
  /** Texte d’ouverture du message WhatsApp (éditable) */
  whatsappPrefillMessage: "Bonjour DIGIBOT, je vous contacte pour : ",
  /** Ligne courte (footer, badges) */
  cityLine: "Interventions au Maroc — sur devis",
  /**
   * Détail zone & déplacements — affiché footer + page contact.
   * Ajustez selon votre rayon réel d’intervention.
   */
  zoneDetail:
    "Région prioritaire : Grand Casablanca et périphérie. Déplacements vers Rabat, Marrakech, Tanger, Fès et autres villes selon projet (planning & frais de déplacement intégrés au devis).",
  /**
   * Modalités rendez-vous — utile si pas d’adresse siège publique.
   * Remplacez par une adresse complète quand vous la communiquez en ligne.
   */
  appointmentNote:
    "Premier échange par téléphone, WhatsApp ou e-mail. Rendez-vous sur site après validation du devis ou de la proposition.",
} as const;
