import React from 'react';
import { brandExtensions } from '../data/portfolioData';

const OpenSource = () => {
  const { githubUser } = brandExtensions;

  return (
    <section id="open-source" className="open-source-section section-padding">
      <div className="section-container">
        <div className="open-source-card glass">
          <div className="os-header">
            <div className="os-info">
              <div className="os-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '0.25rem' }}>Open Source</h2>
                <p className="os-description">Building in public &amp; contributing to the community</p>
              </div>
            </div>
            <div className="os-badge">@{githubUser}</div>
          </div>

          <div className="github-graph-container">
            <img
              src={`https://ghchart.rshah.org/3b82f6/${githubUser}`}
              alt={`${githubUser} GitHub Contribution Graph`}
            />
          </div>

          <div className="graph-legend">
            <span>Less</span>
            <div className="legend-boxes">
              <div className="box lvl-0"></div>
              <div className="box lvl-1"></div>
              <div className="box lvl-2"></div>
              <div className="box lvl-3"></div>
              <div className="box lvl-4"></div>
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
