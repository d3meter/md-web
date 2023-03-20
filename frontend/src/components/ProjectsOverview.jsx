import React from "react";
import "./css/ProjectsOverview.css";
import projectsData from "../data/projects.json";
import Project from "./Project";
import { Link } from "react-router-dom";

function ProjectsOverview() {
  return (
    <div className="ProjectsOverview section-container">
      <div className="title">
        <h1>
          <span>Project</span> Overview
        </h1>
      </div>
      <div className="project-cards">
        {projectsData.filter((elem, index) => index < 4).map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
      <div className="link">
        <Link to="/projects">
          <button>Click here to see even more</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectsOverview;
