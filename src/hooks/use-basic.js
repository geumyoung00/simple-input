import { useState } from 'react';

const useBasicInput = (validate) => {
  const [enteredText, setEnteredText] = useState('');
  const [inputTouched, setInputTouched] = useState(false);

  const isEntredTextValid = validate(enteredText);
  const isInputInvalid = !isEntredTextValid && inputTouched;

  const inputHandler = (e) => setEnteredText(e.target.value);
  const inputBlurHandler = () => setInputTouched(true);

  const reset = () => {
    setEnteredText('');
    setInputTouched(false);
  };

  return {
    enteredText,
    inputHandler,
    inputTouched,
    inputBlurHandler,
    isEntredTextValid,
    isInputInvalid,
    reset,
  };
};

export default useBasicInput;
