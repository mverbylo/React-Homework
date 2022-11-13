import React, { Component } from 'react';
import Btn from '../Btn';
import Time from '../Time';
import Circles from '../Circles';
import styles from './Stopwach.module.css';

class Stopwatch extends Component {
  state = {
    number: 0,
    isStarted: false,
    cirles: [],
  };
  handleStart = () => {
    this.setState({ isStarted: !this.state.isStarted });
  };
  increment = () => {
    this.setState((state) => ({
      number: state.number + 1,
    }));
  };
  handleStop = () => {
    this.setState({ isStarted: !this.state.isStarted });
  };
  handleReset = () => {
    this.setState({ number: 0, isStarted: false });
  };
  addCirle = (time) => {
    const newCircles = this.state.cirles;
    newCircles.push({
      numberCirle: this.state.cirles.length + 1,
      time: time,
    });
    this.setState({ cirles: newCircles });
  };
  componentDidMount() {
    this.handleStop();
  }
  componentDidUpdate() {
    console.log('Did Update');
    if (this.state.isStarted) {
      if (this.id) clearInterval(this.id);
      this.id = setInterval(() => this.increment(), 500);
    } else {
      clearInterval(this.id);
    }
  }
  render() {
    const { number, isStarted, cirles } = this.state;

    return (
      <article className={styles.component}>
        <h1 className={styles.headering}>Stopwatch</h1>
        <Time number={number} />
        <Btn
          isStarted={isStarted}
          addCirle={() => this.addCirle(number)}
          handleReset={this.handleReset}
          handleStop={this.handleStop}
          handleStart={this.handleStart}
        />
        {cirles.length === 0 || <Circles cirles={cirles} />}
      </article>
    );
  }
}

export default Stopwatch;
