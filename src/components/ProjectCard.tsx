// ProjectCard.tsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    techStack: string[];
    githubUrl: string;
    liveUrl: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-item">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub />
          </a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
