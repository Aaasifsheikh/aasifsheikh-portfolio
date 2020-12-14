import React from "react";

import "./Container.scss";
import { Container } from "@material-ui/core";

// function Container(props) {
//   return
//   <div className="container">{props.children}</div>;
// }
func Container  (props)  {
  return (
    <React.Fragment>
      <div className="container">{props.children}</div>;
    </React.Fragment>
  );
};

export default Container;
