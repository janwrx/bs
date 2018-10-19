import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Squares from './Squares.js'


class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
        emptySquare: Array(5).fill(null),
        gameOver: false,
        movesMade: 0,
        clickColor: ["blue", "red"]
    }
  }

  torpedoed(i) {
    console.log("clicked")
    let missedTarget = false
    let hitTarget = true
    if (this.state.emptySquare[i] === true) {
      return (this.state.clickColor)

    } else if (this.state.emptySquare[i] === false ) {
      return (this.state.missedTarget)
    }

      return this.state.clickColor;
    }


  resetGame() {
    var emptySquare = Array(25).fill(null)
    this.setState({
      Board: emptySquare,
      gameOver: false,
      movesMade: 0,
    })
  }

  render() {
    let emptySquare = this.state.emptySquare.map((element, index) => {
      return (
        <Squares id={index} colors={this.state.clickColor}
        onClick={this.torpedoed.bind(this)}/>
      )
    })

    return (
      <div >
        <button className="reset" type="submit" onClick={() => this.resetGame()}>Reset</button>
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
