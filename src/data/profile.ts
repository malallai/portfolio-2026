export const PROFILE = {
  name: "Malo Allain",
  firstName: "Malo",
  lastName: "Allain",
  handle: "@malallai",
  role: "Développeur Fullstack",
  roleSecondary: "Sys Admin & DevOps",
  location: "Vernouillet · Eure-et-Loir",
  city: "Vernouillet, 28500",
  phone: "06 44 03 71 59",
  email: "malo.albx@gmail.com",
  github: "github.com/malallai",
  githubUrl: "https://github.com/malallai",
  linkedin: "linkedin.com/in/malallai",
  linkedinUrl: "https://linkedin.com/in/malallai",
  summary:
    "Développeur Fullstack avec une forte culture DevOps, je navigue entre le code et l'infrastructure depuis presque 10 ans. Mon quotidien se partage entre la maintenance critique de l'Intra de 42 et la gestion d'infrastructures communautaires via La Calèche. Développeur avant tout, je vois le système comme le prolongement logique du code : j'aime construire des applications **robustes** qui tournent sur des environnements que je maîtrise.",
  portraitUrl: "portrait.jpg",
};

export const CHANNELS = [
  { label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}`, kbd: "E" },
  { label: "GitHub", value: PROFILE.github, href: PROFILE.githubUrl, kbd: "G" },
  { label: "LinkedIn", value: PROFILE.linkedin, href: PROFILE.linkedinUrl, kbd: "L" },
  { label: "Téléphone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}`, kbd: "T" },
];
