import React from "react";
import "./css/ProjectsOverview.css";
import projectsData from "../data/projects.json";
import Project from "./Project";

function ProjectsOverview() {
  return (
    <div className="ProjectsOverview section-container">
      <div className="title">
        <h1>
          <span>Project</span> Overview
        </h1>
      </div>
      <div className="project-cards">
        {projectsData.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
      <div className="link">
        <a href="https://github.com/d3meter?tab=repositories" target="_blank" rel="noreferrer">
          <button>Click here to see even more</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectsOverview;
