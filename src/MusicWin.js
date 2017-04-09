import React, { Component } from 'react'
// import winner from '../public/music/hellyea.wav' // More vulgar winning audio
import winner from '../public/music/winner.mp3' // Default Audio
class MusicWin extends Component {

  render () {
    let songWin = winner

    return (
      <audio id="player" autoPlay loop>
        <source src={songWin} type='audio/mp3' />
      </audio>
    )
  }
}

export default MusicWin
