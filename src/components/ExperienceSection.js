import React from 'react';

const ExperienceSection = () => (
  <section id="experience" className="section experience-section appear">
    <h2>Experience & Projects</h2>
    <div className="experience">
      <p><strong>Rental Store DB (PostgreSQL & JAVA):</strong></p>
      <ul>
        <li>Designed and implemented a robust SQL schema for a game rental system using PostgreSQL, emphasizing data normalization and indexing for optimal performance.</li>
        <li>Developed a user-friendly Java interface with GUI features for customers and administrators to manage game rentals, enhancing user experience and operational efficiency.</li>
        <li>Engineered SQL queries to support complex operations such as user registration, rental orders, and tracking information management, showcasing proficiency in database management and query optimization.</li>
        <li>Implemented error handling mechanisms and provided intuitive error messages to improve usability and ensure smooth user interactions.</li>
        <li>Documented project specifications, including schema design rationale, SQL scripts, and Java codebase, ensuring comprehensive project understanding and maintainability.</li>
      </ul>

      <p><strong>Manga Collectors Website:</strong></p>
      <ul>
        <li>Engineered a scalable web application using MongoDB and Express.js, supporting efficient management of user-generated content.</li>
        <li>Implemented advanced search and recommendation systems with NLP techniques and collaborative filtering algorithms to boost user engagement.</li>
        <li>Facilitated community interaction through user reviews, ratings, and personalized recommendation feeds, fostering a vibrant user community.</li>
      </ul>

      <p><strong>Steam DB:</strong></p>
      <ul>
        <li>Developed a web-based analytics dashboard leveraging GPU acceleration with RAPIDS cuDF to achieve enhanced data processing and query performance. This involved utilizing GPU parallel processing for efficient handling of large datasets and reducing processing time significantly.</li>
        <li>Implemented a frontend interface enabling users to input queries, visualize results in a grid format, and monitor real-time performance metrics. AJAX was utilized to ensure dynamic updates without page reloads, enhancing user interaction and experience.</li>
        <li>Managed backend operations including data loading, query execution, and result aggregation using cuDF DataFrames. This approach optimized data handling efficiency and facilitated seamless integration of GPU-accelerated data manipulation into the analytics dashboard.</li>
      </ul>

      <p><strong>JSON Database:</strong></p>
      <ul>
        <li>User authentication to access corresponding collections of JSON files.</li>
        <li>Performance-focused implementation of CRUD operations in C++ using the RapidJSON library.</li>
        <li>Inclusive & exclusive search / filter algorithm.</li>
        <li>Embedded object path query.</li>
      </ul>

      <p><strong>Role-Playing Farming Game (Chico):</strong></p>
      <ul>
        <li>Worked with UCR’s Gamespawn club in the making of Chico.</li>
        <li>Small-scale, Stardew Valley-like farming simulator focused on crop management and NPC interactions.</li>
        <li>In-game item storage system for future in-game economy.</li>
        <li>Implemented 2D sprite art & MP3’s from our team’s talented artists to create an aesthetically pleasing environment.</li>
        <li>Dialogue / Quest tree dependent on user & NPC interactions.</li>
      </ul>
    </div>
  </section>
);

export default ExperienceSection;
