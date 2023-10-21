import { useState } from 'react';

const useInput = () => {
  //공통 state만들기
  const [enteredText, setEnteredText] = useState('');
  const [inputTouched, setInputTouched] = useState(false); //touched : true
  let [isTextValid, setIsTextValid] = useState(false);

  const validator = (text, id) => {
    if (id === 'email') {
      text.includes('@') ? setIsTextValid(true) : setIsTextValid(false);
    } else {
      text.trim().length > 0 ? setIsTextValid(true) : setIsTextValid(false);
    }
    // console.log(text);
    // if (text.trim().length > 0) {
    //   setIsTextValid(true);
    // } else {
    //   setIsTextValid(false);
    // }
  };

  // console.log('isTextValid:', isTextValid);

  // 공통 input handler 만들기
  const enteredInputHandler = (e) => {
    const text = e.target.value;
    const id = e.target.id;
    setEnteredText(text);
    validator(text, id);
  };

  const inputBlurHandler = () => setInputTouched(true);

  // console.log('isTextValid:', isTextValid);

  // const isInputValid = name.trim().length > 0 || email.includes('@');
  // const isInputInvalid = !isInputValid && inputTouched;

  return {
    enteredText,
    enteredInputHandler,
    inputTouched,
    inputBlurHandler,
    validator,
    isTextValid,
  };
};

export default useInput;
