import React from "react";
import "../App.css";

const ProjectCard = ({ title, description, link, image }) => {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={`${title} Thumbnail`} />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
};

export default ProjectCard;
