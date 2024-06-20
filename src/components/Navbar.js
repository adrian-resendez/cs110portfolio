import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = ({ scrollToElement }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleScrollTo = (elementId) => {
    setIsCollapsed(true); // Close navbar on click
    scrollToElement(elementId);
  };

  return (
    <nav className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="navbar-content">
        <ul className="navbar-links">
          <li><Link to="/" onClick={() => handleScrollTo('hero')}>Home</Link></li>
          <li><Link to="/" onClick={() => handleScrollTo('about')}>About</Link></li>
          <li><Link to="/" onClick={() => handleScrollTo('education-skills')}>Education & Skills</Link></li>
          <li><Link to="/" onClick={() => handleScrollTo('experience')}>Experience</Link></li>
          <li><Link to="/" onClick={() => handleScrollTo('extracurriculars')}>Extracurriculars</Link></li>
          <li className="dropdown-container">
            <span>Projects</span>
            <ul className="dropdown-menu">
              <li><Link to="/projects/manga">Manga Project</Link></li>
              {/* Add more projects as needed */}
            </ul>
          </li>
          <li><Link to="/" onClick={() => handleScrollTo('footer')}>Contact</Link></li>
        </ul>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          {isCollapsed ? '↓' : '↑'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
