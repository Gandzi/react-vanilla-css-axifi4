import React, { Component } from "react";
import "./styles.css";

class Hello extends Component {
  state = {
    name: "Statefull Component",
    desc: "Description"
  };

  render() {
    return (
      <div>
        <h2>Hello {this.state.name}</h2>
        <h3>{this.state.desc}</h3>
      </div>
    );
  }
}

export default Hello;
