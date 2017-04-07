import React, { Component } from 'react'

class Modal extends Component {
  render () {
    return (
      <div className="overlay">
  <div className="dialog">
    <h3>You Won!</h3>
    <p>Play Again?</p>
    <button>
      Refresh
    </button>
  </div>
  </div>
    )
  }
}

export default Modal
