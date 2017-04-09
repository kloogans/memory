import React, { Component } from 'react'
import oliver from '../public/music/Oliver.mp3'

class Music extends Component {


  render () {
    let song = oliver

    return <audio id="player" autoPlay loop>
        <source src={song} type='audio/mp3' />
      </audio>
  }
}

export default Music
