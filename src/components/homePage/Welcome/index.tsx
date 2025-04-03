import { useLanguage } from "../../../context/LanguageContext";
import { useTheme } from "../../../context/ThemeContext";
import "../../styles/Welcome.css";
import ContributionGraph from "./ContributionGraph";
import ProjectList from "./ProjectList";
import ReadmeSection from "./ReadmeSection";

const Welcome = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  return (
    <>
    <div className={`welcome-container ${isDarkMode ? "dark-theme" : "light-theme"}`}>
      <ReadmeSection  language={language} />
      <ProjectList/>
      <ContributionGraph/>
    </div>
  
    </>
  );
};

export default Welcome;
