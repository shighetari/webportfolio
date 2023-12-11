// src/components/Resume.tsx
import React, { useState } from "react";
import ResumeSelection from "./ResumeSelection";
import { FaFilePdf, FaDownload, FaArrowLeft } from "react-icons/fa";
import "../assets/scss/_Resume.scss";
import "../assets/scss/_ResumeSelection.scss";

interface IResume {
  title: string;
  pdf: string;
}

const Resume = () => {
  const [selectedResume, setSelectedResume] = useState<IResume | null>(null);

  const handleSelectResume = (resume: IResume) => {
    setSelectedResume(resume);
  };

  return (
    <div className="resume">
       
        {selectedResume && <h3>{selectedResume.title}</h3>}
      {selectedResume ? (
        <div className="resume-buttons">
          {/* Button to view the resume */}
          <button onClick={() => window.open(selectedResume.pdf, "_blank")}>
            <FaFilePdf /> Open PDF
          </button>
          {/* Anchor tag styled as a button for downloading the resume */}
          <a href={selectedResume.pdf} download className="button-like-anchor">
            <FaDownload /> Download PDF
          </a>
          {/* Add a back button to choose another resume */}
          <button className="back-button" onClick={() => setSelectedResume(null)}>
            <FaArrowLeft /> Back
          </button>
        </div>
      ) : (
        <ResumeSelection onSelectResume={handleSelectResume} />
      )}
    </div>
  );
};

export default Resume;