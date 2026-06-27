import type { ServicePageContent } from "../types";

export const materielInformatiquePage: ServicePageContent = {
  slug: "materiel-informatique",
  icon: "computer",
  metaTitle: "Matériel informatique — PC, écrans, imprimantes & réseau",
  metaDescription:
    "Fourniture et installation de matériel informatique au Maroc : PC bureautique, écrans, imprimantes, routeurs, switches et accessoires — conseil, livraison et configuration sur site.",
  hero: {
    title: "Matériel informatique",
    subtitle:
      "PC, écrans, imprimantes, routeurs et switches — fourniture de matériel professionnel, livraison et configuration sur site, un seul interlocuteur pour tout votre parc.",
  },
  presentation: {
    whatItIs:
      "DIGIBOT sélectionne, commande et installe le matériel informatique adapté à votre activité : postes de travail fixes ou portables, écrans simple ou double affichage, imprimantes laser multifonctions, routeurs Wi-Fi professionnels, switches PoE et accessoires réseau. Chaque équipement est configuré et testé avant remise.",
    whatFor:
      "Équiper votre entreprise sans perdre de temps à comparer des centaines de références, recevoir du matériel prêt à l'emploi et disposer d'un interlocuteur unique pour le SAV — plutôt que de jongler entre fabricants et revendeurs.",
    useCases: [
      "Ouverture de bureau : postes, écrans, imprimante réseau et switch en une commande.",
      "Remplacement de parc vieillissant : audit, reprise et migration des données.",
      "Point de vente : PC caisse, imprimante tickets, écran client et Wi-Fi.",
      "Télétravail : kit portable, casque, écran externe et routeur 4G de secours.",
    ],
  },
  solutions: [
    {
      title: "Conseil & sélection du matériel",
      description:
        "Analyse de vos usages (bureautique, graphisme, comptabilité, point de vente) et sélection de références fiables dans votre budget — sans sur-dimensionner inutilement.",
    },
    {
      title: "PC, portables & écrans",
      description:
        "Postes fixes Dell / HP / Lenovo, PC tout-en-un pour les espaces réduits, portables professionnels et écrans 22\" à 32\" — simple ou double affichage selon le poste.",
    },
    {
      title: "Imprimantes & multifonctions",
      description:
        "Imprimantes laser noir/couleur, multifonctions (impression, scan, copie, fax), imprimantes tickets et étiquettes — configuration réseau Wi-Fi ou filaire incluse.",
    },
    {
      title: "Réseau : routeurs, switches & Wi-Fi",
      description:
        "Routeurs professionnels, switches PoE managés pour alimenter caméras et téléphones IP, bornes Wi-Fi 802.11ax (Wi-Fi 6) — mise en service et configuration SSID incluses.",
    },
  ],
  offerings: [
    {
      category: "Matériel fourni",
      items: [
        "PC bureautique fixe ou portable (Dell, HP, Lenovo — processeur Intel Core i5/i7 ou AMD Ryzen)",
        "Écrans 22\" à 32\" Full HD ou 4K, simple ou double affichage",
        "Imprimantes laser N&B / couleur et multifonctions (HP, Brother, Canon)",
        "Imprimantes tickets thermiques et imprimantes étiquettes (Zebra, Epson)",
        "Routeurs professionnels et points d'accès Wi-Fi 6 (TP-Link Omada, Ubiquiti)",
        "Switches PoE 8 à 48 ports managés ou non managés",
      ],
    },
    {
      category: "Prestations associées",
      items: [
        "Configuration Windows / logiciels métier et jonction au domaine si nécessaire",
        "Migration des données depuis l'ancien parc",
        "Installation des imprimantes en réseau sur tous les postes",
        "Paramétrage des routeurs (DHCP, Wi-Fi, VPN, QoS)",
        "Contrat de maintenance et remplacement matériel sous 24/48 h ouvrées",
      ],
    },
  ],
  benefits: [
    {
      title: "Matériel prêt à l'emploi",
      description: "Livraison configurée — branchez et travaillez dès l'installation.",
    },
    {
      title: "Un seul interlocuteur",
      description: "Commande, livraison, configuration et SAV — tout avec DIGIBOT.",
    },
    {
      title: "Références professionnelles",
      description: "Marques fiables avec garantie constructeur 1 à 3 ans sur site.",
    },
    {
      title: "Budget maîtrisé",
      description: "Devis détaillé par poste — pas de mauvaises surprises à la facturation.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Audit des besoins",
      description:
        "Inventaire des postes, logiciels utilisés, contraintes d'espace et budget cible.",
    },
    {
      step: "02",
      title: "Devis matériel",
      description:
        "Liste des références retenues, prix unitaires, délai de livraison et garanties constructeur.",
    },
    {
      step: "03",
      title: "Commande & livraison",
      description:
        "Commande auprès des fournisseurs, réception et vérification du matériel avant livraison.",
    },
    {
      step: "04",
      title: "Installation & configuration",
      description:
        "Montage, installation OS et logiciels, configuration réseau et tests de chaque poste.",
    },
    {
      step: "05",
      title: "Formation & suivi",
      description:
        "Prise en main rapide, remise des notices et support prioritaire pour tout incident matériel.",
    },
  ],
};
