import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile-image.jpg';

const Hero = () => {
  const { name, roles } = portfolioData.hero;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    // Typing effect logic
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(150);

        if (displayText === currentRole) {
          setIsDeleting(true);
          setTypingSpeed(1000); // Pause at end
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500); // Pause before new word
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content animate-fade-in">
          <h4 className="greeting">Hi there, I am</h4>
          <h1 className="name">{name}</h1>
          <h2 className="roles">
             A <span className="typing-text">{displayText}</span><span className="cursor">|</span>
          </h2>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-outline">Checkout My Work</a>
          </div>
        </div>
        <div className="hero-image animate-fade-in">
          <div className="profile-image-inner">
            <img src={profileImg} alt="Profile" className="profile-image" />
          </div>
        </div>
      </div>
      
      {/* Decorative Blob or subtle background shapes for UI enhancement */}
      <div className="decorative-blob blob-1"></div>
      <div className="decorative-blob blob-2"></div>
    </section>
  );
};

export default Hero;
