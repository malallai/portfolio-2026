export interface Project {
  id: string;
  name: string;
  entity: string;
  entityType: "entreprise" | "association" | "personnel";
  kind: string;
  role: string;
  location: string;
  status: string;
  begin_at: string;
  end_at: string | null;
  summary: string;
  highlights: string[];
  bullets: string[];
  metrics?: string[];
  stack: string[];
  palette: [string, string];
  url?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "intra-42",
    name: "Intra 42",
    begin_at: "2020",
    end_at: null,
    entity: "École 42",
    entityType: "entreprise",
    kind: "Fullstack · Maintenance",
    location: "Maintenance Intra · Paris",
    role: "Développeur Fullstack",
    status: "Live",
    summary:
      "Maintenance et évolution de la plateforme **Intra V2** (Ruby on Rails), puis conception de microservices pour la future **Intra V3**.",
    highlights: [
      "Support technique et maintenance quotidienne de l'Intra V2 : tickets, hotfixes, optimisation DB.",
      "Refactorings ciblés, mise en place CI/CD et monitoring pour l'amélioration continue.",
      "Conception de microservices pour la V3 : React, FastAPI, Kafka, Kubernetes.",
    ],
    bullets: [
      "Support technique et maintenance de l'**Intra V2** (Ruby on Rails) : tickets, hotfixes, optimisation DB.",
      "Amélioration continue de la stack : refactorings, CI/CD, monitoring, nouvelles features.",
      "Conception et développement de **microservices** pour la future **Intra V3** (React / FastAPI, Kafka, Kubernetes).",
    ],
    metrics: ["10k+ étudiants", "Kubernetes", "Kafka"],
    stack: ["Ruby on Rails", "React", "FastAPI", "Kubernetes", "PostgreSQL", "Kafka"],
    palette: ["var(--color-accent-wash)", "var(--color-sky)"],
    url: "https://42.fr",
  },
  {
    id: "caleche",
    name: "La Calèche",
    begin_at: "2020",
    end_at: null,
    entity: "Association La Calèche",
    entityType: "association",
    kind: "Infra · Game servers",
    location: "Président · Infrastructure & Gouvernance",
    role: "Président & Sys Admin",
    status: "Live",
    summary:
      "Infrastructure système et réseau complète pour une association communautaire de serveurs de jeux.",
    highlights: [
      "Mise en place et gestion complète de l'infrastructure système et réseau.",
      "Développement et maintenance de serveurs de jeux communautaires.",
      "Présidence de l'association : gestion de projet, budget, coordination bénévoles.",
    ],
    bullets: [
      "Mise en place et gestion complète de l'**infrastructure système et réseau**.",
      "Développement et maintenance de **serveurs de jeux** communautaires.",
      "**Présidence** de l'association : gestion de projet, budget, coordination bénévoles.",
    ],
    metrics: ["Budget & Projets", "Proxmox Cluster"],
    stack: ["Docker", "Linux", "Nginx", "Proxmox", "Java", "TypeScript"],
    palette: ["var(--color-peach)", "var(--color-accent-wash)"],
    url: "https://caleche.dev",
  },
  {
    id: "cobbai",
    name: "Cobbaï",
    begin_at: "2020-04",
    end_at: "2020-09",
    entity: "Cobbaï",
    entityType: "entreprise",
    kind: "Fullstack · Stage",
    location: "Stage · Application métier & site vitrine",
    role: "Développeur Web Front / Back",
    status: "Terminé",
    summary:
      "Développement de fonctionnalités pour l'application métier et réalisation du site vitrine de l'entreprise.",
    highlights: [
      "Développement de nouvelles fonctionnalités pour l'application métier.",
      "Réalisation complète du site vitrine de l'entreprise.",
    ],
    bullets: [
      "Développement de nouvelles fonctionnalités pour l'**application métier**.",
      "Réalisation du **site vitrine** de l'entreprise.",
    ],
    stack: ["React", "Node.js", "TypeScript"],
    palette: ["var(--color-mint)", "var(--color-accent-wash)"],
    url: "https://cobbai.com",
  },
  {
    id: "aldostra",
    name: "Instance RP",
    begin_at: "2019",
    end_at: "2022",
    entity: "Association Aldostra",
    entityType: "association",
    kind: "Fullstack · Infra",
    location: "Projet « Instance RP »",
    role: "Lead Développeur & Sys Admin",
    status: "Fermé",
    summary:
      "Projet communautaire complet : site web, applications Java, infrastructure réseau et système.",
    highlights: [
      "Administration technique complète du projet Instance RP.",
      "Développement du site web et d'applications Java spécifiques.",
      "Déploiement de l'infrastructure réseau et système.",
    ],
    bullets: [
      "Administration technique complète du projet **Instance RP**.",
      "Développement du site web et d'**applications Java** spécifiques.",
      "Déploiement de l'**infrastructure réseau et système**.",
    ],
    stack: ["Java", "Linux", "Nginx", "Docker"],
    palette: ["var(--color-sky)", "var(--color-mint)"],
  },
];
