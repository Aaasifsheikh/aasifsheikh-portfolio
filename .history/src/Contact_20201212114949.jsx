  
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
