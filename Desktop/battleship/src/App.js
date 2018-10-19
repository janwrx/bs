import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Board'
import Squares from './Squares'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicks: 25,
  };
}

  render() {
    return (
      <div className="App">
      <h1>BATTLESHIP</h1>
      <h2>WHAT THE SHIP!?</h2>

        <Board onClick={this.DecreaseItem}/>
      </div>
    );
  }
}

export default App;
