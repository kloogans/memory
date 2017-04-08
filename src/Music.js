import React, { Component } from 'react'
import deadmau5 from '../public/music/4ware.mp3'

class Music extends Component {


  render () {
    let song = deadmau5

    return <audio id="player" autoPlay loop>
        <source src={song} type='audio/mp3' />
      </audio>
  }
}

export default Music
