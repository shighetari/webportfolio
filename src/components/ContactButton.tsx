import React from 'react';
import '../assets/scss/_ContactButton.scss';
// import ContactIcon from '../assets/icons/eyecontact.svg'; // Import the SVG icon
import ContactIcon from '/icons/eyecontact.svg'; // Import the SVG icon


interface ContactButtonProps {
  onClick: () => any;
}

const ContactButton: React.FC<ContactButtonProps> = ({ onClick }) => {
  return (
    <button className="contactme-button" onClick={onClick}>
      <img src={ContactIcon} alt="Contact Me" /> {/* Use the SVG icon here */}
    </button>
  );
};

export default ContactButton;
