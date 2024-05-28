import React from 'react';
import '../App.css';  // Adjust the path based on your actual project structure

const HeroSection = () => (
  <section id="hero" className="hero-section section">
    <h1>Fernando Resendez</h1>
    <p>I'm a <span>Full Stack Developer</span> & soon to be Computer Science graduate.</p>
    <img src="https://cdn.jsdelivr.net/gh/hostmind/host/static/h.png" alt="Fernando's profile" className="floating-image" />
    <div className="buttons">
      <a href="/static/Adrian_Resendez_Resume_2024.pdf" target="_blank" className="button">View Resume</a>
    </div>
  </section>
);

export default HeroSection;
