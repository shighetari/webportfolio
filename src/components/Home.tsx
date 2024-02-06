// src/components/Home.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaLightbulb,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaWindowClose,
  FaRedhat,
  FaCat,
} from "react-icons/fa"; // Importing icons
import { FcAssistant } from "react-icons/fc";
import Resume from "./Resume";
import DarkModeToggle from "./DarkModeToggle";
import "../assets/scss/_Home.scss";
import "../assets/scss/_Resume.scss";
import "../assets/scss/_ResumeSelection.scss";
import useTypewriter from "../hooks/useTypewriter";
import ContactDialog from "./ContactDialog";
import { ChatBox } from "./ChatBox";
import Assistant from "./Assistant";

const Home = () => {
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  // const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // This function toggles the state of the Assistant component
  // const toggleAssistant = () => {
  //   setIsAssistantOpen(!isAssistantOpen);
  // };

  const toggleContactDialog = () => {
    setIsContactDialogOpen(!isContactDialogOpen);
  };

  const toggleSection = (section: any) => {
    setActiveSection(activeSection !== section ? section : "");
  };

  const [showResumeModal, setShowResumeModal] = useState(false);
  const toggleResumeModal = () => {
    setShowResumeModal(!showResumeModal);
  };

  const jobTitles = [
    "Software Engineer",
    "DevOps Engineer",
    "InfoSec Enthusiast",
    "Cat lover",
    "AI Enthusiast",
    "Full-Stack Developer",
    "Cloud Engineer",
    "Friend",
    "Tech Enthusiast",
    "Security Professional",
  ];
  const typewriterText = useTypewriter(jobTitles);

  return (
    <div>
      <main className="home">
        <DarkModeToggle />
        <section className="intro-section">
          <h1>Welcome to My Web Portfolio</h1>
          <h2>Francisco Barrios</h2>
          <p className="dynamic-title">| {typewriterText} |</p>{" "}
          <p>
            one man, many hats <FaRedhat />
          </p>
          <div className="action-buttons">
            <button onClick={toggleResumeModal}>
              <FaBook /> View My Resume
            </button>
            {showResumeModal && (
              <div className="modal-overlay">
                <div className="modal-content">
                  <Resume />
                  <button className="close-modal" onClick={toggleResumeModal}>
                    <FaWindowClose /> <> Close </>
                  </button>
                </div>
              </div>
            )}

            {/* <button onClick={() => toggleSection("skills")}>
            <FaCat /> Study Zonenb 

          </button> */}
            <Link to="/study" className="enter-portfolio-btn">
              <FaCat /> Study Zoned  
            </Link>
      <Link to="/aboutme" className="enter-portfolio-btn">
              <FaUser /> About me
            </Link>
            <Link to="/projects" className="enter-portfolio-btn">
            <FaProjectDiagram /> Projects
            </Link>
            <button onClick={toggleContactDialog}>
              <FaEnvelope /> Contact me
            </button>
            <ContactDialog isOpen={isContactDialogOpen} onClose={toggleContactDialog} />
            <Link to="/portfolio" className="enter-portfolio-btn">
              Enter 3D Portfolio
            </Link>
          </div>
        </section>
        {/* {activeSection === "skills" && <Assistant />} */}
      </main>
      <Assistant />
    </div>
  );
};

export default Home;
