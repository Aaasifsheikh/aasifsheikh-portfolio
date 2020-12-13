import React from "react";
import "./Portfolio.scss";

function Portfolio() {
  const projects = [
    { id: 1, name: "Aasif" },
    { id: 2, name: "Aasif" },
    { id: 3, name: "Aasif" },
    { id: 4, name: "Aasif" },
    { id: 5, name: "Aasif" },
    { id: 6, name: "Aasif" },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <div className="heading">
        <h2 className="head">Projects</h2>
      </div>
      <div className="projects">
        <ul>
          <li><a href="#all" >ALL</a></li>
          <li><a href="#">HTML</a></li>
          <li><a href="#">JAVASCRIPT</a></li>
          <li><a href="#">REACT</a></li>
          
        </ul>
        <div
      </div>
    </div>
  );
}

export default Portfolio;
