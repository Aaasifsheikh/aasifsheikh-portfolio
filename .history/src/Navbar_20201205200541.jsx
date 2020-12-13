import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import "./Navbar.scss";

function Navbar() {

    useEffect(()=>{
window.addEventListener("scroll", function(){
    if(window.scrollY > window.innerHeight){
        document.querySelectory(".navbar").classList.
    }
})
    },[])
  return (
      <nav className="navbar">
        <ul className="flex">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Blogs">Blogs</a></li>
        <li><a href="#Contact">Contact</a></li>
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
