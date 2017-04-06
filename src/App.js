import React, { Component } from 'react';
// import Gameboard from './Gameboard';
// import Row from './Row';
import Card from './Card';

class App extends Component {
state = {
  moves: ['pokeball', 'pikachu', 'charmander', 'squirtle', 'psyduck', 'snorlax', 'jigglypuff', 'bulbasaur', 'pokeball', 'pikachu', 'charmander', 'squirtle', 'psyduck', 'snorlax', 'jigglypuff', 'bulbasaur'],
  picks: []
}

flipCard = (flip) => {
  this.setState({
    picks: [...this.state.picks, flip],
  })
}

  render() {
    return (
      <div className="memoryContainer">
        <div className="memoryGame">
          <div className="memoryRow">
            <div className="memoryBox">
              <Card index={0} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[0]} revealed={this.state.picks.includes(0)} />
            </div>
            <div className="memoryBox">
              <Card index={1} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[1]} revealed={this.state.picks.includes(1)} />
            </div>
            <div className="memoryBox">
              <Card index={2} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[2]} revealed={this.state.picks.includes(2)} />
            </div>
            <div className="memoryBox">
              <Card index={3} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[3]} revealed={this.state.picks.includes(3)} />
            </div>
          </div>
          <div className="memoryRow">
            <div className="memoryBox">
              <Card index={4} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[4]} revealed={this.state.picks.includes(4)} />
            </div>
            <div className="memoryBox">
              <Card index={5} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[5]} revealed={this.state.picks.includes(5)} />
            </div>
            <div className="memoryBox">
              <Card index={6} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[6]} revealed={this.state.picks.includes(6)} />
            </div>
            <div className="memoryBox">
              <Card index={7} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[7]} revealed={this.state.picks.includes(7)} />
            </div>
          </div>
          <div className="memoryRow">
            <div className="memoryBox">
              <Card index={8} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[8]} revealed={this.state.picks.includes(8)} />
            </div>
            <div className="memoryBox">
              <Card index={9} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[9]} revealed={this.state.picks.includes(9)} />
            </div>
            <div className="memoryBox">
              <Card index={10} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[10]} revealed={this.state.picks.includes(10)} />
            </div>
            <div className="memoryBox">
              <Card index={11} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[11]} revealed={this.state.picks.includes(11)} />
            </div>
          </div>
          <div className="memoryRow">
            <div className="memoryBox">
              <Card index={12} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[12]} revealed={this.state.picks.includes(12)} />
            </div>
            <div className="memoryBox">
              <Card index={13} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[13]} revealed={this.state.picks.includes(13)} />
            </div>
            <div className="memoryBox">
              <Card index={14} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[14]} revealed={this.state.picks.includes(14)} />
            </div>
            <div className="memoryBox">
              <Card index={15} picks={this.state.picks} flipCard={this.flipCard} value={this.state.moves[15]} revealed={this.state.picks.includes(15)} />
            </div>
          </div>
          </div>
        </div>

    );
  }
}

export default App;
