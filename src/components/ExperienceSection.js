import React from 'react';

const ExperienceSection = () => (
  <section id="experience" className="section experience-section appear">
    <h2>Experience & Projects</h2>
    <div className="experience">
      <p><strong>Manga Collectors Website:</strong></p>
      <ul>
        <li>User-friendly website allowing collectors to catalog their book and movie collections, including features for tracking owned items and identifying missing collection pieces.</li>
        <li>Enhanced item listings with options to mark books and movies as available for sale or trade, facilitating user interaction and exchange within the community.</li>
        <li>Created social networking features enabling users to share reviews, ratings, and recent reads/views on their profiles, similar to platforms like MyAnimeList.</li>
      </ul>
      <p><strong>JSON Database:</strong></p>
      <ul>
        <li>User authentication to access corresponding collections of JSON files.</li>
        <li>Performance focused implementation of CRUD operations in C++ using RapidJSON library.</li>
        <li>Inclusive & exclusive search / filter algorithm.</li>
        <li>Embedded object path query.</li>
      </ul>
      <p><strong>Role-Playing Farming Game (Chico):</strong></p>
      <ul>
        <li>Worked with UCR’s Gamespawn club in the making of Chico.</li>
        <li>Small-scale, Stardew Valley like farming simulator focused on crop management and NPC interactions.</li>
        <li>In-game item storage system for future in-game economy.</li>
        <li>Implemented 2D sprite art & MP3’s from our team’s talented artists to create an aesthetically pleasing environment.</li>
        <li>Dialogue / Quest tree dependent on user & NPC interactions.</li>
      </ul>
    </div>
  </section>
);

export default ExperienceSection;
