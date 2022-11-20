import React from 'react';
import style from './Checkbox.module.scss';
const Checkbox = ({ content, onChange, checked, name }) => {
  return (
    <label className={style.smText}>
      <input
        type="checkbox"
        checked={checked}
        name={name}
        onChange={onChange}
        required
      />
      {content}
    </label>
  );
};

export default Checkbox;
