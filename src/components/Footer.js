import React from 'react';
import '../App.css';  // Adjust the path based on your actual project structure

const Footer = () => (
  <footer id="contact" className="footer">
    <h2>Contact</h2>
    <div className="footer-buttons">
      <a href="https://www.linkedin.com/in/fernando-resendez-08451b265/" target="_blank" rel="noopener noreferrer" className="footer-button">LinkedIn</a>
      <a href="https://github.com/adrian-resendez" target="_blank" rel="noopener noreferrer" className="footer-button">GitHub</a>
      <button onClick={() => window.location.href='mailto:adrian-resendez@outlook.com'} className="footer-button">Email</button>
      <button onClick={() => navigator.clipboard.writeText('adrian-resendez@outlook.com')} className="footer-button">Copy Email</button>
    </div>
  </footer>
);

export default Footer;
