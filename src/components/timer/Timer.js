import React, { Component } from 'react';

import Time from './Time.js';
import Buttons from './Buttons.js';

class Timer extends Component {
  render() {
    return (
      <div id="timer">
        <Time writeSeconds={this.props.writeSeconds} time={this.props.time} />
        <Buttons isRunning={this.props.isRunning} handleStart={this.props.handleStart} handleStop={this.props.handleStop} />
      </div>
    )
  }
}

export default Timer;
