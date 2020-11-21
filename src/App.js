import React from "react";

import "./style.css";
import Item from "./mycomponents/items";
import Hello from "./mycomponents/hello";
import Counter from "./mycomponents/counter";
import Counthook from "./mycomponents/counthook";
import Converter from "./mycomponents/converter";
import Cheincount from "./mycomponents/cheincount";

export default function App() {
  return (
    <div>
      <Hello />
      <Item name="Cheeze" price="4.99" />
      <Item name="Bread" price="1.5" />
      <Item name="IceCream" price="2.5" />
      <Counter />
      <Counthook />
      <Converter/>
      <Cheincount/>
    </div>
  );
}
