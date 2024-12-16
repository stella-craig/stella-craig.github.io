// src/components/About.js
import React from "react";
import "./About.css"; // Optional: Add custom styles for the About section

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>About Me</h1>
        <div className="about-content">
          <p>
            Hello! My name is <strong>Your Name</strong>, and I am a senior
            Computer Science student passionate about designing innovative
            solutions and crafting engaging user experiences. With a focus on{" "}
            <em>[Your Focus Areas, e.g., web development, game development, or AI]</em>, 
            I strive to turn ideas into impactful projects.
          </p>
          <p>
            Over the past few years, I have honed my skills in:
          </p>
          <ul>
            <li>Programming languages like <strong>JavaScript, Python, and C++</strong></li>
            <li>Frameworks and tools like <strong>React, Unity, and Node.js</strong></li>
            <li>Version control with <strong>Git</strong> and deployment with <strong>GitHub Pages</strong></li>
          </ul>
          <p>
            When I’m not coding, I enjoy <em>[your hobbies, e.g., hiking, playing video games, or reading sci-fi novels]</em>. 
            I am constantly seeking opportunities to grow and collaborate with others in the tech community.
          </p>
          <p>
            Feel free to explore my portfolio and projects. If you'd like to connect, 
            head over to the <strong>Contact</strong> section—I’d love to hear from you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
