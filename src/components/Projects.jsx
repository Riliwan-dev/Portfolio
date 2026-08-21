import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import '../components.css';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Full-stack builds spanning statistical tooling, SaaS dashboards, and mission-driven platforms
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.slug || project.title} className="project-card">
            
            {/* Real Screenshot Container */}
            <div className="project-card-visual">
              <span className="project-category-badge">{project.category}</span>
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={`${project.title} Screenshot`} 
                  className="project-card-image"
                  loading="lazy"
                />
              ) : (
                <div className="project-card-image-fallback">
                  <span>{project.title}</span>
                </div>
              )}
            </div>

            <div className="project-card-body">
              {project.featured && <span className="project-flagship-badge">★ Flagship</span>}

              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-subtitle">{project.subtitle}</p>
              <p className="project-card-description">{project.description}</p>

              <div className="tech-pills project-card-tags">
                {project.tech && project.tech.map((tag) => (
                  <span key={tag} className="tech-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-card-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline project-card-btn"
                  >
                    GitHub
                  </a>
                )}

                {project.comingSoon ? (
                  <span className="coming-soon-chip">
                    <span className="coming-soon-dot" />
                    Live Demo — Coming Soon
                  </span>
                ) : project.live?.startsWith('http') ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-card-btn"
                  >
                    Live Demo
                  </a>
                ) : project.live ? (
                  <Link to={project.live} className="btn btn-primary project-card-btn">
                    View Project Page
                  </Link>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;