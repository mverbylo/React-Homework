import React from 'react';
import Reset from '../Reset';
import StopStart from '../StopStart';
import CircleBtn from '../CircleBtn';
import styles from './Btn.module.css';
const Btn = ({ isStarted, handleStop, handleStart, handleReset, addCirle }) => {
  return (
    <div className={styles.btnWrapper}>
      <StopStart
        onClick={isStarted ? handleStop : handleStart}
        isStarted={isStarted}
      />
      <Reset onClick={handleReset} />
      <CircleBtn onClick={addCirle} />
    </div>
  );
};

export default Btn;
