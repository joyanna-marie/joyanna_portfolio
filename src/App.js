import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="container">
      <Navbar />

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a software engineer with a background in healthcare, transitioning into tech to build meaningful and efficient solutions.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>
        <ProjectCard title="Capstone" description="Caspstone Project" />
        <ProjectCard title="Weather App" description="A simple weather app fetching real-time data using an API." />
        <ProjectCard title="Book Store API" description="An API-integrated bookstore website for managing books." />
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: jhickey09@gmail.com</p>
        <p>GitHub: <a href="https://github.com/joyanna-marie">github.com/joyanna-marie</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/joyanna-hickey/">linkedin.com/in/joyanna-hickey/</a></p>
      </section>
    </div>
  );
}

export default App;
