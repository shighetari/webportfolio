import React from 'react';
import ProjectCard from './ProjectCard';
import "../assets/scss/_Projects.scss";
import DarkModeToggle from './DarkModeToggle';
import { useNavigate } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: "Conway's Game of Life Simulator",
    description: "Developed an engaging web-based simulation of Conway’s Game of Life, demonstrating adeptness in algorithmic logic and state management using React and Redux. Engineered a dynamic user interface, optimizing user experience through interactive features such as play/pause functionality, grid clearing, and random seed generation. Implemented a responsive design, ensuring a seamless user interaction across different devices and browsers, while also focusing on intuitive gameplay mechanics.",
    imageUrl: "projects/pink.JPG", // Replace with actual path
    techStack: ["React", "Redux"],
    githubUrl: "https://github.com/shighetari/ConwaysGOL",
    liveUrl: "https://conways-gol.vercel.app/"
  },
  {
    id: 2,
    title: "Secret Family Recipes API",
    description: "Developed a RESTful API for the 'Secret Family Recipes' application, which facilitates efficient culinary data management for a recipe-sharing platform. This API is built with security at the forefront, incorporating JWT for authentication and SQLIte3 for database operations. It ensures data integrity with foreign key constraints and includes middleware like Helmet for HTTP security, alongside bcrypt for data encryption. Please click on the github repository for a detailed README I made for documentation.",
    imageUrl: "projects/secretfamilyanimeai.png", // Replace with actual path
    techStack: ["Node", "Express.js", "PostgreSQL", "knex", "Jest", "bcrypt", "nodemon"],
    githubUrl: "https://github.com/secret-family-recipes-bw/back-end/tree/master?tab=readme-ov-file#-scroll-api-documentation-scroll",
    liveUrl: "https://secret-family-recipes-2-api.herokuapp.com/"
  },
  {
    id: 3,
    title: "Ecosoap Backend Developer",
    description: "Saving, Sanitizing, and Supplying Recycled Soap for the Developing World. My contributions centered on backend development and enhancing API functionalities. I focused on refining server-side logic and optimizing database operations, aligning with the project's core mission of environmental sustainability. My involvement in this socially responsible project was executed within an agile framework, ensuring timely delivery of robust code and active participation in code reviews to uphold the highest software engineering standards.",
    imageUrl: "projects/ecosoap.avif", // Replace with actual path
    techStack: ["React", "Redux", "Okta", "Node", "Stripe","Express.js", "PostgreSQL", "knex", "Jest", "bcrypt", "nodemon", "axios", "cloudinary", "heroku", "yup validation", "helmet", "cors", "jsonwebtoken", "pg", "sqlite3", "supertest", "jest", "nodemon", "cross-env", "dotenv", "faker", "jest", "knex", "nodemon", "sqlite3", "supertest", "yup"],
    githubUrl: "https://github.com/BloomTech-Labs/Labs27-A-Ecosoap-FE",
    liveUrl: "https://www.youtube.com/watch?v=ST1ois1TUYs"
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
