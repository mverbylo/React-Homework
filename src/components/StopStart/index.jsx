import React from 'react';
import styles from './StopStart.module.css';
const StopStart = ({ onClick, isStarted }) => {
  const { redBtn, greenBtn } = styles;
  return (
    <button className={isStarted ? redBtn : greenBtn} onClick={onClick}>
      {isStarted ? 'Stop' : 'Start'}
    </button>
  );
};

export default StopStart;
