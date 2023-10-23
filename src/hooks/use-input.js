import { useState } from 'react';

const useInput = (nameValid, emailValid) => {
  //공통 state만들기
  const [enteredText, setEnteredText] = useState('');
  const [inputTouched, setInputTouched] = useState(false); //touched : true
  let [isTextInputInvalid, setIsTextInputInvalid] = useState(false);

  // 공통 input handler 만들기
  const enteredInputHandler = (e) => {
    setEnteredText(e.target.value);
  };

  const validator = (name, email) => {
    // console.log('text?', name);
    // console.log('inputTouched?', inputTouched);

    if (!nameValid(name) && inputTouched) {
      setIsTextInputInvalid(true);
    } else {
      setIsTextInputInvalid(false);
    }
  };

  // console.log('isTextInputInvalid:', isTextInputInvalid);

  const inputBlurHandler = (e) => {
    const text = e.target.value;

    setInputTouched(true);
    validator(text);
  };

  // const isInputInvalid = !isInputValid && inputTouched;

  // if (id === 'email') {
  //   text.includes('@') ? setIsTextValid(true) : setIsTextValid(false);
  // } else {
  //   text.trim().length > 0 ? setIsTextValid(true) : setIsTextValid(false);
  // }

  // console.log(text);
  // if (text.trim().length > 0) {
  //   setIsTextValid(true);
  // } else {
  //   setIsTextValid(false);
  // }

  return {
    enteredText,
    enteredInputHandler,
    inputTouched,
    inputBlurHandler,
    validator,
    isTextInputInvalid,
  };
};

export default useInput;
