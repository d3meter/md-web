import React, { useState } from "react";
import "./css/ProjectDetail.css";
import githubLogo from "../imgs/github.png";
import eyeLogo from "../imgs/eye.png";
import arrowSymbol from "../imgs/arrow-down.webp";

function ProjectDetail({ projectDetail }) {
  const [tabOpen, setTabOpen] = useState(false);

  return (
    <div className={tabOpen ? "ProjectDetail open" : "ProjectDetail close"}>
      <div className="project-content">
        <div className="project-header">
          <div className="project-title">
            <h1>{projectDetail.name}</h1>
          </div>
          <div className="project-links">
            {projectDetail.webUrl ? (
              <a
                className="icon-container"
                href={
                  projectDetail.webUrl
                    ? projectDetail.webUrl
                    : projectDetail.gitUrl
                }
                target="_blank"
                rel="noreferrer"
              >
                <img src={eyeLogo} alt="web" />
              </a>
            ) : (
              <div className="icon-container">
                <img
                  src={eyeLogo}
                  alt="web"
                  style={{ opacity: 0.3, cursor: "default" }}
                />
              </div>
            )}
            <a
              className="icon-container"
              href={projectDetail.gitUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubLogo} alt="github" />
            </a>
            <button
              className="icon-container"
              onClick={() => setTabOpen((oldValue) => !oldValue)}
            >
              <img
                className={tabOpen ? "active" : "passiv"}
                src={arrowSymbol}
                alt="down"
              />
            </button>
          </div>
        </div>
        <div className="project-preview">
          <img
            src={require(`../data/project-images/${projectDetail.previewId}.png`)}
            alt="preview"
          />
        </div>
        <div className="project-info">
          <div className="row">
            <h2>Type:</h2>
            <h3>{projectDetail.type}</h3>
          </div>
          <div className="row">
            <h2>Status:</h2>
            <h3>{projectDetail.status}</h3>
          </div>
          <p className="stacks">#{projectDetail.stacks.join(" #")}</p>
          <p className="detail-text">{projectDetail.text}</p>
        </div>
        <div className="box-bottom"></div>
      </div>
      <p className="detail-text-small">{projectDetail.text}</p>
    </div>
  );
}

export default ProjectDetail;
