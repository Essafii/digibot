import type { ServicePageContent } from "../types";

export const webLogicielsSurMesurePage: ServicePageContent = {
  slug: "web-logiciels-sur-mesure",
  icon: "web",
  metaTitle: "Sites web & logiciels sur mesure",
  metaDescription:
    "Sites vitrines Next.js, catalogues, landing pages et petits outils métiers : DIGIBOT livre au Maroc un web rapide, sécurisé et orienté conversion.",
  hero: {
    title: "Sites web & logiciels sur mesure",
    subtitle:
      "Un site qui charge vite, inspire confiance et transforme les visites en messages qualifiés — plus un outil léger quand Excel ne suffit plus.",
  },
  presentation: {
    whatItIs:
      "Nous développons des sites modernes (généralement Next.js) : vitrine, catalogue, landing Ads, formulaires avancés, multilingue si besoin. Les logiciels sur mesure restent volontairement limités (MVP) : saisie terrain, exports CSV/PDF, tableaux de bord simples, intégrations e-mail ou webhooks raisonnables.",
    whatFor:
      "Être trouvable et crédible sur Google, présenter vos services avec preuves (réalisations, avis), capter des demandes structurées et réduire la double saisie entre terrain et bureau.",
    useCases: [
      "Artisan BTP / services : vitrine + formulaire (type de chantier, ville, urgence).",
      "Commerce : catalogue PDF + fiches produit + clic WhatsApp.",
      "Cabinet / association : pages actualités, agenda, téléchargements sécurisés.",
      "Campagne Meta / Google : landing dédiée avec tracking conversions.",
    ],
  },
  solutions: [
    {
      title: "UX & copywriting",
      description:
        "Arborescence courte, CTA visibles, textes orientés bénéfices — nous adaptons le ton à votre secteur (B2B, retail, services).",
    },
    {
      title: "Développement & perf",
      description:
        "Next.js, images optimisées, Core Web Vitals, HTTPS, balises SEO de base, plan de redirection si refonte.",
    },
    {
      title: "Formulaires & anti-spam",
      description:
        "Honeypot, rate-limit, champs conditionnels, notifications e-mail / WhatsApp selon votre flux.",
    },
    {
      title: "Logiciel métier MVP",
      description:
        "Atelier cadrage, maquettes simples, livraison par sprints — priorité aux flux qui vous font gagner du temps chaque semaine.",
    },
  ],
  offerings: [
    {
      category: "Sites & expériences",
      items: [
        "Site vitrine 5 à 12 pages + blog optionnel",
        "Catalogue produits / réalisations avec filtres",
        "Landing événement, promo ou campagne publicitaire",
        "Refonte avec reprise SEO (redirections 301, sitemap)",
      ],
    },
    {
      category: "Technique & maintenance",
      items: [
        "Hébergement adapté (Vercel / Node) + nom de domaine & certificat SSL",
        "Sauvegardes automatiques, monitoring uptime léger",
        "Mises à jour de sécurité et correctifs mineurs",
        "Tableaux de bord internes (Node + base légère) sur devis",
      ],
    },
  ],
  benefits: [
    {
      title: "Crédibilité",
      description: "Design pro + temps de chargement court = confiance.",
    },
    {
      title: "Leads triés",
      description: "Formulaire structuré = moins d’appels hors sujet.",
    },
    {
      title: "Coûts maîtrisés",
      description: "MVP fonctionnel avant d’empiler les fonctionnalités.",
    },
    {
      title: "Évolutif",
      description: "Ajout de pages, langues ou modules quand le besoin mûrit.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Atelier besoin",
      description:
        "Objectifs, références visuelles, contenus existants, contraintes légales (mentions, cookies).",
    },
    {
      step: "02",
      title: "Prototype & devis",
      description:
        "Arborescence figée, maquette ou style guide, planning et budget.",
    },
    {
      step: "03",
      title: "Développement",
      description:
        "Intégration responsive, contenus, formulaires, tests navigateurs.",
    },
    {
      step: "04",
      title: "Recette",
      description:
        "SEO technique, liens, formulaires, vitesse mobile, accessibilité de base.",
    },
    {
      step: "05",
      title: "Mise en ligne",
      description:
        "Formation courte, documentation éditeur, feuille de route évolutions.",
    },
  ],
};
