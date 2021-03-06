import TextField from "@material-ui/core/TextField";
import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="heading2">
        <h2>Contact</h2>
        <h6 style={{ color: "blue" }}>
          Have a question or want to work together?
        </h6>
      </div>
      <form  noValidate autoComplete="off">
        <div className="input" >
          <TextField id="standard-basic" label="Name" />
          <TextField type= "email" id="standard-basic" label="Email" />
          <TextField type= "textaria" row="50" id="standard-basic" label="Your Massage" />
        </div>
      </form>
    </div>
  );
}

export default Contact;
