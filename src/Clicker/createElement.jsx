// import React from 'react';

// const Input = ({ text, ...otherData }) => {
//   return (
//     <label>
//       {text}
//       <input type="number" {...otherData} />
//     </label>
//   );
// };

// export default Input;
export const createInput = (inputData) => {
  return (
    <div>
      {inputData.map(({ text, name, value, onChange }) => (
        <label key={name}>
          {text}{' '}
          <input type="number" name={name} value={value} onChange={onChange} />
        </label>
      ))}
    </div>
  );
};

export const createBtn = (btnData) => {
  return (
    <div>
      {btnData.map(({ text, onClick }) => (
        <button onClick={onClick}>{text}</button>
      ))}
    </div>
  );
};
