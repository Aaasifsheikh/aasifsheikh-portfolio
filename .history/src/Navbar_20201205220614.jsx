import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import "./Navbar.scss";

function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > window.innerHeight) {
        document.querySelector(".navbar").classList.add("sticky");
      } else {
        document.querySelector(".navbar").classList.remove("sticky");
      }
    });
  }, []);
  return (
    <nav className="navbar">
      <ul className="flex">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#blogs">Blogs</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      {/* <Button variant="contained" color="black" className="btn">
          HOME
        </Button>
        <Button variant="contained" className="btn">ABOUT</Button>
        <Button variant="contained" className="btn">PORTFOLIO</Button>
        <Button variant="contained" className="btn">BLOGS</Button>
        <Button variant="contained" className="btn">CONTACT</Button> */}
    </nav>
  );
}

export default Navbar;
