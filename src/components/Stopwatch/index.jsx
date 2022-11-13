import React, { Component } from 'react';
import Btn from '../Btn';
import Time from '../Time';
import Circles from '../Circles';
import styles from './Stopwach.module.css';

class Stopwatch extends Component {
  state = {
    isStarted: false,
    cirles: [],
    number: { h: 0, m: 0, s: 0 },
  };
  addNumber = () => {
    const { h, m, s } = this.state.number;
    let newNumber = this.state.number;
    if (s < 60) {
      newNumber.s = s + 1;
    }
    if (s === 60) {
      newNumber.m = m + 1;
      newNumber.s = 0;
    }
    if (m === 60) {
      newNumber.h = h + 1;
      newNumber.m = 0;
    }
    this.setState({
      number: newNumber,
    });
  };
  looklikeTime = ({ h, m, s }) =>
    `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;

  handleStart = () => {
    this.setState({ isStarted: !this.state.isStarted });
  };
  handleReset = () => {
    this.setState({ number: { h: 0, m: 0, s: 0 }, isStarted: false });
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
    this.handleStart();
  }
  componentDidUpdate() {
    if (this.state.isStarted) {
      if (this.id2) clearInterval(this.id2);
      this.id2 = setInterval(() => this.addNumber(), 1000);
    } else {
      clearInterval(this.id2);
    }
  }
  render() {
    const { number, isStarted, cirles } = this.state;
    return (
      <article className={styles.component}>
        <h1 className={styles.headering}>Stopwatch</h1>
        <Time number={this.looklikeTime(number)} />
        <Btn
          isStarted={isStarted}
          addCirle={() => this.addCirle(this.looklikeTime(number))}
          handleReset={this.handleReset}
          handleStart={this.handleStart}
        />
        {cirles.length === 0 || <Circles cirles={cirles} />}
      </article>
    );
  }
}

export default Stopwatch;
