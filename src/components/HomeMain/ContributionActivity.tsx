import React from "react";

interface Contribution {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
}

const contributions: Contribution[] = [
  {
    company: "Branak",
    role: "Fullstack Developer",
    duration: "Ago. 2024 - Ene. 2025 (6 meses)",
    location: "República Dominicana · En remoto",
    description:
      "Participación en el desarrollo de Branak, una aplicación web enfocada en el aprendizaje de inglés. Trabajo en equipo con objetivos semanales.",
    technologies: [
      "JavaScript", "React", "Redux", "GraphQL (Apollo Client)", "Material-UI",
      "Node.js", "Express", "DynamoDB", "Sequelize", "Mongoose",
      "AWS", "Amplify", "S3", "IAM", "Heroku", "Cloudinary"
    ],
  },
  {
    company: "EICHE",
    role: "Desarrollador Fullstack",
    duration: "Feb. 2024 - Sept. 2024 (8 meses)",
    location: "Chile · En remoto",
    description: "Desarrollo de aplicaciones web para clientes en Chile.",
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "GraphQL"],
  },
  {
    company: "Freelance",
    role: "Full Stack Developer",
    duration: "Mar. 2023 - Feb. 2024 (1 año)",
    location: "En remoto",
    description: "Desarrollo de soluciones personalizadas para diferentes clientes.",
    technologies: ["Next.js", "Firebase", "PostgreSQL", "TailwindCSS"],
  },
];

const ContributionActivity: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Actividad de Contribución</h2>
      {contributions.map((contribution, index) => (
        <div key={index} style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          <h3>{contribution.role} en {contribution.company}</h3>
          <p><strong>Duración:</strong> {contribution.duration}</p>
          <p><strong>Ubicación:</strong> {contribution.location}</p>
          <p>{contribution.description}</p>
          <p><strong>Tecnologías:</strong> {contribution.technologies.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default ContributionActivity;
