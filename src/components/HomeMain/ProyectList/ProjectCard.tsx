import { useState, JSX } from "react";
import { usePage } from "../../../context/PageContext";

interface Project {
  name: string;
  description: string;
  language: string;
  stars: number;
  visibility: string;
  previewImage: string;
}

interface ProjectCardProps {
  project: Project;
  renderPreview?: (project: Project) => JSX.Element; 
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, renderPreview }) => {
  const [isHovered, setIsHovered] = useState(false);
    const { handleChangePage } = usePage()
  

  return (
    <div 
      className="project-card_list"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{cursor:'pointer'}}
      onClick={()=>{handleChangePage('proyects')}}
    >
      <h2 className="project-title">{project.name}</h2>
      <p className="project-description">{project.description}</p>
      <div className="project-info">
        <span className="project-language">{project.language}</span>
        <span className="project-stars">⭐ {project.stars}</span>
        <span className="project-visibility">{project.visibility}</span>
      </div>
      {isHovered && (renderPreview && renderPreview(project) )}
    
    </div>
  );
};

export default ProjectCard;
