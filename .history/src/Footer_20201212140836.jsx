import React from "react";
import { IconButton as IconBTN } from "@material-ui/core";
import { LinkedIn, Instagram, GitHub, YouTube } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";

import "./Footer.scss";
import Container from "./UI/Container/Container";

const IconButton = withStyles({
  root: {
    margin: "1rem 2rem",
    // background: "white",
    color: " #f50057",
  },
})(IconBTN);

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <a href="https://www.linkedin.com/in/aasif-sheikh-45b4b1196/">
          <IconButton size="medium">
            <LinkedIn />
          </IconButton>
        </a>
        <a href="https://www.instagram.com/aaasifsheikh/">
          <IconButton>
            <Instagram />
          </IconButton>
        </a>
        <a href="https://github.com/Aaasifsheikh">
          <IconButton>
            <GitHub />
          </IconButton>
        </a>
        <a href="#">
          <IconButton>
            <YouTube />
          </IconButton>
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
