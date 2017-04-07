import React, { Component } from 'react'

class Modal extends Component {

  _reset = () => {
    this.props.reset()
  }

  render () {
    let victoryMessage = ''
    if (this.props.vitory === true) {
      victoryMessage = 'You Won!'
    } else if (this.props.victory === false) {
      victoryMessage = 'You lost'
    }
    return (
      <div className="overlay">
  <div className="dialog">
    <h3>{victoryMessage}</h3>
    <p>Play Again?</p>
    <button className="resetButton" onClick={this._reset}>
      Again
    </button>
  </div>
  </div>
    )
  }
}

export default Modal
