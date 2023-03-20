import React from "react";

function Project({ project }) {
  return (
    <div className="project-card Project">
      <div className="project-section1">
        <a href={project.webUrl} target="_blank" rel="noreferrer">
          <h2>{`< ${project.name} >`}</h2>
        </a>
        <p>{project.text}</p>
      </div>
      <div className="project-section2">
        <span>#{project.stacks.join(" #")}</span>
        <a href={project.gitUrl} target="_blank" rel="noreferrer">
          <button>{"< details />"}</button>
        </a>
      </div>
    </div>
  );
}

export default Project;
