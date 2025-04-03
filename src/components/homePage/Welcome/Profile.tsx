import { useEffect, useState } from "react"; 
import translationsData from "./welcometranslations.json"; 
import Achievements from "./Achievements";

interface ProfileProps {
    language: "es" | "en";
}

const Profile = ({ language }: ProfileProps) => {
  const [translations, setTranslations] = useState(translationsData[language] || translationsData["en"]);

  useEffect(() => {
    setTranslations(translationsData[language] || translationsData["en"]);
  }, [language]);

  return (
    <div className="profile">
      <img src="./Yo.webp" alt="Profile" className="profile-image" />
      <h1>{translations.name}</h1>
      <h2>{translations.username}</h2>
      <p>{translations.job}</p>
      <button className="follow-button">{translations.follow || "Seguir"}</button>
      <Achievements/>
    </div>
  );
};

export default Profile;

