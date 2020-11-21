import React, { useState, useEffect } from "react";
import "./styles.css";
import Converter from "./converter";

function Cheincount() {
  const [bind, setBind] = useState(0);
  const button1 = <button onClick={count1}>Count X 2,5</button>;
  const button2 = <button onClick={count2}>Count X 3</button>;

  function handleChange(e) {
    setBind(e.target.value);
  }
  function count1() {
    setBind(bind * 2.5);
  }
  function count2() {
    setBind(bind * 3);
  }

  return (
    <div className="conv">
      <h3>Chein counter</h3>
      <h4>Enter Binder diameter and press Count Button</h4>
      <input className="inp" type="text" value={bind} onChange={handleChange} />
      {button1}
      {button2}
      <Converter/>
      <Converter/>
      <h2>{bind}</h2>
    </div>
  );
}

export default Cheincount;
