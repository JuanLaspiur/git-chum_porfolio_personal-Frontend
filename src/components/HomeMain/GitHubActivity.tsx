import { FolderOpenOutlined, BranchesOutlined } from "@ant-design/icons";
import "./GitHubActivity.css";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import translations from "./HomeMainTranslations.json"; // 🔥 Importación directa

const contributions = [
    {
      month: {
        en: "Aug. 2024 - Jan. 2025 (6 months)",
        es: "Ago. 2024 - Ene. 2025 (6 meses)"
      },
      activities: [
        { type: "commits", repo: { en: "Fullstack Developer at Branak", es: "Fullstack Developer en Branak" }, count: 150 },
        { type: "repository", repo: { en: "Development of Branak, a web app for English learning.", es: "Desarrollo de Branak, una app web para aprendizaje de inglés." } },
        { type: "repository", repo: { en: "Teamwork with weekly objectives.", es: "Trabajo en equipo con objetivos semanales." } },
        { type: "repository", repo: { en: "Technologies: JavaScript, React, Redux, GraphQL (Apollo Client), Material-UI, Node.js, Express, DynamoDB, Sequelize, Mongoose, AWS, Amplify, S3, IAM, Heroku, Cloudinary.", es: "Tecnologías: JavaScript, React, Redux, GraphQL (Apollo Client), Material-UI, Node.js, Express, DynamoDB, Sequelize, Mongoose, AWS, Amplify, S3, IAM, Heroku, Cloudinary." } },
      ],
    },
    {
      month: {
        en: "Feb. 2024 - Sep. 2024 (8 months)",
        es: "Feb. 2024 - Sept. 2024 (8 meses)"
      },
      activities: [
        { type: "commits", repo: { en: "Fullstack Developer at EICHE", es: "Desarrollador Fullstack en EICHE" }, count: 200 },
        { type: "repository", repo: { en: "Development of web applications for clients in Chile.", es: "Desarrollo de aplicaciones web para clientes en Chile." } },
        { type: "repository", repo: { en: "Technologies: React, Node.js, MongoDB, TypeScript, GraphQL.", es: "Tecnologías: React, Node.js, MongoDB, TypeScript, GraphQL." } },
      ],
    },
    {
      month: {
        en: "Mar. 2023 - Feb. 2024 (1 year)",
        es: "Mar. 2023 - Feb. 2024 (1 año)"
      },
      activities: [
        { type: "commits", repo: { en: "Freelance Full Stack Developer", es: "Full Stack Developer Freelance" }, count: 120 },
        { type: "repository", repo: { en: "Development of custom solutions for various clients.", es: "Desarrollo de soluciones personalizadas para diferentes clientes." } },
        { type: "repository", repo: { en: "Technologies: Next.js, Firebase, PostgreSQL, TailwindCSS.", es: "Tecnologías: Next.js, Firebase, PostgreSQL, TailwindCSS." } },
      ],
    },
  ];
const GitHubActivity = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const texts = translations[language]; // 🔥 Obtiene traducciones según el idioma seleccionado

  return (
    <div className={`container ${isDarkMode ? "dark" : "light"}`}>
      <h2 className="title">{texts.workExperience}</h2>
      {contributions.map(({ month, activities }) => (
        <div key={month[language]} className="month-section">
          <h3 className="month-title">{month[language]}</h3>
          {activities.map(({ type, repo, count }, index) => (
            <div key={index} className="activity">
              {type === "commits" ? <BranchesOutlined className="icon" /> : <FolderOpenOutlined className="icon" />}
              <p className="activity-text">
                {type === "commits"
                  ? `${texts.workedOn} ${count} ${texts.tasksProjects}`
                  : `${texts.keyResponsibility}:`}{" "}
                <strong>{repo[language]}</strong>
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GitHubActivity;
