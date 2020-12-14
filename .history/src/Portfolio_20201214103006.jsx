import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import twitter from "./Images/twitter.png";
import amazon from  "./Images/amazon.jpg";

import "./Portfolio.scss";
import Card from "./UI/Card/Card";
import Container from "./UI/Container/Container";
// import githubProjectIMG from ";
// import recipeProjectIMG from "../../assets/recipe-app.PNG";
// import bitcoinProjectIMG from "../../assets/bitcoin-monitor.JPG";

const projectData = [
  {
    id: 1,
    name: "Amazon Clone",
    tech: ["html", "css", "javascript", "react"],
    demoURL: "https://aaasifsheikh.github.io/clone-app/",
    imgURL: amazon,
    desc: "",
  },
  {
    {
      id: 2,
      name: "Shopping Express",
      tech: ["html", "css", "javascript", "react"],
      demoURL: " https://aaasifsheikh.github.io/ecommerce-app/",
      imgURL: twitter,
      desc: "Brows that all you need",
    },
    id: 3,
    name: "Twitter App",
    tech: ["react", "material-ui"],
    demoURL: "https://aaasifsheikh.github.io/twitter_clone/",
    imgURL: "https://unsplash.com/photos/YdHjEwOVomc" ,
    desc: "Brows and view letest update",
  },
  {
    id: 4,
    name: "To-Do App",
    tech: ["html", "css", "javascript"],
    demoURL: "https://google.co.in",
    imgURL:"https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    desc: "Create and Manage Your task with To-Do list",
  },
  {
    id: 5,
    name: "Github Finder",
    tech: ["html", "css", "javascript"],
    demoURL: "https://google.co.in",
    imgURL:"https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    desc: "Search To Find User And Repository",
  },
  {
    id: 6,
    name: "Netflix Clone",
    tech: ["html", "css", "javascript", "react"],
    demoURL: "https://aaasifsheikh.github.io/netflix-clone/",
    imgURL:"https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    desc: "Watch Your Favorite Hollywood Movie Trailer",
  },
  {
    id: 7,
    name: "Notes App",
    tech: ["html", "css", "javascript"],
    demoURL: "https://google.co.in",
    imgURL:"https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    desc: "Take Notes and Never Forget anything",
  },
  {
    id: 8,
    name: "Newsgrid",
    tech: ["html", "css"],
    demoURL: "https://google.co.in",
    imgURL: "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    desc: "Find Latest News and Stay up to date with This fast paced world",
  },
  
  {
    id: 9,
    name: "Edge Ledger Website",
    tech: ["html", "css"],
    demoURL: "",
    imgURL:"https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&amp;fit=crop&amp;w=667&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    desc: "Hoter Website for Your Business",
  },
];

function Portfolio() {
  const [projects, setProjects] = useState(projectData);
  // const [projectStyle, setProjectStyle] = useState();

  React.useEffect(() => {
    AOS.init({
      duration: 500,
      offset: 150,
    });
  }, []);

  const projectFilter = (type) => {
    if (type === "all") {
      setProjects(projectData);
    } else {
      const updatedProjects = projectData.filter((project) =>
        project.tech.includes(type)
      );
      setProjects(updatedProjects);
    }
  };

  return (
    <section id="projects" className="project-div">
      <Container>
        <span
          style={{
            color: "#1d2434",
            fontSize: "3rem",
            borderBottom: "2px solid #f50057",
          }}
        >
          Projects
        </span>
        <div className="projects">
          <div className="projects-btn">
            <button onClick={() => projectFilter("all")} data-aos="fade-right">
              All
            </button>
            <button onClick={() => projectFilter("html")} data-aos="fade-right">
              HTML/CSS
            </button>
            <button
              onClick={() => projectFilter("javascript")}
              data-aos="fade-left"
            >
              Javascript
            </button>
            <button onClick={() => projectFilter("react")} data-aos="fade-left">
              React
            </button>
          </div>
          <div className="projects-cards-group">
            {projects.map((project) => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
