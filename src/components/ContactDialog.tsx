// src/components/ContactDialog.tsx
import React, { useState } from 'react';
import CloseButton from './CloseButton'; // Import the CloseButton component
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../assets/scss/_ContactDialog.scss';

interface ContactDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDialog: React.FC<ContactDialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e: any) => {
    e.preventDefault();
    // handle form submission logic
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content contact-dialog">
        <CloseButton onClick={onClose} />
        <div className="social-media-icons">
          <a href="https://www.linkedin.com/in/developerbarrios" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/shighetari" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContactDialog;
