import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";
import "../styles/HomeMain.css";
import withResponsive from "../withResponsiveHOC";
import ContributionGraph from "./ContributionGraph";
import GitHubActivity from "./GitHubActivity";
import ProjectList from "./ProyectList";
import ReadmeSection from "./ReadmeSection";

type HomeMainProps = {
  isMobile?: boolean;
  query: string;
};

const HomeMain = ({isMobile = false, query }: HomeMainProps) => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <div className={`${isDarkMode ? "dark-theme" : "light-theme"}`} style={{margin:'auto', width:isMobile ?'95%' :'80%'}}>
      <ReadmeSection language={language} /> 
      <ProjectList query={query} />
      <ContributionGraph />
      <GitHubActivity/>
    </div>
  );
};

export default withResponsive(HomeMain);
