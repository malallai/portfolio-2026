export const PROFILE = {
  name: "Malo Allain",
  firstName: "Malo",
  lastName: "Allain",
  handle: "@malallai",
  role: "Développeur Fullstack",
  roleSecondary: "SRE & Platform Engineer",
  location: "Vernouillet · Eure-et-Loir",
  city: "Vernouillet, 28500",
  phone: "06 44 03 71 59",
  email: "malo.albx@gmail.com",
  github: "github.com/malallai",
  githubUrl: "https://github.com/malallai",
  linkedin: "linkedin.com/in/malallai",
  linkedinUrl: "https://linkedin.com/in/malallai",
  website: "malallai.fr",
  websiteUrl: "https://malallai.fr",
  summary:
    "Développeur Fullstack & Lead technique de facto avec une forte culture SRE/DevOps. Depuis 6 ans, je conçois et maintiens des architectures scalables : de la gestion de crise en production sur le cœur de l'Intranet de 42 (25k+ utilisateurs) au déploiement d'infrastructures cloud privées ultra-sécurisées.",
  portraitUrl: "portrait.jpg",
};

export const CHANNELS = [
  { label: "Site", value: PROFILE.website, href: PROFILE.websiteUrl },
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, kbd: "E" },
  { label: "GitHub", value: PROFILE.github, href: PROFILE.githubUrl, kbd: "G" },
  { label: "LinkedIn", value: PROFILE.linkedin, href: PROFILE.linkedinUrl, kbd: "L" },
  { label: "Téléphone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}`, kbd: "T" },
];
