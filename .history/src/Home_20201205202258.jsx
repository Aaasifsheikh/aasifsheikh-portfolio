import { Button } from "@material-ui/core";
import React from "react";
import "./Home.scss";
// import Button from "@material-ui/core/Button";

function Home() {
  window.addEventListener(click, about()){
      function about(){
        document.getElementById()
      }
  }
  return (
    <div className="home">
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
        <a href="#" onClick={about}>View my work ⬇️</a>
      </div>
    </div>
  );
}

export default Home;
