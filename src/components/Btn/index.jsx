import React from 'react';

import styles from './Btn.module.css';
const Btn = ({
  isStarted,
  handleStart,
  handleStop,
  handleReset,
  addCirle,
}) => {
  const { btnWrapper, redBtn, greenBtn, whiteBtn } = styles;
  const dataBtn = [
    {
      id: 1,
      className: isStarted ? redBtn : greenBtn,
      onClick: isStarted ? handleStop : handleStart,
      content: isStarted ? 'Stop' : 'Start',
    },
    {
      id: 2,
      className: whiteBtn,
      onClick: handleReset,
      content: 'Reset',
    },
    {
      id: 3,
      className: whiteBtn,
      onClick: addCirle,
      content: (
        <img
          alt="circle"
          src="https://cdn0.iconfinder.com/data/icons/arrows-03/100/arrows-55-512.png"
        />
      ),
    },
  ];
  const btns = dataBtn.map(({ id, className, onClick, content }) => (
    <button key={id} className={className} onClick={onClick}>
      {content}
    </button>
  ));
  return <div className={btnWrapper}>{btns}</div>;
};

export default Btn;
