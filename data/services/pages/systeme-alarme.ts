import type { ServicePageContent } from "../types";

export const systemeAlarmePage: ServicePageContent = {
  slug: "systeme-alarme",
  icon: "alarm",
  metaTitle: "Système d'alarme — Intrusion & télésurveillance",
  metaDescription:
    "Installation de systèmes d'alarme intrusion au Maroc : détecteurs PIR, sirènes, centrale et télésurveillance — protection 24h/24 pour commerces, bureaux et résidences.",
  hero: {
    title: "Système d'alarme",
    subtitle:
      "Détection d'intrusion, sirène puissante et alerte immédiate sur smartphone — centrale paramétrée pour votre mode de fonctionnement, reliée à une télésurveillance si souhaité.",
  },
  presentation: {
    whatItIs:
      "Un système d'alarme intrusion comprend une centrale, des détecteurs (infrarouges PIR, contacts d'ouverture, bris de vitres), un clavier de commande, une sirène intérieure et extérieure et une communication vers un poste de télésurveillance ou sur votre smartphone. La centrale mémorise les événements et peut déclencher des actions automatiques.",
    whatFor:
      "Dissuader les cambriolages, alerter en temps réel en cas d'intrusion et permettre à une société de télésurveillance ou aux forces de l'ordre d'intervenir rapidement — même en votre absence.",
    useCases: [
      "Commerce : fermeture sécurisée avec armement automatique après horaires.",
      "Bureau : zones à armer/désarmer séparément selon le service.",
      "Résidence villa : périmètre et volumes protégés, alerte SMS / appel.",
      "Entrepôt : détection mouvement + bris de vitres sur grande surface.",
    ],
  },
  solutions: [
    {
      title: "Centrale & clavier",
      description:
        "Centrale à zones extensibles, clavier LCD ou tactile, badge de commande — paramétrage des partitions, des horaires et des codes utilisateurs.",
    },
    {
      title: "Détecteurs & capteurs",
      description:
        "Détecteurs PIR double technologie anti-masquage, contacts magnétiques sur portes et fenêtres, détecteurs bris de vitres, capteurs de vibration.",
    },
    {
      title: "Sirènes & flash",
      description:
        "Sirène intérieure 110 dB et flash extérieur auto-alimenté (batterie interne en cas de coupure secteur) — installation en hauteur, hors de portée.",
    },
    {
      title: "Transmission & télésurveillance",
      description:
        "Transmission IP/GPRS vers application mobile (alertes push et journal), raccordement possible à un centre de télésurveillance avec protocole Contact ID.",
    },
  ],
  offerings: [
    {
      category: "Équipements courants",
      items: [
        "Centrale alarme filaire ou sans fil (Ajax, DSC, Paradox ou équivalent)",
        "Détecteurs PIR double technologie anti-masquage",
        "Contacts magnétiques portes et fenêtres",
        "Sirène extérieure auto-alimentée avec flash",
        "Clavier LCD avec affichage des zones",
        "Module GSM / IP pour notification smartphone",
      ],
    },
    {
      category: "Options & extensions",
      items: [
        "Détecteur de fumée et chaleur couplé à la centrale",
        "Raccordement à une société de télésurveillance agréée",
        "Intégration avec le contrôle d'accès (armement par badge)",
        "Batterie de secours 24h en cas de coupure secteur",
      ],
    },
  ],
  benefits: [
    {
      title: "Alerte immédiate",
      description: "Notification push ou appel en moins d'une minute après détection.",
    },
    {
      title: "Dissuasion maximale",
      description: "Sirène 110 dB + flash visible depuis la rue.",
    },
    {
      title: "Zones séparées",
      description: "Bureau, entrepôt, parking : chaque zone s'arme indépendamment.",
    },
    {
      title: "Continuité sans courant",
      description: "Batterie interne maintient le système actif plusieurs heures.",
    },
  ],
  process: [
    {
      step: "01",
      title: "Analyse du site",
      description:
        "Relevé des points d'entrée, zones sensibles, luminaires existants et besoin en télésurveillance.",
    },
    {
      step: "02",
      title: "Devis & plan de zones",
      description:
        "Cartographie des détecteurs, liste matériel, type de transmission et délai d'installation.",
    },
    {
      step: "03",
      title: "Installation",
      description:
        "Pose centrale, câblage ou installation sans fil, montage sirènes et détecteurs.",
    },
    {
      step: "04",
      title: "Paramétrage & tests",
      description:
        "Création des codes, partitions, horaires et test de chaque zone en présence du client.",
    },
    {
      step: "05",
      title: "Formation & suivi",
      description:
        "Prise en main du clavier et de l'application mobile, procédure en cas d'alarme.",
    },
  ],
};
