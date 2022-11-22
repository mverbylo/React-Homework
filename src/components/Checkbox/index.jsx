import React from 'react';
import style from './Checkbox.module.scss';
const Checkbox = ({ content, ...otherProps }) => {
  return (
    <label className={style.smText}>
      <input type="checkbox" {...otherProps} required />
      {content}
    </label>
  );
};

export default Checkbox;
