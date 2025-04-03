import { Project } from "../types/Project";

export const filterProjectsByName = (projects: Project[], query: string): Project[] => {
    return projects.filter((project) =>
      project.name.toLowerCase().includes(query.toLowerCase())
    );
  };