import React, { useState } from 'react';
import '../App.css';  // Adjust the path based on your actual project structure

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="navbar-content">
        <ul className="navbar-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education-skills">Education & Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#extracurriculars">Extracurriculars</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          {isCollapsed ? '↓' : '↑'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
