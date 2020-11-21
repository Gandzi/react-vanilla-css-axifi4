import React from "react";
import React, { useState } from "react";
import React, { useEffect } from "react";
import "./styles.css";

function Counthook() {
  const [counthook, setCounthook] = useState(0);
  useEffect(() => {
    alert("Number of Clicks :" + counthook);
  });
  function increment() {
    setCounthook(counthook + 1);
  }
  function decrement() {
    setCounthook(counthook - 1);
  }
  function countplus() {
    setCounthook(counthook + counthook);
  }
  return (
    <div className="counthook">
      <h2>Counter with Hooks</h2>
      <p>(Code Shorter)</p>
      <button className="btni" onClick={increment}>
        Increment
      </button>
      <h1>{counthook}</h1>

      <button className="btnd" onClick={decrement}>
        Decrement
      </button>
      <button className="btnc" onClick={countplus}>
        Count +
      </button>
    </div>
  );
}

export default Counthook;
