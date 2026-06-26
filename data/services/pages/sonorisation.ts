import type { ServicePageContent } from "../types";

export const sonorisationPage: ServicePageContent = {
  slug: "sonorisation",
  icon: "speaker",
  metaTitle: "Sonorisation — Systèmes audio & diffusion sonore",
  metaDescription:
    "Sonorisation professionnelle au Maroc : haut-parleurs encastrés, amplificateurs 100V, gestion par zone — pour commerces, restaurants, hôtels et entreprises.",
  hero: {
    title: "Sonorisation",
    subtitle:
      "Son d'ambiance, annonces et musique diffusés dans tous vos espaces — haut-parleurs encastrés, amplificateurs ligne 100V et contrôle du volume par zone.",
  },
  presentation: {
    whatItIs:
      "Un système de sonorisation professionnel comprend une source audio (lecteur, streaming, micro), un amplificateur de puissance (ligne 100V ou Hi-Fi), des haut-parleurs encastrés au plafond ou en colonne, et un contrôleur de zone permettant d'ajuster le volume par espace. Les systèmes 100V permettent de câbler de nombreux haut-parleurs sur une seule ligne.",
    whatFor:
      "Créer une ambiance sonore agréable pour vos clients, diffuser des annonces dans tout votre établissement, améliorer la communication interne et renforcer l'identité sonore de votre commerce ou entreprise.",
    useCases: [
      "Commerce / boutique : musique d'ambiance, annonces promotionnelles.",
      "Restaurant / café : son d'ambiance réglable par zone (salle, terrasse).",
      "Hôtel : musique hall, couloirs, spa — contrôle indépendant par zone.",
      "Entreprise : annonces évacuation, musique salle de réunion, accueil.",
    ],
  },
  solutions: [
    {
      title: "Étude acoustique & implantation",
      description:
        "Calcul de la puissance nécessaire selon la superficie, la hauteur de plafond et le niveau d'isolation — positionnement des haut-parleurs pour une couverture uniforme.",
    },
    {
      title: "Système 100V ou Hi-Fi",
      description:
        "Ligne 100V (longue distance, plusieurs HP sur un câble) ou système Hi-Fi (haute qualité sur courte distance) — selon la configuration et le budget.",
    },
    {
      title: "Sources & contrôle",
      description:
        "Lecteur SD/USB, streaming Bluetooth ou réseau, entrée micro pour annonces — contrôleur de volume par zone accessible en façade ou depuis tablette.",
    },
    {
      title: "Câblage & installation discrète",
      description:
        "Câble HP en comble ou faux plafond, haut-parleurs encastrés ou en saillie — finitions à l'identique du plafond existant.",
    },
  ],
  offerings: [
    {
      category: "Équipements courants",
      items: [
        "Haut-parleurs de plafond encastrés 6 W à 20 W (TOA, Apart Audio ou équivalent)",
        "Amplificateur 100V de 60 W à 360 W selon le site",
        "Contrôleur de volume de zone atténuateur",
        "Lecteur SD/USB avec entrée AUX et Bluetooth",
        "Microphone d'annonce filaire ou sans fil",
        "Câble HP torsadé 2 × 1,5 mm²",
      ],
    },
    {
      category: "Prestations associées",
      items: [
        "Extension d'un système existant (ajout de zones ou de haut-parleurs)",
        "Système d'évacuation sonore couplé à l'alarme incendie",
        "Sono de salle de conférence avec micro de table et mixeur",
        "Streaming audio réseau multi-zones (Sonos Pro ou équivalent)",
      ],
    },
  ],
  benefits: [
    {
      title: "Ambiance maîtrisée",
      description: "Son d'ambiance adapté à votre identité — volume parfait dans chaque zone.",
    },
    {
      title: "Installation discrète",
      description: "Haut-parleurs encastrés au plafond, câbles invisibles.",
    },
    {
      title: "Gestion simple",
      description: "Contrôle du volume par zone depuis un simple bouton ou une appli.",
    },
    {
      title: "Évolutif",
      description: "Ajout de zones ou connexion d'une sono de scène possible.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Visite & mesure",
      description:
        "Mesure des espaces, évaluation de l'acoustique et des sources de bruit ambiant.",
    },
    {
      step: "02",
      title: "Devis & plan d'implantation",
      description:
        "Positionnement des HP, puissance requise, liste matériel et délai d'installation.",
    },
    {
      step: "03",
      title: "Câblage",
      description:
        "Tirage des câbles HP en faux plafond ou comble, pose des contrôleurs de zone.",
    },
    {
      step: "04",
      title: "Installation & réglage",
      description:
        "Montage des haut-parleurs, configuration de l'ampli et équilibrage du niveau par zone.",
    },
    {
      step: "05",
      title: "Réception & suivi",
      description:
        "Démonstration, remise des notices et intervention rapide si ajustement nécessaire.",
    },
  ],
};
