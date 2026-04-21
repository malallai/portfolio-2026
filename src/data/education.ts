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
      "Spécialisation dans l'ingénierie Web au sein de l'école 42. Pédagogie 100% pratique sans professeurs, forgeant une résilience face à la complexité et une très forte capacité d'apprentissage en autodidacte.",
    highlights: [
      "**Hypertube** : Plateforme de streaming vidéo en Ruby on Rails avec moteur de téléchargement torrent concurrentiel.",
      "**Matcha & Camagru** : Apps web en Ruby Sinatra et pur PHP (sans frameworks).",
      "**Core** : Ré-implémentation de `ls` et d'outils Unix bas niveau en C.",
    ],
    skills: ["C", "Ruby on Rails", "PHP", "Docker", "PostgreSQL"],
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
