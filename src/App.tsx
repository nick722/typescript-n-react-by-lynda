import React, { Component } from "react";
import logo from "./logo.svg";
import Message from "./Message";
import "./App.css";

class App extends Component<any> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message name="Piper" message="this a typed message" />
        </header>
      </div>
    );
  }
}

export default App;
