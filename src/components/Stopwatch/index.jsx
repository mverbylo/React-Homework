import React, { Component } from 'react';
import BtnDiv from '../BtnDiv';
import Time from '../Time';
import Circles from '../Circles';
import styles from './Stopwach.module.css';

class Stopwatch extends Component {
  state = { isStarted: false, cirles: [], number: { h: 0, m: 0, s: 0 } };
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
  lookLikeTime = ({ h, m, s }) =>
    `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
  handleStart = () => {
    this.setState({ isStarted: !this.state.isStarted });
    if (this.id) clearInterval(this.id);
    this.id = setInterval(this.addNumber, 1000);
  };
  handleStop = () => {
    this.setState({ isStarted: !this.state.isStarted });
    clearInterval(this.id);
  };
  handleReset = () => {
    this.setState({
      isStarted: false,
      cirles: [],
      number: { h: 0, m: 0, s: 0 },
    });
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
  componentWillUnmount() {
    clearInterval(this.id);
  }
  render() {
    const { number, isStarted, cirles } = this.state;
    return (
      <article className={styles.component}>
        <h1 className={styles.headering}>Stopwatch</h1>
        <Time number={this.lookLikeTime(number)} />
        <BtnDiv
          isStarted={isStarted}
          addCirle={() => this.addCirle(this.lookLikeTime(number))}
          handleReset={this.handleReset}
          handleStart={this.handleStart}
          handleStop={this.handleStop}
        />
        {!!cirles.length && <Circles cirles={cirles} />}
      </article>
    );
  }
}

export default Stopwatch;
