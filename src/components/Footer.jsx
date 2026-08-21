import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  Linkedin, 
  Music2, 
  Github, 
  Facebook, 
  Twitter, 
  Instagram 
} from 'lucide-react';

const Footer = () => {
  const { name } = portfolioData.hero;
  const { linkedin, tiktok, github, facebook, twitter, instagram } = portfolioData.social;

  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>{name}</h3>
        <p className="footer-tagline">Software Developer || MERN-Stack</p>
        
        <div className="social-links">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          )}
          {tiktok && (
            <a href={tiktok} target="_blank" rel="noreferrer" className="social-icon" aria-label="TikTok">
              <Music2 size={20} />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <Github size={20} />
            </a>
          )}
          {facebook && (
            <a href={facebook} target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
              <Facebook size={20} />
            </a>
          )}
          {twitter && (
            <a href={twitter} target="_blank" rel="noreferrer" className="social-icon" aria-label="X (Twitter)">
              <Twitter size={20} />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          )}
        </div>
        
        <div className="copyright">
          &copy; {new Date().getFullYear()} <strong>{name}</strong>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
