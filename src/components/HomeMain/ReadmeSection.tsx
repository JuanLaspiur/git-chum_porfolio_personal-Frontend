import { useEffect, useState } from "react";
import translationsData from "./HomeMainTranslations.json";

interface ReadmeSectionProps {
  language: "es" | "en";
}

const ReadmeSection = ({ language }: ReadmeSectionProps) => {
  const [translations, setTranslations] = useState(
    translationsData[language] || translationsData["en"]
  );

  useEffect(() => {
    setTranslations(translationsData[language] || translationsData["en"]);
  }, [language]);

  return (
    <div className="info">
      <div className="readme-header">
        JuanLaspiur / <span className="readme-file">README.md</span>
      </div>
      <h1>👋 {translations.name} - {translations.personalPage}</h1>
      <a
        href="https://spartusdevs.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://spartusdevs.netlify.app/
      </a>
      <hr className="divider" />
      <h2>{translations.skills}</h2>
      <ul>
        <li>{translations.languages}</li>
        <li>{translations.frameworks}</li>
        <li>{translations.databases}</li>
        <li>{translations.tools}</li>
        <li>{translations.devOps}</li> {/* Agregamos DevOps */}
      </ul>
      <hr className="divider" />
      <h2>{translations.contact}</h2>
      <p>
        {translations.email}:{" "}
        <a href="mailto:laspiurperezjuan@gmail.com">
          laspiurperezjuan@gmail.com
        </a>
      </p>
      <p>
        {translations.instagram}:{" "}
        <a href="https://instagram.com/jlaspiur" target="_blank">@jlaspiur</a>
      </p>
      <p>
        {translations.linkedin}:{" "}
        <a
          href="https://www.linkedin.com/in/laspiurperezjuan/"
          target="_blank"
        >
          Juan Laspiur
        </a>
      </p>
    </div>
  );
};

export default ReadmeSection;
