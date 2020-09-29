import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // tuple
    let aTuple: [string, number] = ['Piper', 37];
    // enum
    enum Codes {fist = 1, second = 'Curie'}
    // any
    let firstName: any =  37
    // void
    const warning = (): void => {
      console.log('Warning');
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            The value {firstName} is of {typeof firstName} type!
          </p>
        </header>
      </div>
    );
  }
}

export default App;
