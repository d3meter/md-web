import React from "react";
import "./css/Projects.css";
import projects from "../data/projects.json";
import ProjectDetail from "../components/ProjectDetail";

function Projects() {
  return (
    <div className="Projects">
      <h1>Project overview</h1>
      <div className="project-cards">
        {projects.map((project, i) => (
          <ProjectDetail key={i} projectDetail={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
