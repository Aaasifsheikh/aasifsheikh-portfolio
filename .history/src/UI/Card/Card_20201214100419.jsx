import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@material-ui/core";
import aasif from "./../../Images/twitter.png";

import "./Card.scss";

function Card(props) {
  const { project } = props;

  React.useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const cards = (
    <div className="flip">
      <div className="front" }}></div>
      <div className="back">
        <h1 className="text-shadow">{project.name}</h1>
        <h2>{project.tech.join(", ")}</h2>
        <p>{project.desc}</p>
        <Button
          style={{ background: "orange" }}
          onClick={() => {
            window.open(`${project.demoURL.replace(/^"(.*)"$/, "$1")}`);
          }}
        >
          {project.demoUrl === "aasif" ? "Demo" : "Click Here To See"}
        </Button>
      </div>
    </div>
  );
  return (
    <div
      className="project-card"
      data-aos="flip-down">
      {cards}
    </div>
  );
}

export default Card;
