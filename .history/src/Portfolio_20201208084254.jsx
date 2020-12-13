import React from "react";
import "./Portfolio.scss";

function Portfolio() {
  const projects = [
    { id: 1, name: "Aasif" }
  ];
  return (
    <div className="portfolio" id="portfolio">
      <div className="heading">
        <h2 className="head">Projects</h2>
      </div>
    </div>
  );
}

export default Portfolio;
