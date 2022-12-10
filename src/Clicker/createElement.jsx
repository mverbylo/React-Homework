import Btn from './Btn';
import Input from './Input';
export const createInput = (inputData) => {
  return (
    <div>
      {inputData.map((data) => (
        <Input {...data} />
      ))}
    </div>
  );
};

export const createBtn = (btnData) => {
  return (
    <div>
      {btnData.map((data) => (
        <Btn {...data} />
      ))}
    </div>
  );
};
