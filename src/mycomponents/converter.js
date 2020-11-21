import React, { useState } from "react";
import "./styles.css";

function Converter() {
  const [km, setKm] = useState(0);

  function handleChange(e) {
    setKm(e.target.value);
  }

  function convert() {
    return (km / 1.609).toFixed(2);
  }

  return (
    <div className="conv">
      <h3>Converter</h3>
      <input className="inp" type="text" value={km} onChange={handleChange} />
      <h2>
        {km} Km is {convert(km)} Miles{" "}
      </h2>
    </div>
  );
}

export default Converter;
