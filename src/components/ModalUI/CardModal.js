import React from "react";
import "./CardModal.css";

const CardModal = (props) => {
  return <div className="card">{props.childeren}</div>; //여는 태그와 닫는 태그
};

export default CardModal;
