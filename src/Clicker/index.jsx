import React from 'react';
import { useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';

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

  return (
    <article>
      <h1>Clicker</h1>
      <p>{num}</p>
      <Input
        text="Enter step"
        name="step"
        value={step}
        onChange={handleStepFrequency}
      />
      <Button
        onClick={changeNum}
        text={
          step === 0
            ? `Enter step and click here`
            : `Click ${isIncrement ? `plus` : `minus`} ${Math.abs(step)}`
        }
      />
      <Button
        onClick={() => setIsIncrement(!isIncrement)}
        text={isIncrement ? 'Increment' : 'Decrement'}
      />
      <br />
      <Input
        text="Enter frequency autoClick"
        name="frequency"
        value={frequency}
        onChange={handleStepFrequency}
      />
      <Button
        onClick={autoClick}
        text={`${intervalId ? 'Stop' : 'Start'} autoClick`}
      />
    </article>
  );
};

export default Clicker;
