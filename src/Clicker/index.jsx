import React from 'react';
import { useState, useEffect } from 'react';
const Clicker = () => {
  const [num, setNum] = useState(0);
  const [step, setStep] = useState(5);
  const [frequency, setFrequency] = useState(1000);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => autoClick(), []);

  const plusMinus = () => {
    setNum((oldNum) => oldNum + +step);
  };

  const handleStepFrequency = (e) => {
    const { value, name } = e.target;
    if (value === '-' || !isNaN(value)) {
      if (name === 'step') setStep(+value);
      if (name === 'frequency') setFrequency(+value);
    }
  };

  const textBtn =
    step === 0 || step === '-'
      ? `Enter step and click here`
      : `Click ${step > 0 ? `plus` : `minus`} ${Math.abs(step)}`;

  const autoClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      setIntervalId(setInterval(plusMinus, +frequency));
    }
  };
  return (
    <article>
      <h1>Clicker</h1>
      <p>{num}</p>
      <label>
        Enter step:
        <input
          placeholder="Enter step"
          name="step"
          value={step}
          onChange={handleStepFrequency}
        />
      </label>
      <button onClick={plusMinus}>{textBtn}</button>
      <br />
      <label>
        Enter frequency autoClick:
        <input
          placeholder="Enter frequency autoClick"
          name="frequency"
          value={frequency}
          onChange={handleStepFrequency}
        />{' '}
      </label>
      <button onClick={autoClick}>
        {intervalId ? 'Stop' : 'Start'} autoClick
      </button>
    </article>
  );
};

export default Clicker;
