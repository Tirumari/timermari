import React, { Component } from 'react';

import Timer from './timer/Timer.js';
import Scores from './scores/Scores.js';

class Game extends Component {
  render() {
    return(
      <div id="game">
        <Scores time={this.props.time} goal={this.props.goal} writeSeconds={this.props.writeSeconds} />
        <div className="spacer"><div id="line"></div></div>
        <Timer time={this.props.time} writeSeconds={this.props.writeSeconds} isRunning={this.props.isRunning} handleStart={this.props.handleStart} handleStop={this.props.handleStop} />
      </div>
    );
  };
};

export default Game;
