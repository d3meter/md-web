import React from "react";
import "./css/Home.css";
import headerSvg2 from "./../imgs/md_header2.svg";
import headerSvg1 from "./../imgs/md_header1.svg";
import fotoMe from "./../imgs/mark_demeter_sized.JPG";

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
                The purpose of this website is to introduce myself focused on my
                tech skills and experiences. I’m a former
                <span>
                  {" "}
                  mechanical engineer with designer and project manager
                  experiences
                </span>{" "}
                who is looking for the opportunity to enter the IT sector as a{" "}
                <span>Software or Web Developer</span>. I’ve lived, learned and{" "}
                <span>worked in Austria for 7 years.</span>
              </p>
              <br />
              <span>
                I’m always open to learn new technologies incl. backend JAVA, C#
                etc.
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
      <div></div>
    </div>
  );
}

export default Home;
