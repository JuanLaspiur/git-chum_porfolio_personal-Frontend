import './ProyectCard.css'
interface Project {
  name: string;
  description: string;
  language: string;
  stars: number;
  visibility: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{project.name}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-info">
        <span className="project-language">{project.language}</span>
        <span className="project-stars">⭐ {project.stars}</span>
        <span className="project-visibility">{project.visibility}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
