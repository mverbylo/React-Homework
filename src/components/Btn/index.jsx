import React from 'react';
import styles from './Btn.module.scss';
const Btn = ({ content }) => {
  return (
    <button className={styles.btn} type="submit">
      {content}
    </button>
  );
};

export default Btn;
