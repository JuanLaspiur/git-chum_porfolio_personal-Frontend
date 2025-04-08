import "./AboutMeMain.css";
import { useTheme } from "../../context/ThemeContext";
import { developer } from "../../types/Developer";
import CodeSnippet from "./CodeSnippet";
import SocialLinks from "./SocialLinks";
import Section from "./Section";
import { useLanguage } from "../../context/LanguageContext";
import texts from "./aboutMeTraslations"; // Importa los textos
import LinkedInProfile from "../LinkedInProfile";

const AboutMeMain: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage(); 

  const codeString = `const developer = ${JSON.stringify(developer, null, 4)};`;
  const t = texts[language]; 

  return (
    <div className={`about-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>      
        <div className="about-content">
        <h1>{t.greeting} {developer.name} 👋</h1>
        <p>
          {t.aboutMe} <strong>{t.helloWorld}</strong> {t.changedMyLife}
        </p>

        <h2>{t.codeSnippetTitle}</h2>
        <CodeSnippet code={codeString} />

        <Section title={t.architectures} content={<p>{t.architecturesContent}</p>} />
        <Section title={t.deployment} content={<p>{t.deploymentContent}</p>} />
        <Section title={t.authentication} content={<p>{t.authenticationContent}</p>} />
        <Section title={t.seo} content={<p>{t.seoContent}</p>} />
        <Section title={t.apis} content={<p>{t.apisContent}</p>} />

        <h2>{t.findMe}</h2>
        <SocialLinks />
        <LinkedInProfile/>
      </div>

    </div>
  );
};

export default AboutMeMain;
