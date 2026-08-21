import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { about } = portfolioData;

  const coreStack = [
    'MongoDB', 'Express.js', 'React.js', 'Node.js',
    'JavaScript', 'TypeScript', 'Postman API', 'Git'
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-layout animate-fade-in">
        {/* Left Column: Bio */}
        <div className="about-bio">
          <p className="bio-paragraph">{about.para1}</p>
          <p className="bio-paragraph">{about.para2}</p>
        </div>

        {/* Right Column: Core Stack Card */}
        <div className="about-tech-card glass-card">
          <h3 className="card-title">Core Stack &amp; Technologies</h3>
          <div className="tech-pills">
            {coreStack.map((tech, index) => (
              <span key={index} className="tech-pill">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Stats */}
      <div className="about-stats-row animate-fade-in">
        {about.stats.map((stat, idx) => (
          <div key={idx} className="stat-box glass-card">
            <h4 className="stat-value">{stat.value}</h4>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
