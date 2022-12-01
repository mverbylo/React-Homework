import React from 'react';

const Input = ({ text, ...otherData }) => {
  return (
    <label>
      {text}
      <input type="number" {...otherData} />
    </label>
  );
};

export default Input;
