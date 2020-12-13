// import React, { useEffect } from "react";
// import Button from "@material-ui/core/Button";
// import "./Navbar.scss";

// function Navbar() {
//   useEffect(() => {
//     window.addEventListener("scroll", function () {
//       if (window.scrollY > window.innerHeight) {
//         document.querySelector(".navbar").classList.add("sticky");
//       } else {
//         document.querySelector(".navbar").classList.remove("sticky");
//       }
//     });
//   }, []);
//   return (
//     <nav className="navbar">
//       <ul className="flex">
//         <li>
//           <a href="#home">Home</a>
//         </li>
//         <li>
//           <a href="#about">About</a>
//         </li>
//         <li>
//           <a href="#portfolio">Portfolio</a>
//         </li>
//         <li>
//           <a href="#blogs">Blogs</a>
//         </li>
//         <li>
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//       {/* <Button variant="contained" color="black" className="btn">
//           HOME
//         </Button>
//         <Button variant="contained" className="btn">ABOUT</Button>
//         <Button variant="contained" className="btn">PORTFOLIO</Button>
//         <Button variant="contained" className="btn">BLOGS</Button>
//         <Button variant="contained" className="btn">CONTACT</Button> */}
//     </nav>
//   );
// }

// export default Navbar;
import React, { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Container from "./UI/Container/Container";

import "./Navigation.scss";

function Navigation() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > window.innerHeight + 47) {
        document.querySelector(".navbar").classList.add("sticky");
        document.querySelector(".navbar").classList.add("fadeInDown");
      } else if (window.scrollY > window.innerHeight) {
        // Do Nothing
      } else {
        document.querySelector(".navbar").classList.remove("fadeInDown");
        document.querySelector(".navbar").classList.remove("sticky");
      }
    });
  }, []);

  return (
    <Container>
      <div className="navbar">
        <div className="logoflex">
          <span className="logo" onClick={() => scroll.scrollToTop()}>
            Sajid
          </span>
        </div>
        <div className="links">
          <Link activeClass="active" to="home" smooth spy>
            Home
          </Link>

          <Link activeClass="active" to="about" smooth spy>
            About
          </Link>

          <Link activeClass="active" to="projects" smooth spy>
            Portfolio
          </Link>

          <Link activeClass="active" to="contact" smooth spy>
            Contact
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Navigation;