import React from "react";
import "./css/Header.css";
import Switch from "@mui/material/Switch";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import myLogo from "./../imgs/MD_logo.svg";

function Header() {
  const label = { inputProps: { "aria-label": "Color switch demo" } };

  return (
    <div className="Header">
      <div className="section-left">
        <img src={myLogo} alt="logo" />
      </div>
      <div className="section-mid">
        <h1>Mark Demeter</h1>
        <h2>Web Developer</h2>
      </div>
      <div className="section-right">
        <div className="switch-lang">
          <p>EN</p>
          <Switch {...label} defaultChecked color="default" />
          <p>GER</p>
        </div>
        <div className="menu">
          <MenuRoundedIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Header;
