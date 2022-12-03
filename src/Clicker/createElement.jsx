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
