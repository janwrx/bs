import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Squares extends Component {
  render() {
    return (
      <div className="Squares">
        <button className="button" onClick={this.props.onClick} >
        </button>
      </div>
    );
  }
}

export default Squares;
