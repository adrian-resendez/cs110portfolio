import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSkillsSection from './components/EducationSkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ExtracurricularsSection from './components/ExtracurricularsSection';
import Footer from './components/Footer';
import './App.css';  // Ensure this path is correct

const App = () => (
  <div>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <EducationSkillsSection />
    <ExperienceSection />
    <ExtracurricularsSection />
    <Footer />
  </div>
);

export default App;
