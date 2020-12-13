import TextField from "@material-ui/core/TextField";
import React from "react";
import "./Contact.scss";
import Button from '@material-ui/core/Button';


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
          <TextField className="standard-basic" label="Name" /> <br/>
          <TextField type= "email" className="standard-basic" label="Email" /> <br />
          <TextField type= "textaria" row="50" className="standard-basic" label="Your Massage" />
        </div>
        <div className="btn">
        <Button variant="contained">SUBMIT</Button>

        </div>
      </form>
    </div>
  );
}

export default Contact;
