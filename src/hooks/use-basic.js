import { useState } from 'react';

const useBasicInput = (validate) => {
  const [entredText, setEnteredText] = useState('');
  const [inputTouched, setInputTouched] = useState(false);

  const isEntredTextValid = validate(entredText);
  const isInputInvalid = !isEntredTextValid && inputTouched;

  const inputHandler = (e) => setEnteredText(e.target.value);
  const inputBlurHandler = () => setInputTouched(true);
  const resetinput = () => {
    setEnteredText('');
    setInputTouched(false);
  };

  return {
    entredText,
    inputHandler,
    inputTouched,
    inputBlurHandler,
    isEntredTextValid,
    isInputInvalid,
    resetinput,
  };
};

export default useBasicInput;
