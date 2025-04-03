import { useEffect, useState } from "react"; 
import translationsData from "../homePage/Welcome/welcometranslations.json"; 
import Achievements from "./Achievements";
import '../styles/AvatarSection.css'

interface AvatarSectionProps {
    language: "es" | "en";
}

const AvatarSection = ({ language }: AvatarSectionProps) => {
  const [translations, setTranslations] = useState(translationsData[language] || translationsData["en"]);

  useEffect(() => {
    setTranslations(translationsData[language] || translationsData["en"]);
  }, [language]);

  return (
    <div className="avatar_section">
      <img src="./Yo.webp" alt="Avatar" className="avatar_section-image" />
      <h1>{translations.name}</h1>
      <h2>{translations.username}</h2>
      <p>{translations.job}</p>
      <button className="follow-button">{translations.follow || "Seguir"}</button>
      <Achievements/>
    </div>
  );
};

export default AvatarSection;

