import React from 'react';

import styles from './Btn.module.css';
const BtnDiv = ({ isStarted, handleStart, handleReset, addCirle }) => {
  const { redBtn, greenBtn, whiteBtn } = styles;
  return (
    <div className={styles.btnWrapper}>
      <button className={isStarted ? redBtn : greenBtn} onClick={handleStart}>
        {isStarted ? 'Stop' : 'Start'}
      </button>
      <button className={whiteBtn} onClick={handleReset}>
        Reset
      </button>
      <button onClick={addCirle}>
        <img
          className={whiteBtn}
          alt="circle"
          src="https://cdn0.iconfinder.com/data/icons/arrows-03/100/arrows-55-512.png"
        />
      </button>
    </div>
  );
};

export default BtnDiv;
