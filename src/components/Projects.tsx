// Projects.tsx
import React from "react";
import "../assets/scss/_Projects.scss";

const projectsData = [
  {
    title: "Project 1",
    description: "Short description of Project 1",
    imageUrl: "url_to_image",
    // Other project details...
  },
  // ... other projects
];

const ProjectCard: React.FC<{ project: typeof projectsData[0] }> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      {/* Other project details... */}
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
