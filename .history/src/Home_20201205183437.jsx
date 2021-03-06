import { Button } from "@material-ui/core";
import React from "react";
import "./Home.scss";
import Button from "@material-ui/core/Button";

function Home() {
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
        <Button>View my work ⬇️</Button>
      </div>
    </div>
  );
}

export default Home;
