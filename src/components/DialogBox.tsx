// src/components/DialogBox.tsx
import { Html } from '@react-three/drei';
import React from 'react';
import '../assets/scss/_components.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface DialogBoxProps {
  onClose: () => void;
  isVisible: boolean; 
}

const DialogBox: React.FC<DialogBoxProps> = ({ onClose, isVisible }) => {
  return (
    <Html center>
      <section // Changed from div to section for semantic structure
        className={`dialog-box ${isVisible ? 'visible' : ''}`}
        role="dialog" // ARIA role for dialog
        aria-modal="true" // Indicates that this is a modal dialog
      >
        <div className="social-icons"> {/* Apply the flexbox styling for icons */}
          <a href="https://www.linkedin.com/in/developerbarrios/" target="_blank" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.github.com/shighetari" target="_blank" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="mailto:Shighetari@gmail.com" target="_blank" aria-label="Gmail">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          {/* Add more icons as needed */}
        </div>
        <button onClick={onClose} className="close-icon"></button> 
     
      </section>
    </Html>
  );
};

export default DialogBox;
