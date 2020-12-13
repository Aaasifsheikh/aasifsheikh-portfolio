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
      <div className="list">
        <ul>
          <li><a href="#all" >ALL</a></li>
          <li><a href="#">HTML</a></li>
          <li><a href="#">JAVASCRIPT</a></li>
          <li><a href="#">REACT</a></li>
          
        </ul>
        
      </div>
      <div id="all" className="projects">
        <h1>Aasif</h1>
      </div>
    </div>
  );
}

export default Portfolio;
