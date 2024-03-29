import React, { useState, useEffect } from "react";
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
import logoAngular from "../imgs/logos/angular.png";
import logoBootstrap from "../imgs/logos/bootstrap.png";
import logoTypescript from "../imgs/logos/typescript.png";
import ProjectsOverview from "../components/ProjectsOverview";
import softSkills from "../imgs/soft_skills.png";
import Loader from "../components/Loader";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function Home({ isLoading }) {
  isLoading ? disableBodyScroll(document) : enableBodyScroll(document);
  const [isSection2Visible, setIsSection2Visible] = useState(false);
  const [isSection3Visible, setIsSection3Visible] = useState(false);
  const [isSection4Visible, setIsSection4Visible] = useState(false);

  useEffect(() => {
    const handleScroll = (sectionIndex, offset) => {
      const section = document.querySelector(`.section-${sectionIndex}`);
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop - windowHeight + offset <= 0) {
        if (sectionIndex === 2) {
          setIsSection2Visible(true);
        } else if (sectionIndex === 3) {
          setIsSection3Visible(true);
        } else if (sectionIndex === 4) {
          setIsSection4Visible(true);
        }
      }
    };

    window.addEventListener("scroll", () => handleScroll(2, 200));
    window.addEventListener("scroll", () => handleScroll(3, 200));
    window.addEventListener("scroll", () => handleScroll(4, 200));

  }, [isLoading]);

  return (
    <div className="Home">
      <div
        className="loader-container"
        style={{ display: isLoading ? "block" : "none" }}
      >
        <Loader />
      </div>
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
              The purpose of this website is to introduce myself focused on my
              tech skills and expertises. I am a{" "}
              <span>
                former mechanical engineer with designer, project manager
                experience and improved soft skills
              </span>
              . I’ve lived, learned and
              <span> worked in Austria for 7 years</span>. Currently I am
              looking for the opportunity to enter the IT sector as a
              <span> Software or Web Developer</span>.
              <br />
              <br />
              <span>
                I am always open to learn new technologies incl. backend JAVA,
                C# etc.
              </span>
              <br />
              <br />
              These pages are completely responsive and designed by myself. All
              the vector graphics as footer, header and my logo were drawn in
              Inkscape.
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
      <div
        className={`section-2 section ${
          isSection2Visible ? "section-animation" : ""
        }`}
      >
        <h1>
          Tech <span>Stacks</span>
        </h1>
        <div className="logo-container">
          <img src={logoHtml} alt="html5" />
          <img src={logoCss} alt="css3" />
          <img src={logoSass} alt="sass" />
          <img src={logoJs} alt="javascript" />
          <img src={logoTypescript} alt="typescript" />
          <img src={logoReact} alt="react" />
          <img src={logoAngular} alt="angular" />
          <img src={logoRestApi} alt="rest-api" />
          <img src={logoNodejs} alt="nodejs" />
          <img src={logoVs} alt="vs" />
          <img src={logoGithub} alt="github" />
          <img src={logoPostman} alt="postman" />
          <img src={logoDocker} alt="docker" />
          <img src={logoReactRouter} alt="react-router" />
          <img src={logoMui} alt="mui" />
          <img src={logoBootstrap} alt="bootstrap" />
          <img src={logoFirebase} alt="firebase" />
          <img src={logoFigma} alt="figma" />
          <img src={logoPhotoshop} alt="photoshop" />
          <img src={logoInkscape} alt="inkscape" />
        </div>
      </div>
      <div
        className={`section-3 section ${
          isSection3Visible ? "section-animation" : ""
        }`}
      >
        <ProjectsOverview />
      </div>
      <div className={`section-4 section ${isSection4Visible ? "section-animation" : ""}`}>
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
