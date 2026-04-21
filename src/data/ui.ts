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
      "Je choisis l'outil qui livre la feature, pas celui avec le plus d'étoiles. Du stable, jusqu'à ce que ça ne suffise plus.",
  },
  connect: {
    sectionIdx: "05",
    sectionLabel: "Contact",
    greeting: "CONTACTEZ-MOI -",
    headlineL1: "Parlons du truc",
    headlineL2: "que vous repoussez",
    headlineL3: "depuis trop longtemps.",
    description:
      "Un message court suffit. Je réponds sous deux jours ouvrés, toujours humainement, et je vous dirai vite si je ne suis pas la bonne personne.",
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
