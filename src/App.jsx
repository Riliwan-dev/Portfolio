import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectLanding from './components/ProjectLanding';
import './App.css';
import './components.css';

function Home() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:projectSlug" element={<ProjectLanding />} />
        <Route
          path="/survey-to-insight-engine"
          element={<Navigate to="/projects/survey-to-insight-engine" replace />}
        />
        <Route
          path="*"
          element={
            <main style={{ minHeight: '100vh', padding: '7rem 2rem', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
              <div style={{ maxWidth: 560 }}>
                <h1>Page not found</h1>
                <p style={{ color: 'var(--text-secondary)', margin: '1rem 0 2rem' }}>
                  The page you are looking for does not exist. Return to the portfolio homepage to continue browsing.
                </p>
                <Link to="/" className="btn btn-primary">
                  Back to Home
                </Link>
              </div>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
