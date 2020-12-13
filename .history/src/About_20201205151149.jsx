import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <div className="heading">
        <h1>About</h1>
      </div>
      <div className="description">
        <div className="fast">
        <h1>
          Fast
        </h1> <p>Fast load times and lag free interaction, my highest priority.</p>
        </div>
        <div className="responsive"><h1>
          Responsive
        </h1> <p>Fast load times and lag free interaction, my highest priority.</p></div>
        <div className="intuitive"><h1>
          Ini
        </h1> <p>Fast load times and lag free interaction, my highest priority.</p></div>
        <div className="dynamic"><h1>
          Dynamic
        </h1> <p>Fast load times and lag free interaction, my highest priority.</p></div>
      </div>
    </div>
  );
}

export default About;
