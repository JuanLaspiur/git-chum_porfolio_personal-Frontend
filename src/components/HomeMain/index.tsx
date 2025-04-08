import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import "../styles/HomeMain.css";
import ContributionGraph from "./ContributionGraph";
import GitHubActivity from "./GitHubActivity";
import ProjectList from "./ProyectList";
import ReadmeSection from "./ReadmeSection";

type HomeMainProps = {
  query: string;
};

const HomeMain = ({ query }: HomeMainProps) => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <div className={`${isDarkMode ? "dark-theme" : "light-theme"}`} style={{margin:'auto', width:'80%'}}>
      <ReadmeSection language={language} /> 
      <ProjectList query={query} />
         <ContributionGraph />
      <GitHubActivity/>
    </div>
  );
};

export default HomeMain;
