import React from "react";

import "./Chip.css";

function Chip(props) {
  return (
    <div className="chip">
      <div className="chip__avatar">
        <img src={props.image} width={25} alt="" />
      </div>
      <div className="chip__label">
        <span>{props.label}</span>
      </div>
    </div>
  );
}

export default Chip;
