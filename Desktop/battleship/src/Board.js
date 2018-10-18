import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Squares from './Squares.js'


class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
        emptySquare: Array(5).fill(null),
        colorHitmiss: ["blue","red"]
    }
  }

  torpedoed(i) {
    if (this.state.emptySquare[i] !== null) {
      console.log(this.state.colorHitmiss[0])
    } else {
      return this.state.colorHitmiss[1];
    }
  }

  render() {
    let emptySquare = this.state.emptySquare.map((element, index) => {
      return (
        <Squares id={index} colors={this.state.colorHitmiss}
        onClick={this.state.torpedoed}/>
      )
    })

    return (
      <div >
        <button>Reset</button>
        <div className="Board">
          <div>
            {emptySquare}
          </div>
          <div>
            {emptySquare}
          </div>
          <div>
            {emptySquare}
          </div>
          <div>
            {emptySquare}
          </div>
          <div>
            {emptySquare}
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
