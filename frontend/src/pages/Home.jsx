import React from "react";
import "./css/Home.css";
import headerSvg2 from "../imgs/md_header2.svg";
import headerSvg1 from "../imgs/md_header1.svg";
import fotoMe from "../imgs/mark_demeter_sized.JPG";
import logoCss from "../imgs/logos/css3.png";
import logoDocker from "../imgs/logos/docker.webp";
import logoFigma from "../imgs/logos/figma.webp";
import logoFirebase from "../imgs/logos/firebase.png";
import logoGithub from "../imgs/logos/github.png";
import logoHtml from "../imgs/logos/html5.png";
import logoInkscape from "../imgs/logos/inkscape.png";
import logoJs from "../imgs/logos/js.png";
import logoMui from "../imgs/logos/mui.png";
import logoNodejs from "../imgs/logos/nodejs.webp";
import logoPhotoshop from "../imgs/logos/photoshop.png";
import logoPostman from "../imgs/logos/postman.webp";
import logoReactRouter from "../imgs/logos/react-router.png";
import logoReact from "../imgs/logos/react.png";
import logoRestApi from "../imgs/logos/rest-api.webp";
import logoSass from "../imgs/logos/sass.png";
import logoVs from "../imgs/logos/vs.png";
import ProjectsOverview from "../components/ProjectsOverview";
import softSkills from "../imgs/soft_skills.png";

function Home() {
  return (
    <div className="Home">
      <div className="section-1">
        <div className="svg-div">
          <img src={headerSvg2} alt="page-header" />
        </div>
        <h1>
          About <span>Me</span>
        </h1>
        <div className="about">
          <div className="about-container">
            <div className="about-img">
              <img src={fotoMe} alt="me" />
            </div>
            <p className="about-text">
              <h2>Welcome to my website!</h2>
              <p>
                These pages are completely responsive and designed by myself.
                All the vector graphics as footer, header and my logo were drawn
                in Inkscape.
              </p>
              <br />
              <p>
                The purpose of this website is to introduce myself focused on my
                tech skills and expertises. I am a
                <span>
                  {" "}
                  former mechanical engineer with designer, project manager
                  experiences and improved soft skills
                </span>
                . I’ve lived, learned and
                <span> worked in Austria for 7 years</span>. Presently I am
                looking for the opportunity to enter the IT sector as a
                <span> Software or Web Developer</span>.
              </p>
              <br />
              <span>
                I am always open to learn new technologies incl. backend JAVA,
                C# etc.
              </span>
            </p>
          </div>
          <div className="about-shorts">
            <p>
              <span>| Age: </span>
              33
            </p>
            <p>
              <span>| Family: </span>
              yes, with one and half children
            </p>
            <p>
              <span>| Location: </span>
              Sankt-Marein bei Graz 🇦🇹 / Székesfehérvár 🇭🇺
            </p>
          </div>
          <div className="about-shorts">
            <p>
              <span>| Hobby: </span>
              rock climbing, bouldering
            </p>
            <p>
              <span>| Fun fact: </span>I attended the Ninja Warrior Hungary in
              2021 and made it to the semi-finals.
            </p>
          </div>
        </div>
      </div>
      <div className="svg-div">
        <img src={headerSvg1} alt="page-header" />
      </div>
      <div className="section-2">
        <h1>
          Tech <span>Stacks</span>
        </h1>
        <div className="logo-container">
          <img src={logoHtml} alt="html5" />
          <img src={logoCss} alt="css3" />
          <img src={logoSass} alt="sass" />
          <img src={logoJs} alt="javascript" />
          <img src={logoReact} alt="react" />
          <img src={logoRestApi} alt="rest-api" />
          <img src={logoNodejs} alt="nodejs" />
          <img src={logoVs} alt="vs" />
          <img src={logoGithub} alt="github" />
          <img src={logoPostman} alt="postman" />
          <img src={logoDocker} alt="docker" />
          <img src={logoReactRouter} alt="react-router" />
          <img src={logoMui} alt="mui" />
          <img src={logoFirebase} alt="firebase" />
          <img src={logoFigma} alt="figma" />
          <img src={logoPhotoshop} alt="photoshop" />
          <img src={logoInkscape} alt="inkscape" />
        </div>
      </div>
      <div className="section-3">
        <ProjectsOverview />
      </div>
      <div className="section-4">
        <div className="logo-container">
          <img src={softSkills} alt="soft skills" />
        </div>
        <h1>
          Soft <span>Skills</span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
