export type PaneKey = "about" | "experiences" | "etudes" | "stack" | "connect";

export interface Tab {
  key: PaneKey;
  label: string;
  idx: string;
  kbd: string;
}

export const TABS: Tab[] = [
  { key: "about", label: "À propos", idx: "01", kbd: "1" },
  { key: "experiences", label: "Expériences", idx: "02", kbd: "2" },
  { key: "etudes", label: "Études", idx: "03", kbd: "3" },
  { key: "stack", label: "Stack", idx: "04", kbd: "4" },
  { key: "connect", label: "Contact", idx: "05", kbd: "5" },
];

export const UI = {
  about: {
    sectionIdx: "01",
    sectionLabel: "À propos",
    sectionRight: "Mis à jour avril 2026",
    greeting: "BONJOUR -",
    headlinePre: "Je suis",
    headlineHighlight: "fullstack dev",
    languesTitle: "LANGUES",
    softSkillsTitle: "SOFT SKILLS",
  },
  experiences: {
    sidebarTitle: "EXPÉRIENCES PRO",
    yearRange: "2019 - 2026",
    entreprise: "ENTREPRISE",
    association: "ASSOCIATION",
    role: "RÔLE",
    stack: "STACK",
    learnMore: "En apprendre plus",
  },
  etudes: {
    sidebarTitle: "FORMATION",
    yearRange: "2018 - 2020",
    diplome: "DIPLÔME",
    stack: "COMPÉTENCES",
    learnMore: "En apprendre plus",
  },
  stack: {
    toolsCount: (n: number) => `${n} outils`,
    calloutLabel: "APPROCHE",
    calloutText:
      "Je ne suis pas toujours les nouvelles technologies. Je choisis l'outil qui convient le mieux à la situation.",
  },
  connect: {
    sectionIdx: "05",
    sectionLabel: "Réseaux",
    greeting: "RETROUVEZ-MOI -",
    headlineL1: "Connecté",
    headlineL2: "sur le",
    headlineL3: "réseau.",
    description:
      "Vous pouvez retrouver mon code et mon parcours sur l'une de ces plateformes.",
    copied: "COPIÉ",
    copy: "COPIER",
    languesTitle: "LANGUES",
    softSkillsTitle: "SOFT SKILLS",
  },
  footer: {
    ready: "READY",
    pane: "Slide",
    panes: "Slides",
    nav: "Nav",
    theme: "Theme",
  },
} as const;
