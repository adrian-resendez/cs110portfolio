import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSkillsSection from './components/EducationSkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ExtracurricularsSection from './components/ExtracurricularsSection';
import Footer from './components/Footer';
import MangaApp from './MangaProject/MangaApp';
import './App.css';

const App = () => {
  // Helper function for smooth scrolling
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  // Effect to scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div>
        <Navbar scrollToElement={scrollToElement} /> {/* Pass scrollToElement as prop */}
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <EducationSkillsSection />
              <ExperienceSection />
              <ExtracurricularsSection />
              <Footer />
            </>
          } />
          <Route path="/projects/manga" element={<MangaApp />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
