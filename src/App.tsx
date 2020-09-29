import React, { Component } from "react";
import logo from "./logo.svg";
import Message from "./Message";
import "./App.css";

class App extends Component<any> {
  componentWillMount() {
    console.log("Almost there...");
  }

  componentDidMount() {
    console.log("Finally...hello!");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message message="This a typed message" />
        </header>
      </div>
    );
  }
}

export default App;
