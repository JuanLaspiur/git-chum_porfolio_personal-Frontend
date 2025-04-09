import "./LinkedInProfile.css";
import { Avatar } from "antd";
import { LinkedinOutlined } from "@ant-design/icons";

const LinkedInProfile = () => {
  return (
    <div className="profile-container">
      <div className="header_LinkedInProfile">
        <img src="./linkechum.png" alt="Linkechum" className="linkechum-logo" />
      </div>

      <div className="profile-info">
        <Avatar size={120} src="./yo_linkedin_original.webp" className="avatar" />
        <div className="details">
          <h2>Juan Laspiur</h2>
          <p>
            Desarrollador Frontend Full Stack || Java Node.js React React Native
            TypeScript JS Tailwind microservicios
          </p>
          <p>Bahía Blanca, Provincia de Buenos Aires, Argentina</p>
          <p>6739 seguidores • Más de 500 contactos</p>
                </div>
      </div>

      <div className="job-search">
        <p>En busca de empleo</p>
        <p>Cargos de Programador informático</p>
      </div>

      <div className="url-section">
        <p>
          <LinkedinOutlined /> www.linkedin.com/in/laspiurperezjuan
        </p>
      </div>
    </div>
  );
};

export default LinkedInProfile;
