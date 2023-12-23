import React from 'react';
import ProjectCard from './ProjectCard';
import "../assets/scss/_Projects.scss";
import DarkModeToggle from './DarkModeToggle';
import { useNavigate } from 'react-router-dom';
// Mock data representing your projects
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. It includes user authentication, product management, and a shopping cart.",
    imageUrl: "path/to/e-commerce-image.jpg", // Replace with actual path
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/e-commerce",
    liveUrl: "https://e-commerce-demo.com"
  },
  {
    id: 2,
    title: "Social Media App",
    description: "A social media application with real-time chat functionality, built using React, Redux, and Firebase.",
    imageUrl: "path/to/social-media-app-image.jpg", // Replace with actual path
    techStack: ["React", "Redux", "Firebase"],
    githubUrl: "https://github.com/yourusername/social-media-app",
    liveUrl: "https://social-media-app-demo.com"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my projects, skills, and experience, built with React and styled-components.",
    imageUrl: "path/to/portfolio-website-image.jpg", // Replace with actual path
    techStack: ["React", "styled-components"],
    githubUrl: "https://github.com/yourusername/portfolio-website",
    liveUrl: "https://yourportfolio.com"
  },
  // Add more projects as needed...
];

const Projects: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="projects-container">
            <button className="home-button" onClick={() => navigate('/')}>Home</button>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <div className='dark-mode-button'> 
                <DarkModeToggle />
            </div>
        </div>
      );
    };
    
export default Projects;
