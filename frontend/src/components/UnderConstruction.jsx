import React from "react";
import "./css/UnderConstruction.css";
import constructionImg from "../imgs/web-underconst.jpg";
import { Link } from "react-router-dom";

function UnderConstruction() {
  return (
    <div className="UnderConstruction">
      <h1>
        <span>Sorry...</span>
        please look back later!
      </h1>
      <img src={constructionImg} alt="under construction" />
      <Link to="/">
        <p>
        &#9001; Back to
          <span> Home</span>
        </p>
      </Link>
    </div>
  );
}

export default UnderConstruction;
