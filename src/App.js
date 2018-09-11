import React, { Component } from 'react';
import './App.css';

import Time from './components/Time.js';
import Buttons from './components/Buttons.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: 5000,
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
    } else if (diff === 0) {
      console.log('congrats')
    }
  }

  writeSeconds = (val) => {
    let seconds = (val) / 1000;

    return seconds.toFixed(2);
  };

  writeMilliseconds = (val) => {
    return val*1000;
  }

  handleChange = (event) => {
    let goal = this.writeMilliseconds(event.target.value);

    this.setState({
      tempGoal: goal
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    let goal = this.state.tempGoal;

    if (goal >= 300000) {
      alert('ok, I know this game is about wasting time, but you want to sit around for five solid minutes and THEN press the button? No inputs more than five mintues long!')

      event.target.value = '';
    } else {
      this.setState({
        goal: goal
      })
    }
  };

  clearBox = (event) => {
    event.target.value = '';
  }



  render() {
    return (
      <div id="App">
        <h1 id="title">Timermari</h1>
        <div id="subtitle">a time-wasting game about timing</div>
        <div id="goal">
          Your goal is <span id="target">{this.writeSeconds(this.state.goal)}</span> seconds!
          <div id="goalSet">
            <div>
              <form id="setGoal" onSubmit={this.handleSubmit}>
                set your own goal: <input type="text" onClick={this.clearBox} onChange={this.handleChange} id="goalInput" />
              </form>
            </div>
          </div>
        </div>
        <Time time={this.state.time} writeSeconds={this.writeSeconds} />
        <Buttons isRunning={this.state.isRunning} handleStart={this.handleStart} handleStop={this.handleStop} reset={this.reset} />
      </div>
    );
  }
}

export default App;
