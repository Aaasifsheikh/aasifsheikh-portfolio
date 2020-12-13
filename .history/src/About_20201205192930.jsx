import React from "react";
import "./About.scss";
import aasif from "./Images/Aasif.jpg.jpg";
import Progress from "react-progressbar";
function About() {
  return (
    <div className="about">
      <div className="heading">
        <h1>About</h1>
      </div>
      <div className="description">
        <div className="fast">
          <h1>Fast</h1>
          <p>Fast load times and lag free interaction, my highest priority.</p>
        </div>
        <div className="responsive">
          <h1>Responsive</h1>
          <p>My layouts will work on any device, big or small.</p>
        </div>
        <div className="intuitive">
          <h1>Intuitive</h1>
          <p>Strong preference for easy to use, intuitive UX/UI..</p>
        </div>
        <div className="dynamic">
          <h1>Dynamic</h1>
          <p>
            Websites don't have to be static, I love making pages come to life.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="profile">
          <img src={aasif} alt="aasif" />
          <p>
            I'm a Front-End Developer for ChowNow in Los Angeles, CA.I have
            serious passion for UI effects, animations and creating intuitive,
            dynamic user experiences. Let's make something special.
          </p>
        </div>
        <div className="progress">
          <span className="bar">
            HTML
            <Progress completed={90} />
          </span>
          <span className="bar">
            CSS
            <Progress completed={80} />
          </span>
          <span className="bar">
            JA
            <Progress completed={60} />
          </span>
          <span className="bar">
            HTML
            <Progress completed={60} />
          </span>
          {/* <Progress completed={75} />
        <Progress completed={75} /> */}
        </div>
      </div>
    </div>
  );
}

export default About;
