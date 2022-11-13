import React from 'react';
import style from './CircleBtn.module.css';
const CircleBtn = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <img
        className={style.circleBtn}
        alt="circle"
        src="https://cdn0.iconfinder.com/data/icons/arrows-03/100/arrows-55-512.png"
      />
    </button>
  );
};

export default CircleBtn;
