import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board'
import Squares from './Squares'

class App extends Component {

  render() {
    return (
      <div className="App">
      <h1>BATTLESHIP</h1>
        <Board />
      </div>
    );
  }
}

export default App;
