// src/components/ResumeSelection.tsx
import React, { useEffect, useRef, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { debounce } from 'lodash'; // Ensure you've installed lodash for this to work
import '../assets/scss/_Resume.scss';
import '../assets/scss/_ResumeSelection.scss';

interface Resume {
  title: string;
  pdf: string;
  key: string | number;
  png: string;
}

interface ResumeSelectionProps {
  onSelectResume: (resume: Resume) => void;
}

const ResumeSelection: React.FC<ResumeSelectionProps> = ({ onSelectResume }) => {
  const [focusedResumeIndex, setFocusedResumeIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const resumes = [
    {
      title: "Resume Format Dark Theme",
      pdf: "resumes/resume1.pdf",
      key: 1,
      png: "resume1",
    },
    {
      title: "Resume Format Modern",
      pdf: "resumes/resume2.pdf",
      key: 2,
      png: "resume2",
    },
    {
      title: "Resume Format Professional",
      pdf: "resumes/resume3.pdf",
      key: 3,
      png: "resume3",
    },
    {
      title: "Resume Format Dublin",
      pdf: "resumes/resume4.pdf",
      key: 4,
      png: "resume4",
    },
    {
      title: "Resume Format Creative",
      pdf: "resumes/resume5.pdf",
      key: 5,
      png: "resume5",
    },
    {
      title: "Resume Format Vibes",
      pdf: "resumes/resume6.pdf",
      key: 6,
      png: "resume6",
    },
  ];

  useEffect(() => {
    // Focus the container to allow keyboard navigation
    containerRef.current?.focus();
  }, []);

  const handleResumeSelection = (resume: Resume) => {
    onSelectResume(resume);
  };

  const scrollFocusedIntoView = (index: number) => {
    const container = containerRef.current;
    const nextItemToFocus = container?.children[index] as HTMLElement;
    nextItemToFocus?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  const handleWheel = debounce((event: React.WheelEvent) => {
    event.preventDefault();
    const totalResumes = resumes.length;
    const nextIndex =
      (focusedResumeIndex + (event.deltaY > 0 ? 1 : -1) + totalResumes) % totalResumes;

    setFocusedResumeIndex(nextIndex);
    scrollFocusedIntoView(nextIndex);
  }, 200);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    event.preventDefault();
    const totalResumes = resumes.length;
    let nextIndex = focusedResumeIndex;

    if (event.key === 'ArrowDown') {
      nextIndex = (focusedResumeIndex + 1) % totalResumes;
    } else if (event.key === 'ArrowUp') {
      nextIndex = (focusedResumeIndex - 1 + totalResumes) % totalResumes;
    } else {
      return; // If another key is pressed, do nothing
    }

    setFocusedResumeIndex(nextIndex);
    scrollFocusedIntoView(nextIndex);
  };

  return (
    <div
      className="resume-selection"
      onWheel={handleWheel}
      onKeyDown={handleKeyDown}
      tabIndex={0} // Make it focusable
      ref={containerRef}
    >
      <div className="resume-options-container">
        {resumes.map((resume, index) => (
          <div
            key={resume.key}
            className={`resume-option ${index === focusedResumeIndex ? 'focused' : ''}`}
            onClick={() => handleResumeSelection(resume)}
          >
            <img
              src={`/resumes/thumbnails/${resume.png}.png`}
              alt={`Thumbnail for ${resume.title}`}
            />
            <h4>{resume.title}</h4>
            <button onClick={() => handleResumeSelection(resume)}>
              <FaEye /> View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSelection;
