export interface Education {
  id: string;
  school: string;
  date: string;
  degree: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
  palette: [string, string];
  url?: string;
}

export const EDUCATION: Education[] = [
  {
    id: "42",
    school: "École 42 Paris",
    date: "2018 - 2020",
    degree: "Cursus informatique · pédagogie par projets",
    location: "Paris",
    summary:
      "Formation intensive en informatique basée sur la pédagogie par projets, sans cours ni professeur. Apprentissage par la pratique, la collaboration et l'évaluation par les pairs.",
    highlights: [
      "Ré-implémentation de la libc et d'outils Unix en C (bas niveau).",
      "Projets d'administration réseau et virtualisation.",
      "Réseau social de partage photo, site de rencontre, plateforme de streaming vidéo.",
    ],
    skills: ["C", "Docker", "Ruby on Rails", "React", "PostgreSQL"],
    palette: ["var(--color-accent-wash)", "var(--color-sky)"],
    url: "https://42.fr",
  },
  {
    id: "lycee",
    school: "Lycée Alain René-Lesage",
    date: "2018",
    degree: "Baccalauréat STI2D · option SIN",
    location: "Vannes",
    summary:
      "Baccalauréat technologique Sciences et Technologies de l'Industrie et du Développement Durable, spécialité Systèmes d'Information et Numérique.",
    highlights: ["Projet de fin d'études : capteur connecté pour le suivi de la qualité de l'air dans les habitats."],
    skills: ["Arduino", "Electronique", "Programmation embarquée"],
    palette: ["var(--color-peach)", "var(--color-mint)"],
  },
];
