import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  const { location, email, phone } = portfolioData.contact;
  const [status, setStatus] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus('sending');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setStatus('idle');
        setShowPopup(true);
        form.reset();
      } else {
        setStatus('error');
      }
   } catch (error) {
  console.error(error);
  setStatus('error');
}
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      
      <div className="contact-grid">
        <div className="contact-info glass-card">
          <div className="info-item">
            <div className="icon">📍</div>
            <div>
              <h4>Location:</h4>
              <p>{location}</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="icon">✉️</div>
            <div>
              <h4>Email:</h4>
              <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="icon">📱</div>
            <div>
              <h4>Call:</h4>
              <p>{phone}</p>
            </div>
          </div>
        </div>

        <div className="contact-form glass-card">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" name="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" name="email" className="form-control" required />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" name="subject" className="form-control" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" className="form-control" rows="5" required></textarea>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'error' && (
                <span style={{ color: '#ef4444', fontSize: '0.9rem' }}>
                  ⚠ Something went wrong. Please try again.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Pop-up Modal */}
      {showPopup && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div className="glass-card" style={{
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✓</div>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem' }}>Success!</h3>
            <p style={{ margin: '0 0 1.5rem 0', color: '#a1a1aa' }}>Message sent!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;