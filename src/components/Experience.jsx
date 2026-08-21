import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <p className="text-center section-subtitle">Practical experience in architecting modular APIs and building data-driven software solutions.</p>
      
      <div className="timeline">
        {experience.map((exp, idx) => (
          <div key={idx} className="timeline-item glass-card animate-fade-in">
            <div className="timeline-dot"></div>
            <h4 className="timeline-title">{exp.title}</h4>
            <h5 className="timeline-company">{exp.company}</h5>
            <span className="timeline-duration">{exp.duration}</span>
            <ul className="timeline-details">
              {exp.details.map((detail, dIdx) => (
                <li key={dIdx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
