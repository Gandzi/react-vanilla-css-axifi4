import React from "react";
import "./styles.css";

function Item(props) {
  return (
    <div className="item">
      <b>This is function components with </b>
      <br />
      <b>Name: </b>
      {props.name}
      <br />
      <b>Price: </b> €{props.price}
    </div>
  );
}

export default Item;
