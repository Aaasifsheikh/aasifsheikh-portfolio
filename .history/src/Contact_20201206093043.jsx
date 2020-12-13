import { Input } from "@material-ui/core";
import React from "react";
import "./Contact.scss";


function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="heading2">
        <h2>Contact</h2>
        <h6 style={{color: "blue"}}>Have a question or want to work together?</h6>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
    </div>
  );
}

export default Contact;
