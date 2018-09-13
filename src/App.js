import React, { Component } from 'react';
import './App.css';

import Title from './components/Title.js';
import Game from './components/Game.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: 1000,
      tempGoal: 0,
      time: 0,
      isRunning: false,
    };
  };

  handleStart = () => {
    this.setState({
      isRunning: true,
      time: 0
    });

    this.timer = setInterval(() => this.setState({
      time: (this.state.time + 1)
    }), 1)
  };

  handleStop = () => {
    this.setState({
      isRunning: false
    })

    clearInterval(this.timer);

    this.checkDiff();
  };

  checkDiff = () => {
    let diff = this.writeSeconds(this.state.goal-this.state.time);

    if (diff<0) {
      console.log('you overshot it!');
    } else if (diff>2) {
      console.log('>2');
    } else if (diff<2 && diff>1) {
      console.log('1to2');
    } else if (diff<1 && diff>0.5) {
      console.log('<1')
    } else if (diff<0.5 && diff>0.1) {
      console.log('close')
    } else if (diff<0.1 && diff>0) {
      console.log('super close!')
    } else if (diff === 0) {
      console.log('congrats')
    }
  }

  writeSeconds = (val) => {
    let seconds = (val) / 1000;

    return seconds.toFixed(3);
  };

  writeMilliseconds = (val) => {
    return val*1000;
  }

  setGoal = (val) => {
    this.setState({
      goal: val
    });
  }

  setTempGoal = (val) => {
    this.setState({
      tempGoal: val
    });
  }

  render() {
    return (
      <div id="App">
        <Title goal={this.state.goal} tempGoal={this.state.tempGoal} writeSeconds={this.writeSeconds} writeMilliseconds={this.writeMilliseconds} setGoal={this.setGoal} setTempGoal={this.setTempGoal} />
        <Game time={this.state.time} goal={this.state.goal} writeSeconds={this.writeSeconds} isRunning={this.state.isRunning} handleStart={this.handleStart} handleStop={this.handleStop} />
      </div>
    );
  }
}

export default App;
