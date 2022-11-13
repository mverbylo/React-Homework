import React from 'react';
import styles from './Time.module.css';
const Time = ({ number }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.time}>{number}</p>
    </div>
  );
};

export default Time;
