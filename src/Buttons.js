import React, { Component } from 'react'

class Buttons extends Component {


  render() {
    return (
      <div className="audioButtons">
        <button className="playButton" onClick={this.props.playAudio}><i className="fa fa-play"></i></button>
        <button className="pauseButton" onClick={this.props.pauseAudio}><i className="fa fa-pause"></i></button>
      </div>
    )
  }
}

export default Buttons
