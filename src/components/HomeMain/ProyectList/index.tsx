import { useTheme } from "../../../context/ThemeContext";
import ProjectCard from "./ProjectCard";
import RenderPreviewCard from "./RenderPreviewCard";

interface Project {
  name: string;
  description: string;
  language: string;
  stars: number;
  visibility: string;
   previewImage: string;
}

const projects: Project[] = [
  {
    name: "ClientesIonic-Full",
    description: "Gestión de Clientes, arq.Rest con Spring Boot y JPA (Hibernate). Npm minificado Ionic React.",
    language: "Java",
    stars: 1,
    visibility: "Public",
     previewImage: "https://concepto.de/wp-content/uploads/2015/06/como-hacer-un-proyecto-e1546818947329-800x400.jpg"
  },
  {
    name: "pruebatecnica_backend",
    description: "Deploy Render",
    language: "TypeScript",
    stars: 1,
    visibility: "Public",
    previewImage: "https://via.placeholder.com/150"

  },
  {
    name: "pruebatecnica_frontend",
    description: "Deploy Vercel",
    language: "TypeScript",
    stars: 1,
    visibility: "Public",
    previewImage: "https://via.placeholder.com/150"

  },
  {
    name: "personal_webpage-frontend",
    description: "Frontend de página personal.",
    language: "TypeScript",
    stars: 1,
    visibility: "Public",
    previewImage: "https://via.placeholder.com/150"

  },
  {
    name: "SinergiaCreativa-Frontend",
    description: "Prueba técnica Frontend Sinergia Creativa.",
    language: "TypeScript",
    stars: 1,
    visibility: "Public",
    previewImage: "https://via.placeholder.com/150"

  },
  {
    name: "SinergiaCreativa-Backend",
    description: "Backend de prueba técnica Sinergia Creativa.",
    language: "TypeScript",
    stars: 1,
    visibility: "Public",
    previewImage: "https://via.placeholder.com/150"

  },
];

const ProjectList: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`project-list ${isDarkMode ? "dark" : "light"}`}>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} renderPreview={(project) => <RenderPreviewCard project={project} />}/>
      ))}
    </div>
  );
};

export default ProjectList;
