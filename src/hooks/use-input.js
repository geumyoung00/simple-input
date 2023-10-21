import { useState } from 'react';

const useInput = () => {
  //공통 state만들기
  const [enteredText, setEnteredText] = useState('');

  const [inputTouched, setInputTouched] = useState(false); //touched : true

  // 공통 input handler 만들기
  const enteredInputHandler = (e) => {
    setEnteredText(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setInputTouched(true);
  };

  return {
    enteredText,
    enteredInputHandler,
    inputTouched,
    inputBlurHandler,
  };
};

export default useInput;
