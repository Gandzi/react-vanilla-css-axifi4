import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 0
  };
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  componentDidMount() {
    this.setState({ counter: 100 });
  }
  componentDidUpdate() {
    alert("Number of Clicks:" + this.state.counter);
  }
  render() {
    return (
      <div className="coun">
        <h2>Counter With state</h2>
        <button className="btni" onClick={this.increment}>
          Increment
        </button>
        <h1>{this.state.counter}</h1>
        <p>With componentDidMount()</p>
        <button className="btnd" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
