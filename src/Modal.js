import React, { Component } from 'react'
import MusicWin from './MusicWin'

class Modal extends Component {

  _reset = () => {
    this.props.reset()
  }

  render () {
    return (
      <div className="overlay">
        <div className="dialog">
          <h3>You Won!</h3>
          <button className="victory" onClick={this._reset}>
            <i className="fa fa-refresh"></i>
          </button>
          <MusicWin />
        </div>
      </div>
    )
  }
}

export default Modal
