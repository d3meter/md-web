import React from "react";
import "./css/Loader.css";
import loaderAnim from "../imgs/loader.gif";

function Loader() {
  return (
    <div className="Loader">
      <h2>Loading...</h2>
      <img className="loader-anim" src={loaderAnim} alt="loading..." />
    </div>
  );
}

export default Loader;
