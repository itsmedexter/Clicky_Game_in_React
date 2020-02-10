import React from "react";
import "./style.css";

const Card = props => (
  <div className="card img-container hover">
    <img alt={props.name} src={props.image} id={props.id}
    onClick={() => props.shuffleScoreCard(props.id)} className='shuffleScore'/>
  </div>
);

export default Card;