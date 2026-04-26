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
      "**Pragmatisme Architectural :** Décision technique avec mon équipe, de pivoter d'une architecture complexe et non performante délivrant des pipelines complexes MongoDB, vers une architecture plus simple et optimisée avec PostgreSQL pour sauver un projet voué à la dépréciation et permettre de le fiabiliser pour nos étudiants sur le long terme.",
      "**Gestion de Crise (SRE) :** Résolution d'incidents multiples et critiques en production, notamment un rate limit sévère d'une API tierce conduisant à une coupure de l'un de nos services, en implémentant en urgence un système de Feature Flags distribué sous Redis.",
    ],
    bullets: [
      "Maintenance du monolithe **Intra V2** et conception de microservices **Intra V3**.",
      "Développement de **services complexes** (ReactFlow, génération PDF asynchrone).",
      "**Gestion de crise SRE** et **pragmatisme** technique.",
    ],
    metrics: ["25k+ Actifs", "50+ Campus", "20+ Microservices"],
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
      "Gouvernance et architecture technique complète (Réseau, DevOps, Développement) pour une association promouvant nos mêtiers techniques, au travers de projets communautaires.",
    highlights: [
      "**Infrastructure Sécurisée :** Conception et déploiement d'une architecture réseau 'Zero-Trust' sous Proxmox. Isolation complète des services en LAN pur avec un point d'entrée unique VPN (OpenVPN).",
      "**DevOps & Observabilité :** Automatisation partielle de notre Proxmox avec Ansible. Mise en place d'une stack d'observabilité (Prometheus, Node Exporter, cAdvisor, Grafana) pour monitorer l'état et les performances de nos infrastructures.",
      "**Développement :** Création de plusieurs librairies Java pour nos serveurs de Jeux Minecraft. Ex: Un système de migration et un ORM sur-mesure. Ou encore un éditeur VFX intégré à Minecraft.",
      "**Gouvernance :** Financement, présidence de l'association et coordination des développeurs et bénévoles sur des projets réunissant une traction organique massive (Tiktok 100k+ vues).",
    ],
    bullets: [
      "Architecture **réseau sécurisée** sous Proxmox (LAN isolé, VPN).",
      "Stack **DevOps & observabilité** (GitLab CI, Prometheus, Grafana, Ansible).",
      "Développement Java : **Librairies** et **outils** pour nos serveurs Minecraft (migrations, ORM, éditeurs VFX, etc..)",
      "Gouvernance : **Présidence** de l'association, **coordination** des bénévoles.",
    ],
    metrics: ["100k+ vues TikTok", "10+ VMs", "VPN LAN"],
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
      "Développement de fonctionnalités sur une plateforme IA SaaS connectant des sources de données clients (Ex. Jira, Playstore, etc.).",
    highlights: [
      "**RAG IA B2B :** Implémentation d'interfaces front-end et back-end permettant la lecture et l'analyse des données sources via IA.",
      "**Data Visualization :** Développement de KPI et de tableaux de bord intéractifs.",
      "**Déploiement Simplifié :** Scripting d'un système d'installation automatisé (Bash & Docker).",
      "**Vitrine Web :** Intégration et développement du site vitrine de l'entreprise, en utilisant notamment Tailwind CSS et Stimulus.",
    ],
    bullets: [
      "Développement d'interfaces SaaS.",
      "Création de **KPIs** et de **tableaux de bord** interactifs.",
      "Automatisation de déploiements **On-Premise** (Bash & Docker).",
      "Développement du **site vitrine** de l'entreprise.",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS", "Stimulus", "Docker", "Bash"],
    palette: ["var(--color-mint)", "var(--color-accent-wash)"],
    url: "https://cobbai.com",
  },
  {
    id: "aldostra",
    name: "Aldostra",
    begin_at: "2019",
    end_at: "2022",
    entity: "Association Aldostra",
    entityType: "association",
    kind: "Administration · Infra & Développement",
    location: "Projet « Instance RP »",
    role: "Administrateur · Lead Développeur & Sys Admin",
    status: "Fermé",
    summary: "Projet communautaire Instance RP : site web, plugins Java, infrastructure réseau et système.",
    highlights: [
      "Administration du projet Instance RP.",
      "Coordination des équipes techniques.",
      "Développement du site web et de plugins Java spécifiques.",
      "Déploiement de l'infrastructure réseau et système.",
    ],
    bullets: [
      "Administration du projet **Instance RP**.",
      "Développement du **site web** et de **plugins Java**.",
      "Déploiement de l'**infrastructure réseau et système**.",
    ],
    stack: ["Java", "Linux", "Nginx", "Docker"],
    palette: ["var(--color-sky)", "var(--color-mint)"],
  },
];
