import React from "react";
import "./ProjectGallery.css";

interface Project {
  name: string;
  video: string; // ahora usamos video
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Blog María",
    video: "public/video/Blog_maria.mp4",
    description: "Blog Bootstrap JavaScript Vanilla",
    link: "https://juanlaspiur.github.io/portfolio/",
  },
  {
    name: "Magic Red Social",
    video: "/video/magic_day.mp4",
    description: "Aplicación móvil React Native Expo",
    link: "https://myecommerceapp.com",
  },
  {
    name: "Cooperar - Aplicación de escritura",
    video: "/video/trafinktu.mp4",
    description: "Aplicación móvil React Native Expo",
    link: "https://blogtech.com",
  },  
  {
    name: "SpartusDev - Aplicación Portafolio",
    video: "/video/spartus_dev.mp4",
    description: "Aplicación web con React",
    link: "https://blogtech.com",
  },
  {
    name: "TagList - Prueba Técnica",
    video: "/video/tag_list.mp4",
    description: "Aplicación con Next.js SSR",
    link: "https://blogtech.com",
  },
  {
    name: "RedSocial - Aplicación Portafolio",
    video: "/video/red_social.mp4",
    description: "Aplicación multiplataforma con Ionic",
    link: "https://blogtech.com",
  }
];


interface ProjectGalleryProps {
  isDarkMode: boolean;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ isDarkMode }) => {
  return (
    <div className={`gallery-container ${isDarkMode ? "dark" : ""}`}>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
  <video 
    src={project.video} 
    className="project-video" 
    autoPlay 
    loop 
    muted 
    playsInline 
  />
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
