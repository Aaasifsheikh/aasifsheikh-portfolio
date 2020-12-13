import React from "react";

import "./Container.scss";

function Container(props) {
  return <di className="container">{props.children}</di>;
}

export default Container;
