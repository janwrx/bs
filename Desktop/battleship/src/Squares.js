import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Squares extends Component {
  render() {
    let color = this.props.clickColor
    let box_styles = {
      backgroundColor: color,
    }
    return (
      <div className="Squares">
        <button className="button" onClick={this.props.onClick} style={box_styles} >
          {color}
        </button>
      </div>
    );
  }
}

export default Squares;
