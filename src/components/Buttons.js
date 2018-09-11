import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div>
        {this.props.isRunning ? 
          <button className="bigRed" type="button" onClick={this.props.handleStop}>stop</button> :
          <button className="bigRed" type="button" onClick={this.props.handleStart}>start</button>
        }
      </div>
    );
  }
}

export default Buttons;
