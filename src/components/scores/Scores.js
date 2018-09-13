import React, { Component } from 'react';

class Scores extends Component {
  checkDiff = () => {
    let diff = this.props.writeSeconds(this.props.goal - this.props.time);

    if (diff < 0) {
      return('you overshot it!');
    } else if (diff > 2) {
      return('>2');
    } else if (diff < 2 && diff > 1) {
      return('1to2');
    } else if (diff < 1 && diff > 0.5) {
      return('<1')
    } else if (diff < 0.5 && diff > 0.1) {
      return('close')
    } else if (diff < 0.1 && diff > 0) {
      return('super close!')
    } else if (diff === 0) {
      return('congrats')
    }
  }

  render() {
    return(
      <div id="scores">
        <h2>Scores</h2>
        <div>{this.checkDiff()}</div>
      </div>
    )
  }
};

export default Scores;
