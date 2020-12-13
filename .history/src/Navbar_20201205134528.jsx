import React from "react";
import Button from "@material-ui/core/Button";
import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="nav">
      {/* <ul>
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Blogs">Blogs</a></li>
        <li><a href="#Contact">Contact</a></li>
    </ul> */}
      <Button variant="contained"  color="primary">HOME</Button>
      <Button variant="contained">ABOUT</Button>
      <Button variant="contained">PORTFOLIO</Button>
      <Button variant="contained">BLOGS</Button>
      <Button variant="contained">CONTACT</Button>
    </nav>
  );
}

export default Navbar;
