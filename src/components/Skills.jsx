import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { categories } = portfolioData.skills;

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Competencies</h2>
      <p className="section-subtitle">
        A product-first engineering mindset — from backend architecture to data intelligence
      </p>

      <div className="skills-grid">
        {categories.map((category, idx) => (
          <div key={idx} className="about-tech-card glass-card">
            <h3 className="card-title">
              <span style={{ marginRight: '0.5rem' }}>{category.icon}</span>
              {category.title}
            </h3>
            <div className="tech-pills">
              {category.items.map((item, iIdx) => (
                <span key={iIdx} className="tech-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
