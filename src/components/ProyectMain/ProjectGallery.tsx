import React from "react";
import "./ProjectGallery.css";

interface Project {
  name: string;
  image: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Portfolio Personal",
    image: "/arriba.webp",
    description: "Un portafolio hecho con React y TypeScript.",
    link: "https://juanlaspiur.github.io/portfolio/",
  },
  {
    name: "E-commerce App",
    image: "/arriba-white.webp",
    description: "Aplicación de compras con carrito y autenticación.",
    link: "https://myecommerceapp.com",
  },
  {
    name: "Blog Tech",
    image: "/3.png",
    description: "Blog personal sobre tecnología y desarrollo.",
    link: "https://blogtech.com",
  },
];

interface ProjectGalleryProps {
  isDarkMode: boolean;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ isDarkMode }) => {
  return (
    <div className={`gallery-container ${isDarkMode ? "dark" : ""}`}>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.name} className="project-image" />
          <h2 className="project-title">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </h2>
          <p className="project-description">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
