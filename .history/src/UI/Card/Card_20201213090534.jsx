import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@material-ui/core";

import "./Card.scss";

function Card(props) {
  const { project } = props;

  React.useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  const cards = (
    <div class="flip">
      <div
        class="front"
        // style={{
        //   backgroundImage: `url(${project.imgURL.replace(/^"(.*)"$/, "$1")})`,
        // }}
      ></div>
      <div class="back">
        <h1 class="text-shadow">{project.name}</h1>
        <h2>{project.tech.join(", ")}</h2>
        <p>{project.desc}</p>
        <Button style={{background: "orange"}}
          onClick={() => {
            window.open(`${project.demoURL.replace(/^"(.*)"$/, "$1")}`);
          }}
        >
          {demoUrl == " "}
        </Button>
      </div>
    </div>
  );
  return (
    <div className="project-card" data-aos="flip-down">
      {cards}
    </div>
  );
}

export default Card;
