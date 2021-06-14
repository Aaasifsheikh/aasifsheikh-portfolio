import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./About.scss";
import Container from "../UI/Container/Container";
import ProgressBar from "../UI/ProgressBar/ProgressBar";
import Potrait from ";

const skills = [
  {
    name: "HTML",
    rating: 85,
  },
  {
    name: "CSS",
    rating: 80,
  },
  {
    name: "Javascript",
    rating: 70,
  },

  {
    name: "React",
    rating: 80,
  },
];

function About() {
  React.useEffect(() => {
    AOS.init({
      offset: 150,
      duration: 1500,
    });
  }, []);

  return (
    <section id="about" className="about">
      <Container>
      <span
              style={{
                color: "black",
                fontSize: "3rem",
                borderBottom: "2px solid purple",
              }}
            >
              About
            </span>
        <div className="about-img-skills">
          <div className="about-imgDetail" data-aos="fade-right">
            <img alt="not available" src={Potrait} />
            <span className="about-title">Who am I?</span>
            <p>
              I'm a Front-End ReactJs Developer. I have
              serious passion for UI effects, animations and creating intuitive,
              dynamic user experiences. Let's make something special.
            </p>
          </div>
          <div className="about-skills" data-aos="fade-left">
            {skills.map((skill, idx) => {
              return (
                <ProgressBar
                  key={idx}
                  name={skill.name}
                  rating={skill.rating}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
