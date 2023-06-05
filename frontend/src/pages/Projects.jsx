import React, { useState } from "react";
import "./css/Projects.css";
import projects from "../data/projects.json";
import ProjectDetail from "../components/ProjectDetail";

function Projects() {
  const [openTabIndex, setOpenTabIndex] = useState(-1);

  const handleTabOpen = (index) => {
    setOpenTabIndex(index === openTabIndex ? -1 : index);
  };

  return (
    <div className="Projects">
      <h1>Project overview</h1>
      <div className="project-cards">
        {projects.map((project, i) => (
          <ProjectDetail
            key={i}
            projectDetail={project}
            isOpen={i === openTabIndex}
            onTabOpen={() => handleTabOpen(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
