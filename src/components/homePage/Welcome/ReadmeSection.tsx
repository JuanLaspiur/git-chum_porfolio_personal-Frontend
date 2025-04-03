import { useEffect, useState } from "react";
import translationsData from "./welcometranslations.json"; 

interface ReadmeSectionProps {
  language: "es" | "en";
}

const ReadmeSection = ({ language }: ReadmeSectionProps) => {
  const [translations, setTranslations] = useState(translationsData[language] || translationsData["en"]);

  useEffect(() => {
    setTranslations(translationsData[language] || translationsData["en"]);
  }, [language]);

  return (
    <div className="info">
      <h1>👋 {translations.name} - {translations.personalPage}</h1>
      <a href="https://personal-webpage-frontend.vercel.app/" target="_blank" rel="noopener noreferrer">
        https://personal-webpage-frontend.vercel.app/
      </a>
      <h2>{translations.skills}</h2>
      <ul>
        <li>{translations.languages}</li>
        <li>{translations.frameworks}</li>
        <li>{translations.databases}</li>
        <li>{translations.tools}</li>
      </ul>
      <h2>{translations.contact}</h2>
      <p>{translations.email}: <a href="mailto:laspiurperezjuan@gmail.com">laspiurperezjuan@gmail.com</a></p>
      <p>{translations.instagram}: <a href="https://instagram.com/jlaspiur">@jlaspiur</a></p>
      <p>{translations.linkedin}: <a href="https://linkedin.com/in/juan-laspiur">Juan Laspiur</a></p>
    </div>
  );
};

export default ReadmeSection;

  