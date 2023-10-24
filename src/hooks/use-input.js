import { useState } from 'react';

const useInput = (validate) => {
  //공통 state만들기
  const [enteredText, setEnteredText] = useState('');
  const [inputTouched, setInputTouched] = useState(false); //touched : true

  const isEnteredTextValid = validate(enteredText);
  const isEnteredInputInvalid = !isEnteredTextValid && inputTouched;

  // 공통 input handler 만들기
  const enteredInputHandler = (e) => {
    setEnteredText(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setInputTouched(true);
  };

  const reset = () => {
    // setInputTouched(true);

    // if (!isEnteredInputInvalid) return;
    setEnteredText('');
    setInputTouched(false);

    console.log('enteredText:', enteredText);
  };

  return {
    enteredText,
    enteredInputHandler,
    inputTouched,
    inputBlurHandler,
    validate,
    isEnteredInputInvalid,
    isEnteredTextValid,
    reset,
  };
};

export default useInput;
