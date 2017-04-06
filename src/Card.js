import React, { Component } from 'react';

class Card extends Component {

  _click = () => {
    console.log('you clicked me')
    this.props.flipCard(this.props.index)
  }

  render() {
    const revealed = this.props.revealed ? 'revealed' : ''
    return (
      <div
        onClick={this._click}
        className={`${this.props.value}
        back ${revealed}`}>
        </div>
    )
  }
}

export default Card
