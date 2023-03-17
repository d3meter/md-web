import React from "react";

function Project({ project }) {
  return (
    <div className="project-card Project">
      <div className="project-section1">
        <h2>{project.name}</h2>
        <p>{project.text}</p>
      </div>
      <div className="project-section2">
        <span>#{project.stacks.join(" #")}</span>
        <a href={project.gitUrl} target="_blank" rel="noreferrer">
          <button>show more...</button>
        </a>
      </div>
    </div>
  );
}

export default Project;
