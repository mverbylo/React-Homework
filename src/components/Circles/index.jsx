import React from 'react';
import style from './Circles.module.css';
const Circles = ({ cirles }) => {
  const list = cirles.map((circl) => (
    <li id={circl.numberCirle}>
      Circle {circl.numberCirle}: {circl.time}
    </li>
  ));
  return (
    <ul className={style.circle}>
      <h2>Circles</h2>
      {list}
    </ul>
  );
};
export default Circles;
