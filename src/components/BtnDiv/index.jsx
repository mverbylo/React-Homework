import React from 'react';

import styles from './Btn.module.css';
const BtnDiv = ({ isStarted, handleStart, handleReset, addCirle }) => {
  const { btnWrapper, redBtn, greenBtn, whiteBtn } = styles;
  const img = (
    <img
      alt="circle"
      src="https://cdn0.iconfinder.com/data/icons/arrows-03/100/arrows-55-512.png"
    />
  );
  const dataBtn = [
    {
      id: 1,
      className: isStarted ? redBtn : greenBtn,
      onClick: handleStart,
      text: isStarted ? 'Stop' : 'Start',
    },
    {
      id: 2,
      className: whiteBtn,
      onClick: handleReset,
      text: 'Reset',
    },
    {
      id: 2,
      className: whiteBtn,
      onClick: addCirle,
      text: img,
    },
  ];
  const btns = dataBtn.map(({ id, className, onClick, text }) => (
    <button key={id} className={className} onClick={onClick}>
      {text}
    </button>
  ));
  return <div className={btnWrapper}>{btns}</div>;
};

export default BtnDiv;
