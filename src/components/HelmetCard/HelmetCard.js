import React from "react";
import "./HelmetCard.css";

const HelmetCard = props => (
  <div className="card">
    <div className="img-container">
      <img onClick = {() => props.gamePlay(props.id, props.name)} alt={props.name} src={props.image} />
    </div>
  </div>
);

export default HelmetCard;

