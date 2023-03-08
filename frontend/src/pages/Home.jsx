import React from "react";
import "./css/Home.css";
import headerSvg from "./../imgs/md_header2.svg";

function Home() {
  return (
    <div className="Home">
      <div className="svg-div">
        <img src={headerSvg} alt="page-header" />
      </div>
      <div className="section-1">
        <div className="about">
          <h1>About Me</h1>
          <div className="img-container">
            <img src="" alt="me" />
          </div>
          <div className="about-text">
            <h2>Welcome to my website!</h2>
            <p>
              <span>Welcome to my personal website!</span>
              The purpose of this website is to introduce myself focused on my
              tech skills and experiences. I’m a former
              <span>
                mechanical engineer with designer and project manager
                experiences
              </span>
              who is looking for the opportunity to enter the IT sector as a
              <span>Software or Web Developer</span>. I’ve lived, learned and
              <span>worked in Austria for 7 years.</span>
            </p>
            <span>
              I’m always open to learn new technologies incl. backend JAVA, C#
              etc.
            </span>
          </div>
          <div className="about-shorts">
            <span>Age:</span>
            <p>33 |</p>
            <span>Family:</span>
            <p>yes, with one and half children |</p>
            <span>Location:</span>
            <p>Sankt-Marein bei Graz 🇦🇹 / Székesfehérvár 🇭🇺</p>
            <br />
            <span>Hobby:</span>
            <p>rock climbing, bouldering |</p>
            <span>Fun fact:</span>
            <p>
              I attended the Ninja Warrior Hungary in 2021 and made it to the
              semi-finals.
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Home;
