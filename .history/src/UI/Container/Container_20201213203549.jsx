import React from "react";

import "./Container.scss";
import { Container } from "@material-ui/core";

// function Container(props) {
//   return
//   <div className="container">{props.children}</div>;
// }
const Container = (props) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
