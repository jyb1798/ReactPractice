import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return <div className={classes.card}>{props.childeren}</div>; //여는 태그와 닫는 태그
};

export default Card;
