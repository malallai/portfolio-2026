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
    kind: "Fullstack · SRE",
    location: "Core Backend & Infra · Paris",
    role: "Fullstack Dev & Lead 'Origins'",
    status: "Live",
    summary:
      "Maintenance critique du monolithe **Intra V2** (Ruby on Rails) et conception des microservices **Intra V3** pour plus de 25 000 étudiants actifs à travers 50 campus dans le monde.",
    highlights: [
      "**Maintenance & Évolution :** Maintien en condition opérationnelle du monolithe Intra V2 (Ruby on Rails) servant plus de 25 000 étudiants actifs au quotidien.",
      "**Architecture & Microservices :** Conception de la future Intra V3 avec des stacks modernes (React, FastAPI, Kubernetes, Kafka).",
      "**Services Métiers Avancés :** Création du service GCC (Gestion RNCP) intégrant un éditeur de graphes ReactFlow et un pipeline asynchrone de génération de PDF via ReportLab pour les sessions de jury.",
      "**Pragmatisme Architectural :** Décision technique de pivoter d'une architecture complexe et non performante (MongoDB/Kafka) vers du SQL pur optimisé sur PostgreSQL pour sauver un projet voué à la dépréciation.",
      "**Gestion de Crise (SRE) :** Résolution d'un incident critique en production (Rate limit sévère d'une API tierce) en implémentant en urgence absolue un système de Feature Flags distribué sous Redis.",
    ],
    bullets: [
      "Maintenance du monolithe **Intra V2** et conception de microservices **Intra V3**.",
      "Développement de **services complexes** (ReactFlow, génération PDF asynchrone).",
      "**Gestion de crise SRE** (Feature flags Redis) et **pragmatisme** (Refonte SQL/PostgreSQL).",
    ],
    metrics: ["25k+ Actifs", "50+ Campus", "Microservices"],
    stack: ["Ruby on Rails", "FastAPI", "React", "PostgreSQL", "Redis", "Kafka", "Kubernetes", "Ansible"],
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
    kind: "Platform Engineering",
    location: "Infrastructure & Gouvernance",
    role: "Président & Platform Engineer",
    status: "Live",
    summary:
      "Gouvernance et architecture technique complète (Réseau, DevOps, Développement) pour un incubateur communautaire de projets vidéoludiques (ex: *L'Occamy*).",
    highlights: [
      "**Infrastructure Sécurisée :** Conception et déploiement d'une architecture réseau 'Zero-Trust' sous Proxmox. Isolation complète des services en LAN pur avec un point d'entrée unique VPN Wireguard.",
      "**DevOps & Observabilité :** Automatisation complète avec Ansible et GitLab CI/CD. Déploiement d'une stack d'observabilité complète (Prometheus, Node Exporter, cAdvisor, Grafana) pour monitorer les ressources de l'incubateur.",
      "**Développement Core :** Création de serveurs de jeux Minecraft en Java, incluant le développement from scratch d'un système de migration et d'un ORM sur-mesure pour s'affranchir des limitations existantes.",
      "**Gouvernance :** Financement, présidence de l'association et coordination des développeurs et bénévoles sur des projets réunissant une traction organique massive (Tiktok 100k+ vues).",
    ],
    bullets: [
      "Architecture **réseau sécurisée** sous Proxmox (LAN isolé, VPN interne).",
      "Stack **DevOps & observabilité** (GitLab CI, Prometheus, Grafana, Ansible).",
      "Développement Java : conception d'un **ORM et système de migration sur-mesure**.",
    ],
    metrics: ["100k+ vues TikTok", "Proxmox Cluster", "VPN LAN"],
    stack: ["Proxmox", "Docker", "Ansible", "Prometheus", "Grafana", "Nginx", "Java"],
    palette: ["var(--color-peach)", "var(--color-accent-wash)"],
    url: "https://lacaleche.cc",
  },
  {
    id: "cobbai",
    name: "Cobbaï",
    begin_at: "2020-04",
    end_at: "2020-09",
    entity: "Cobbaï",
    entityType: "entreprise",
    kind: "Fullstack · Stage",
    location: "SaaS B2B IA",
    role: "Développeur Fullstack",
    status: "Terminé",
    summary:
      "Développement de fonctionnalités critiques sur une plateforme IA SaaS connectant des sources de données clients (Jira, etc.) pour le clustering inter-usines.",
    highlights: [
      "**Clustering IA B2B :** Implémentation d'interfaces front-end et back-end permettant l'interconnexion et la clusterisation par IA de bases de connaissances clients (ex: synchronisation de tickets Jira inter-usines).",
      "**Data Visualization :** Développement de graphiques interactifs performants et de systèmes de filtres croisés avancés.",
      "**Déploiement On-Premise :** Scripting d'un système d'installation automatisé (Bash & Docker) pour permettre aux clients exigeants sur la sécurité d'héberger la solution sur leur propre réseau LAN isolé.",
      "**Vitrine Web :** Création de A à Z du site vitrine de l'entreprise via Tailwind CSS et Stimulus.",
    ],
    bullets: [
      "Développement d'interfaces SaaS de **clustering de données IA**.",
      "Création de **graphiques interactifs** et filtres avancés.",
      "Automatisation de déploiements **On-Premise** (Docker/Bash).",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS", "Stimulus", "Docker", "Bash"],
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
    summary: "Projet communautaire complet : site web, applications Java, infrastructure réseau et système.",
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
