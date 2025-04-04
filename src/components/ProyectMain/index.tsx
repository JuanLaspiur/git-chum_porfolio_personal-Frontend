import { useTheme } from "../../context/ThemeContext";
import "./GitHubClone.css";
import ProjectGallery from "./ProjectGallery";

const repositories = [
  {
    name: "git-chum_porfolio_personal-Frontend",
    language: "TypeScript",
    updated: "4 minutes ago",
    stars: 0,
    description: "",
  },
  {
    name: "juanlaspiur",
    language: "HTML",
    updated: "2 weeks ago",
    stars: 0,
    description: "Muy simple página personal, pronto la pasaré a React que sea mantenible y escalable.",
    link: "https://juanlaspiur.github.io/juanlaspiur/",
  },
  {
    name: "personal_webpage-frontend",
    language: "TypeScript",
    updated: "2 weeks ago",
    stars: 1,
    description: "",
  },
  {
    name: "practica-dise-o3d-Frontend",
    language: "TypeScript",
    updated: "2 weeks ago",
    stars: 0,
    description: "Babylon React",
  },
];

const ProyectMain = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`container ${isDarkMode ? "dark" : ""}`}>
      <input type="text" placeholder="Find a repository..." className="search-box" />
      <div>
        {repositories.map((repo, index) => (
          <div key={index} className="repo-card">
            <h2 className="repo-title">
              {repo.link ? (
                <a href={repo.link} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              ) : (
                repo.name
              )}
            </h2>
            <p className="repo-description">{repo.description}</p>
            <div className="repo-meta">
              <span className="repo-language">🔵 {repo.language}</span>
              <span className="repo-updated">Updated {repo.updated}</span>
            </div>
            <div className="repo-stars">⭐ {repo.stars}</div>
          </div>
        ))}
      </div>
      <ProjectGallery isDarkMode={isDarkMode}/>
    </div>
  );
};

export default ProyectMain;
