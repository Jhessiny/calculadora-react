import React from "react";
import "./display.css";

function changeClass() {
  this.style.fontSize = "10px";
}

export default (props) => (
  <div className="display" longdisplay={props.longdisplay}>
    {props.value}
    {props.longdisplay}
  </div>
);
