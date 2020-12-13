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
      <form >
        <Input type="text" placeholder="enter name" />
        <Input type="email" placeholder="enter " />
        <Input type="text" placeholder="enter name" />
      </form>
    </div>
  );
}

export default Contact;
