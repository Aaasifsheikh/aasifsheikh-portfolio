  
import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Contact.scss";
import Container from "../UI/Container/Container";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const StyledButton = withStyles({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
    label: {
      textTransform: "capitalize",
    },
  })(Button);

  