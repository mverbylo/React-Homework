import React from 'react';
import styles from './Reset.module.css';
const Reset = ({ onClick }) => {
  return (
    <button className={styles.resetBtn} onClick={onClick}>
      Reset
    </button>
  );
};

export default Reset;
