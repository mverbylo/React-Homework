import { useState, useEffect } from 'react';
import { createInput, createBtn } from './createElement';
const Clicker = () => {
  const [num, setNum] = useState(0);
  const [step, setStep] = useState(5);
  const [frequency, setFrequency] = useState(1);
  const [intervalId, setIntervalId] = useState(null);
  const [isIncrement, setIsIncrement] = useState(true);

  useEffect(() => autoClick(), []);

  const changeNum = () => {
    isIncrement
      ? setNum((oldNum) => oldNum + step)
      : setNum((oldNum) => oldNum - step);
  };

  const handleStepFrequency = (e) => {
    const { value, name } = e.target;
    if (name === 'step') setStep(+value);
    if (name === 'frequency') setFrequency(+value);
  };

  const autoClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      setIntervalId(setInterval(changeNum, frequency * 1000));
    }
  };
  const inputData = [
    {
      text: 'Enter step ',
      name: 'step',
      value: step,
      onChange: handleStepFrequency,
    },
    {
      text: 'Enter frequency autoClick ',
      name: 'frequency',
      value: frequency,
      onChange: handleStepFrequency,
    },
  ];
  const btnData = [
    {
      onClick: changeNum,
      text:
        step === 0
          ? `Enter step`
          : `Click ${isIncrement ? `plus` : `minus`} ${Math.abs(step)}`,
    },
    {
      onClick: () => setIsIncrement(!isIncrement),
      text: isIncrement ? 'Increment' : 'Decrement',
    },
    {
      onClick: autoClick,
      text: `${intervalId ? 'Stop' : 'Start'} autoClick`,
    },
  ];
  return (
    <article>
      <h1>Clicker</h1>
      <p>{num}</p>
      {createInput(inputData)}
      {createBtn(btnData)}
    </article>
  );
};

export default Clicker;
