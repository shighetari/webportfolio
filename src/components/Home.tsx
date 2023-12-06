// src/components/Home.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaLightbulb, FaUser, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Importing icons
import Resume from './Resume';
import SkillsOverview from './SkillsOverview';
import DarkModeToggle from './DarkModeToggle';
import '../assets/scss/_Home.scss';
import useTypewriter from '../hooks/useTypewriter';

const Home = () => {
    const [activeSection, setActiveSection] = useState('');
    const toggleSection = (section: any) => {
      setActiveSection(activeSection !== section ? section : '');
    };


  const jobTitles = [
    "Software Engineer", 
    "DevOps Engineer", 
    "Cybersecurity Enthusiast", 
    "Retired Competitive Gamer", 
    "AI Enthusiast", 
    "Full-Stack Developer", 
    "Cloud Engineer", 
    "Retired Content Creator", 
    "Tech Enthusiast",
    "Security Professional",
  ];
  const typewriterText = useTypewriter(jobTitles);

  return (
    <main className="home">
      <DarkModeToggle />
      <section className="intro-section">
        <h1>Welcome to My Web Portfolio</h1>
        <p>I'm Francisco Barrios,</p>  
        
        <p className="dynamic-title">{typewriterText}</p> 
        <p>Continuously exploring the dynamic world of tech. Discover my journey and skills.</p>


        <div className="action-buttons">
          <button onClick={() => toggleSection('resume')}><FaBook /> View My Resume </button>
          <button onClick={() => toggleSection('skills')}><FaLightbulb /> Skills Overview</button>
          <button><FaUser /> About me</button>
          <button><FaProjectDiagram /> Projects</button>
          <button><FaEnvelope /> Contact me</button>
          <Link to="/portfolio" className="enter-portfolio-btn">Enter 3D Portfolio</Link>
        </div>
      </section>
      {activeSection === 'resume' && <Resume />}
      {activeSection === 'skills' && <SkillsOverview />}
    </main>
  );
};

export default Home;
