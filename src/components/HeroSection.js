import React from 'react';
import '../App.css';

const HeroSection = () => (
  <section id="hero" className="hero-section section">
    <div className="hero-content">
      <div className="name-and-astronaut">
        <h1>Fernando Resendez</h1>
        <img src="https://cdn.jsdelivr.net/gh/hostmind/host/static/h.png" alt="Fernando's profile" className="floating-image" />
      </div>
      <div className="hero-image-container">
        <img src={`${process.env.PUBLIC_URL}/adrian-resendez.jpg`} alt="Adrian Resendez" className="hero-image" />
      </div>
      <p><span>Full Stack Developer</span> & soon to be Computer Science graduate.</p>
      <div className="buttons">
        <a href={`${process.env.PUBLIC_URL}/Adrian_Resendez_Resume_2024.pdf`} target="_blank" className="button">View Resume</a>
      </div>
    </div>
  </section>
);

export default HeroSection;
