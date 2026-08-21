import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';
import SurveyEngine from './SurveyEngine';
import '../components.css';

const normalizeSlug = (value) => value.toLowerCase().replace(/^\/|\/$/g, '');

const ProjectLanding = ({ projectSlug }) => {
  const { projectSlug: routeSlug } = useParams();
  const currentSlug = normalizeSlug(projectSlug ?? routeSlug ?? '');
  const project = portfolioData.projects.find((item) => item.slug === currentSlug);
  const isSurveyPage = currentSlug === 'survey-to-insight-engine';

  if (!project) {
    return (
      <main style={{ minHeight: '100vh', padding: '7rem 2rem', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div style={{ maxWidth: 620 }}>
          <h1 style={{ marginBottom: '1rem' }}>Project not found</h1>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            The page you requested does not match an active project route. Return to the portfolio homepage to continue browsing.
          </p>
          <Link to="/" className="btn btn-primary">Back to Portfolio</Link>
        </div>
      </main>
    );
  }

  if (isSurveyPage) {
    return (
      <main style={{ minHeight: '100vh', padding: '7rem 2rem 4rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <section style={{ marginBottom: '3rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(59,130,246,0.14)', color: '#bae6fd', marginBottom: '1.25rem', fontWeight: 600, fontSize: '0.95rem' }}>
              Live Demo • {project.subtitle}
            </span>
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', margin: 0, lineHeight: 1.05 }}>{project.title}</h1>
            <p style={{ marginTop: '1.2rem', color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: 760, lineHeight: 1.8 }}>
              {project.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
              <Link to="/" className="btn btn-outline">Portfolio Home</Link>
              <a href={project.github} className="btn btn-primary">View GitHub</a>
            </div>
          </section>

          <SurveyEngine survey={project.survey} />
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', padding: '7rem 2rem 4rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <section style={{ marginBottom: '3rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem', padding: '0.75rem 1rem', borderRadius: '999px', background: 'rgba(59,130,246,0.14)', color: '#bae6fd', marginBottom: '1.25rem', fontWeight: 600, fontSize: '0.95rem' }}>
            Live Demo • {project.subtitle}
          </span>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', margin: 0, lineHeight: 1.05 }}>{project.title}</h1>
          <p style={{ marginTop: '1.2rem', color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: 760, lineHeight: 1.8 }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
            <Link to="/" className="btn btn-outline">Portfolio Home</Link>
            <a href={project.github} className="btn btn-primary">View GitHub</a>
          </div>
        </section>

        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <section className="glass-card">
            <h2 className="card-title">What the engine does</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {project.title} is built to automate statistical survey analysis with a polished MERN dashboard experience. It converts raw survey JSON into actionable summaries and visualizations that help teams make faster decisions.
            </p>
            <ul style={{ marginTop: '1.5rem', paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {project.achievements.map((achievement, index) => (
                <li key={index} style={{ marginBottom: '0.8rem' }}>
                  {achievement}
                </li>
              ))}
            </ul>
          </section>

          <section className="glass-card">
            <h2 className="card-title">Tech stack</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', marginTop: '1rem' }}>
              {project.tech.map((tag, idx) => (
                <span key={idx} className="tech-pill">{tag}</span>
              ))}
            </div>
          </section>

          <section className="glass-card">
            <h2 className="card-title">Why it matters</h2>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <li style={{ marginBottom: '0.8rem' }}>Transforms raw survey JSON into clean statistical insights without manual preprocessing.</li>
              <li style={{ marginBottom: '0.8rem' }}>Supports scalable analytics through optimized backend aggregation pipelines.</li>
              <li style={{ marginBottom: '0.8rem' }}>Delivers interactive Chart.js dashboards for faster interpretation of distribution data.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProjectLanding;
