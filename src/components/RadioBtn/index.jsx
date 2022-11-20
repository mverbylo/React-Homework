import React from 'react';
import style from './RadioBtn.module.scss';
const { label, bigText, smText, inpt } = style;
const RadioBtn = ({ value, name, onChange, content, description }) => {
  return (
    <label className={label}>
      <input
        className={inpt}
        type="radio"
        name="isBuyer"
        value={value}
        checked={name === value}
        onChange={onChange}
      />
      <p className={bigText}>{content}</p>
      <p className={smText}>{description}</p>
    </label>
  );
};

export default RadioBtn;
