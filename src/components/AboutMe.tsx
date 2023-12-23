// src/components/AboutMe.tsx
import React from "react";
import { Link } from "react-router-dom";
// import profilePic from "../../public/icons/fox.svg"; 
import profilePic from "/icons/linux-tux-svgrepo-com.svg"; 
import "../assets/scss/_AboutMe.scss";
import DarkModeToggle from "./DarkModeToggle";

const AboutMe = () => {
  return (
    <div className="about-me">
        <DarkModeToggle />
      <div className="about-me-card">
        <img src={profilePic} alt="Francisco Barrios" className="about-me-photo" />
        <h1>Francisco Barrios</h1>
        <p className="title">Full Stack Developer</p>
        <p>Welcome to my professional space. I am a Full Stack Developer with a passion for building scalable web applications and a keen interest in cloud computing. I strive to create software that improves people's lives and am always eager to learn new technologies and methodologies. Please feel free to reach out or learn more about my work.</p>
        <div className="about-me-details">
          {/* Details about me */}
        </div>
        <Link to="/" className="btn">Go back to Home</Link>
      </div>
    </div>
  );
};

export default AboutMe;
