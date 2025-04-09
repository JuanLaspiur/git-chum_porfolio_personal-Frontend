import "./ProjectGallery.css";
import { useLanguage } from "../../context/LanguageContext";

interface Project {
  name: string;
  video: string;
  description: {
    es: string;
    en: string;
  };
  link: string;
}

const projects: Project[] = [
  {
    name: "Blog María",
    video: "/video/Blog_maria.mp4",
    description: {
      es: "Blog con Bootstrap y JavaScript Vanilla",
      en: "Blog built with Bootstrap and Vanilla JavaScript",
    },
    link: "https://juanlaspiur.github.io/portfolio/",
  },
  {
    name: "Magic Red Social",
    video: "/video/magic_day.mp4",
    description: {
      es: "Aplicación móvil con React Native y Expo",
      en: "Mobile app with React Native and Expo",
    },
    link: "https://myecommerceapp.com",
  },
  {
    name: "Cooperar - Aplicación de escritura",
    video: "/video/trafinktu.mp4",
    description: {
      es: "App colaborativa móvil desarrollada con Expo",
      en: "Collaborative mobile app built with Expo",
    },
    link: "https://blogtech.com",
  },
  {
    name: "SpartusDev - Aplicación Portafolio",
    video: "/video/spartus_dev.mp4",
    description: {
      es: "Portafolio web construido con React",
      en: "Web portfolio built with React",
    },
    link: "https://blogtech.com",
  },
  {
    name: "TagList - Prueba Técnica",
    video: "/video/tag_list.mp4",
    description: {
      es: "Aplicación SSR con Next.js",
      en: "SSR App with Next.js",
    },
    link: "https://blogtech.com",
  },
  {
    name: "RedSocial - Aplicación Portafolio",
    video: "/video/red_social.mp4",
    description: {
      es: "App multiplataforma con Ionic",
      en: "Cross-platform app built with Ionic",
    },
    link: "https://blogtech.com",
  },
];

interface ProjectGalleryProps {
  isDarkMode: boolean;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ isDarkMode }) => {
  const { language } = useLanguage();

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
            preload="metadata"
          >
            Tu navegador no soporta el video HTML5.
          </video>

          <h2 className="project-title">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              title={project.name}
            >
              {project.name}
            </a>
          </h2>

          <p className="project-description">
            {project.description[language as "es" | "en"] || project.description.es}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
