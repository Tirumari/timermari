import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div>
          <button id={this.props.isRunning ? "bigRedStart" : "bigRedStop"} type="button" onClick={this.props.isRunning ? this.props.handleStop : this.props.handleStart}>{this.props.isRunning ? "stop" : "start"}</button>
      </div>
    );
  }
}

export default Buttons;
