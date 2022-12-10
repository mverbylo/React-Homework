import React from 'react';

const Input = ({ text, name, value, onChange }) => {
  return (
    <label key={name}>
      {text}
      <input type="number" name={name} value={value} onChange={onChange} />
    </label>
  );
};

export default Input;
