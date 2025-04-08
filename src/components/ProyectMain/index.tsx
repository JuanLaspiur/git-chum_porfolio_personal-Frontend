import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import "./GitHubClone.css";
import ProjectGallery from "./ProjectGallery";

const repositories = [
  {
    name: "git-chum_porfolio_Algunos-proyectos-públicos",
    language: "TypeScript",
    updated: "4 minutes ago",
    stars: 0,
    description: "",
  },
];

const ProyectMain = () => {
  const { isDarkMode } = useTheme();
  const {language} =useLanguage();
  return (
    <div className={`container ${isDarkMode ? "dark" : ""}`}>
      <input type="text" placeholder="Find a repository..." className="search-box" />
      <div>
        {repositories.map((repo, index) => (
          <div key={index} className="repo-card">
            <h2 className="repo-title">
               {language ==='es' ?  repo.name : 'git-chum_porfolio_Some-public-projects'
              }
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
