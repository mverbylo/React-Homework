import React from 'react';
import style from './Circles.module.css';
const Circles = ({ cirles }) => {
  const list = cirles.map(({ numberCirle, time }) => (
    <li key={numberCirle}>
      Circle {numberCirle}: {time}
    </li>
  ));
  return (
    <article>
      <h2>Circles:</h2>
      <ul className={style.circle}>{list}</ul>
    </article>
  );
};
export default Circles;
