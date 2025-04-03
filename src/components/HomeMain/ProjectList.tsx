import { useTheme } from "../../context/ThemeContext";

const projects = [
  {
    name: "ClientesIonic-Full",
    description: "Gestión de Clientes, arq.Rest con Spring Boot y JPA (Hibernate). Npm minificado Ionic React.",
    language: "Java",
    stars: 1,
    visibility: "Public",
  },
  {
    name: "pruebatecnica_backend",
    description: "Deploy Render",
    language: "TypeScript",
    stars: 1,
    visibility: "Public",
  },
  {
    name: "pruebatecnica_frontend",
    description: "Deploy Vercel",
    language: "TypeScript",
    stars: 1,
    visibility: "Public",
  },
  {
    name: "personal_webpage-frontend",
    description: "Frontend de página personal.",
    language: "TypeScript",
    stars: 1,
    visibility: "Public",
  },
  {
    name: "SinergiaCreativa-Frontend",
    description: "Prueba técnica Frontend Sinergia Creativa.",
    language: "TypeScript",
    stars: 1,
    visibility: "Public",
  },
  {
    name: "SinergiaCreativa-Backend",
    description: "Backend de prueba técnica Sinergia Creativa.",
    language: "TypeScript",
    stars: 1,
    visibility: "Public",
  },
];

const ProjectList = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`project-list ${isDarkMode ? "dark" : "light"}`}>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h2 className="project-title">{project.name}</h2>
          <p className="project-description">{project.description}</p>
          <div className="project-info">
            <span className="project-language">{project.language}</span>
            <span className="project-stars">⭐ {project.stars}</span>
            <span className="project-visibility">{project.visibility}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
