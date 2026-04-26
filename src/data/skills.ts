/** Unified skill item - used by both CV and portfolio Stack pane */
export interface Skill {
  name: string;
  primary?: boolean;
  tone: "accent" | "sky" | "peach" | "mint" | "neutral";
}

/** A group of skills - shared between CV and Stack pane */
export interface SkillGroup {
  key: string;
  label: string;
  items: Skill[];
}

/**
 * Single source of truth for all technical skills.
 * - CV uses: label + items (name, primary)
 * - Stack pane uses: key, label + items (name, tone)
 */
export const SKILLS: SkillGroup[] = [
  {
    key: "languages",
    label: "Langages",
    items: [
      { name: "Ruby", primary: true, tone: "accent" },
      { name: "TypeScript", primary: true, tone: "accent" },
      { name: "Java", tone: "peach" },
      { name: "Python", tone: "mint" },
      { name: "C", tone: "neutral" },
      { name: "SQL", tone: "neutral" },
    ],
  },
  {
    key: "frontend",
    label: "Frontend",
    items: [
      { name: "React", primary: true, tone: "accent" },
      { name: "Tailwind CSS", tone: "accent" },
      { name: "Vite", tone: "mint" },
      { name: "Astro", tone: "peach" },
      { name: "NextJS", tone: "sky" },
    ],
  },
  {
    key: "backend",
    label: "Backend & Data",
    items: [
      { name: "Ruby on Rails", primary: true, tone: "accent" },
      { name: "FastAPI", tone: "mint" },
      { name: "PostgreSQL", primary: true, tone: "sky" },
      { name: "Redis", tone: "peach" },
      { name: "Kafka", tone: "accent" },
      { name: "RabbitMQ", tone: "accent" },
      { name: "Node.js", tone: "sky" },
    ],
  },
  {
    key: "devops",
    label: "DevOps & Infra",
    items: [
      { name: "Docker", primary: true, tone: "sky" },
      { name: "Kubernetes", primary: true, tone: "sky" },
      { name: "GitLab CI/CD", tone: "accent" },
      { name: "Ansible", tone: "neutral" },
      { name: "Prometheus", tone: "peach" },
      { name: "Grafana", tone: "peach" },
      { name: "Nginx", tone: "neutral" },
      { name: "Traefik", tone: "neutral" },
      { name: "ArgoCD", tone: "neutral" },
    ],
  },
  {
    key: "systems",
    label: "Sys Admin",
    items: [
      { name: "Linux", tone: "neutral" },
      { name: "Proxmox", tone: "peach" },
      { name: "OpenVPN", tone: "mint" },
      { name: "Bash", tone: "neutral" },
    ],
  },
];

export interface SpokenLanguage {
  name: string;
  level: string;
  percent: number;
}

export const LANGUAGES: SpokenLanguage[] = [
  { name: "Français", level: "natif", percent: 100 },
  { name: "Anglais", level: "courant · C1", percent: 80 },
  { name: "Espagnol", level: "notions · A2", percent: 30 },
];

export interface SoftSkill {
  title: string;
  description: string;
}

export const SOFT_SKILLS: SoftSkill[] = [
  {
    title: "Gestion de crise & SRE",
    description: "Maintien opérationnel et résolution d'incidents critiques en production.",
  },
  {
    title: "Pragmatisme",
    description: "Capacité à pivoter techniquement pour sauver un projet.",
  },
  {
    title: "Leadership associatif",
    description: "Gouvernance, gestion de projet et conception d'infrastructures cloud.",
  },
  { title: "Autonomie & apprentissage", description: "Adaptation rapide, autodidacte depuis toujours." },
  { title: "Veille technologique", description: "Veille et apprentissage continu de nouvelles technologies." },
];
