import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";

const SocialLinks: React.FC = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/JuanLaspiur" target="_blank" rel="noopener noreferrer">
        <GithubOutlined />
      </a>
      <a href="https://linkedin.com/in/laspiurperezjuan" target="_blank" rel="noopener noreferrer">
        <LinkedinOutlined />
      </a>
    </div>
  );
};

export default SocialLinks;
