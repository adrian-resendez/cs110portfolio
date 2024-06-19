import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSkillsSection from './components/EducationSkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ExtracurricularsSection from './components/ExtracurricularsSection';
import Footer from './components/Footer';
import MangaApp from './MangaProject/MangaApp';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
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

export default App;
