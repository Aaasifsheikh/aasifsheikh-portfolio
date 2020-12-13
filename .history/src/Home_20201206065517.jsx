import { Button } from "@material-ui/core";
import React from "react";
import "./Home.scss";
// import Button from "@material-ui/core/Button";
import video from './video/WhatsApp Video 2020-12-06 at 6.42.51 AM.mp4"

function Home() {
  
  return (
    <div className="home" id="home">
      <div className="contents">
        <h1>
          Hello, I'm
          <span className="highlight" style={{ color: "red" }}>
            Aasif Sheikh
          </span>
          <br />
          I'm a front-end web devloper
        </h1>
      </div>
      <div className="workbtn">
        <a href="#about">View my work ⬇️</a>
      </div>
      <video autoplay muted loop id="myVideo">
  <source src="rain.mp4" type="video/mp4" />
</video>
    </div>
  );
}

export default Home;
