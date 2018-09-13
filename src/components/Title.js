import React, { Component } from 'react';

class Title extends Component {
  clearBox = (event) => {
    event.target.value = '';
  };

  handleChange = (event) => {
    let goal = this.props.writeMilliseconds(event.target.value);

    this.props.setTempGoal(goal);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let goal = this.props.tempGoal

    if (goal >= 300000) {
      alert('ok, I know this game is about wasting time, but you want to sit around for five solid minutes and THEN press the button? No inputs more than five mintues long!')

      event.target.value = '';

      this.props.setGoal(1000)
    } else {
      this.props.setGoal(goal);
    }
  }

  render() {
    return (
      <div>
        <h1 id="title">Timermari</h1>
        <div id="subtitle">a time-wasting game about timing</div>
        <div id="goal">
          Your goal is <span id="target">{this.props.writeSeconds(this.props.goal)}</span> {this.props.goal === 1000 ? 'second' : 'seconds'}!
          <div id="goalSet">
            <div>
              <form id="setGoal" onSubmit={this.handleSubmit}>
                <input id="goalInput" type="text" onClick={this.clearBox} onChange={this.handleChange} placeholder="enter your own goal!" autoComplete="off" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Title;
