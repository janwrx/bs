import React, { Component } from 'react';
import './App.css';
import Squares from './Squares.js'


class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
        emptySquare: Array(100).fill(null),
        gameOver: false,
        clicked: false,
        movesMade: 25,
        targets: [2, 0, 44],
        clicks: 25,
    }
    this.placeShips()
  }
  DecreaseItem = () => {
      this.setState({ clicks: this.state.clicks - 1 });
    }

  targetSquare(index) {
    // console.log(this.state.emptySquare);
    // console.log(this.state.emptySquare[index] === 1)
    //make a copy of state
    let { emptySquare } = this.state
    if (this.state.emptySquare[index] === 1 || this.state.emptySquare[index] === "HIT") {
      //register a hit
      //assign new value to index in emptySquare
      emptySquare[index] = "HIT"
      //
      // return this.torpedoed()
    } else {
       emptySquare[index] = "MISS"
    }
      //update state
      this.setState({emptySquare: emptySquare})
    }

    //add ships into emptySquare
    //replace null with a number
    placeShips(){
      //make a copy of emptySquare
      let { targets, emptySquare } = this.state
      //update emptySquare with ship positions
      targets.forEach(function(el) {
        emptySquare[el] = 1
      })
      //update state (emptySquare) with new ship positions
      this.setState({
        emptySquare: emptySquare
      })
    }


  resetGame() {
      window.location.reload();
  }

  render() {
    return (
      <div >
      <h3>Torpedoes Remaining {this.state.clicks}</h3>
        <button className="reset" type="submit" onClick={() => this.resetGame()}>Reset</button>
        <div className="Board" >
          {this.state.emptySquare.map(
            (element, index) => {
            //if this square has a ship
            if(element === 'HIT') {
                //return a red square
                return <div className="hitTarget" key={index} onClick={() => this.targetSquare(index)} >{index}</div>
            } else if
              (element === 'MISS') {
                return <div className="missedTarget" key={index} onClick={() => this.targetSquare(index)} >{index}</div>
              }
              else {
            //else
                //return a white square
              return <div className="eachSquare" style={{backgroundColor: this.state.clickColor}}  key={index} onClick={() => this.targetSquare(index)}>
                {index}
              </div>
            }
            })
            }

        </div>
      </div>
    );
  }
}

export default Board;
