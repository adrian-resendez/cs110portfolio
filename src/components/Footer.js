import React from 'react';
import '../App.css';  // Adjust the path based on your actual project structure

const Footer = () => (
  <footer id="contact" className="footer">
    <h2>Contact</h2>
    <ul>
      <li><a href="https://www.linkedin.com/in/fsernando-resendez-08451b265/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li><button onClick={() => window.location.href='mailto:your-email@example.com'}>Email</button></li>
      <li><button onClick={() => navigator.clipboard.writeText('your-email@example.com')}>Copy Email</button></li>
    </ul>
  </footer>
);

export default Footer;
