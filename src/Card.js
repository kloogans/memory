import React, { Component } from 'react';

class Card extends Component {
  _click = () => {
    this.props.checkCard(this.props.index)
  }

  render() {
    const matched = this.props.matched ? 'matched' : null
    const hidden = this.props.hidden ? 'hidden' : null
    return <div className="memoryBox bounce" onClick={this._click}>
      <div className={[this.props.move, hidden, matched].join(' ')}></div>
    </div>
  }
}
export default Card
