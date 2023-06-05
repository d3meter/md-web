import React, { useState } from "react";
import "./css/Header.css";
import { Link } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import myLogo from "./../imgs/MD_logo.svg";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  showDropdown ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <>
      <div
        className="Header"
        style={{
          filter: showDropdown
            ? "drop-shadow(rgba(0, 0, 0, 0.4) 0px 2px 2px)"
            : "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.4))",
        }}
      >
        <Link className="section-left" to={"/"}>
          <img src={myLogo} alt="logo" />
        </Link>
        <div className="section-mid">
          <h1>Mark Demeter</h1>
          <h2>Web Developer</h2>
        </div>
        <div className="section-right">
          <button
            className="menu"
            onClick={() => setShowDropdown((oldValue) => !oldValue)}
          >
            <MenuRoundedIcon fontSize="large" />
          </button>
        </div>
      </div>
      <div
        className="dropdown-menu"
        style={{ display: showDropdown ? "flex" : "none" }}
      >
        <nav className="menu-list">
          <Link
            className="menu-item"
            to={"/"}
            onClick={() => setShowDropdown((oldValue) => !oldValue)}
          >
            Home
          </Link>
          <Link
            className="menu-item"
            to={"/projects"}
            onClick={() => setShowDropdown((oldValue) => !oldValue)}
          >
            Project overview
          </Link>
          <Link
            className="menu-item"
            to={"/experience"}
            onClick={() => setShowDropdown((oldValue) => !oldValue)}
          >
            Experience
          </Link>
          <Link
            className="menu-item"
            to={"/contact"}
            onClick={() => setShowDropdown((oldValue) => !oldValue)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
