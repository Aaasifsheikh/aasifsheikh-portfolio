import React, { useEffect } from "react";
import "./About.scss";
import aasif from "./Images/Aasif.jpg.jpg";
import Progress from "react-progressbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaTachometerAlt } from "react-icons/fa";
function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="about" id="about">
      <div className="heading">
        <h2 data-aos="fade-left" className="head">About</h2>
      </div>
      <div data-aos="flip-left" className="description">
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
        <div data-aos="fade-right" className="profile">
          <img src={aasif} alt="aasif" />
          <h1>Who's this guy?</h1>
          <p>
            I'm a Front-End Developer for ChowNow in Los Angeles, CA.I have
            serious passion for UI effects, animations and creating intuitive,
            dynamic user experiences. Let's make something special.
          </p>
        </div>
        <div data-aos="fade-left" className="progress">
          <span data-aos="fade-right" className="bar">
            HTML
            <Progress completed={90} />
          </span>
          <span className="bar">
            CSS
            <Progress completed={80} />
          </span>
          <span className="bar">
            JAVASCRIPT
            <Progress completed={60} />
          </span>
          <span className="bar">
            REACT
            <Progress completed={70} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
