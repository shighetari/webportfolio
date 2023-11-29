import React from 'react';
import '../assets/scss/_animatedButton.scss';
import '../assets/scss/_components.scss';


interface ContactButtonProps {
  onClick: () => any;
}

const ContactButton: React.FC<ContactButtonProps> = ({ onClick }) => {
  return (
    <button className="animated-button" onClick={onClick}>
      Contact Me
    </button>
  );
};

export default ContactButton;
