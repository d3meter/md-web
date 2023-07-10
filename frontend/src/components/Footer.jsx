import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";
import footerSvg from "../imgs/md_footer.svg";
import emailLogo from "../imgs/email.png";
import githubLogo from "../imgs/github.png";
import linkedinLogo from "../imgs/linkedin.png";
import discordLogo from "../imgs/discord.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="svg-div">
        <img src={footerSvg} alt="footer" />
      </div>
      <div className="contact-container">
        <h1>Contact</h1>
        <div className="contact-content">
          <div className="contact-text">
            <p>
              If you liked my introduction and it woke up your attention, please feel
              free to contact me. You can also visit me on LinkedIn or follow on GitHub Pages.
              <h2>I would be happy to hear from you!</h2>
            </p>
          </div>
          <div className="contact-links">
            <div className="contact-row">
              <h2>
                <span>@</span> Contact me
              </h2>
              <div className="logo-container">
                <Link to="/contact">
                  <img src={emailLogo} alt="email" />
                </Link>
                <a
                  href="https://discordapp.com/users/1013479565122875515"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={discordLogo} alt="discord" />
                </a>
              </div>
            </div>
            <div className="contact-row">
              <h2>
                <span>#</span> Visit me on
              </h2>
              <div className="logo-container">
                <a
                  href="https://github.com/d3meter?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubLogo} alt="github" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mark-demeter-53bb88b3/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={linkedinLogo} alt="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
