import React, { Component } from 'react'
import Card from './Card'

class Board extends Component {

  render() {
    return (
      <div className="memoryGame">
        <div className="memoryRow1">
          <Card move={this.state.moves[0]} hidden={!this.state.picks.includes(0)} checkCard={this.checkCard} index={0} matched={this.state.matched.includes(0)} />
          <Card move={this.state.moves[1]} hidden={!this.state.picks.includes(1)} checkCard={this.checkCard} index={1} matched={this.state.matched.includes(1)} />
          <Card move={this.state.moves[2]} hidden={!this.state.picks.includes(2)} checkCard={this.checkCard} index={2} matched={this.state.matched.includes(2)} />
          <Card move={this.state.moves[3]} hidden={!this.state.picks.includes(3)} checkCard={this.checkCard} index={3} matched={this.state.matched.includes(3)} />
        </div>
        <div className="memoryRow2">
          <Card move={this.state.moves[4]} hidden={!this.state.picks.includes(4)} checkCard={this.checkCard} index={4} matched={this.state.matched.includes(4)} />
          <Card move={this.state.moves[5]} hidden={!this.state.picks.includes(5)} checkCard={this.checkCard} index={5} matched={this.state.matched.includes(5)} />
          <Card move={this.state.moves[6]} hidden={!this.state.picks.includes(6)} checkCard={this.checkCard} index={6} matched={this.state.matched.includes(6)} />
          <Card move={this.state.moves[7]} hidden={!this.state.picks.includes(7)} checkCard={this.checkCard} index={7} matched={this.state.matched.includes(7)} />
        </div>
        <div className="memoryRow3">
          <Card move={this.state.moves[8]} hidden={!this.state.picks.includes(8)} checkCard={this.checkCard} index={8} matched={this.state.matched.includes(8)} />
          <Card move={this.state.moves[9]} hidden={!this.state.picks.includes(9)} checkCard={this.checkCard} index={9} matched={this.state.matched.includes(9)} />
          <Card move={this.state.moves[10]} hidden={!this.state.picks.includes(10)} checkCard={this.checkCard} index={10} matched={this.state.matched.includes(10)} />
          <Card move={this.state.moves[11]} hidden={!this.state.picks.includes(11)} checkCard={this.checkCard} index={11} matched={this.state.matched.includes(11)} />
        </div>
        <div className="memoryRow4">
          <Card move={this.state.moves[12]} hidden={!this.state.picks.includes(12)} checkCard={this.checkCard} index={12} matched={this.state.matched.includes(12)} />
          <Card move={this.state.moves[13]} hidden={!this.state.picks.includes(13)} checkCard={this.checkCard} index={13} matched={this.state.matched.includes(13)} />
          <Card move={this.state.moves[14]} hidden={!this.state.picks.includes(14)} checkCard={this.checkCard} index={14} matched={this.state.matched.includes(14)} />
          <Card move={this.state.moves[15]} hidden={!this.state.picks.includes(15)} checkCard={this.checkCard} index={15} matched={this.state.matched.includes(15)} />
        </div>
      </div>
    )
  }
}
export default Board
