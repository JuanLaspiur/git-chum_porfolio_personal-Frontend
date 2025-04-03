import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import "../styles/HomeMain.css";
import ContributionGraph from "./ContributionGraph";
import ProjectList from "./ProyectList";
import ReadmeSection from "./ReadmeSection";

type HomeMainProps = {
  query: string;
};

const HomeMain = ({ query }: HomeMainProps) => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <div className={`welcome-container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <ReadmeSection language={language} />
      <ProjectList query={query} /> {/* Aquí pasas query a ProjectList para filtrar */}
      <ContributionGraph />
    </div>
  );
};

export default HomeMain;
