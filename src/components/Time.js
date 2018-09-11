import React, { Component } from 'react';

class Time extends Component {
  render() {
    return (
      <div>
        <div id="display">
          {this.props.writeSeconds(this.props.time)}
        </div>
      </div>
    );
  }
}

export default Time;
