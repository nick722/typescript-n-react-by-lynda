import React, { Component } from "react";
import logo from "./logo.svg";
import Message from "./Message";
import "./App.css";

const initialState = {
  name: "Piper",
  message: "TypeScript is cool!!"
};

type State = Readonly<typeof initialState>;

class App extends Component<any, State> {
  readonly state: State = initialState;
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Message name={this.state.name} message={this.state.message} />
        </header>
      </div>
    );
  }
}

export default App;
