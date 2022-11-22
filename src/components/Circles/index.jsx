import React from 'react';
import style from './Circles.module.css';
const Circles = ({ cirles }) => {
  const list = cirles.map(({ numberCirle, time }) => (
    <li key={numberCirle}>
      Circle {numberCirle}: {time}
    </li>
  ));
  return (
    <ul className={style.circle}>
      <h2>Circles:</h2>
      {list}
    </ul>
  );
};
export default Circles;
